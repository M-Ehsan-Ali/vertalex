export default function Content() {
  return (
    <div id="book_a_meeting">
      <div className="md:pt-20 md:px-16 xl:px-36">
        <div className="py-8 md:py-0 font-extrabold text-center text-color_003262 text-sm_main_heading md:text-main_heading bg-white md:bg-transparent">
          A Legacy of Business Growth
        </div>
        <div className="px-6">
          <div className="flex justify-center ">
            <div className="font-normal md:font-medium mt-12 text-center text-main_description md:text-main_description">
              With 26 years of experience building businesses in Dubai, Ireland,
              the UK, and Italy, I provide insights into varied markets. My
              international background allows me to connect you with relevant
              contacts and streamline your LinkedIn approach for maximum impact.
            </div>
          </div>

          <div className="flex justify-center md:hidden relative w-full h-full mt-8">
            <img
              src={"/bookMeeting/small_book_meeting.png"}
              alt="Book a Meeting"
              className="w-[600px]"
            />
          </div>

          <div className="mt-12 flex md:block justify-center">
            <button className="min-w-[250px] px-5 py-3 rounded-md bg-color_0166C8 text-white font-medium shadow-home_button_shadow">
              Book a Meeting
            </button>
          </div>
        </div>

        <div className="hidden md:block relative w-full h-full md:mt-[20px] md:ml-[10px] lg:mt-[-20px] lg:ml-[40px] xl:mt-[-24px] xl:ml-[30px]">
          <img
            src={"/bookMeeting/book_meeting.png"}
            alt="Book a Meeting"
            className="w-full"
          />
        </div>
      </div>

      <div className="pb-12"></div>
    </div>
  );
}
