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
      <BusinessBrief />
      <WaveBottomSVG />
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
