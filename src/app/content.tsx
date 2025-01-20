import Testimonials from "./Testimonials/page";

export const ourProjects = [
  {
    imageSrc: "/consortPalace.png",
    title: "CONSORT PLACE  CANARY WHARF, UK",
    color: "64ce5b",
    description:
      "A three tower mixed-use development in the heart of Canary Wharf comprising buildings of 65, 35 & 20 storeys. Crofton MEA supplied approx. 500 MT across 50 dies with thermal breaks, powder coating, anodizing and mill finish for the facades of these buildings.",
  },
  {
    imageSrc: "/projectOctagon.png",
    title: "OCTAGON BIRMINGHAM, UK",
    color: "ffffff",
    description:
      "A 49 storey landmark residential tower in Birmingham city, UK. We are currently supplying 32 dies, with thermal breaks, powder coating, anodizing and mill finish for the facade of this building.",
  },
  {
    imageSrc: "/construction.png",
    title: "CONSTRUCTION & INDUSTRIAL",
    color: "445ae0",
    description:
      "A three tower mixed-use development in the heart of Canary Wharf comprising buildings of 65, 35 & 20 storeys. Crofton MEA supplied approx. 500 MT across 50 dies with thermal breaks, powder coating, anodizing and mill finish for the facades of these buildings.",
  },
];

export const ourNews = [
  {
    imageSrc: "/newsInnovation.png",
    userName: "Wade Warren",
    userImage: "/userImage.png",
    readTime: "7 min read",
    description: "Aluminum: A Spark of Innovation for Sustainable Solutions.",
  },
  {
    imageSrc: "/newsInnovation.png",
    userName: "Jenny Wilson",
    userImage: "/userImage.png",
    readTime: "12 min read",
    description: "Aluminum: A Spark of Innovation for Sustainable Solutions.",
  },
  {
    imageSrc: "/newsInnovation.png",
    userName: "Leslie Alexander",
    userImage: "/userImage.png",
    readTime: "5 min read",
    description: "Aluminum: A Spark of Innovation for Sustainable Solutions.",
  },
];

export default function Home() {
  return (
    <div id="home">
      {/* Hero Section start */}
      <div className="flex flex-col-reverse sm:flex-row p-[0px_18px_0px_18px] sm:p-[0px]">
        <div className="w-full pt-[0px] pl-[18px] pb-[32px] sm:w-[60%] sm:pt-[86px] sm:pl-[112px] sm:pb-[120px]">
          <div className="flex gap-[8px]">
            <img src="/powerIcon.svg" alt="icon" />
            <p className="font-rubik text-[14px] font-medium leading-5 tracking-tight text-left decoration-skip-ink">
              Powering Tomorrow
            </p>
          </div>
          <p className="font-raleway text-[96px] font-normal leading-[90px] tracking-[-0.05em] text-left decoration-skip-ink mt-[24px]">
            Cost Effective <br /> & CO2 Compliant
          </p>
          <p className="font-rubik text-[18px] font-normal leading-[26px] tracking-[-0.004em] text-left decoration-skip-ink mt-[32px]">
            Crofton MEA is a UAE based consulting firm that delivers bespoke and{" "}
            <br />
            catalogue aluminium extrusions and finishes of the highest quality
            at <br /> competitive prices internationally.
          </p>
          <div className="flex gap-[16px] mt-[40px]">
            <button className="bg-[#445AE0] p-[16px_24px] gap-[10px] rounded-[200px] font-rubik text-[18px] font-medium leading-[24px] tracking-[-0.004em] text-lef text-white">
              See our solutions
            </button>
            <button className="border border-[#64ce5b] p-[16px_24px] rounded-full font-rubik font-medium text-[16px] leading-6 tracking-tight text-[#1d1f1e] decoration-skip-ink">
              Get in touch
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[40%] bg-[#64CE5B] sm:p-[12px] relative">
          <img
            src="/heroImage.png"
            alt="hero"
            className="w-full rounded-[50%]"
          />
          <div className="w-fit rounded rounded-[12px] p-[8px] bg-white absolute bottom-[45px] left-[-45px] border border-[#f5f4f4] shadow-[0px_24px_32px_-12px_#364A363D]">
            <div className="flex gap-[18px] items-center">
              <img src="/aluminiumIcon.png" alt="Aluminium" />
              <p className="font-raleway text-[24px] font-black leading-[20px] tracking-[-0.004em] text-left decoration-skip-ink">
                LME Aluminium
              </p>
            </div>
            <div className="bg-[#f5f4f4] p-[12px]">
              <div className="bg-[#ffffff] flex p-[12px] gap-[123px]">
                <p className="font-rubik text-[34px] fon 9 min readt-medium leading-[20px] tracking-[-0.004em] text-left decoration-skip-ink">
                  2551.50
                </p>
                <p className="p-[2px_8px] bg-[#d6f1cf] rounded-[96px] font-figtree text-[12px] font-medium leading-[16px] text-center decoration-skip-ink">
                  0.02%
                </p>
              </div>
              <p className="font-rubik text-[12px] font-medium leading-[16px] decoration-skip-ink pt-[12px] text-[#192117]">
                3-month Closing Price (day-delayed)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Hero section end */}

      {/* Partner section start */}
      <div className="p-[70px_112px] flex justify-between items-center mt-[40px] border border-[#D9DEDD]">
        <p className="font-rubik text-[16px] font-medium leading-[24px] tracking-[-0.004em] text-left decoration-skip-ink text-[#262626]">
          Global partners that trusted us
        </p>
        <img src="/paradise.png" alt="paradise" />
        <img src="/aspen.png" alt="aspen" />
        <img src="/octagon.png" alt="octagon" />
      </div>
      {/* Partner section end */}

      {/* Why us Section start */}
      <div
        className="relative pl-[52px] pb-[70px]"
        style={{
          backgroundImage: `url('/whyUsMain.png')`,
        }}
      >
        <img src="/whyUsTop.png" alt="Top left" />
        <p className="text-white font-raleway text-[119px] font-bold leading-[90px] tracking-[-0.05em] text-left no-underline mt-[92px] ml-[30px]">
          Why us?
        </p>
        <p className="w-[57%] bg-[#64ce5b] rounded-[10px] font-rubik text-[20px] font-normal leading-[33px] tracking-[-0.05em] text-left no-underline p-[24px_32px] text-white mt-[92px]">
          Our aluminium products boast exceptional qualities, including TUV
          Verified Carbon Footprint with low-carbon billets. They are ISO
          certified (9001, 14001, and 45001) and meet the highest standards as a
          Qualicoat Seaside licensed applicator and Qualanod licensed provider.
          Additionally, they are CE certified, FPC certified, and Technoform
          Thermal Break Assembly Quality Certified, ensuring unmatched
          performance—all at highly competitive prices.
        </p>
        <img
          src="/whyUsBottom.png"
          alt="Top left"
          className="absolute right-[0px]"
        />
      </div>
      {/* Why us Section end */}

      {/* Key Element Section start */}
      <div className="mt-[194px] flex justify-center pb-[116px]">
        <div className="flex flex-col items-center">
          <div className="w-fit p-[7px_56px] rounded-[10px] bg-[#445ae0]">
            <p className="font-raleway text-[70px] font-normal leading-[90px] tracking-[-0.05em] text-left no-underline text-white">
              Key Elements
            </p>
          </div>
          <div>
            <div className="flex gap-[360px] mt-[90px]">
              <div className="flex flex-col items-center w-[383px]">
                <img src="/TUV.svg" alt="TUV" />
                <p className="font-rubik text-[24px] font-normal leading-[90px] tracking-[-0.05em] no-underline">
                  TUV Verified Carbon Footprint
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/qualanod.svg" alt="qualanod" />
                <p className="font-rubik text-[24px] font-normal leading-[90px] tracking-[-0.05em] no-underline">
                  Qualanod Licenced CE Certified
                </p>
              </div>
            </div>
            <div className="flex gap-[360px] ">
              <div className="flex flex-col items-center w-[383px]">
                <img src="/billets.svg" alt="billets" />
                <p className="font-rubik text-[24px] font-normal leading-[90px] tracking-[-0.05em] no-underline">
                  Low Carbon Billets
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/FPC.svg" alt="FPC" />
                <p className="font-rubik text-[24px] font-normal tracking-[-0.05em] no-underline text-center">
                  FPC Certified Technoform Thermal
                  <br /> Break Assembly Quality Certified
                </p>
              </div>
            </div>
            <div className="flex gap-[360px] ">
              <div className="flex flex-col items-center w-[383px]">
                <img src="/ISO.svg" alt="ISO" />
                <p className="font-rubik text-[24px] font-normal leading-[90px] tracking-[-0.05em] no-underline">
                  ISO 9001/14001/45001 Certified
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/qualicoat.svg" alt="qualicoat" />
                <p className="font-rubik text-[24px] font-normal leading-[90px] tracking-[-0.05em] no-underline text-center">
                  Qualicoat Seaside Licenced Applicator
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="/lowPrice.svg" alt="lowPrice" />
              <p className="font-rubik text-[24px] font-normal leading-[90px] tracking-[-0.05em] no-underline text-center">
                Low Prices
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Key Element Section end */}

      {/* Join The Green moment Section start */}
      <div className="flex bg-[#64CE5B] justify-between">
        <div className="p-[72px_112px]">
          <div>
            <p className="font-raleway text-[78px] font-normal leading-[68px] tracking-[-0.03em] text-left no-underline tex-[#262626]">
              Join the green <br /> movement
            </p>
            <p className="font-rubik text-[18px] font-normal leading-[26px] tracking-[-0.004em] text-left no-underline text-white mt-[24px]">
              Through sustainable aluminium production, we are shaping a
              cleaner,
              <br /> greener, and healthier planet.
            </p>
            <button className="bg-[#445ae0] rounded-[200px] p-[16px_24px] font-figtree text-[18px] font-medium leading-[24px] tracking-[-0.004em] text-left no-underline text-white mt-[40px]">
              Get in touch
            </button>
          </div>
        </div>
        <img src="/JoinGreen.png" alt="green" className="w-[45%] h-[452px]" />
      </div>
      {/* Join The Green moment Section end */}

      {/* Our Project Section start */}
      <div className="flex flex-col items-center mt-[175px]">
        <div className="w-fit p-[7px_62px] rounded-[10px] bg-[#64ce5b]">
          <p className="font-raleway text-[70px] font-normal leading-[90px] tracking-[-0.05em] text-left no-underline text-white">
            Our Projects
          </p>
        </div>
        <div className="mt-[165px] flex gap-[56px]">
          {ourProjects?.map((item) => (
            <div className="bg-[#d6f1cf] w-[380px] rounded-[20px]">
              <div className="relative">
                <img
                  src={item.imageSrc}
                  alt={item.imageSrc}
                  className="w-[380px] h-[375px]"
                />
                <div
                  className="w-[48px] h-[100px] rounded-[20px] absolute top-[32px] left-[24px]"
                  style={{
                    background: item.color ? `#${item.color}` : "#FFFFFF",
                  }}
                ></div>
              </div>

              <div className="p-[32px]">
                <p className="font-raleway text-[22px] font-bold leading-[30px] text-left no-underline w-[249px]">
                  {item.title}
                </p>
                <p className="mt-[12px] font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-[30px] text-left no-underline text-[#727272]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Our Project Section end */}
      <img src="/aboveNews.png" alt="png" className="mt-[121px] mb-[100px]" />

      {/* New section start */}
      <div className="px-[112px]">
        <div className="flex justify-between items-center">
          <p className="font-raleway text-[62px] font-medium leading-[68px] tracking-[-0.03em] text-left no-underline">
            News
          </p>
          <button className="p-[16px_24px] rounded-[200px] border border-[#64ce5b] flex items-center gap-[8px] font-figtree text-[18px] font-medium leading-[24px] tracking-[-0.004em] text-left no-underline">
            See All <img src={`/tailIcon.svg`} alt="Tail" />
          </button>
        </div>
        <div className="mt-[88px] flex justify-between gap-[32px]">
          <div className="w-[60%]">
            <img src="/newsMainImage.png" alt="News" className="w-full" />
            <div className="flex gap-[8px] mt-[32px]">
              <div className="w-fit font-figtree border border-[D9dedd] rounded-[20px] p-[2px_8px] text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-center no-underline">
                Aluminium
              </div>
              <div className="w-fit font-figtree border border-[D9dedd] rounded-[20px] p-[2px_8px] text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-center no-underline">
                Solutions
              </div>
            </div>
            <p className="font-roboto text-[45px] font-normal leading-[52px] text-[#1d1f1e] text-left no-underline mt-[24px]">
              How green aluminium is transforming the metal industry
            </p>
            <p className="font-figtree text-[18px] font-normal leading-[26px] tracking-[-0.004em] text-left no-underline text-[#646a69] mt-[24px]">
              Aluminum is revolutionizing the way we build and create. In this
              blog post, we'll explore the remarkable potential of aluminum
              technology, its environmental advantages, and how you can harness
              this sustainable material for a stronger, more efficient future.
            </p>
            <div className="flex gap-[16px] items-center mt-[24px]">
              <img
                src="/userImage.png"
                alt="user"
                className="w-[40px] h-[40px] rounded-[50%]"
              />
              <p className="font-figtree text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-left no-underline">
                Leslie Alexander
              </p>
              <div className="w-[4px] h-[4px] bg-[#929c9a]"></div>
              <p className="font-figtree text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-left no-underline">
                9 min read
              </p>
            </div>
          </div>
          <div className="w-[41%] flex flex-col gap-[32px]">
            {ourNews?.map((item) => (
              <div className="flex gap-[32px]">
                <img src={item.imageSrc} alt={item.imageSrc} />
                <div>
                  <p className="font-figtree text-[24px] font-medium leading-[36px] tracking-[-0.01em] text-left no-underline">
                    {item.description}
                  </p>
                  <div className="flex gap-[16px] items-center mt-[24px]">
                    <img
                      src={item.userImage}
                      alt={item.userImage}
                      className="w-[32px] h-[32px] rounded-[50%]"
                    />
                    <p className="font-figtree text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-left no-underline">
                      {item.userName}
                    </p>
                    <div className="w-[4px] h-[4px] bg-[#929c9a]"></div>
                    <p className="font-figtree text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-left no-underline">
                      {item.readTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* New Section end */}

      {/* Testimonial Section start */}
      <Testimonials />
      {/* Testimonial Section end */}

      {/* Source for Aluminium Section start */}
      <div className="p-[64px_96px] bg-[#54ce5b] mt-[170px]">
        <div className="flex justify-between items-center">
          <p className="font-Raleway text-[62px] font-medium leading-[68px] tracking-[-0.03em] text-left no-underline text-white">
            Your Source For
            <br /> Aluminum Updates
          </p>
          <div className="flex gap-[8px]">
            <input
              type="text"
              className="w-[330px] shadow-[0px_1px_2px_0px_#022C2214] p-[16px_20px] rounded-[200px] font-figtree text-base font-normal leading-6 tracking-tighter text-left text-[#646a69]"
              placeholder="Your e-mail..."
            />
            <button className="bg-[#445ae0] p-[16px_32px] rounded-[200px] font-figtree text-lg font-medium leading-6 tracking-tighter text-left text-white cursor-pointer">
              Get in touch
            </button>
          </div>
        </div>
      </div>
      {/* Source for Aluminium Section end */}
    </div>
  );
}
