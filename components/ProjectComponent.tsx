import { getCroppedImageSrc } from "@/sanity/sanity.query";
import type { projectType } from "@/types";
import { ImageSlider } from "./ImageSlider";

interface BgImage {
  alt: string;
  image: string;
  asset: {
    _ref: string;
  };
  crop: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
}

export default async function ProjectsComponent({
  project,
  bg,
}: {
  project: projectType;
  bg: BgImage;
}) {
  return (
    <div className="relative z-0 text-white">
      <div
        style={
          {
            "--image-url": `url(${getCroppedImageSrc(bg)})`,
          } as React.CSSProperties
        }
        className="relative bg-[image:var(--image-url)] bg-cover w-full h-auto group -z-10 px-[5%] py-[4rem]"
      >
        <div className="flex gap-[5rem] flex-wrap  pb-[2rem]">
          {project.categories.map((category, index) => {
            return (
              <h3 key={index} className="uppercase">
                {category}
              </h3>
            );
          })}
        </div>

        <h1 className="pb-[2.6rem]">{project.projectTitle}</h1>

        <ImageSlider
          before={project.beforeAfter.beforeImage.image}
          after={project.beforeAfter.afterImage.image}
        />
      </div>
    </div>
  );
}
