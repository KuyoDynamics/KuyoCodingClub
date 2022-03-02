import HeroSection from "~/components/herosection";
import CallToAction from "~/components/calltoaction";
import Footer from "~/components/footer/footer";
import Inspiration from "~/components/inspiration";
import NavBar from "~/components/navbar";
import Pricing from "~/components/pricing";
import WaveBottomSVG from "~/components/svg/wavebottom";
import WaveTopSVG from "~/components/svg/wavetop";
import ToolkitsList from "~/components/toolkitslist";
import styles from "~/styles/index.css";
import Partners from "~/components/partners";
import Sponsors from "~/components/sponsors";
import TargetAudience from "~/components/targetaudience";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function Index() {
  return (
    <div >
      <section>
        <NavBar />
      </section>
      <section>
        <HeroSection />
      </section>
      <div className="relative -mt-12 lg:-mt-32">
        <WaveBottomSVG />
      </div>
      <section className="bg-black border-b py-8">
        <TargetAudience />
      </section>
      <section className="border-b py-8">
        <ToolkitsList />
      </section>
      <section className="border-b py-8">
        <Inspiration />
      </section>
      <section className="py-8">
        <Pricing />
      </section>
      <section className="py-8">
        <Partners />
      </section>
      <section className="py-8">
        <Sponsors />
      </section>
      <section>
        <WaveTopSVG />
        <CallToAction />
      </section>
      <Footer />
    </div>
  );
}
