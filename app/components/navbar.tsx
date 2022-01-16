import { useLocation, useNavigate } from "remix";

type LinkType = {
  url: string;
  title: string;
};

const navLinks: Array<LinkType> = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Toolkits",
    url: "/toolkits",
  },
  {
    title: "Get Inspired!",
    url: "/inspiration",
  },
  {
    title: "Pricing",
    url: "/pricing",
  },
  {
    title: "Team",
    url: "/team",
  },
];

interface INavLinksProps {
  links: Array<LinkType>;
}

function NavLinks({ links }: INavLinksProps) {
  const { pathname } = useLocation();
  return (
    <ul className="list-reset lg:flex justify-end flex-1 items-center">
      {links.map((link) => (
        <li className="mr-3">
          <a
            className={`inline-block no-underline ${
              link.url === pathname ? "font-bold" : ""
            } hover:text-gray-800 hover:text-underline py-2 px-4`}
            href={link.url}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav id="header" className="w-full z-30 top-0 text-white gradient">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-8 py-2">
        <div className="flex items-center">
          <a
            className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <img
              className="h-12 w-12 inline-block mx-2 shadow-purple-400"
              src="logo.png"
            />
            Kuyo Coding Club
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-white p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <NavLinks links={navLinks} />
          <button
            onClick={() => navigate("/login")}
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Sign-In
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0  py-0" />
    </nav>
  );
}
