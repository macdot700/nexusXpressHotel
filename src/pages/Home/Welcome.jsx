import { NavLink } from "react-router-dom";
import Container from "../../components/Container";

const Welcome = () => {
  return (
    <section className="bg-white pb-8 pt-16 md:pb-10 md:pt-20 lg:pb-12 lg:pt-24">
      <Container>
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src="/src/assets/images/welcome.jpg"
              alt="Welcome to Nexus Xpress Hotel"
              className="h-[340px] w-full object-cover sm:h-[380px] lg:h-full lg:min-h-[500px]"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">

            <p className="mb-4 inline-block w-fit bg-brand-lightBlue px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-deepBlue md:text-sm">
              Welcome to Nexus Xpress Hotel
            </p>

            <h2 className="max-w-xl font-display text-4xl font-semibold leading-tight text-brand-deepBlue sm:text-5xl md:text-6xl">
              A Comfortable Stay, A Warm Welcome
            </h2>

            <p className="mt-5 text-base leading-8 text-brand-muted md:text-lg">
              At Nexus Xpress Hotel, we believe a good stay should feel
              comfortable from the moment you arrive. Our hotel offers a
              relaxed environment, well furnished rooms and warm hospitality
              for both short visits and extended stays.
            </p>

            <p className="mt-4 text-base leading-8 text-brand-muted md:text-lg">
              Conveniently located just minutes from the expressway, we offer
              easy access to the airport and Abuja city centre, keeping you well connected to key destinations.
            </p>

            <div className="mt-7">
              <NavLink
                to="/about-us"
                className="inline-flex items-center bg-brand-deepBlue px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-blue"
              >
                Discover Nexus
              </NavLink>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Welcome;