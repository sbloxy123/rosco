import "../globals.css";
import type { Metadata } from "next";
import { LocalBusiness, WithContext } from "schema-dts";
import { Montserrat, Raleway, Open_Sans } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { heroType, metadataType } from "@/types";
import { getHero, getMetadata } from "@/sanity/sanity.query";
import thumbnail from "./assets/Thumbnail_1280x720.png";
import { removelineBreakCodeFromHTML } from "@/components/utils/lineBreaks";

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

export async function Metadata() {
  const hero: heroType[] = await getHero();
  return {
    title: "Rosco & Perlini",
    description: removelineBreakCodeFromHTML(hero[0].heroHeading[0]),
    openGraph: {
      images: thumbnail.src,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const meta: metadataType[] = await getMetadata();

  const jsonLd: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.roscoandperlini.co.uk/",
    name: meta[0].companyName,
    description: meta[0].description,
    url: "https://www.roscoandperlini.co.uk/",
    logo: "https://www.roscoandperlini.co.uk/favicon.ico",
    address: {
      "@type": "PostalAddress",
      streetAddress: meta[0].location.streetAddress,
      addressLocality: meta[0].location.addressLocality,
      addressRegion: meta[0].location.addressRegion,
      addressCountry: meta[0].location.addressCountry,
      postalCode: meta[0].location.postalCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: meta[0].contactDetails.telephone,
      email: meta[0].contactDetails.email,
    },
    image: ["https://www.dr-mould.co.uk/opengraph-image.png?ad00cb6df7787160"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: meta[0].location.geo.latitude,
      longitude: meta[0].location.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        {
          "@type": "DayOfWeek",
          name: "Monday",
        },
        {
          "@type": "DayOfWeek",
          name: "Tuesday",
        },
        {
          "@type": "DayOfWeek",
          name: "Wednesday",
        },
        {
          "@type": "DayOfWeek",
          name: "Thursday",
        },
        {
          "@type": "DayOfWeek",
          name: "Friday",
        },
      ],
      opens: meta[0].openingHours.open,
      closes: meta[0].openingHours.close,
    },
    areaServed: meta[0].areasServed,
  };

  return (
    <html lang="en">
      <body
        className={` ${opensans.variable}  ${raleway.variable} ${montserrat.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
