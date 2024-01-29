import type { awardsType } from "@/types";
import { getAwards } from "@/sanity/sanity.query";
import Image from "next/image";
import { AwardsSwiper } from "./swiper/Swipers";

export default async function AwardsSection() {
  const awards: awardsType[] = await getAwards();

  return (
    <section className="relative px-0 mt-section-gap">
      {awards.map((award) => {
        return (
          <div key={award._id} className="py-[3rem]">
            <div className="text-center text-theme-dark px-[5%]">
              <h3 className="uppercase">
                {award.awardsSection.awardsSectionSubTitle}
              </h3>
              <h2 className="py-10">
                {award.awardsSection.awardsSectionTitle}
              </h2>
            </div>
            <div className="small:pl-layout-small">
              <AwardsSwiper data={awards} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
