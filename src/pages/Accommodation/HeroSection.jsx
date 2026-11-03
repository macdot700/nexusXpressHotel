import Container from "../../components/Container";

const HeroSection = () => {
  return (
    <section className="relative min-h-[45vh] overflow-hidden bg-accommodation_hero_bg bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30" />

      <Container className="relative z-10 flex min-h-[45vh] items-end">
        <div className="pb-10 md:pb-14 lg:pb-16">

          <p className="mb-5 inline-block bg-brand-deepBlue px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white md:text-base">
            Accommodation
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl md:text-7xl">
            Rooms Designed for Your Comfort
          </h1>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;