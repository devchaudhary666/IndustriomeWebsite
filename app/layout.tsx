import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Industriome - The Genome of Manufacturing",
  description: "Enterprise-grade IIoT intelligence for SME manufacturers. Shop floor to cloud in weeks, not quarters.",
  keywords: ["IIoT", "manufacturing", "smart factory", "industrial automation", "Industry 4.0"],
  authors: [{ name: "Industriome Technologies" }],
  creator: "Industriome Technologies",
  publisher: "Industriome Technologies",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Industriome - The Genome of Manufacturing",
    description: "Enterprise-grade IIoT intelligence for SME manufacturers. Shop floor to cloud in weeks, not quarters.",
    url: "https://industriometech.com",
    siteName: "Industriome",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industriome - The Genome of Manufacturing",
    description: "Enterprise-grade IIoT intelligence for SME manufacturers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Industriome Technologies",
    "url": "https://www.industriometech.com",
    "logo": "https://www.industriometech.com/logo.png",
    "description": "Enterprise-grade IIoT intelligence for SME manufacturers. Shop floor to cloud in weeks, not quarters.",
    "founder": {
      "@type": "Organization",
      "name": "Industriome Technologies"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}