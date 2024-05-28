//could use this but $15 per month: https://dev.to/reeshee/25-lines-to-setup-a-form-and-send-emails-in-nextjs-14-using-server-actions-170l
"use client";
import { useState } from "react";
import { General } from "./common/IconSvgs";
import { useForm } from "react-hook-form";
import { usePost } from "@/app/hooks/usePost";

// documentation - use this*
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
// specifically here:
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#:~:text=Once%20the%20fields,useFormState
export default function ContactForm({
  showAllSizes,
}: {
  showAllSizes?: boolean;
}) {
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formSent, setFormSent] = useState("");
  const { postRequest } = usePost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(() => {
        const sendForm = async () => {
          try {
            const formData = {
              to: "sbloxy123@gmail.com", // Change to your recipient
              from: "sbloxy123@gmail.com", // Change to your verified sender
              subject: `Email enquiry from ${fromName}`,
              text: message,
              phone: phone,
              email: fromEmail,
              html: `
                You got a new message from ${fromName}.
                <br /><br />
                Message: ${message}
                <br /><br />
                Phone Number: ${phone}
                email: ${fromEmail}
                `,
            };
            // Local developer testing API Route
            await postRequest("/api/sendgrid", formData);
            const formMessageText = new Promise((resolve, reject) => {
              setTimeout(() => {
                setFormSent("Message Sent!");
                setTimeout(() => {
                  setFormSent("");
                  setFromName("");
                  setFromEmail("");
                  setPhone("");
                  setMessage("");
                }, 5000);
              }, 0);
            });
          } catch (error) {
            console.log(error);
          }
        };
        sendForm();
      })}
      className="flex flex-col justify-between w-full small:w-[512px] font-body"
    >
      <div className="w-full flex flex-col gap-[0.5rem] text-[1.4rem]">
        <label className="text-white" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name", { required: true })}
          value={fromName}
          onChange={(e) => setFromName(e.target.value)}
          placeholder="Your name"
          className="border bg-white rounded-sm px-4 py-2 h-[4.6rem] text-theme-dark"
        />
        {errors.name?.type === "required" && (
          <p
            role="alert"
            className="text-white text-center font-bold mb-6 bg-rose-600"
          >
            A name is required
          </p>
        )}
      </div>
      <div className="flex flex-col gap-[0.5rem] pt-[2rem] text-[1.4rem]">
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
          value={fromEmail}
          onChange={(e) => setFromEmail(e.target.value)}
          placeholder="you@company.com"
          className="border bg-white rounded-sm px-4 py-2 w-full h-[4.6rem] text-theme-dark"
        />
        {errors.email?.type === "required" && (
          <p
            role="alert"
            className="text-white text-center font-bold mb-6 bg-rose-600"
          >
            A email address is required
          </p>
        )}
        {errors.email?.type === "pattern" && (
          <p
            role="alert"
            className="text-white text-center font-bold mb-6 bg-rose-600"
          >
            A valid email address is required
          </p>
        )}
      </div>
      <div className="flex flex-col gap-[0.5rem] pt-[2rem] text-[1.4rem]">
        <label className="text-white" htmlFor="phone">
          Phone number
        </label>
        <div className="relative flex items-center rounded-sm bg-white">
          <div className="absolute left-[10.5%] xsmall:left-[6.5%] small:left-[8.5%] top-0 bottom-0 my-auto w-fit h-fit z-0">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00007 5.7066C4.91795 5.70698 4.83658 5.69097 4.76074 5.65948C4.6849 5.628 4.61611 5.58169 4.5584 5.52326L0.391735 1.3566C0.308631 1.23501 0.271129 1.08799 0.285843 0.94146C0.300558 0.794928 0.366544 0.658298 0.472163 0.555668C0.577782 0.453038 0.716249 0.391001 0.863143 0.380498C1.01004 0.369996 1.15592 0.411702 1.27507 0.498262L5.00007 4.19826L8.72507 0.498262C8.84253 0.422103 8.98217 0.387586 9.12158 0.400242C9.261 0.412898 9.39214 0.471995 9.49397 0.568061C9.5958 0.664128 9.66243 0.791599 9.68318 0.930046C9.70393 1.06849 9.6776 1.2099 9.6084 1.3316L5.44173 5.49826C5.38618 5.56123 5.31835 5.61219 5.2424 5.64801C5.16646 5.68383 5.08399 5.70377 5.00007 5.7066Z"
                fill="black"
              />
            </svg>
          </div>
          <select
            className="form-country-select rounded-none border-none outline-none h-[4.6rem] w-[7rem] bg-transparent text-theme-dark rounded-tl-sm rounded-bl-sm text-left px-[4%] z-10"
            aria-label="country code"
          >
            <option className="" value="UK">
              UK
            </option>
            {/* Add more options as needed */}
          </select>
          <input
            {...register("phone", { required: false })}
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="+44"
            className="relative border-none outline-none w-full px-4 h-[4.6rem] text-theme-dark -left-[3px] "
          />
        </div>
      </div>
      <div className="flex flex-col gap-[0.5rem] pt-[2rem] text-[1.4rem]">
        <label className="text-white " htmlFor="message">
          How can we help?
        </label>
        <textarea
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Tell us a little about the project..."
          rows={5}
          className="border bg-white rounded-sm px-4 py-2 w-full h-[12.6rem] text-theme-dark"
        />
        {errors.message?.type === "required" && (
          <p
            role="alert"
            className="text-white text-center font-bold mb-6 bg-rose-600"
          >
            A message is required
          </p>
        )}
      </div>
      <div className="mt-[3rem]">
        <button
          type="submit"
          className="relative block border-[2px] py-[1.1rem] border-solid border-white rounded-sm text-white  hover:bg-theme-purple hover:border-theme-purple transition duration-300 hover:duration-300 group w-full"
        >
          <div className="flex justify-center items-center gap-6 mx-auto h-full w-full px-8 xsmall:px-11 min-w-[140px] xsmall:min-w-[176px]">
            <General fill="fill-white" hover="group-hover:fill-white" />
            <span className="uppercase text-center font-bold font-headings tracking-[0.06em] text-[1.3rem] xsmall:text-[1.6rem]">
              SEND YOUR MESSAGE
            </span>
          </div>
        </button>
        <p className="text-white text-center mt-2">{formSent}</p>
      </div>
    </form>
  );
}
