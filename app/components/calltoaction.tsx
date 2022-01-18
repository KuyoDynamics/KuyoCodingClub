import JoinClubButton from "./join_club_button";

export default function CallToAction() {
  return (
    <div className="container mx-auto text-center py-6 mb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        Be Awesome!
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 className="my-4 text-3xl leading-tight">
        Hangout with the buddies at Kuyo Coding Club!
      </h3>
      <JoinClubButton animations="animate-pulse" />
    </div>
  );
}
