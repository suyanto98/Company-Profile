import Overview from "./components/companyOverview/Overview";
import HeroSection from "./components/hero-section/HeroSection";
import Testimonial from "./components/testimonial/Testimonial";
import Service from "./components/service/Service";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Overview />
      <Service />
      <Testimonial />
    </>
  );
}
