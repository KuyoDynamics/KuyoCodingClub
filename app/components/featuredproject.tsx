{
  /* <div style="display:inline-block;vertical-align:top;">
    <img src="" alt="img"/>
</div>
<div style="display:inline-block;">
    <div>Email</div>
    <div>Gender</div>
    <div>Phoner</div>
</div> */
}
export default function FeaturedProject({ project }) {
  const { title, description, author, authorAvator, sex, toolkit } = project;
  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
      <div className="flex-1 rounded-t rounded-b-none overflow-hidden shadow">
        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
          <div className="inline-block align-top">
            <img
              className="inline object-cover w-16 h-16 mr-2 rounded-full border-black"
              src={sex === "male" ? "male.jpg" : "female.jpg"}
            />
          </div>
          <div className="inline-block">
            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
              {toolkit}
            </p>
            <div className="w-full font-bold text-xl text-gray-800 px-6">
              {title}
            </div>
            <p className="text-gray-800 text-base px-6 mb-5">{description}</p>
          </div>
        </a>
      </div>
      <div className="flex-none mt-auto rounded-b rounded-t-none overflow-hidden shadow p-6">
        <div className="flex items-center justify-center">
          <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            See details
          </button>
        </div>
      </div>
    </div>
  );
}
