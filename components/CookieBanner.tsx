"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "../app/lib/storageHelper";
import { useState, useEffect } from "react";
import ButtonLink from "./common/ButtonLink";
import { General } from "./common/IconSvgs";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);
  return (
    // <div
    //   className={`my-10 mx-auto max-w-max md:max-w-screen-sm
    //               fixed bottom-0 left-0 right-0
    //               flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4
    //               bg-gray-700 rounded-lg shadow z-50
    //               ${cookieConsent !== null ? "hidden" : "flex"}`}
    // >
    <div
      className={`w-screen fixed bottom-0 left-0 right-0 bg-[#fff] z-50 ${
        cookieConsent !== null ? "hidden" : "flex"
      }`}
    >
      <div className="flex px-[5%] small:px-4 py-[3rem] justify-between text-center items-center flex-col gap-4 small:flex-row small:text-left max-w-[1120px] mx-auto">
        <div className="text-theme-dark pb-[2rem] max-w-[547px] small:pb-0">
          {/* <Link href="/info/cookies"> */}
          <h4 className="font-bold text-[clamp(2.2rem,5vw,2.4rem)] pb-[1rem] tracking-[0.06em]">
            Our cookies policy
          </h4>
          <p className="text-[clamp(1.4rem,5vw,1.6rem)]">
            We value your privacy. Our website uses cookies to enhance your
            browsing experience. By clicking ‘Accept All’ you consent to our use
            of cookies.{" "}
            <span className="font-bold underline">
              <Link href="/cookies">Read more about our policies</Link>
            </span>
          </p>
          {/* </Link> */}
        </div>

        <div className="flex gap-2">
          <button
            aria-label="decline cookies"
            onClick={() => setCookieConsent(false)}
            className="relative block border-[2px] py-[1.1rem] border-solid border-theme-dark rounded-sm text-theme-dark hover:text-white hover:bg-theme-purple hover:border-theme-purple transition duration-300 hover:duration-300 group"
          >
            <div className="flex justify-center items-center gap-6 mx-auto h-full w-full px-11 min-w-[176px]">
              <General fill="fill-[#2F3047]" hover="group-hover:fill-white" />
              <span className="uppercase text-center font-bold font-headings tracking-[0.06em] text-[1.6rem]">
                DECLINE
              </span>
            </div>
          </button>

          <button
            aria-label="accept cookies"
            onClick={() => setCookieConsent(true)}
            className="relative block py-[1.1rem] border-[2px] border-solid bg-theme-dark border-theme-dark rounded-sm text-white hover:bg-theme-purple hover:border-theme-purple transition duration-300 hover:duration-300 group"
          >
            <div className="flex justify-center items-center gap-6 mx-auto h-full w-full px-11 min-w-[176px]">
              <General fill="fill-white" hover="group-hover:fill-white" />
              <span className="uppercase text-center font-bold font-headings tracking-[0.06em] text-[1.6rem]">
                ACCEPT ALL
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
