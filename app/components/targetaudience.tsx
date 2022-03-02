export default function TargetAudience() {
  return (
    <>
      <div className="flex">
        <div className="w-2/5  bg-white">
          <img src="children.svg" alt="children image" />
        </div>
        <div className="w-2/3">
          <h1 className="my-2 text-7xl  font-bold leading-tight text-center text-white">
            Aged 12-20 years?
          </h1>
          <h2 className="leading-normal font-bold text-2xl mb-8 text-white text-center p-1">
            Our <span className="text-green-500">Coding Club</span> is{" "}
            <span className="text-blue-600">built for you</span>! We help you
            learn
            <span className="text-blue-500"> Computer Programming</span> , from
            Beginner to Pro,{" "}
            <span className="text-yellow-300">with modern toolkits</span>!
            Create{" "}
            <span className="text-green-300">awesome Apps and games</span> like{" "}
            <span className="text-blue-500">ABCD</span>! Be part of our tech
            savvy community!
          </h2>
          <img className="inline-block" src="lego.png" alt="lego.png" />
        </div>
      </div>
    </>
  );
}
