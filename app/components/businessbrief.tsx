export default function BusinessBrief() {
  return (
    <>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="mt-4 text-4xl font-bold leading-tight">
            A prestigious after&#8209;school coding club!
          </h1>
          <h2 className="mt-0 mb-4 italic text-2xl tracking-widest">
            Inspiring you to code
          </h2>
          <p className="leading-normal text-2xl mb-8">
            <span className="rounded-full inline-block animate-gradient bg-gradient-to-r from-yellow-500 via-blue-500 to-orange-500 bg-[length:150%_150%] p-2">
              <p className="bg-gray-500 p-2 rounded-full">Aged 12-20 years?</p>
            </span>
            Awesome! You can become really good at computer programming, create
            awesome Apps and games. We provide you with all the cool toolkits,
            and help you meet/work with other tech savvy friends!
          </p>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Join our club now!
          </button>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" src="firmware.svg" />
        </div>
      </div>
    </>
  );
}
