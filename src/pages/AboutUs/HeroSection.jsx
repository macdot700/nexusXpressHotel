
import Container from "../../components/Container";
import PageHeroTitle from "../../components/PageHeroTitle";
import aboutHero from "../../assets/images/aboutHero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[344px] w-full overflow-hidden sm:h-[380px] md:h-[420px]">
      <img
        src={aboutHero}
        alt="Nexus Xpress Hotel reception"
        className="h-full w-full object-cover object-[35%_center] md:object-center"
      />

      <div className="absolute inset-0 bg-black/20" />

      <Container className="absolute inset-0 z-10 flex items-end">
        <div className="pb-8 md:pb-10">
          <PageHeroTitle>
            About Nexus Xpress Hotel
          </PageHeroTitle>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
