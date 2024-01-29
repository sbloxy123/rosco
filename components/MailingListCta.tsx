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
            className=" small:px-layout-small my-section-gap small:mx-auto"
          >
            <div className="bg-theme-purple px-10 py-[4.5rem] flex flex-col items-center justify-center text-center xsmall:py-[4rem] small:flex-row small:justify-between small:text-left small:px-[64px] small:max-w-[1121px] small:mx-auto">
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
            </div>
          </section>
        );
      })}
    </div>
  );
}
