import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jerusa Frois — Psicóloga Clínica",
  description:
    "Atendimento psicológico para adolescentes, adultos e empresas. Online e presencial em Betim/MG. CRP 04/68220.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://t.contentsquare.net/uxa/daea26f03398f.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
