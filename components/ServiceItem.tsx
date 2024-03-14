// component for service images that order in row / row reverse fown the page.
"use client";
import type { serviceType } from "@/types";
import Image from "next/image";
import ButtonLink from "./common/ButtonLink";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

export default function ServiceItem({
  title,
  heading,
  slug,
  text,
  image,
  index,
  onClick,
}: {
  title: string;
  heading: string;
  slug: string;
  text: PortableTextBlock;
  index: number;
  onClick?: () => void; // Ensure onClick is a function
  image: {
    alt: string;
    image: string;
  };
}) {
  return (
    <div
      className={`my-section-gap small:flex small:justify-between small:items-center small:max-w-[1440px] small:mx-auto ${
        index % 2 === 0 ? "flex-row " : "flex-row-reverse "
      }`}
    >
      <div
        style={
          {
            "--image-url": `url(${image.image})`,
          } as React.CSSProperties
        }
        className="relative aspect-[390/303] xsmall:aspect-[740/496] small:aspect-[740/609] overflow-hidden small:w-[clamp(500px,52.45vw,739px)]"
      >
        <div className="absolute top-0 left-0 bg-theme-dark opacity-50  w-full h-full"></div>
        <div className="absolute top-0 left-0 bg-theme-dark mix-blend-color-dodge  w-full h-full"></div>
        <div className="absolute top-0 left-0 bg-theme-dark mix-blend-hard-light saturate-100 w-full h-full"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 aspect-[341/233] m-auto w-[92%] xsmall:aspect-[507/304] xsmall:w-[62.7%] xsmall:ml-[5%] xsmall:my-auto small:w-[71.3%] small:ml-[10%] small:aspect-[527/346] ">
          <svg
            viewBox="0 0 523 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <rect
              width="507"
              height="304"
              transform="matrix(-1 0 0 1 515 8)"
              stroke="url(#paint0_linear_462_7611)"
              strokeOpacity="0.5"
              strokeWidth="16"
              style={{ mixBlendMode: "color-dodge" }}
            />
            <g opacity="0.3">
              <rect
                width="507"
                height="304"
                transform="matrix(-1 0 0 1 515 8)"
                stroke="url(#paint1_linear_462_7611)"
                strokeOpacity="0.5"
                strokeWidth="16"
                style={{ mixBlendMode: "color-dodge" }}
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_462_7611"
                x1="528.338"
                y1="-8.90089"
                x2="90.422"
                y2="367.627"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.161927" stopColor="#4804F8" />
                <stop offset="0.375" stopColor="#FF4A1D" />
                <stop offset="0.635417" stopColor="#F9BA17" />
                <stop offset="0.978225" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_462_7611"
                x1="528.338"
                y1="-8.90089"
                x2="90.422"
                y2="367.627"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.161927" stopColor="#4804F8" />
                <stop offset="0.375" stopColor="#FF4A1D" />
                <stop offset="0.635417" stopColor="#F9BA17" />
                <stop offset="0.978225" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 aspect-[341/233] m-auto w-[92%] xsmall:aspect-[507/304] xsmall:w-[62.7%] xsmall:ml-[5%] xsmall:my-auto small:w-[71.3%] small:ml-[10%] small:aspect-[527/346] ">
          <svg
            viewBox="0 0 523 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <rect
              width="507"
              height="304"
              transform="matrix(-1 0 0 1 515 8)"
              stroke="url(#paint0_linear_462_7611)"
              strokeOpacity="0.5"
              strokeWidth="16"
              style={{ mixBlendMode: "color-dodge" }}
            />
            <g opacity="0.3">
              <rect
                width="507"
                height="304"
                transform="matrix(-1 0 0 1 515 8)"
                stroke="url(#paint1_linear_462_7611)"
                strokeOpacity="0.5"
                strokeWidth="16"
                style={{ mixBlendMode: "color-dodge" }}
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_462_7611"
                x1="528.338"
                y1="-8.90089"
                x2="90.422"
                y2="367.627"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.161927" stopColor="#4804F8" />
                <stop offset="0.375" stopColor="#FF4A1D" />
                <stop offset="0.635417" stopColor="#F9BA17" />
                <stop offset="0.978225" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_462_7611"
                x1="528.338"
                y1="-8.90089"
                x2="90.422"
                y2="367.627"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.161927" stopColor="#4804F8" />
                <stop offset="0.375" stopColor="#FF4A1D" />
                <stop offset="0.635417" stopColor="#F9BA17" />
                <stop offset="0.978225" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Image
          src={image.image}
          width={609}
          height={740}
          alt={image.alt}
          className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
        />
        <h1 className="relative h-full w-full text-white p-[3rem] pl-[15%] pr-[18%] text-[4rem] flex items-center small:w-[48%] small:pl-layout-small">
          {title}
        </h1>
      </div>
      <div
        className={`px-[5%] pt-[4rem] small:w-[48%] small:pt-0 ${
          index % 2 === 0
            ? "small:pr-layout-small small:pl-[3.5rem]"
            : "small:pl-layout-small small:pr-[3.5rem]"
        }`}
      >
        <h2 className="text-theme-dark w-[80%] small:w-full leading-[3.6rem]">
          {heading}
        </h2>

        <div className="service-component-text hidden xsmall:block pt-[4.5rem]">
          <PortableText value={text} />
        </div>

        <div className="pt-[3.6rem] xsmall:w-fit" onClick={onClick}>
          <ButtonLink
            theme="dark"
            ctaType="general"
            text="find out more"
            hoverEffect="fill-col"
            destination={`/services/${slug}`}
          />
        </div>
      </div>
    </div>
  );
}
