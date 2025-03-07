const WhyUs = () => {
  return (
    <div
      id={"why-us"}
      className="relative pl-[16px] xl:pl-[52px] pb-[66px] xl:pb-[70px]"
      style={{
        backgroundImage: `url('/whyUsMain.png')`,
      }}
    >
      <img
        src="/whyUsTop.png"
        alt="Top left"
        loading="lazy"
        className="w-[170px] xl:h-auto xl:w-auto"
      />
      <p className="text-white font-raleway text-[24px] xl:text-[119px] font-bold leading-[90px] tracking-[-0.05em] text-left no-underline mt-[92px] ml-[30px]">
        Why us?
      </p>
      <p className="w-[70%] xl:w-[57%] bg-[#64ce5b] rounded-[10px] font-rubik text-[7px] xl:text-[20px] font-normal leading-[8px] xl:leading-[33px] tracking-[-0.05em] text-left no-underline p-[24px_32px] text-white mt-[20px] xl:mt-[92px]">
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
        loading="lazy"
        className="absolute right-[0px] w-[170px] xl:w-auto bottom-[-25px] xl:bottom-[-50px]"
      />
    </div>
  );
};

export default WhyUs;
