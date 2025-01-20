import Link from "next/link";

export default function FooterNav() {
  return (
    <div className="mt-[32px] p-[100px_112px_56px] flex justify-between">
      <div className="flex gap-[140px]">
        <div>
          <p className="font-rubik text-2xl font-bold leading-6 tracking-tight text-left text-[#1d1f1e]">
            Contact us
          </p>
          <p className="font-rubik text-xl font-medium leading-9 tracking-tight text-left decoration-solid decoration-from-font mt-[24px]">
            Bonnington Tower
          </p>
          <p className="font-rubik text-xl font-medium leading-9 tracking-tight text-left decoration-solid decoration-from-font">
            Cluster J
          </p>
          <p className="font-rubik text-xl font-medium leading-9 tracking-tight text-left decoration-solid decoration-from-font">
            Jumeirah Lakes Towers (JLT)
          </p>
          <p className="font-rubik text-xl font-medium leading-9 tracking-tight text-left decoration-solid decoration-from-font">
            Dubai
          </p>
          <p className="font-rubik text-xl font-medium leading-9 tracking-tight text-left decoration-solid decoration-from-font">
            UAE
          </p>
          <p className="font-rubik text-xl font-bold leading-9 tracking-tight text-left decoration-solid decoration-from-font">
            +971 (0) 50 9236677
          </p>
          <Link
            href={"mailto:extrusions@crofton.me"}
            className="font-rubik text-xl font-bold leading-9 tracking-tight text-left underline decoration-solid decoration-from-font"
          >
            extrusions@crofton.me
          </Link>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[16px] items-center p-[4px]">
            <img src="/fbIcon.svg" alt="fb" className="w-[48px] h-[48px]" />
            <p className="font-figtree text-base font-medium leading-6 tracking-tight text-left decoration-from-font text-[#1d1f1e]">
              Follow us on Facebook
            </p>
          </div>
          <div className="flex gap-[16px] items-center p-[4px]">
            <img
              src="/instaIcon.svg"
              alt="insta"
              className="w-[48px] h-[48px]"
            />
            <p className="font-figtree text-base font-medium leading-6 tracking-tight text-left decoration-from-font text-[#1d1f1e]">
              Follow us on Instagram
            </p>
          </div>
          <div className="flex gap-[16px] items-center p-[4px]">
            <img
              src="/linkedInIcon.svg"
              alt="linkedIn"
              className="w-[48px] h-[48px]"
            />
            <p className="font-figtree text-base font-medium leading-6 tracking-tight text-left decoration-from-font text-[#1d1f1e]">
              Follow us on LinkedIn
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <img src="/footerLogo.svg" alt="footerlogo" />
        <p className="font-figtree text-sm font-normal leading-5 tracking-tight text-left decoration-from-font">
          © 2024 Vertalex All rights reserved.
        </p>
      </div>
    </div>
  );
}
