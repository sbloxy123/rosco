import "../globals.css";
import type { Metadata } from "next";
import { Montserrat, Raleway, Open_Sans } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { heroType } from "@/types";
import { getHero } from "@/sanity/sanity.query";
import thumbnail from "./assets/Thumbnail_1280x720.png";

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
  let titleWithLineBreaks;
  hero.map((content) => {
    titleWithLineBreaks = content.heroHeading;
    if (
      typeof titleWithLineBreaks === "string" &&
      titleWithLineBreaks.includes("\\n")
    ) {
      titleWithLineBreaks = titleWithLineBreaks.replace(/\\n/g, "");
    }
  });

  return {
    title: "Rosco & Perlini",
    description: titleWithLineBreaks,
    openGraph: {
      images: thumbnail.src,
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
