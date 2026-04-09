import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  metadataBase: new URL("https://don-mike-dealership.vercel.app"),
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.business.name,
    images: [
      {
        url: "https://don-mike-dealership.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Don Mike Auto Dealership — Multi-Brand Vehicles in Gainesville, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: ["https://don-mike-dealership.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
