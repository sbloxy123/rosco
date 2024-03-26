import type { awardsType } from "@/types";
import { getAwards } from "@/sanity/sanity.query";
import Image from "next/image";
import { AwardsSwiper } from "./swiper/Swipers";

export default async function AwardsSection() {
  const awards: awardsType[] = await getAwards();

  return (
    <div className="relative px-0">
      {awards.map((award) => {
        const titleWithLineBreaks =
          award.awardsSection.awardsSectionTitle.replace(/\\n/g, "\n");
        const titleWithoutLineBreaks =
          award.awardsSection.awardsSectionTitle.replace(/\\n/g, " ");
        return (
          <div key={award._id}>
            <div className="text-center text-theme-dark px-[5%]">
              <h3 className="uppercase">
                {award.awardsSection.awardsSectionSubTitle}
              </h3>
              <div className="block xsmall:hidden pt-[2.8rem] pb-[3rem]">
                {titleWithLineBreaks.split("\n").map((line, index) => {
                  return (
                    <h2 key={index} className="">
                      {line}
                    </h2>
                  );
                })}
              </div>
              <div className="hidden xsmall:block">
                {titleWithoutLineBreaks.split("\n").map((line, index) => {
                  return (
                    <h2 key={index} className="pt-[1.5rem] pb-[3rem]">
                      {line}
                    </h2>
                  );
                })}
              </div>
              {/* <h2 className="pt-[1.5rem] pb-[3rem]">
                {award.awardsSection.awardsSectionTitle}
              </h2> */}
            </div>
            <div className="small:pl-layout-small">
              <AwardsSwiper data={awards} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
