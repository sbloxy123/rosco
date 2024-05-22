import { getPoliciesPageData } from "@/sanity/sanity.query";
import { policiesPageType } from "@/types";
import { PortableText } from "@portabletext/react";
import "./privacy.css";

export default async function privacyPolicy() {
  const data: policiesPageType[] = await getPoliciesPageData();

  return (
    <main className="mt-[10rem] max-w-[1120px] mx-auto px-[5%] small:px-layout-small">
      <section className="max-w-[1120px] mx-auto pt-[4rem] small:pt-[7rem]">
        <h1 className="text-center xsmall:max-w-[80%] mx-auto">
          {data[0].policies.pageTitle}
        </h1>
        <div className="rich-text-container pt-[4rem]">
          <PortableText value={data[0].policies.policies} />
        </div>
      </section>
    </main>
  );
}
