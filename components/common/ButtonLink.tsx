"use client";
import Link from "next/link";
import { General, Email, Phone } from "./IconSvgs";

const ButtonLink = ({
  destination,
  text,
  theme,
  ctaType,
}: {
  destination: string;
  text: string;
  theme: "dark" | "light";
  ctaType: "general" | "email" | "phone" | "none";
}) => {
  const color = theme === "dark" ? `theme-dark` : `white`;
  const fill = theme === "dark" ? `#2F3047` : `white`;
  const borderClass = `border-${color}`;
  const typeClass = `text-${color}`;
  let btnType;
  if (ctaType == "email") {
    btnType = <Email fill={fill} />;
  }
  if (ctaType == "general") {
    btnType = <General fill={fill} />;
  }
  if (ctaType == "phone") {
    btnType = <Phone fill={fill} />;
  }
  if (ctaType == "none") {
    btnType = ``;
  }

  return (
    <Link
      href={`${destination}`}
      className={`flex justify-center items-center border-solid border-2 ${borderClass} ${typeClass} py-4 px-8 w-full min-w-[176px] xsmall:mx-auto small:ml-0 gap-6 small:pl-5 small:pr-7 small:gap-4 `}
    >
      {btnType}
      <h5 className="uppercase text-center">{text}</h5>
    </Link>
  );
};

export default ButtonLink;
