export default function FooterCompany() {
  return (
    <>
      <p className="uppercase text-gray-500 md:mb-6">Company</p>
      <ul className="list-reset mb-6">
        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
            href="#"
            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
          >
            Official Blog
          </a>
        </li>
        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
            href="#"
            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
          >
            About Us
          </a>
        </li>
        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
            href="#"
            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
          >
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}
