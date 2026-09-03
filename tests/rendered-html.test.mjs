import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the sales landing with the verified offer", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html lang="es">/i);
  assert.match(html, /Crea bolsos con cuentas que se vean/);
  assert.match(html, /USD 29\.99/);
  assert.match(html, /23\+/);
  assert.match(html, /Garantía de 7 días/);
  assert.match(html, /https:\/\/go\.hotmart\.com\/G105098149D\?ap=9ede/);
  assert.match(html, /data-manychat-source-forwarder="true"/);
  assert.match(html, /searchParams\.set\("src", sourceId\)/);
  assert.doesNotMatch(html, /codex-preview|Oferta especial termina|acaba de comprar/i);
});

test("keeps core conversion and accessibility safeguards in source", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  assert.match(page, /aria-label="Navegación principal"/);
  assert.match(page, /Los resultados dependen de la práctica/);
  assert.match(page, /No se prometen ingresos/);
  assert.match(page, /loading="lazy"/);
  assert.match(layout, /lang="es"/);
  assert.match(css, /prefers-reduced-motion/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("emits a self-contained Netlify static site", async () => {
  const [html, redirects, config] = await Promise.all([
    readFile(new URL("../netlify-dist/index.html", import.meta.url), "utf8"),
    readFile(new URL("../netlify-dist/_redirects", import.meta.url), "utf8"),
    readFile(new URL("../netlify.toml", import.meta.url), "utf8"),
  ]);

  assert.match(html, /<html lang="es">/i);
  assert.match(html, /USD 29\.99/);
  assert.match(html, /G105098149D\?ap=9ede/);
  assert.match(html, /data-manychat-source-forwarder="true"/);
  assert.match(html, /searchParams\.set\("src", sourceId\)/);
  assert.match(html, /\/assets\/hero-pearl-bag-DZVQ83lF\.jpeg/);
  assert.doesNotMatch(html, /\/_next\/image\?/);
  assert.doesNotMatch(html, /<script\b(?![^>]*data-manychat-source-forwarder)/i);
  assert.equal(redirects, "/* /index.html 200\n");
  assert.match(config, /publish = "netlify-dist"/);
});
