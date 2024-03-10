import { getCroppedImageSrc } from "@/sanity/sanity.query";
import { SanityImageQueryResult } from "@/types";
import Image from "next/image";

export default async function ImageCrop({
  image,
}: {
  image: SanityImageQueryResult;
}) {
  return (
    // <div className="relative play-image">
    //   <div className="inner-border-container absolute">
    //     <div className="inner-border-element"></div>
    //   </div>
    //   <div className="aspect-[35/37] xsmall:aspect-[70/45]">
    //     <img
    //       className="object-cover w-full h-full saturate-0"
    //       src={getCroppedImageSrc(image)}
    //     />
    //   </div>
    // </div>
    // <Image src={image?.asset?._ref} alt="some text" />
    <></>
  );
}
