import DownArrow from "./svg/downarrow";

export default function TargetAudience() {
  return (
    <>
      <div className="flex">
        <div className="w-2/5  bg-white rounded-tr-2xl">
          <img src="children.svg" alt="children image" />
        </div>
        <div className="w-2/3">
          <h1 className="my-2 text-7xl  font-bold leading-tight text-center text-white">
            Aged 12-20 years?
          </h1>
          <h2 className="leading-normal font-bold text-2xl mb-8 text-white text-center p-1">
            Our <span className="text-green-500">Coding Club</span> is{" "}
            <span className="text-blue-600">built for you</span>! We{" "}
            <span className="text-green-500">inspire</span> you to learn
            <span className="text-blue-500"> Computer Programming</span> , from{" "}
            <span className="text-yellow-300">Beginner</span> to{" "}
            <span className="text-green-500">Pro</span>,{" "}
            <span className="text-yellow-300">with modern toolkits</span>!
            Create <span>awesome</span>{" "}
            <span className="text-green-500">Apps</span> and{" "}
            <span className="text-green-500">games</span> in{" "}
            <span className="text-blue-500 tracking-widest">minutes</span>!
          </h2>
          {/* Note: Here show a snippet of blocks on the left and equivalent text-based on the right! */}
          {/* <pre>
            <code>

              if (true) &#123;
                return  &quot;Yes &quot;;
              &#125;
             
            </code>
          </pre> */}
          <DownArrow classNames={"animate-bounce h-6 w-6"} />
        </div>
      </div>
    </>
  );
}
