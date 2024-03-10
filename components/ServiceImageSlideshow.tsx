import { getServiceSlideshowImages } from "@/sanity/sanity.query";
import { servicesSlideshow } from "@/types";

export default async function ServiceImageSlideshow({}) {
  const serviceSlideshow: servicesSlideshow[] =
    await getServiceSlideshowImages();

  console.log(serviceSlideshow, "SLIDESHOW IMAGES***");

  return (
    <div>
      <h1 className="w-[500px] h-[300px] bg-red-200 flex justify-center items-center mx-auto p-8 text-center">
        SLIDESHOW IMAGES TO GO HERE
      </h1>
    </div>
  );
}
