export const cardsArray = [
  {
    imageSrc: "/services/initial_consultation.svg",
    title: "Initial Consultation",
    description:
      "A tailored session to align on your goals, brand identity, and LinkedIn objectives.",
  },
  {
    imageSrc: "/services/profile_optimization.svg",
    title: "Profile Optimisation",
    description:
      "Create a standout profile using best practices to highlight your strengths and build credibility",
  },
  {
    imageSrc: "/services/content_strategy.svg",
    title: "Content Strategy",
    description:
      "Plan a content calendar with posts designed to engage your audience and promote your brand",
  },
  {
    imageSrc: "/services/practical_training.svg",
    title: "Practical Training",
    description:
      "Receive hands-on LinkedIn training to confidently manage your profile and network",
  },
];

export default function Services() {
  return (
    <div id="services">
      <div className="hidden md:block">
        <img
          src="/services/services.png"
          alt="Services"
          style={{ width: "100vw" }}
        />
      </div>

      <div className="block md:hidden">
        <div
          className="bg-cover bg-center bg-no-repeat bg-[#E3F1FF] bg-blend-multiply"
          style={{
            backgroundImage: "url('/services/small_services.png')",
          }}
        >
          <div className="md:pt-20 md:px-16 xl:px-36">
            <div className="py-8 md:py-0 font-extrabold text-center text-color_003262 text-sm_main_heading md:text-main_heading bg-white md:bg-transparent">
              Customised Services
            </div>

            <div className="mt-20 relative px-8">
              <div className="border-l-2 border-dashed border-color_0166C8">
                <div className="absolute top-[-50px] right-2">
                  <img src="/services/small_linkedin.svg" width={130} />
                </div>

                {cardsArray?.map((item) => {
                  return (
                    <div className="mt-6">
                      <div className="flex flex-col gap-3 px-6 relative">
                        <div className="absolute top-2 left-[-13px]">
                          <img src="/services/ellipse.svg" width={25} />
                        </div>
                        <div className="flex justify-center">
                          <img src={item.imageSrc} width={55} />
                        </div>
                        <div className="text-[17px] font-semibold text-center">
                          {item.title}
                        </div>
                        <div className="font-light text-[15px] text-center">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pb-12"></div>
        </div>
      </div>
    </div>
  );
}
