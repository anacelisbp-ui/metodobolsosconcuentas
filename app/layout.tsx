import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://metodomanosrentables.com"),
  title: "Método Bolsos con Cuentas",
  description: "Aprende a crear bolsos con cuentas firmes y elegantes desde cero.",
  alternates: { canonical: "/" },
  openGraph: { title: "Método Bolsos con Cuentas", description: "Tu primer bolso firme y elegante, guiado paso a paso.", type: "website", locale: "es_ES", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Método Bolsos con Cuentas — Tu primer bolso, paso a paso" }] },
  twitter: { card: "summary_large_image", title: "Método Bolsos con Cuentas", description: "Tu primer bolso firme y elegante, guiado paso a paso.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>;
}
