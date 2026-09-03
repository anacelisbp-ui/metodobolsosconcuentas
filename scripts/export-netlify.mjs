import { access, cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const workerPath = resolve(root, "dist/server/index.js");
const clientPath = resolve(root, "dist/client");
const outputPath = resolve(root, "netlify-dist");

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("static-export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("https://metodomanosrentables.com/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static render failed with HTTP ${response.status}`);
}

let html = await response.text();

// Netlify serves the original local images directly. Vinext's /_next/image
// endpoint belongs to the Worker runtime, so replace it during static export.
html = html.replace(
  /\/_next\/image\?url=([^&"]+)&amp;w=\d+&amp;q=\d+/g,
  (_, encodedPath) => decodeURIComponent(encodedPath),
);
html = html.replace(/\s+srcSet="[^"]*"/g, "");

// The landing has no client-side React state. Remove RSC bootstrap scripts and
// JavaScript preloads, while preserving the small ManyChat source forwarder.
html = html.replace(/<script\b(?![^>]*data-manychat-source-forwarder)[^>]*>[\s\S]*?<\/script>/gi, "");
html = html.replace(/<link\b(?=[^>]*rel="modulepreload")[^>]*\/?>(?:\n)?/gi, "");

if (html.includes("/_next/image?")) {
  throw new Error("Static export still contains a Worker-only image URL");
}
if (!html.includes("USD 29.99") || !html.includes("G105098149D?ap=9ede")) {
  throw new Error("Static export is missing the verified price or checkout URL");
}

await rm(outputPath, { recursive: true, force: true });
await mkdir(outputPath, { recursive: true });
await cp(clientPath, outputPath, { recursive: true });

// No JavaScript is referenced by the exported document. Keep only the CSS and
// locally bundled fonts under /_next/static to minimize the Netlify payload.
const nextStaticPath = resolve(outputPath, "_next/static");
for (const entry of await readdir(nextStaticPath)) {
  if (entry !== "css" && entry !== "_vinext_fonts") {
    await rm(resolve(nextStaticPath, entry), { recursive: true, force: true });
  }
}
await rm(resolve(outputPath, ".vite"), { recursive: true, force: true });
await rm(resolve(outputPath, "vinext-client-entry-manifest.json"), { force: true });
await rm(resolve(outputPath, ".assetsignore"), { force: true });

await writeFile(resolve(outputPath, "index.html"), html, "utf8");
await writeFile(resolve(outputPath, "_redirects"), "/* /index.html 200\n", "utf8");

const emitted = await readFile(resolve(outputPath, "index.html"), "utf8");
if (!emitted.includes("<html lang=\"es\">")) {
  throw new Error("Static export did not emit the Spanish document shell");
}

const localAssetUrls = [...emitted.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)]
  .map((match) => match[1])
  .filter((url) => url !== "/");
for (const assetUrl of new Set(localAssetUrls)) {
  await access(resolve(outputPath, assetUrl.slice(1)));
}

console.log(`Netlify static export ready: ${outputPath}`);
