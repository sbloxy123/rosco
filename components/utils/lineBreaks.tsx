export const removelineBreakCodeFromHTML = (text: string) => {
  let textWithoutLineBreaks;

  textWithoutLineBreaks = text;
  if (
    typeof textWithoutLineBreaks === "string" &&
    textWithoutLineBreaks.includes("\\n")
  ) {
    textWithoutLineBreaks = textWithoutLineBreaks.replace(/\\n/g, "");
  }
  return textWithoutLineBreaks;
};
