import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { BackToTop } from "@/components/ui/BackToTop/BackToTop";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Raise India Foundation | Creating Change, Building Futures",
  description: "Raise India Foundation is an NGO dedicated to healthcare, education, women empowerment, and community development. Join us in building a better India.",
};

import { ScrollProgress } from "@/components/ui/ScrollProgress/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <body>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
