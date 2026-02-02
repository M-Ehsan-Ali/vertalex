const Partner = () => {
  return (
    <div className="p-[16px_24px] xl:p-[70px_112px] flex flex-col xl:flex-row justify-between items-center mt-[40px] border border-[#D9DEDD] gap-[24px] xl:gap-[190px]">
      <p className="font-rubik text-[16px] font-medium leading-[24px] tracking-[-0.004em] text-left decoration-skip-ink text-[#262626]">
        Global partners that trusted us
      </p>
      <div className="flex gap-[40px] xl:gap-[190px]">
        <img
          src="/jrlgroup.jpeg"
          alt="jrlgroup"
          loading="lazy"
          className="w-[90px] h-[30px] xl:w-[120px] sm-h-[50px]"
        />
        <img
          src="/clearvue.jpeg"
          alt="clearvue"
          loading="lazy"
          className="w-[90px] h-[30px] xl:w-[120px] sm-h-[50px]"
        />
        <img
          src="/mcmullen.jpeg"
          alt="mcmullen"
          loading="lazy"
          className="w-[90px] h-[30px] xl:w-[120px] sm-h-[50px]"
        />
      </div>
    </div>
  );
};

export default Partner;
