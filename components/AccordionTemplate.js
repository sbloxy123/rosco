"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function AccordionTemplate({ question, answer, UID }) {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  function Icon({ id, open }) {
    return id === open ? (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 27.5C11.33 27.5 8.71987 26.7082 6.49981 25.2248C4.27974 23.7414 2.54942 21.633 1.52763 19.1662C0.505849 16.6994 0.238504 13.985 0.759405 11.3663C1.28031 8.74754 2.56606 6.34207 4.45406 4.45406C6.34207 2.56606 8.74754 1.28031 11.3663 0.759405C13.985 0.238504 16.6994 0.505849 19.1662 1.52763C21.633 2.54942 23.7414 4.27974 25.2248 6.49981C26.7082 8.71987 27.5 11.33 27.5 14C27.5 17.5804 26.0777 21.0142 23.5459 23.5459C21.0142 26.0777 17.5804 27.5 14 27.5ZM14 2.75001C11.775 2.75001 9.59989 3.40981 7.74984 4.64597C5.89979 5.88214 4.45785 7.63915 3.60636 9.69482C2.75488 11.7505 2.53209 14.0125 2.96617 16.1948C3.40026 18.3771 4.47171 20.3816 6.04505 21.955C7.6184 23.5283 9.62295 24.5998 11.8052 25.0338C13.9875 25.4679 16.2495 25.2451 18.3052 24.3937C20.3609 23.5422 22.1179 22.1002 23.354 20.2502C24.5902 18.4001 25.25 16.225 25.25 14C25.25 11.0163 24.0647 8.15484 21.955 6.04505C19.8452 3.93527 16.9837 2.75001 14 2.75001Z"
          fill="#6015EF"
        />
        <path
          d="M20 15.125H8C7.70163 15.125 7.41548 15.0065 7.2045 14.7955C6.99353 14.5845 6.875 14.2984 6.875 14C6.875 13.7016 6.99353 13.4155 7.2045 13.2045C7.41548 12.9935 7.70163 12.875 8 12.875H20C20.2984 12.875 20.5845 12.9935 20.7955 13.2045C21.0065 13.4155 21.125 13.7016 21.125 14C21.125 14.2984 21.0065 14.5845 20.7955 14.7955C20.5845 15.0065 20.2984 15.125 20 15.125Z"
          fill="#6015EF"
        />
      </svg>
    ) : (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 27.5C11.33 27.5 8.71987 26.7082 6.49981 25.2248C4.27974 23.7414 2.54942 21.633 1.52763 19.1662C0.505849 16.6994 0.238504 13.985 0.759405 11.3663C1.28031 8.74754 2.56606 6.34207 4.45406 4.45406C6.34207 2.56606 8.74754 1.28031 11.3663 0.759405C13.985 0.238504 16.6994 0.505849 19.1662 1.52763C21.633 2.54942 23.7414 4.27974 25.2248 6.49981C26.7082 8.71987 27.5 11.33 27.5 14C27.5 17.5804 26.0777 21.0142 23.5459 23.5459C21.0142 26.0777 17.5804 27.5 14 27.5ZM14 2.75001C11.775 2.75001 9.59989 3.40981 7.74984 4.64597C5.89979 5.88214 4.45785 7.63915 3.60636 9.69482C2.75488 11.7505 2.53209 14.0125 2.96617 16.1948C3.40026 18.3771 4.47171 20.3816 6.04505 21.955C7.6184 23.5283 9.62295 24.5998 11.8052 25.0338C13.9875 25.4679 16.2495 25.2451 18.3052 24.3937C20.3609 23.5422 22.1179 22.1002 23.354 20.2502C24.5902 18.4001 25.25 16.225 25.25 14C25.25 11.0163 24.0647 8.15484 21.955 6.04505C19.8452 3.93527 16.9837 2.75001 14 2.75001Z"
          fill="#2F3047"
        />
        <path
          d="M14 21.125C13.7028 21.1211 13.4189 21.0013 13.2088 20.7912C12.9987 20.5811 12.8789 20.2972 12.875 20V8C12.875 7.70163 12.9935 7.41548 13.2045 7.2045C13.4155 6.99353 13.7016 6.875 14 6.875C14.2984 6.875 14.5845 6.99353 14.7955 7.2045C15.0065 7.41548 15.125 7.70163 15.125 8V20C15.1211 20.2972 15.0013 20.5811 14.7912 20.7912C14.5811 21.0013 14.2972 21.1211 14 21.125Z"
          fill="#2F3047"
        />
        <path
          d="M20 15.125H8C7.70163 15.125 7.41548 15.0065 7.2045 14.7955C6.99353 14.5845 6.875 14.2984 6.875 14C6.875 13.7016 6.99353 13.4155 7.2045 13.2045C7.41548 12.9935 7.70163 12.875 8 12.875H20C20.2984 12.875 20.5845 12.9935 20.7955 13.2045C21.0065 13.4155 21.125 13.7016 21.125 14C21.125 14.2984 21.0065 14.5845 20.7955 14.7955C20.5845 15.0065 20.2984 15.125 20 15.125Z"
          fill="#2F3047"
        />
      </svg>
    );
  }

  return (
    <>
      <Accordion
        open={open === UID + 1}
        icon={<Icon id={UID + 1} open={open} />}
        className="border-b-[1px] border-[#D4DBDE] py-[2rem]"
      >
        <AccordionHeader
          onClick={() => handleOpen(UID + 1)}
          className={`border-0 text-[1.8rem] font-semibold font-body ${
            open === UID + 1
              ? "text-theme-purple hover:text-theme-purple"
              : "text-theme-dark"
          }`}
        >
          <h2 className="text-[1.8rem]">{question}</h2>
        </AccordionHeader>
        <AccordionBody className="text-[1.6rem]">{answer}</AccordionBody>
      </Accordion>
    </>
  );
}
