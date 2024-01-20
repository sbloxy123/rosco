import TotPromoPhoneGraphic from "./TotPromoPhonesGraphic";
import TotBackgrounds from "./TotBackgrounds";
import ToTLogo from "./assets/ToTLogo";
import type { TotPromoType } from "@/types";
import { getTotPromo } from "@/sanity/sanity.query";

export default async function TotPromo() {
  const totPromo: TotPromoType[] = await getTotPromo();
  return (
    <div className=" mt-20">
      <div className="relative h-full w-auto text-[#000] overflow-hidden py-20 pt-[40px]">
        <div className="absolute top-0 left-0 h-full w-full">
          <TotBackgrounds />
        </div>
        <div className="small:flex flex-row-reverse small:items-center small:justify-between small:px-[10%]">
          <div className="">
            <div className="relative phones-container h-[78vw] mt-10 xsmall:w-fit xsmall:h-auto mx-auto">
              <TotPromoPhoneGraphic />
            </div>
            <p className="z-10 text-[2.4rem] font-bold text-center tracking-[0.06em] uppercase text-theme-dark xsmall:order-1 xsmall:pt-10 small:block small:relative small:z-10">
              coming soon
            </p>
          </div>

          <div className="flex flex-col gap-14 xsmall:gap-5 small:justify-start small:gap-16">
            <div className="relative z-20 w-auto h-fit pt-10 pb-5 xsmall:order-2">
              <ToTLogo />
            </div>
            <div className="relative z-1 xsmall:order-3">
              {totPromo.map((content) => {
                return (
                  <h3
                    key={content._id}
                    className="font-bold text-[2rem] text-theme-dark text-center px-[5%] xsmall:text-[2.4rem] xsmall:w-[70%] xsmall:max-w-[500px] xsmall:mx-auto small:max-w-full small:text-left small:ml-0 small:px-0 small:w-[90%]"
                  >
                    {content.totPromo.promoMessage}
                  </h3>
                );
              })}
            </div>
            <p className="z-10 text-[2.4rem] tracking-[0.06em] font-bold text-center uppercase text-theme-dark xsmall:order-1 xsmall:-mt-14 small:hidden">
              coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
