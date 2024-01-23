import type { contactType } from "@/types";
import { getContactContent } from "@/sanity/sanity.query";
import ButtonLink from "./common/ButtonLink";
import GradientLine from "./assets/GradientLine";
import ContactForm from "./ContactForm";

export default async function ContactSection() {
  const contactContent: contactType[] = await getContactContent();

  return (
    <section className="bg-theme-dark text-white py-20">
      {contactContent.map((content) => {
        return (
          <div>
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

            <div className="my-24 small:flex small:justify-between small:items-center">
              <div
                key={content._id}
                className="px-[5%] text-center small:text-left"
              >
                <div className="px-14 max-w-[450px] mx-auto">
                  <h2 className="">{content.contactUs.title}</h2>
                  <p className="pt-14">{content.contactUs.message}</p>
                  <h4 className="font-semibold text-[1.8rem] pt-10 px-4 small:px-0">
                    {content.contactUs.address}
                  </h4>
                  <h4 className="font-semibold text-[1.8rem] pt-2">
                    {content.contactUs.contactNumber}
                  </h4>
                </div>
                <div className="flex flex-col gap-5 mt-16 xsmall:flex-row xsmall:justify-center small:justify-start small:pl-14">
                  <div className="w-176px">
                    <ButtonLink
                      theme="light"
                      destination={content.contactUs.contactNumber}
                      text={content.contactUs.phoneButtonText}
                      ctaType="phone"
                    />
                  </div>
                  <div className="w-176px">
                    <ButtonLink
                      theme="light"
                      destination={content.contactUs.emailAddress}
                      text={content.contactUs.emailButtonText}
                      ctaType="email"
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
