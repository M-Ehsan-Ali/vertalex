export default function ScheduleCallback() {
  return (
    <div id="schedule_callback">
      <div className="py-4 md:py-12">
        <div className="font-extrabold text-center text-color_003262 text-sm_main_heading  md:text-main_heading">
          Schedule a Call Back
        </div>
      </div>

      <div className="py-10 px-8 bg-color_0166C8 w-full relative">
        <div>
          <form
            action={"#"}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <div>
              <input
                name="name"
                type="text"
                className="bg-white w-[300px] rounded-[5px] px-2 py-2 text-[20px] placeholder:text-[#969696] text-gray-700"
                placeholder="Name*"
                required
              />
            </div>

            <div>
              <input
                name="phone_no"
                type="text"
                className="bg-white w-[300px] rounded-[5px] px-2 py-2 text-[20px] placeholder:text-[#969696] text-gray-700"
                placeholder="Phone no*"
                required
              />
            </div>

            <div>
              <select
                name="select"
                className="bg-white w-[300px] rounded-[5px] px-2 py-2 text-[20px] placeholder:text-[#969696] text-gray-700"
                required
              >
                <option value="">Select *</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>

            <div className="mt-4">
              <button className="min-w-[120px] py-3 px-6 lg:px-5 lg:py-3 rounded-[10px] text-[14px] lg:text-[18px] bg-white text-black font-semibold shadow-home_button_shadow">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block absolute right-1 bottom-0">
          <img src="/Footer/linkedin.png" className="w-[220px] h-[220px]" />
        </div>
      </div>
      <div className="pb-12"></div>
    </div>
  );
}
