
import { NavLink } from "react-router-dom";
import Container from "../../components/Container";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-home_hero_bg bg-cover bg-center">
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <Container className="relative z-10 flex min-h-[85vh] items-end">
        <div className="w-full max-w-md pb-10 pt-32 md:pb-14 lg:pb-16">


          {/* Main heading */}
          <h1 className="max-w-md font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Your Home Away From Home
          </h1>

          {/* Supporting text */}
          <p className="mt-5 max-w-md bg-black/40 p-3 text-sm font-medium leading-6 text-white sm:text-base sm:leading-7">
            Enjoy comfortable accommodation, warm hospitality and convenient
            access to the airport and major routes into Abuja.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <NavLink
              to="/reservation"
              className="inline-flex items-center justify-center bg-brand-blue px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-deepBlue"
            >
              Book Your Stay
            </NavLink>

            <NavLink
              to="/accommodation"
              className="inline-flex items-center justify-center border border-white bg-white/10 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-brand-deepBlue"
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
