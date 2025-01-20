import Content from "./content";
export default function MainPage() {
  return (
    <>
      <div className="bg-cover lg:bg-contain bg-center lg:bg-right bg-no-repeat lg:min-h-screen bg-[url('/letsConnect/small_lets_connect.png')] lg:bg-[url('/letsConnect/lets_connect.png')]">
        <Content />
      </div>
    </>
  );
}
