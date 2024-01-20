import Image from "next/image";
import bg from "../app/assets/images/bg-image.png";
import texLeft from "../app/assets/images/tex-left.png";
import texRight from "../app/assets/images/tex-right.png";
import texTop from "../app/assets/images/tex-top.png";
import texBottom from "../app/assets/images/tex-bottom.png";

const TotBackgrounds = () => {
  return (
    <div className="relative z-0 bg-and-textures w-full h-full top-0 left-0">
      <div className="-z-10 absolute top-0 left-0 w-full h-full">
        <Image
          priority
          src={bg}
          fill
          alt="background colour image"
          className="object-cover object-center"
        />
      </div>

      {/* sm-textures */}
      <Image
        priority
        src={texTop}
        alt="texture"
        className="z-10 absolute top-0 left-0 w-full h-auto block small:hidden"
      />
      <Image
        priority
        src={texTop}
        alt="texture"
        className="z-10 absolute top-0 left-0 w-full h-auto block small:hidden"
      />
      <Image
        priority
        src={texBottom}
        alt="texture"
        className="z-10 absolute bottom-0 left-0 w-full h-auto block small:hidden"
      />
      <Image
        priority
        src={texBottom}
        alt="texture"
        className="z-10 absolute bottom-0 left-0 w-full h-auto block small:hidden"
      />

      {/* xl-textures */}
      <Image
        priority
        src={texLeft}
        alt="texture"
        className="z-10 absolute top-0 left-0 h-full w-auto hidden small:block"
      />
      <Image
        priority
        src={texLeft}
        alt="texture"
        className="z-10 absolute top-0 left-0 h-full w-auto hidden small:block"
      />
      <Image
        priority
        src={texRight}
        alt="texture"
        className="z-10 absolute top-0 right-0 h-full w-auto hidden small:block"
      />
      <Image
        priority
        src={texRight}
        alt="texture"
        className="z-10 absolute top-0 right-0 h-full w-auto hidden small:block"
      />
    </div>
  );
};

export default TotBackgrounds;
