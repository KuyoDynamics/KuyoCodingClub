import FeaturedProject from "./featuredproject";

const featuredProjects = [
  {
    title: "Title 1",
    description: "Desc 1",
    author: "Chaiwa Berian",
    sex: "male",
    authorAvator: "/chaiwa.png",
    toolkit: "Micro:bit with Scratch",
  },
  {
    title: "Title 2",
    description:
      "Desc 2 Bla blas some description that is really long. Help me understand this long text please!",
    author: "Kunda Kawela",
    sex: "male",
    authorAvator: "/kunda.png",
    toolkit: "Raspberry Pi with Python",
  },
  {
    title: "Title 3",
    description: "Desc 3",
    author: "Chisanga Mukosa",
    sex: "female",
    authorAvator: "/chisanga.png",
    toolkit: "App Inventor with Scratch",
  },
];

export default function Inspiration() {
  return (
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        See what our members have built!
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      {featuredProjects.map((project) => (
        <FeaturedProject project={project} />
      ))}
    </div>
  );
}
