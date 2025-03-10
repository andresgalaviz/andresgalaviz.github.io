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

export const metadata = {
  title: "Andres Galaviz - Personal Website",
  description:
    "Ex-Microsoft Senior Eng Manager with experience in Azure Cloud Infra and Robotics. Pursuing a professional master's in CS at the University of Washington.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "profile",
    title: "Andres Galaviz - Personal Website",
    description:
      "Ex-Microsoft Senior Eng Manager with experience in Azure Cloud Infra and Robotics. Pursuing a professional master's in CS at the University of Washington.",
    url: "https://galaviz.io",
    images: [
      "https://galaviz.io/AndresGalaviz.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andres Galaviz - Personal Website",
    description:
      "Ex-Microsoft Senior Eng Manager with experience in Azure Cloud Infra and Robotics. Pursuing a professional master's in CS at the University of Washington.",
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
    jobTitle: "ex-Senior Software Engineering Manager",
    worksFor: {
      "@type": "Organization",
      name: "Microsoft",
    },
    alumniOf: "University of Washington",
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