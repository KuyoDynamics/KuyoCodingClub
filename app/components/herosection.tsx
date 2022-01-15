import JoinClubButton from "./join_club_button";

export default function HeroSection() {
  return (
    <>
      <div className="flex  flex-col md:flex-row justify-center px-8">
        {/* Left Col */}
        <div className="lg:w-2/5  text-center lg:text-left p-2">
          <h1 className="text-7xl font-bold leading-tight">
            A prestigious after&#8209;school coding club!
          </h1>
          <h2 className="mb-4 italic text-4xl tracking-widest leading-tight">
            Inspiring you to code
          </h2>

          <JoinClubButton />
        </div>
        {/* <!--Right Col--> */}
        <div className="lg:w-3/5">
          <img className="lg:scale-95" src="firmware.svg" />
        </div>
      </div>
    </>
  );
}
