import Content from "./content";
export default function MainPage() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat md:min-h-screen bg-[#E3F1FF] bg-blend-multiply"
        style={{
          backgroundImage: "url('/bookMeeting/network_graphic.png')",
        }}
      >
        <Content />
      </div>
    </>
  );
}
