"use client";

import type { serviceType } from "@/types";
import Link from "next/link";
import ButtonLink from "./common/ButtonLink";

type ServiceImageLinkProps = {
  service: serviceType;
  index: number;
};

const ServiceImageLink: React.FC<ServiceImageLinkProps> = ({
  service,
  index,
}) => {
  const imageUrl = "your-image-url";
  const customStyle = { "--image-url": imageUrl } as React.CSSProperties;

  return (
    <div
      style={
        {
          "--image-url": `url(${service.coverImage.image})`,
        } as React.CSSProperties
      }
      className="relative bg-[image:var(--image-url)] bg-cover w-[90vw] xsmall:w-[359px] mx-auto xsmall:px-0 max-w-[359px] aspect-[359/464] overflow-hidden cursor-pointer group"
    >
      <div className="absolute top-0 left-0 bg-theme-dark opacity-50  w-full h-full"></div>
      <div className="absolute top-0 left-0 bg-theme-dark mix-blend-color  w-full h-full"></div>
      <div className="absolute top-0 left-0 bg-theme-dark mix-blend-soft-light saturate-100 w-full h-full"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white w-full -translate-y-[94px]">
        <p className="text-[1.6rem] tracking-[0.24em] text-center h-7 pb-16 font-semibold">
          0{index + 1}
        </p>
        <h2 className="text-[2.4rem] font-semibold text-center w-full tracking-[0.24em] px-10 h-7 uppercase">
          {service.serviceTitle}
        </h2>
      </div>
      {/* btn */}
      <div className="button-and-gradient-container absolute bottom-0 left-0 w-full h-auto aspect-[358/94] flex justify-center items-center">
        <div className="button-position-container w-full px-[5%] xsmall:w-fit xsmall:mx-auto text-center z-20">
          <ButtonLink
            theme="light"
            text="find out more"
            destination={`/services/${service.slug}`}
            ctaType="general"
          />
        </div>

        <svg
          viewBox="0 0 358 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="btn-gradient-bg z-10 absolute bottom-0 left-0 w-full h-auto"
        >
          <rect width="358" height="94" fill="url(#paint0_linear_80_5819)" />
          <defs>
            <linearGradient
              id="paint0_linear_80_5819"
              x1="549.145"
              y1="-17.5254"
              x2="517.455"
              y2="241.344"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.078125" stopColor="#6015EF" />
              <stop offset="0.213542" stopColor="#4532D1" />
              <stop offset="0.526042" stopColor="#CB425C" />
              <stop offset="0.677083" stopColor="#F9BA17" />
              <stop offset="0.885417" stopColor="#D9D9D9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ServiceImageLink;
{
  /* <Link href={`/services/${service.slug}`}>
      <div className="relative w-60 h-80 overflow-hidden cursor-pointer group">
        <Image
          src={service.coverImage.image}
          width={400}
          height={400}
          alt={service.coverImage.alt}
          className="absolute object-cover h-[100%] w-[100%] z-0 group-hover:opacity-75"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-theme-dark opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
          <h2 className="text-2xl font-bold text-center">
            {service.serviceTitle}
          </h2>
        </div>
      </div>
    </Link> */
}
