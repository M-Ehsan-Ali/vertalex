import { fetchGraphQL } from "@/utils/fetchGraphQL";
import Content from "./content";

interface Testimonial {
  title: string;
  designation: string;
  review: string;
  logo: {
    mediaItemUrl: string;
  };
}

export default async function Testimonials() {
  const query = `
   query GetTestimonials {
  testimonials {
    nodes {
      testimonial {
        designation
        review
        name
        logo {
          id
          sourceUrl
        }
      }
    }
  }
}
  `;

  let testimonials: Testimonial[] = [];
  try {
    const data = await fetchGraphQL(query);
    testimonials = data?.testimonials?.nodes.map((node: any) => ({
      title: node.testimonial.name,
      designation: node.testimonial.designation,
      review: node.testimonial.review,
      logo: node.testimonial.logo,
    }));
  } catch (error) {
    console.error("Error fetching testimonials:", error);
  }

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-16 text-xl font-semibold">
        No testimonials available at the moment.
      </div>
    );
  }

  return (
    <div id="testimonials">
      <div className="py-6 md:py-12">
        <div className="font-figtree text-[62px] font-normal leading-[68px] tracking-[-0.03em] text-center no-underline text-[#445ae0]">
          What our customers say
        </div>
        <div className="mt-[24px] font-figtree text-[18px] font-normal leading-[26px] tracking-[-0.004em] text-center no-underline text-[#646a69]">
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
