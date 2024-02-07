import type { contactType } from "@/types";
import { getContactContent } from "@/sanity/sanity.query";
import ButtonLink from "./common/ButtonLink";
import GradientLine from "./assets/GradientLine";
import ContactForm from "./ContactForm";
import BgDots from "./assets/BgDots";

export default async function ContactSection() {
  const contactContent: contactType[] = await getContactContent();

  return (
    <section className="bg-theme-dark text-white py-[9rem] relative">
      {/* bottom left */}
      <div className="absolute bottom-0 left-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1]">
        <BgDots />
      </div>
      <div className="absolute bottom-0 left-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1]">
        <BgDots />
      </div>
      <div className="absolute bottom-0 left-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1]">
        <BgDots />
      </div>
      <div className="absolute bottom-0 left-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1]">
        <BgDots />
      </div>
      <div className="absolute bottom-0 left-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1]">
        <BgDots />
      </div>
      <div className="absolute bottom-0 left-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1]">
        <BgDots />
      </div>

      {/* bottom right */}
      <div className="absolute small:hidden bottom-0 right-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1] scale-x-[-1]">
        <BgDots />
      </div>
      <div className="absolute small:hidden bottom-0 right-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1] scale-x-[-1]">
        <BgDots />
      </div>
      <div className="absolute small:hidden bottom-0 right-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1] scale-x-[-1]">
        <BgDots />
      </div>
      <div className="absolute small:hidden bottom-0 right-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1] scale-x-[-1]">
        <BgDots />
      </div>
      <div className="absolute small:hidden bottom-0 right-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1] scale-x-[-1]">
        <BgDots />
      </div>
      <div className="absolute small:hidden bottom-0 right-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1] scale-x-[-1]">
        <BgDots />
      </div>
      <div className="absolute small:hidden bottom-0 right-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1] scale-x-[-1]">
        <BgDots />
      </div>

      {contactContent.map((content) => {
        const titleWithLineBreaks = content.contactUs.message.replace(
          /\\n/g,
          "\n"
        );
        const lineWithoutBreaks = content.contactUs.message.replace(
          /\\n/g,
          " "
        );
        return (
          <div className="relative">
            <div className="hidden small:block ml-[-5%] w-[105%] max-h-[4px] overflow-hidden">
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 390 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.7"
                  y="0.5"
                  width="100%"
                  height="4"
                  fill="url(#4)"
                />
                <defs>
                  <linearGradient
                    id="4"
                    x1="390"
                    y1="4.49985"
                    x2="0"
                    y2="4.49985"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D9D9D9" stopOpacity="0" />
                    <stop
                      offset="0.15625"
                      stopColor="#5003B4"
                      stopOpacity="0.5"
                    />
                    <stop offset="0.317708" stopColor="#CB425C" />
                    <stop offset="0.5" stopColor="#580BE5" />
                    <stop offset="0.708333" stopColor="#4804F8" />
                    <stop
                      offset="0.921875"
                      stopColor="#F9BA17"
                      stopOpacity="0.6"
                    />
                    <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>{" "}
            </div>

            <div className="my-24 small:flex gap-[2rem] small:justify-between small:items-center small:w-full small:px-layout-small">
              <div
                key={content._id}
                className="px-[5%] text-center small:text-left small:px-0"
              >
                <div className="px-14 max-w-[450px] mx-auto small:px-0">
                  <h2 className="">{content.contactUs.title}</h2>
                  <p className="pt-14 xsmall:hidden font-semibold text-[1.4rem]">
                    {lineWithoutBreaks}
                  </p>
                  <div className="pt-14 hidden xsmall:block">
                    {titleWithLineBreaks.split("\n").map((line, index) => {
                      return (
                        <p key={index} className="font-semibold text-[1.4rem]">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                  <h4 className="font-semibold text-[1.8rem] pt-10 px-4 small:px-0">
                    {content.contactUs.address}
                  </h4>
                  <h4 className="font-semibold text-[1.8rem] pt-2">
                    {content.contactUs.contactNumber}
                  </h4>
                </div>
                <div className="flex flex-col gap-5 mt-16 xsmall:flex-row xsmall:justify-center small:justify-start small:pl-0">
                  <div className="xsmall:max-w-[176px]">
                    <ButtonLink
                      theme="light"
                      destination={content.contactUs.contactNumber}
                      text={content.contactUs.phoneButtonText}
                      ctaType="phone"
                      hoverEffect="fill-col"
                    />
                  </div>
                  <div className="xsmall:max-w-[176px]">
                    <ButtonLink
                      theme="light"
                      destination={content.contactUs.emailAddress}
                      text={content.contactUs.emailButtonText}
                      ctaType="email"
                      hoverEffect="fill-col"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden small:block">
                <ContactForm />
              </div>
            </div>
            <div className="mt-24 ml-[-5%] w-[105%] max-h-[4px] overflow-hidden">
              <GradientLine position="bottom" />
            </div>
          </div>
        );
      })}
    </section>
  );
}
