import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Raleway, Open_Sans } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

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

export const metadata: Metadata = {
  title: "Rosco & Perlini",
  description: "todo - add description for site here",
  openGraph: {
    images: "add-your-open-graph-image-url-here",
  },
};

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
