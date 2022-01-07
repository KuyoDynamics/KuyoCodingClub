import FooterCompany from "./footercompany";
import FooterLegal from "./footerlegal";
import FooterLinks from "./footerlinks";
import FooterSocial from "./footersocial";
import LogoSVG from "../svg/logo";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <a
              className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <LogoSVG />
              Kuyo Coding Club
            </a>
          </div>
          <div className="flex-1">
            <FooterLinks />
          </div>
          <div className="flex-1">
            <FooterLegal />
          </div>
          <div className="flex-1">
            <FooterSocial />
          </div>
          <div className="flex-1">
            <FooterCompany />
          </div>
        </div>
      </div>
      <a
        href="https://www.freepik.com/free-photos-vectors/background"
        className="text-gray-500"
      >
        Background vector created by freepik - www.freepik.com
      </a>
    </footer>
  );
}
