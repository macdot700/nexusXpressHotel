import { NavLink } from "react-router-dom";
import Container from "../../components/Container";

const HeroSection = () => {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-home_hero_bg bg-cover bg-center">
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <Container className="relative z-10 flex min-h-[78vh] items-center">
        <div className="max-w-3xl pb-10 pt-20 md:pb-16">

          {/* Introductory text */}
          <p className="mb-6 inline-block bg-brand-deepBlue px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white md:text-base">
  Welcome to Nexus Xpress Hotel
</p>

          {/* Main heading */}
          <h1 className="font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Your Home Away From Home
          </h1>

          {/* Supporting text */}
          <p className="mt-6 max-w-xl bg-black/35 p-3 text-base font-medium leading-7 text-white md:text-lg">
  Enjoy comfortable accommodation, warm hospitality and convenient
  access to the airport and major routes into Abuja.
</p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
  <NavLink
    to="/reservation"
    className="inline-flex items-center justify-center bg-brand-blue px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-deepBlue"
  >
    Book Your Stay
  </NavLink>

  <NavLink
    to="/accommodation"
    className="inline-flex items-center justify-center border border-white bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-brand-deepBlue"
  >
    Explore Rooms
  </NavLink>
</div>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;