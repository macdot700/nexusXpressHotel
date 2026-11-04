
import PageHeroTitle from "../../components/PageHeroTitle";

const HeroSection = () => {
  return (
    <section className="relative h-[344px] w-full overflow-hidden bg-contact_hero_bg bg-cover bg-[65%_25%] sm:h-[380px] sm:bg-center sm:bg-[center_25%] md:h-[420px]">

      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute bottom-8 left-4 z-10 sm:bottom-10 sm:left-10 lg:left-12">
        <PageHeroTitle>
          Contact Us
        </PageHeroTitle>
      </div>

    </section>
  );
};

export default HeroSection;
