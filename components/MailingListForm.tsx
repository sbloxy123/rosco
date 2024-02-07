"use client";
import { useState } from "react";

export default function MailingListForm({
  placeholder,
  buttonText,
  theme,
}: {
  placeholder: string;
  buttonText: string;
  theme: "dark" | "light";
}) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }
  return (
    <form
      className={` ${
        theme == "dark" && "small:mx-auto"
      } flex flex-col justify-center w-full gap-8 xsmall:gap-4 xsmall:flex-row small:w-fit`}
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={handleInput}
        className={`p-4 ${
          theme == "dark"
            ? "bg-theme-dark bg-opacity-[6%] placeholder:text-theme-dark placeholder:font-[400]"
            : "bg-white bg-opacity-20 placeholder:text-white focus:text-theme-purple"
        }   rounded-sm w-full uppercase font-headings text-[14.5px] tracking-[0.06em] xsmall:w-[290px]  placeholder:font-[500] placeholder:pl-[1rem] focus:bg-white border-0 focus:ring-0 focus:outline-none transition duration-300 ease-out`}
        style={{}}
      />
      <button
        type="submit"
        className={`w-full  ${
          theme == "dark"
            ? "text-white bg-theme-purple"
            : "text-theme-purple bg-white"
        }  rounded-sm cursor-pointer font-headings font-[600] p-4 uppercase text-[14.5px] tracking-[0.06em] xsmall:w-[114px]`}
      >
        {buttonText}
      </button>
    </form>
  );
}
