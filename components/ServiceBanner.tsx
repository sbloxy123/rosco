import { getCroppedImageSrc } from "@/sanity/sanity.query";
import BgDots from "./assets/BgDots";
import { PortableTextBlock } from "sanity";
import { ServiceExtrasSwiper } from "./swiper/Swipers";
import Image from "next/image";
import OverflowText from "./OverflowText";

interface BgImage {
  alt: string;
  image: string;
  asset: {
    _ref: string;
  };
  crop: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
}
interface AdditionalInfoItem {
  listItem: string;
  listItemDetails: string;
}

interface AwardHighlight {
  awardDate: string;
  awardLogo: {
    alt: string;
    image: string;
  };
  awardTitle: string;
}

interface AsideList {
  listIntro?: string;
  summaryList?: string[];
}

export default function ServiceBanner({
  backgroundImage,
  serviceTitle,
  serviceText,
  additionalInfo,
  awardHighlight,
  asideList,
}: {
  backgroundImage: BgImage;
  serviceTitle: string;
  serviceText: PortableTextBlock;
  additionalInfo?: AdditionalInfoItem[];
  awardHighlight?: AwardHighlight;
  asideList?: AsideList;
}) {
  const titleWithLineBreaks = awardHighlight?.awardTitle.replace(/\\n/g, "\n");

  return (
    <div
      style={
        {
          "--image-url": `url(${getCroppedImageSrc(backgroundImage)})`,
        } as React.CSSProperties
      }
      className="relative w-full h-full bg-[image:var(--image-url)] bg-cover  mb-20 overflow-hidden my-[56px] xsmall:my-[80px]"
    >
      <div className="hidden small:block absolute top-0 left-0 h-[150%] w-auto mix-blend-multiply">
        <BgDots />
      </div>
      <div className="hidden small:block absolute top-0 left-0 h-[150%] w-auto mix-blend-multiply">
        <BgDots />
      </div>
      <div className="hidden small:block absolute top-0 left-0 h-[150%] w-auto mix-blend-multiply">
        <BgDots />
      </div>

      <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
        <BgDots />
      </div>
      <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
        <BgDots />
      </div>
      <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
        <BgDots />
      </div>
      <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
        <BgDots />
      </div>

      <div className="relative text-white pt-[4rem] pb-[6.5rem] xsmall:pt-[6rem] small:flex small:flex-row small:justify-between small:gap-10 small:pt-[12rem] small:pb-[12rem] medium:max-w-[1120px] medium:mx-auto">
        <div
          className={`${
            asideList ? "small:w-[90%]" : "small:w-[72%]"
          } small:pl-layout-small medium:pl-0`}
        >
          {additionalInfo ? (
            <ServiceExtrasSwiper
              primaryOverviewTitle={serviceTitle}
              primaryOverviewText={serviceText}
              additionalInfo={additionalInfo}
            />
          ) : (
            <div className="w-full px-[5%] small:px-0">
              <OverflowText
                serviceTitle={serviceTitle}
                serviceText={serviceText}
                additionalInfo={additionalInfo}
              />
              {/* <h2 className="pb-[1.5rem]">{serviceTitle}</h2>
              <div className="scrollbar-and-text-container">
                <div
                  className={`portable--overflow mt-10 max-h-[300px] pr-[10.5%] font-[300] overflow-y-auto ${
                    additionalInfo
                      ? "small:max-h-[145px]"
                      : "small:max-h-[260px]"
                  } `}
                >
                  <PortableText value={serviceText} />
                </div>
              </div> */}
            </div>
          )}
        </div>
        {awardHighlight ? (
          <div className="hidden small:flex aspect-[255/345] w-auto xsmall:w-auto max-w-[255px] justify-center items-center flex-col gap-8 bg-transparent text-white text-center my-4 mr-layout-small medium:mr-0">
            <div className="relative h-[150px] w-full mb-4">
              <Image
                src={awardHighlight?.awardLogo.image}
                width={155}
                height={145}
                alt={awardHighlight.awardLogo.alt}
                className="absolute bottom-0 left-0 right-0 h-auto w-full max-w-[70%] max-h-[145px] mx-auto object-contain"
              />
            </div>
            <div>
              <h4 className="uppercase font-bold text-[1.6rem] pb-2">
                {awardHighlight.awardDate}
              </h4>
              <div>
                {titleWithLineBreaks?.split("\n").map((line, index) => {
                  return (
                    <h5 key={index} className="font-semibold text-[1.4rem]">
                      {line}
                    </h5>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}

        {asideList ? (
          <div className="hidden small:block mr-layout-small text-[1.6rem] font-body font-bold w-[clamp(25rem,27vw,39.3rem)] medium:mr-0">
            <h4 className="pb-[1.5rem] font-body">{asideList.listIntro}</h4>
            <ul className="flex flex-col gap-[1.5rem]">
              {asideList.summaryList?.map((listItem, index) => {
                return <li>- {listItem}</li>;
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
