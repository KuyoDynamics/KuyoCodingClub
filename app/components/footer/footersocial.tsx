export default function FooterSocial() {
  return (
    <>
      <p className="uppercase text-gray-500 md:mb-6">Social</p>
      <ul className="list-reset mb-6">
        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
            href="#"
            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
          >
            Facebook
          </a>
        </li>
        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
            href="#"
            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
          >
            Linkedin
          </a>
        </li>
        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
            href="#"
            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
          >
            Twitter
          </a>
        </li>
      </ul>
    </>
  );
}
