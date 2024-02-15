import { BiQuestionMark } from "react-icons/bi";

const faqs = {
  name: "faq",
  title: "FAQs",
  description: "Faq Schema",
  type: "document",
  icon: BiQuestionMark,
  fields: [
    {
      name: "question",
      title: "Question",
      type: "text",
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
    },
  ],
};

export default faqs;
