import { NavLink } from "react-router-dom";
import Container from "../../components/Container";

const FinalCTA = () => {
  return (
    <section className="bg-white pt-8 pb-6 md:pt-10 md:pb-7 lg:pt-12 lg:pb-8">
      <Container>
        <div className="bg-brand-deepBlue px-6 py-10 text-center md:px-12 md:py-12 lg:px-20">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-coral">
            Your Stay Starts Here
          </p>

          <h2 className="mx-auto max-w-full whitespace-normal font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:whitespace-nowrap md:text-6xl">
            Make Nexus Xpress Hotel Your Next Stop
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            Comfortable rooms, warm hospitality and a convenient location await you.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <NavLink
              to="/reservation"
              className="inline-flex items-center justify-center bg-brand-blue px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-deepBlue"
            >
              Book Your Stay
            </NavLink>

            <NavLink
              to="/accommodation"
              className="inline-flex items-center justify-center border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-brand-deepBlue"
            >
              Explore Rooms
            </NavLink>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;