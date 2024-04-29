import { getTestimonials } from "@/sanity/sanity.query";
import type { testimonialsType } from "@/types";
import { TestimonialSwiper } from "./swiper/Swipers";
import { SwiperArrowNext, SwiperArrowPrev } from "./common/SwiperArrows";

export default function Testimonials({
  testimonials,
}: {
  testimonials: testimonialsType[];
}) {
  // const testimonials: testimonialsType[] = await getTestimonials();

  return (
    <section className="mt-20">
      <div className="small:px-layout-small">
        <div className="relative text-theme-dark bg-[#f8f8f8] w-full pt-[3.5rem] pb-40 px-[5%]  xsmall:pt-[5rem] xsmall:pb-32 medium:max-w-[1120px] medium:mx-auto">
          <h2 className="w-[95%]">
            {testimonials[0].testimonialsSection.testimonialsSectionTitle}
          </h2>

          <div className="pt-10 w-full xsmall:w-[75%] small:max-w-[615px]">
            <TestimonialSwiper data={testimonials} />
          </div>
          <div className="absolute invisible bottom-10 left-0 px-[5%] xsmall:px-[50px] w-full h-full z-20 flex justify-between items-end">
            <div className="hidden">
              {/* put in for flex to act differently. may be able to remove */}
            </div>
            <div className="testimonial-pagination visible h-10 w-[40%] z-30 mb-[1.4rem] flex gap-3 items-center xsmall:mb-0 xsmall:absolute xsmall:right-0 xsmall:bottom-0 xsmall:pl-[5%] xsmall:w-fit xsmall:justify-end xsmall:-ml-[5%] xsmall:mr-[5%] small:justify-center small:mx-auto small:left-0 small:mr-[13px]"></div>
            {/* reference for projects navigation - added h-full to parent absolute container. then see classes used to position */}
            <div className="flex visible gap-4 xsmall:-rotate-90 xsmall:absolute xsmall:top-1/2 xsmall:right-[2%] small:right-[7%] small:rotate-0">
              <SwiperArrowPrev swiperDivName="prev-testimonial" />
              <SwiperArrowNext swiperDivName="next-testimonial" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
