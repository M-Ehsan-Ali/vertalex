import Link from "next/link";
import KeyElement from "./KeyElement/page";
import MovingImages from "./MovingImages";
import News from "./News/page";
import OurProjects from "./OurProjects/page";
import Partner from "./Partners/page";
import Testimonials from "./Testimonials/page";
import WhyUs from "./WhyUs/page";

// moving image content

const images = [
  "/heroOne.jpeg",
  "heroTwo.jpeg",
  "heroThree.jpeg",
  "heroFour.jpeg",
  "heroFive.jpeg",
];
export default function Home() {
  return (
    <div id="home">
      {/* Hero Section start */}
      <div className="flex flex-col-reverse xl:flex-row w-full p-[0px_18px_0px_18px] xl:p-[0px] gap-[14px] xl:gap-[0px]">
        <div className="w-full xl:w-[60%] pt-[0px] pl-[0px] pb-[32px] xl:pt-[86px] xl:pl-[112px] xl:pb-[120px]">
          <div className="flex gap-[8px]">
            <img src="/powerIcon.svg" loading="lazy" alt="icon" />
            <p className="font-rubik text-[14px] font-medium leading-5 tracking-tight text-left decoration-skip-ink">
              Powering Tomorrow
            </p>
          </div>
          <p className="font-raleway text-[39px] xl:text-[96px] font-normal leading-[42px] xl:leading-[90px] tracking-[-0.05em] text-center xl:text-left decoration-skip-ink mt-[24px]">
          Cost Effective & Compliant Aluminium Extrusions
          </p>
          <p className="xl:w-[592px] font-rubik text-[10px] xl:text-[18px] font-normal leading-[26px] tracking-[-0.004em] text-center xl:text-left decoration-skip-ink mt-[32px]">
            Crofton MEA is a UAE based consulting firm that delivers bespoke and{" "}
            catalogue aluminium extrusions and finishes of the highest quality
            at competitive prices internationally.
          </p>
          {/* <div className="flex gap-[16px] mt-[40px] justify-center xl:justify-start">
            <button className="bg-[#445AE0] p-[8px_18px] xl:p-[16px_24px] gap-[10px] rounded-[200px] font-rubik text-[10px] xl:text-[18px] font-medium leading-[24px] tracking-[-0.004em] text-lef text-white">
              See our solutions
            </button>
            <Link
              href={"#contact-us"}
              className="border border-[#64ce5b] p-[8px_18px] xl:p-[16px_24px] rounded-full font-rubik font-medium text-[10px] xl:text-[18px] leading-6 tracking-tight text-[#1d1f1e] decoration-skip-ink"
            >
              Get in touch
            </Link>
          </div> */}
        </div>
        <div className="w-full h-[320px] sm:h-[600px] md:h-[760px] xl:h-auto xl:w-[40%] bg-[#64CE5B] p-[12px] relative">
          <MovingImages images={images} interval={4000} />
        </div>
      </div>
      {/* Hero section end */}

      {/* Partner section start */}
      <Partner />
      {/* Partner section end */}

      {/* Why us Section start */}
      <WhyUs />
      {/* Why us Section end */}

      {/* Key Element Section start */}
      <KeyElement />
      {/* Key Element Section end */}

      {/* Join The Green moment Section start */}
      <div className="flex bg-[#64CE5B] justify-between">
        <div className="p-[36px_12px] xl:p-[72px_112px]">
          <div>
            <p className="font-raleway test-[14px] xl:text-[78px] font-normal xl:leading-[68px] tracking-[-0.03em] text-left no-underline tex-[#262626]">
              Join the green <br /> movement
            </p>
            <p className="font-rubik text-[8px] xl:text-[18px] font-normal leading-[11px] xl:leading-[26px] tracking-[-0.004em] text-left no-underline text-white mt-[24px]">
              Through sustainable aluminium production, we are shaping a
              cleaner,
              <br /> greener, and healthier planet.
            </p>
            <Link href={"#contact-us"}>
              <button className="bg-[#445ae0] rounded-[200px] p-[6px_24px] xl:p-[16px_24px] font-figtree text-[11px] xl:text-[18px] font-medium leading-[24px] tracking-[-0.004em] text-left no-underline text-white mt-[40px]">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
        <img
          src="/JoinGreen.png"
          alt="green"
          loading="lazy"
          className="w-[45%] xl:h-[452px]"
        />
      </div>
      {/* Join The Green moment Section end */}

      {/* Our Project Section start */}
      <OurProjects />
      {/* Our Project Section end */}
      <img
        src="/aboveNews.png"
        alt="png"
        loading="lazy"
        className="w-[50%] xl:w-auto mt-[76px] mb-[54px] xl:mt-[121px] xl:mb-[100px]"
      />

      {/* News section start */}
      <News />
      {/* News Section end */}

      {/* Testimonial Section start */}
      <Testimonials />
      {/* Testimonial Section end */}

      {/* Source for Aluminium Section start */}
      <div className="p-[18px_50px] xl:p-[64px_96px] bg-[#54ce5b] mt-[56px] xl:mt-[170px]">
        <div className="flex flex-col gap-[24px] xl:flex-row justify-between items-center">
          <p className="xl:w-[540px] font-Raleway text-[16px] xl:text-[62px] font-medium xl:leading-[68px] tracking-[-0.03em] text-left no-underline text-white">
            Your Source For Aluminum Updates
          </p>
          <div className="flex gap-[8px]">
            <input
              type="text"
              className="xl:w-[330px] shadow-[0px_1px_2px_0px_#022C2214] p-[10px_18px] xl:p-[16px_20px] rounded-[200px] font-figtree text-[12px] xl:text-base font-normal xl:leading-6 tracking-tighter text-left text-[#646a69]"
              placeholder="Your e-mail..."
            />
            <button className="whitespace-nowrap bg-[#445ae0] p-[8px_16px] xl:p-[16px_32px] rounded-[200px] font-figtree text-[13px] xl:text-lg font-medium xl:leading-6 tracking-tighter text-left text-white cursor-pointer">
              Get in touch
            </button>
          </div>
        </div>
      </div>
      {/* Source for Aluminium Section end */}
    </div>
  );
}
