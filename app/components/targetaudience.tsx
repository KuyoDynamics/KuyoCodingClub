import DownArrow from "./svg/downarrow";
// import ScratchBlocks from "scratchblocks-react";

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
          <h2 className="leading-normal font-bold text-2xl text-white text-center p-1">
            Our <span className="text-green-500">Coding Club</span> is{" "}
            <span className="text-blue-600">built for you</span>! We{" "}
            <span className="text-green-500">inspire you </span> to{" "}
            <span className="text-blue-500">learn Computer Programming</span> ,
            from <span className="text-yellow-300">Beginner</span> to{" "}
            <span className="text-green-500">Pro</span>,{" "}
            <span className="text-yellow-300">with modern toolkits</span>!
          </h2>
          <h2 className="leading-normal font-bold text-2xl mb-8 text-white text-center">
            Create <span className="text-yellow-300">awesome</span>{" "}
            <span className="text-green-500">Apps</span> and{" "}
            <span className="text-green-500">Games</span> in{" "}
            <span className="text-blue-500 tracking-widest">minutes</span>!
          </h2>
          {/* Note: Here show a snippet of blocks on the left and equivalent text-based on the right! */}
          {/* <ScratchBlocks blockStyle="scratch3">
            {`
              when green flag clicked
              forever
                move (10) steps
              end
            `}
          </ScratchBlocks> */}
          <DownArrow classNames="animate-bounce h-6 w-6" />
        </div>
      </div>
    </>
  );
}
