import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aadi Production",
  description: "Home grown studio in MP, India — where creativity meets passion.",

  openGraph: {
    title: "Aadi Production",
    description: "What started as a passion for creating Instagram reels has grown into a full-blown studio in MP, India.",
    url: "https://aadiproduction.vercel.app/", 
    siteName: "Aadi Production",
    images: [
      {
        url: "https://res.cloudinary.com/duax5xong/image/upload/v1759692253/Screenshot_2025-10-06_at_12.53.51_AM_ofzqpt.png", 
        width: 1200,
        height: 630,
        alt: "Aadi Production Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aadi Production",
    description: "Home grown studio in MP, India — where creativity meets passion.",
    images: [
      "https://res.cloudinary.com/duax5xong/image/upload/v1759692253/Screenshot_2025-10-06_at_12.53.51_AM_ofzqpt.png", 
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
