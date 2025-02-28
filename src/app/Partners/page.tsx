const Partner = () => {
  return (
    <div className="p-[16px_24px] sm:p-[70px_112px] flex flex-col sm:flex-row justify-between items-center mt-[40px] border border-[#D9DEDD] gap-[24px] sm:gap-[190px]">
      <p className="font-rubik text-[16px] font-medium leading-[24px] tracking-[-0.004em] text-left decoration-skip-ink text-[#262626]">
        Global partners that trusted us
      </p>
      <div className="flex gap-[40px] sm:gap-[190px]">
        <img
          src="/paradise.png"
          alt="paradise"
          className="w-[90px] h-[30px] sm:w-[120px] sm-h-[50px]"
        />
        <img
          src="/aspen.png"
          alt="aspen"
          className="w-[90px] h-[30px] sm:w-[120px] sm-h-[50px]"
        />
        <img
          src="/octagon.png"
          alt="octagon"
          className="w-[90px] h-[30px] sm:w-[120px] sm-h-[50px]"
        />
      </div>
    </div>
  );
};

export default Partner;
