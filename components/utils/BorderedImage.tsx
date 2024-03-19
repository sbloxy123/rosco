import getPositionFromHotspot, {
  getCroppedImageSrc,
} from "@/sanity/sanity.query";
import { SanityImageQueryResult } from "@/types";
import Image from "next/image";

export default async function BorderedImage({
  image,
}: {
  image: SanityImageQueryResult;
}) {
  return (
    <div className="relative w-full h-auto small:max-w-[700px] medium:mr-0 medium:ml-auto">
      <div className="relative w-[103.5vw] -ml-[6.7%] -mt-[5.8%] xsmall:-ml-[4.5%] xsmall:-mt-[4.2%] small:absolute small:top-0 small:left-0 small:w-full small:h-full">
        {/* 2 x mobile only border svgs */}
        <svg
          viewBox="0 0 385 412"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mix-blend-color-dodge absolute top-0 w-full h-full xsmall:hidden"
          preserveAspectRatio="none"
        >
          <rect
            x="20"
            y="16"
            width="349"
            height="372"
            stroke="url(#paint0_linear_17_3269)"
            strokeOpacity="0.5"
            strokeWidth="40"
            vectorEffect="non-scaling-stroke"
          />
          <defs>
            <linearGradient
              id="paint0_linear_17_3269"
              x1="383.689"
              y1="5.10812"
              x2="-41.2097"
              y2="210.621"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.161927" stopColor="#4804F8" />
              <stop offset="0.375" stopColor="#FF4A1D" />
              <stop offset="0.635417" stopColor="#F9BA17" />
              <stop offset="0.978225" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 385 412"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mix-blend-color-dodge xsmall:hidden"
          preserveAspectRatio="none"
        >
          <rect
            x="20"
            y="16"
            width="349"
            height="372"
            stroke="url(#paint0_linear_17_3269)"
            strokeOpacity="0.5"
            strokeWidth="40"
            vectorEffect="non-scaling-stroke"
          />
          <defs>
            <linearGradient
              id="paint0_linear_17_3269"
              x1="383.689"
              y1="5.10812"
              x2="-41.2097"
              y2="210.621"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.161927" stopColor="#4804F8" />
              <stop offset="0.375" stopColor="#FF4A1D" />
              <stop offset="0.635417" stopColor="#F9BA17" />
              <stop offset="0.978225" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* 2 x TABLET+ SCREEN border svgs */}
        <svg
          viewBox="0 0 731 510"
          fill="none"
          className="hidden xsmall:block absolute top-0 left-0 w-[104vw] h-auto xsmall:aspect-[690/451] small:aspect-[703/454] small:w-[112%] small:h-[112%] small:hidden mix-blend-color-dodge"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="28"
            width="703"
            height="454"
            stroke="url(#paint0_linear_0_4932)"
            strokeOpacity="0.5"
            strokeWidth="56"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_4931"
              x1="732.588"
              y1="14.7072"
              x2="370.402"
              y2="433.912"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.161927" stopColor="#4804F8" />
              <stop offset="0.741249" stopColor="#FF4A1D" />
              <stop offset="0.838542" stopColor="#F9BA17" />
              <stop offset="0.978225" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 731 510"
          fill="none"
          className="hidden xsmall:block absolute top-0 left-0 w-[104vw] h-auto xsmall:aspect-[690/451] -z-20 small:aspect-[703/454] small:w-[112%] small:h-[112%] mix-blend-color-dodge"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="28"
            width="703"
            height="454"
            stroke="url(#paint0_linear_0_4932)"
            strokeOpacity="0.5"
            strokeWidth="56"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_4931"
              x1="732.588"
              y1="14.7072"
              x2="370.402"
              y2="433.912"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.161927" stopColor="#4804F8" />
              <stop offset="0.741249" stopColor="#FF4A1D" />
              <stop offset="0.838542" stopColor="#F9BA17" />
              <stop offset="0.978225" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* laptop+ screen */}
        <svg
          viewBox="0 0 731 510"
          className="hidden small:block absolute top-0 left-0 small:aspect-[703/454] small:w-[112%] small:h-[112%] z-20 mix-blend-color-dodge"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="28"
            width="703"
            height="454"
            stroke="url(#paint111_linear_0_4932)"
            strokeOpacity="0.5"
            strokeWidth="56"
          />
          <defs>
            <linearGradient
              id="paint111_linear_0_4932"
              x1="732.588"
              y1="14.7072"
              x2="87.5547"
              y2="529.643"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.161927" stopColor="#4804F8" />
              <stop offset="0.375" stopColor="#FF4A1D" />
              <stop offset="0.635417" stopColor="#F9BA17" />
              <stop offset="0.978225" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 731 510"
          className="hidden small:block absolute top-0 left-0 small:aspect-[703/454] small:w-[112%] small:h-[112%] -z-20 mix-blend-color-dodge"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="28"
            width="703"
            height="454"
            stroke="url(#paint111_linear_0_4932)"
            strokeOpacity="0.5"
            strokeWidth="56"
          />
          <defs>
            <linearGradient
              id="paint111_linear_0_4932"
              x1="732.588"
              y1="14.7072"
              x2="87.5547"
              y2="529.643"
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
      <div className="absolute top-[-0.5%] left-[-0.5%] w-[calc(100%+0.6%)] aspect-[349/375] overflow-hidden xsmall:relative xsmall:aspect-[690/451] small:aspect-[703/454] xsmall:mt-[4.2%] small:mt-0">
        <Image
          src={getCroppedImageSrc(image)}
          alt={image.alt}
          fill
          className="object-cover -z-10"
          objectPosition={getPositionFromHotspot(image?.hotspot)}
        />
      </div>
    </div>
  );
}
