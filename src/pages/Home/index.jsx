import { useEffect } from "react";
import Accomodation from "./Accomodation";
import HeroSection from "./HeroSection";
import Welcome from "./Welcome";
import WhyStay from "./WhyStay";
import BushBar from "./BushBar";
import FinalCTA from "./FinalCTA";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <Welcome />
      <Accomodation />
      <WhyStay />
      <BushBar />
      <FinalCTA />
    </div>
  );
};

export default Home;