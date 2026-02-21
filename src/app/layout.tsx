import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bryan Labchuk — Cyber Security",
  description: "Cybersecurity & IT consulting. Home network and device security for VIPs and creators. M365, Azure, AWS, DevSecOps, ICS, ISO 27000, NIST, ITSG-33.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistMono.variable} min-h-screen bg-stone-950 font-mono text-stone-300 antialiased`}>
        {children}
      </body>
    </html>
  );
}
