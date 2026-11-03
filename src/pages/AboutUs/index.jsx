import { useEffect } from "react";
import HeroSection from "./HeroSection";
import Welcome from "./Welcome";
import NexusExperience from "./NexusExperience";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <Welcome />
      <NexusExperience />
    </div>
  );
};

export default AboutUs;