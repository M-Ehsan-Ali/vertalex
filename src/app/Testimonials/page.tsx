import { getTestimonials } from "@/data";
import Content from "./content";

interface Testimonial {
  title: string;
  designation: string;
  review: string;
  logo: { mediaItemUrl?: string; sourceUrl?: string };
}

export default async function Testimonials() {
  const data = getTestimonials();
  const testimonials: Testimonial[] = (data?.testimonials?.nodes ?? []).map((node: any) => ({
    title: node.testimonial.name,
    designation: node.testimonial.designation,
    review: node.testimonial.review,
    logo: {
      mediaItemUrl: node.testimonial.logo?.sourceUrl,
      sourceUrl: node.testimonial.logo?.sourceUrl,
    },
  }));

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-16 text-xl font-semibold mt-[56px] xl:mt-[0px]">
        No testimonials available at the moment.
      </div>
    );
  }

  return (
    <div id="testimonials" className="mt-[56px] xl:mt-[0px]">
      <div className="py-6 md:py-12">
        <div className="font-figtree text-[28px] xl:text-[62px] font-normal leading-[68px] tracking-[-0.03em] text-center no-underline text-[#445ae0]">
          What our customers say
        </div>
        <div className="xl:mt-[24px] font-figtree text-[12px] xl:text-[18px] font-normal leading-[26px] tracking-[-0.004em] text-center no-underline text-[#646a69]">
          Thousands of satisfied customers have transformed their aluminum
          usage.
        </div>
      </div>

      {/* Pass testimonials to Content */}
      <Content testimonials={testimonials} />
      {/* <ContactForm /> */}
    </div>
  );
}
