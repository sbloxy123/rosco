"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import FaqIntro from "../FaqIntro";
import { faqPageType } from "@/types";

export default function FaqIntroPreview({
  initial,
  originalContent,
}: {
  initial: QueryResponseInitial<faqPageType[]>;
  originalContent: any;
}) {
  const { data } = useQuery<faqPageType[] | null>(
    originalContent,
    {},
    { initial }
  );

  if (data) {
    const messageWithLineBreaks = data[0]?.FaqPage.introMessage.replace(
      /\\n/g,
      "\n"
    );
    const messageWithoutLineBreaks = data[0]?.FaqPage.introMessage.replace(
      /\\n/g,
      " "
    );

    return (
      <div>
        <FaqIntro
          introTitle={data[0].FaqPage.introTitle}
          messageWithLineBreaks={messageWithLineBreaks}
          messageWithoutLineBreaks={messageWithoutLineBreaks}
        />
      </div>
    );
  } else {
    return <div className="bg-red-100">No posts found</div>;
  }
}
