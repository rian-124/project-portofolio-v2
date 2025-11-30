import type { Metadata } from "next";
import { Comic_Neue, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ReactLenis from "lenis/react";
import { MainProvider } from "@/context/LayoutRefContext";

const comicNeue = Comic_Neue({
  variable: "--font-comicneue",
  weight: ["700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afrian Fahrurrozi",
  description: "Portofolio Afrian Fahrurrozi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comicNeue.variable} ${geistMono.variable}`}>
        <MainProvider>
          <Navbar />
          <ReactLenis root>{children}</ReactLenis>
        </MainProvider>
      </body>
    </html>
  );
}
