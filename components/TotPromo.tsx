import TotPromoPhoneGraphic from "./TotPromoPhonesGraphic";
import TotBackgrounds from "./TotBackgrounds";
import ToTLogo from "./assets/ToTLogo";
import type { TotPromoType } from "@/types";
import { getTotPromo } from "@/sanity/sanity.query";

export default async function TotPromo() {
  const totPromo: TotPromoType[] = await getTotPromo();
  return (
    <div className="relative bg-theme-dark mt-20 w-full">
      <div className="absolute top-0 left-0 w-full h-full">
        <TotBackgrounds />
      </div>
      <div className="small:max-w-[1120px] small:mx-auto ">
        <div className="relative h-full w-auto text-[#000] overflow-hidden py-[2.3rem]">
          {/* <div className="absolute top-0 left-0 h-full w-full bg-theme-dark"></div> */}
          <div className="px-[5%] small:px-0 small:flex flex-row-reverse small:items-center small:justify-between small:my-[2rem]">
            <div className="">
              <div className="relative phones-container h-[78%] mt-[10rem] mx-auto xsmall:w-fit xsmall:h-auto small:mt-0">
                <TotPromoPhoneGraphic />
              </div>
              <p className="hidden z-10 text-[2.4rem] font-bold text-white text-center tracking-[0.06em] uppercase xsmall:order-1 xsmall:pt-10 small:block small:relative small:z-10">
                coming soon
              </p>
            </div>

            <div className="flex flex-col mt-[8rem] gap-14 xsmall:gap-16 xsmall:mb-[4rem] small:mb-0 small:mt-0 small:justify-start">
              <div className="relative z-20 w-auto h-fit pt-10 pb-5 xsmall:order-2">
                <ToTLogo />
              </div>
              <div className="relative z-1 xsmall:order-3">
                {totPromo.map((content) => {
                  return (
                    <h3
                      key={content._id}
                      className="font-bold text-[2rem] text-white text-center px-[5%] xsmall:text-[2.4rem] xsmall:w-[70%] xsmall:max-w-[500px] xsmall:mx-auto small:max-w-full small:text-left small:ml-0 small:px-0 small:w-[90%]"
                    >
                      {content.totPromo.promoMessage}
                    </h3>
                  );
                })}
              </div>
              <p className="z-10 mb-[10rem] text-[2.4rem] tracking-[0.06em] font-bold text-center uppercase text-white xsmall:order-1 xsmall:-mb-[3rem] small:hidden">
                coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
