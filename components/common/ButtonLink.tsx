"use client";
import Link from "next/link";
import { General, Email, Phone } from "./IconSvgs";

const ButtonLink = ({
  destination,
  text,
  theme,
  ctaType,
  hoverEffect,
}: {
  destination: string;
  text: string;
  theme: "dark" | "light";
  ctaType: "general" | "email" | "phone" | "none";
  hoverEffect: "outline" | "fill-col" | "fill-white";
}) => {
  const color = theme == "dark" ? `theme-dark` : `white`;
  const fill = theme == "dark" ? `fill-theme-dark` : `fill-white`;
  // const borderClass = `border-[${color}]`;
  // const typeClass = `text-[${color}]`;

  let hover;
  let svgHover;

  if (hoverEffect == "outline") {
    hover = `hover:border-[#6015EF] hover:text-[#6015EF]`;
    svgHover = `group-hover:fill-[#6015EF]`;
  } else if (hoverEffect == "fill-col") {
    hover = `hover:bg-[#6015EF] hover:border-[#6015EF] hover:text-white`;
    svgHover = `group-hover:fill-white`;
  } else if (hoverEffect == "fill-white") {
    hover = `hover:bg-white hover:border-white hover:text-[#2F3047]`;
    svgHover = `group-hover:fill-[#2F3047]`;
  } else {
    hover = ``;
    svgHover = ``;
  }

  let btnType;
  if (ctaType == "email") {
    btnType = <Email fill={fill} hover={svgHover} />;
  } else if (ctaType == "general") {
    btnType = <General fill={fill} hover={svgHover} />;
  } else if (ctaType == "phone") {
    btnType = <Phone fill={fill} hover={svgHover} />;
  } else if (ctaType == "none") {
    btnType = ``;
  }
  // changed border through global css as tailwind uses border-style which wasnt working so changed.
  return (
    <Link
      href={`${destination}`}
      className={`button__link block border-2 border-solid border-${color} rounded-sm text-${color} py-5 w-full  transition hover:duration-300 ${hover} group`}
    >
      <div
        className={`flex justify-center items-center gap-6 mx-auto ${
          ctaType == "email" || "phone" ? `px-[2.5rem]` : `px-11`
        } min-w-[176px]`}
      >
        {btnType}
        <h5 className="uppercase text-center">{text}</h5>
      </div>
    </Link>
  );
};

export default ButtonLink;
