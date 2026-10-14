import { NavLink } from "react-router-dom";
import Container from "../../components/Container";

const Dining = () => {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="order-2 overflow-hidden lg:order-1">
            <img
              src="/src/assets/images/dining.jpg"
              alt="Dining at Nexus Xpress Hotel"
              className="h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[500px]"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">
              Dining & Drinks
            </p>

            <h2 className="font-display text-4xl font-semibold leading-tight text-brand-deepBlue sm:text-5xl md:text-6xl">
              Good Food, Good Moments
            </h2>

            <p className="mt-6 text-base leading-8 text-brand-muted md:text-lg">
              Whether you are settling in after a long day or simply looking
              for somewhere to relax, our dining and bar spaces offer a
              comfortable setting to enjoy good food, drinks and great company.
            </p>

            <p className="mt-5 text-base leading-8 text-brand-muted md:text-lg">
              From meals in the restaurant to drinks and relaxed evenings at
              the bar, there is always something to enjoy at Nexus.
            </p>

            <div className="mt-8">
              <NavLink
                to="/dining"
                className="inline-flex bg-brand-deepBlue px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-blue"
              >
                Explore Dining
              </NavLink>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Dining;