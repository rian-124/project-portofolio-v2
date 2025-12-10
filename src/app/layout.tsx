import { Comic_Neue, Geist_Mono } from "next/font/google";
import { MainProvider } from "../context/LayoutRefContext";
import type { Metadata } from "next";
import ReactLenis from "lenis/react";
import Navbar from "~/components/layout/Navbar";
import "~/styles/globals.css";
import "yet-another-react-lightbox/styles.css";
import 'react-loading-skeleton/dist/skeleton.css'

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
          <ReactLenis root>
              {children}
          </ReactLenis>
        </MainProvider>
      </body>
    </html>
  );
}
