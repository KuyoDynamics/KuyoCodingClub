import BusinessBrief from "~/components/businessbrief";
import CallToAction from "~/components/calltoaction";
import Footer from "~/components/footer/footer";
import Inspiration from "~/components/inspiration";
import NavBar from "~/components/navbar";
import Pricing from "~/components/pricing";
import WaveBottomSVG from "~/components/svg/wavebottom";
import WaveTopSVG from "~/components/svg/wavetop";
import ToolkitsList from "~/components/toolkitslist";
import styles from "~/styles/index.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function Index() {
  return (
    <>
      <NavBar />
      <div className="pt-24">
        <BusinessBrief />
      </div>
      <div className="relative -mt-12 lg:-mt-20">
        <WaveBottomSVG />
      </div>
      <section className="bg-white border-b py-8">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
      Aged 12-20 years?
      </h1>
        <p className="leading-normal text-2xl mb-8 text-black">
          {/* <span className="rounded-full inline-block animate-gradient bg-gradient-to-r from-yellow-500 via-blue-500 to-orange-500 bg-[length:150%_150%] p-2">
            <p className="bg-gray-500 p-2 rounded-full">Aged 12-20 years?</p>
          </span> */}
          Awesome! You can become really good at computer programming, create
          awesome Apps and games. We provide you with all the cool toolkits, and
          help you meet/work with other tech savvy friends!
        </p>
      </section>
      <section className="bg-white border-b py-8">
        <ToolkitsList />
      </section>
      <section className="bg-white border-b py-8">
        <Inspiration />
      </section>
      <section className="bg-gray-100 py-8">
        <Pricing />
      </section>
      <WaveTopSVG />
      <section className="container mx-auto text-center py-6 mb-12">
        <CallToAction />
      </section>
      <Footer />
    </>
  );
}
