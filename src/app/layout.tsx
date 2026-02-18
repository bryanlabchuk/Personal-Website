import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bryan Labchuk — Cyber Security",
  description: "Cyber security professional. Security assessment, incident response, and building defenses that last.",
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
