import { getMailingListCta } from "@/sanity/sanity.query";
import type { mailingListType } from "@/types";
import MailingListForm from "./MailingListForm";

export default async function MailingListCta() {
  const mailingList: mailingListType[] = await getMailingListCta();

  return (
    <div>
      {mailingList.map((content) => {
        const {
          mailingListHeading,
          mailingListText,
          mailingListPlaceholder,
          mailingListButtonText,
        } = content.mailingListCta;

        return (
          <section
            key={content.mailingListCta._id}
            className="bg-theme-purple px-10 py-[4.5rem] my-section-gap flex flex-col items-center justify-center text-center xsmall:py-[4rem] small:flex-row small:justify-between small:text-left small:max-w-[1121px] small:mx-auto small:px-[64px]"
          >
            <div className="small:w-[356px]">
              <h3 className="text-white uppercase pb-10 small:pb-6">
                {mailingListHeading}
              </h3>
              <p className="text-white pb-10 small:pb-0 font-light">
                {mailingListText}
              </p>
            </div>
            <MailingListForm
              theme="light"
              placeholder={mailingListPlaceholder}
              buttonText={mailingListButtonText}
            />
          </section>
        );
      })}
    </div>
  );
}
