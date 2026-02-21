import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.bryanlabchuk.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bryan Labchuk — Cybersecurity & IT Consulting",
    template: "%s | Bryan Labchuk",
  },
  description:
    "Cybersecurity consultant for VIPs, creators, influencers, and celebrity crisis management teams. Home network and device security, cloud security (M365, Azure, AWS), DevSecOps, ICS, ISO 27000, NIST, ITSG-33. Discreet, confidential engagements.",
  keywords: [
    "cybersecurity consultant",
    "celebrity IT security",
    "VIP cybersecurity",
    "influencer home network security",
    "creator device security",
    "celebrity crisis management IT",
    "high profile cybersecurity",
    "home network hardening",
    "device security consultant",
    "M365 security",
    "Azure AWS cloud security",
    "DevSecOps",
    "GRC consultant",
    "risk assessment",
  ],
  authors: [{ name: "Bryan Labchuk" }],
  creator: "Bryan Labchuk",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Bryan Labchuk",
    title: "Bryan Labchuk — Cybersecurity & IT Consulting",
    description:
      "Cybersecurity for VIPs, creators, and high-profile clients. Home network and device security, cloud security, DevSecOps, GRC. Discreet, confidential engagements.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Bryan Labchuk — Cybersecurity & IT Consulting",
    description:
      "Cybersecurity for VIPs, creators, and high-profile clients. Home network and device security, cloud security, GRC. Discreet engagements.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistMono.variable} min-h-screen bg-stone-950 font-mono text-stone-300 antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
