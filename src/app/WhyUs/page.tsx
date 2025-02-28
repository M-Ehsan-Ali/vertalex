const WhyUs = () => {
  return (
    <div
      id={"why-us"}
      className="relative pl-[16px] sm:pl-[52px] pb-[66px] sm:pb-[70px]"
      style={{
        backgroundImage: `url('/whyUsMain.png')`,
      }}
    >
      <img
        src="/whyUsTop.png"
        alt="Top left"
        className="w-[170px] sm:h-auto sm:w-auto"
      />
      <p className="text-white font-raleway text-[24px] sm:text-[119px] font-bold leading-[90px] tracking-[-0.05em] text-left no-underline mt-[92px] ml-[30px]">
        Why us?
      </p>
      <p className="w-[70%] sm:w-[57%] bg-[#64ce5b] rounded-[10px] font-rubik text-[7px] sm:text-[20px] font-normal leading-[8px] sm:leading-[33px] tracking-[-0.05em] text-left no-underline p-[24px_32px] text-white mt-[20px] sm:mt-[92px]">
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
        className="absolute right-[0px] w-[170px] sm:w-auto bottom-[-25px] sm:bottom-[-50px]"
      />
    </div>
  );
};

export default WhyUs;
