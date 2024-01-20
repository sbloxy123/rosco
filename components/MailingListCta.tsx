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
          <div
            key={content.mailingListCta._id}
            className="bg-theme-purple px-10 py-20 flex flex-col items-center justify-center text-center small:flex-row small:justify-between small:text-left small:max-w-[1121px] small:mx-auto small:pt-[36px] small:pb-[28px] small:my-[80px] small:px-[64px]"
          >
            <div className="small:w-[356px]">
              <h3 className="text-white uppercase pb-10 small:pb-6">
                {mailingListHeading}
              </h3>
              <p className="text-white pb-10 small:pb-0">{mailingListText}</p>
            </div>
            <MailingListForm
              theme="light"
              placeholder={mailingListPlaceholder}
              buttonText={mailingListButtonText}
            />
          </div>
        );
      })}
    </div>
  );
}
