import Container from "../../components/Container";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-about_hero_bg bg-cover bg-center">
      <div className="absolute inset-0 bg-black/35" />

      <Container className="relative z-10 flex min-h-[60vh] items-end">
        <div className="max-w-6xl pb-12 md:pb-16 lg:pb-20">

          <p className="mb-5 inline-block bg-brand-deepBlue px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white md:text-base">
            About Nexus Xpress Hotel
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-7xl">
  <span className="block">A Comfortable Stay,</span>
  <span className="block">A Convenient Connection</span>
</h1>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;