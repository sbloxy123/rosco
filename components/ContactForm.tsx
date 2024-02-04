//could use this but $15 per month: https://dev.to/reeshee/25-lines-to-setup-a-form-and-send-emails-in-nextjs-14-using-server-actions-170l

import ButtonLink from "./common/ButtonLink";

// documentation - use this*
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
// specifically here:
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#:~:text=Once%20the%20fields,useFormState
export default async function ContactForm() {
  return (
    <div className="flex flex-col mr-layout-small justify-between h-[448px] w-[512px]">
      <div className="w-full flex flex-col text-[1.4rem]">
        <label className="text-white" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          className="border bg-white rounded-sm px-4 py-2 h-[4.6rem] text-theme-dark"
        />
      </div>
      <div className="text-[1.4rem]">
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          className="border bg-white rounded-sm px-4 py-2 w-full h-[4.6rem] text-theme-dark"
        />
      </div>
      <div className="text-[1.4rem]">
        <label className="text-white" htmlFor="phone">
          Phone number
        </label>
        <div className="flex items-center rounded-sm">
          <select className="border-none outline-none h-[4.6rem] w-[7rem] bg-white text-gray-500 rounded-tl-sm rounded-bl-sm text-center">
            <option className="" value="UK">
              UK
            </option>
            {/* Add more options as needed */}
          </select>
          <input
            id="phone"
            type="tel"
            placeholder=""
            className="border-none outline-none w-full px-2 h-[4.6rem] text-theme-dark"
          />
        </div>
      </div>
      <div className="text-[1.4rem]">
        <label className="text-white " htmlFor="message">
          How can we help?
        </label>
        <textarea
          id="message"
          placeholder="Tell us a little about the project..."
          rows={5}
          className="border bg-white rounded-sm px-4 py-2 w-full h-[12.6rem] text-theme-dark"
        />
      </div>
      <div>
        <ButtonLink
          text="send your message"
          theme="light"
          hoverEffect="fill-col"
          ctaType="general"
          destination="/"
        />
      </div>
    </div>
  );
}
