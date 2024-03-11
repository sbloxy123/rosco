import "../globals.css";
import type { Metadata } from "next";
import { Montserrat, Raleway, Open_Sans } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { heroType } from "@/types";
import { getHero } from "@/sanity/sanity.query";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export async function metadata() {
  const hero: heroType[] = await getHero();
  return {
    title: "Rosco & Perlini",
    description: hero[0].heroHeading,
    openGraph: {
      images: hero[0].heroImage.image,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${opensans.variable}  ${raleway.variable} ${montserrat.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
