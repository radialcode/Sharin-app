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
  title: "SHARIN",
  description: "Un set di prodotti scelti per darti la spinta giusta da subito.",
  openGraph: {
    title: "SHARIN",
    description: "Un set di prodotti scelti per darti la spinta giusta da subito.",
    url : "https://sharin-app.vercel.app/",
    images: [
      {
        url: "https://sharin-app.vercel.app/meta-image.png",
      },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
