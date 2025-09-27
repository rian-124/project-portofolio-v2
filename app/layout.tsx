import type { Metadata } from "next";
import {
  Comic_Neue,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Comic_Neue({
  variable: "--font-comicNeue",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main className="w-full overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
