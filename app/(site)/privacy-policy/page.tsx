import { getPoliciesPageData } from "@/sanity/sanity.query";
import { policiesPageType } from "@/types";
import { PortableText } from "@portabletext/react";
import "./privacy.css";

export default async function privacyPolicy() {
  const data: policiesPageType[] = await getPoliciesPageData();

  return (
    <main className="mt-[10rem] px-[5%]">
      <section className="max-w-[1120px] mx-auto">
        <h1 className="pt-[4rem] text-center">{data[0].policies.pageTitle}</h1>
        <div className="rich-text-container pt-[4rem]">
          <PortableText value={data[0].policies.policies} />
        </div>
      </section>
    </main>
  );
}
