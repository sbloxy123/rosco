import type { awardsType } from "@/types";
import { getAwards } from "@/sanity/sanity.query";
import Image from "next/image";
import { AwardsSwiper } from "./swiper/Swipers";

export default async function AwardsSection() {
  const awards: awardsType[] = await getAwards();

  return (
    <section className="relative p-8 px-0 small:pl-10 bg-theme-off-white mt-20">
      {awards.map((award) => {
        return (
          <div key={award._id} className="py-12">
            <div className="text-center text-theme-dark px-[5%]">
              <h3 className="uppercase">
                {award.awardsSection.awardsSectionSubTitle}
              </h3>
              <h2 className="py-10">
                {award.awardsSection.awardsSectionTitle}
              </h2>
            </div>
            <AwardsSwiper data={awards} />
          </div>
        );
      })}
    </section>
  );
}
