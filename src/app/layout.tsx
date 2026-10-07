import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { BackToTop } from "@/components/ui/BackToTop/BackToTop";
import { ScrollProgress } from "@/components/ui/ScrollProgress/ScrollProgress";
import { FloatingTechshala } from "@/components/ui/FloatingTechshala/FloatingTechshala";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raise India Foundation | Creating Change, Building Futures",
  description: "Raise India Foundation is an NGO dedicated to healthcare, education, women empowerment, and community development. Join us in building a better India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <FloatingTechshala />
      </body>
    </html>
  );
}
