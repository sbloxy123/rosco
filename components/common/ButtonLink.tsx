"use client";
import Link from "next/link";
import { General, Email, Phone } from "./IconSvgs";

const ButtonLink = ({
  destination,
  text,
  bgColor,
  theme,
  ctaType,
  hoverEffect,
}: {
  destination?: string | { pathname: string; query?: string };
  text: string;
  bgColor?: string;
  theme: "dark" | "light" | "white";
  ctaType: "general" | "email" | "phone" | "none";
  hoverEffect: "outline" | "fill-col" | "fill-white";
}) => {
  const isDestinationObject = typeof destination === "object";

  // Construct href based on destination type
  let href = destination;
  if (typeof destination === "object") {
    // Construct the query string if there are query parameters
    const queryString = destination.query ? `?filter=${destination.query}` : "";
    href = `${destination.pathname}${queryString}`;
  }

  const color = theme == "dark" ? `theme-dark` : `white`;
  const fill = theme == "dark" ? `fill-theme-dark` : `fill-white`;
  let hover;
  let svgHover;

  if (hoverEffect == "outline") {
    hover = `hover:border-[#6015EF] hover:text-[#6015EF] hover:border-transparent  hover:after:block`;
    svgHover = `group-hover:fill-[#6015EF]`;
  } else if (hoverEffect == "fill-col") {
    hover = `hover:bg-[#6015EF] hover:border-[#6015EF] hover:text-white`;
    svgHover = `group-hover:fill-white`;
  } else if (hoverEffect == "fill-white") {
    hover = `hover:bg-white hover:border-white hover:text-[#6015EF]`;
    svgHover = `group-hover:fill-[#6015EF]`;
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
      href={`${href}`}
      className={`button__link relative block border-[2px] border-solid border-${color} rounded-sm after:bg-transparent after:absolute after:top-[-1.5px] after:left-[-2px] after:h-[calc(100%+4px)] after:w-[calc(100%+4px)] after:-z-10 after:border-[2px] hover:after:border-[3px] hover:after:border-theme-purple after:rounded-sm after:border-theme-dark after:-translate-y-[0.3px] after:hover:duration-150 ${
        bgColor == "white"
          ? `text-theme-purple bg-white`
          : bgColor == "theme-dark"
          ? `border-theme-dark text-white hover:after:border-theme-purple`
          : `text-${color}`
      } py-[1.1rem] w-full bg-${bgColor} transition duration-300 hover:duration-300 ${hover} group`}
    >
      <div
        className={`flex justify-center items-center gap-6 mx-auto h-full w-full ${
          ctaType == "email" || "phone" ? `px-[2.2rem]` : `px-11`
        } min-w-[176px] `}
      >
        {btnType}
        <span className="uppercase text-center font-bold font-headings tracking-[0.06em] text-[1.6rem]">
          {text}
        </span>
      </div>
    </Link>
  );
};

export default ButtonLink;
