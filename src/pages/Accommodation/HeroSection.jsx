
import Container from "../../components/Container";
import PageHeroTitle from "../../components/PageHeroTitle";

const HeroSection = () => {
  return (
    <section className="relative min-h-[45vh] overflow-hidden bg-accommodation_hero_bg bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30" />

      <Container className="relative z-10 flex min-h-[45vh] items-end">
        <div className="flex flex-col items-start pb-10 md:pb-14 lg:pb-16">

          <p className="mb-4 inline-block bg-black/40 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-md md:mb-5 md:text-base">
            Accommodation
          </p>

          <PageHeroTitle>
            Rooms Designed for Your Comfort
          </PageHeroTitle>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
