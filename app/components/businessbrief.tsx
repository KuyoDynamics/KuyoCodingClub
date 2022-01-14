export default function BusinessBrief() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="flex flex-col w-full lg:w-2/5 justify-center items-start text-center lg:text-left">
          <h1 className="text-7xl font-bold leading-tight">
            A prestigious after&#8209;school coding club!
          </h1>
          <h2 className="mb-4 italic text-4xl tracking-widest leading-tight">
            Inspiring you to code
          </h2>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Join our club now!
          </button>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full lg:w-3/5 py-6 flex flex-col">
          <img className="lg:h-1/5"  src="firmware.svg" />
        </div>
      </div>
    </>
  );
}
