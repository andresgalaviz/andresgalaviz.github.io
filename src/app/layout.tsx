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

const description =
  "Staff Software Engineer at Meta building Ad Serving Infrastructure. Previously 7+ years at Microsoft across Azure Cloud Infrastructure and Robotics. M.S. in CS from the University of Washington.";

export const metadata: Metadata = {
  title: "Andres Galaviz",
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "profile",
    title: "Andres Galaviz",
    description,
    url: "https://galaviz.io",
    images: ["https://galaviz.io/AndresGalaviz.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andres Galaviz",
    description,
    images: ["https://galaviz.io/AndresGalaviz.jpg"],
    site: "@AndresGalaviz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andres Galaviz",
    url: "https://galaviz.io",
    jobTitle: "Staff Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Meta",
    },
    alumniOf: [
      "University of Washington",
      "National University of Singapore",
      "Tecnológico de Monterrey",
    ],
    sameAs: [
      "https://www.linkedin.com/in/andresgalaviz",
      "https://github.com/andresgalaviz",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
