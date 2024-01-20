import { getTestimonials } from "@/sanity/sanity.query";
import type { testimonialsType } from "@/types";
import { TestimonialSwiper } from "./swiper/Swipers";
import { SwiperArrowNext, SwiperArrowPrev } from "./common/SwiperArrows";

export default async function Testimonials() {
  const testimonials: testimonialsType[] = await getTestimonials();

  return (
    <section className="mt-20">
      <div>
        {testimonials.map((data) => {
          return (
            <div
              key={data._id}
              className="relative text-theme-dark bg-[#f8f8f8] w-full pt-12 pb-40 px-[5%]  xsmall:pb-20 small:w-[75%] max-w-[1120px] small:mx-auto"
            >
              <h2 className="xsmall:w-[95%]">
                {data.testimonialsSection.testimonialsSectionTitle}
              </h2>

              <div className="pt-10 w-full xsmall:w-[75%]">
                <TestimonialSwiper data={testimonials} />
              </div>
              <div className="absolute bottom-10 left-0 px-[50px] w-full h-full z-20 flex justify-between items-end">
                <div className="hidden">
                  {/* put in for flex to act differently. may be able to remove */}
                </div>
                <div className="testimonial-pagination h-10 w-[40%] z-30 flex gap-3 items-center xsmall:absolute xsmall:right-0 xsmall:bottom-0 xsmall:w-fit xsmall:mr-[5%] small:mx-auto small:left-0"></div>
                {/* reference for projects navigation - added h-full to parent absolute container. then see classes used to position */}
                <div className="flex gap-4 xsmall:-rotate-90 xsmall:absolute xsmall:top-1/2 xsmall:right-0 small:rotate-0 small:pr-[5%]">
                  <SwiperArrowPrev swiperDivName="prev-testimonial" />
                  <SwiperArrowNext swiperDivName="next-testimonial" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
