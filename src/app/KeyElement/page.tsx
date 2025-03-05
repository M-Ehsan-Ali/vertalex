const KeyElement = () => {
  return (
    <div className="mt-[65px] xl:mt-[194px] flex justify-center pb-[52px] xl:pb-[116px]">
      <div className="flex flex-col items-center">
        <div className="w-fit p-[8px_12px] xl:p-[7px_56px] rounded-[10px] bg-[#445ae0]">
          <p className="font-raleway text-[13px] xl:text-[70px] font-normal xl:leading-[90px] tracking-[-0.05em] text-left no-underline text-white">
            Key Elements
          </p>
        </div>
        <div>
          <div className="flex gap-[38px] xl:gap-[360px] mt-[36px] xl:mt-[90px] justify-between xl:justify-unset">
            <div className="flex flex-col items-center xl:w-[383px]">
              <img src="/TUV.svg" alt="TUV" className="w-[46px] xl:w-auto" />
              <p className="font-rubik text-[12px] xl:text-[24px] font-normal xl:leading-[90px] tracking-[-0.05em] no-underline">
                TUV Verified Carbon Footprint
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/qualanod.svg"
                alt="qualanod"
                className="w-[46px] xl:w-auto"
              />
              <p className="font-rubik text-[12px] xl:text-[24px] font-normal xl:leading-[90px] tracking-[-0.05em] no-underline">
                Qualanod Licenced CE Certified
              </p>
            </div>
          </div>
          <div className="flex gap-[38px] xl:gap-[360px] justify-between xl:justify-unset">
            <div className="flex flex-col items-center xl:w-[383px]">
              <img
                src="/billets.svg"
                alt="billets"
                className="w-[46px] xl:w-auto"
              />
              <p className="font-rubik text-[12px] xl:text-[24px] font-normal xl:leading-[90px] tracking-[-0.05em] no-underline">
                Low Carbon Billets
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/FPC.svg" alt="FPC" className="w-[46px] xl:w-auto" />
              <p className="font-rubik text-[12px] xl:text-[24px] font-normal tracking-[-0.05em] no-underline text-center">
                FPC Certified Technoform Thermal
                <br /> Break Assembly Quality Certified
              </p>
            </div>
          </div>
          <div className="flex gap-[38px] xl:gap-[360px] justify-between xl:justify-unset">
            <div className="flex flex-col items-center xl:w-[383px]">
              <img src="/ISO.svg" alt="ISO" className="w-[46px] xl:w-auto" />
              <p className="font-rubik text-[12px] xl:text-[24px] font-normal xl:leading-[90px] tracking-[-0.05em] no-underline">
                ISO 9001/14001/45001 Certified
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/qualicoat.svg"
                alt="qualicoat"
                className="w-[46px] xl:w-auto"
              />
              <p className="font-rubik text-[12px] xl:text-[24px] font-normal xl:leading-[90px] tracking-[-0.05em] no-underline text-center">
                Qualicoat Seaside Licenced Applicator
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/lowPrice.svg"
              alt="lowPrice"
              className="w-[46px] xl:w-auto"
            />
            <p className="font-rubik text-[12px] xl:text-[24px] font-normal xl:leading-[90px] tracking-[-0.05em] no-underline text-center">
              Low Prices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyElement;
