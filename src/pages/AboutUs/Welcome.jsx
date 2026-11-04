
import Container from "../../components/Container";
import welcomeImg from "../../assets/images/reception.png";

const Welcome = () => {
  return (
    <section className="bg-white pt-10 pb-6 md:pt-14 md:pb-8 lg:pt-16 lg:pb-10">
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={welcomeImg}
              alt="Nexus Xpress Hotel"
              className="h-[380px] w-full object-cover sm:h-[440px] lg:h-full lg:min-h-[520px]"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">

            <p className="mb-4 inline-block w-fit bg-brand-lightBlue px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue md:text-sm">
              Our Story
            </p>

            <h2 className="font-display text-4xl font-semibold leading-tight text-brand-deepBlue sm:text-5xl md:text-6xl">
              Hospitality That Feels Like Home
            </h2>

            <p className="mt-6 text-base leading-8 text-brand-muted md:text-lg">
              Since opening in February 2024, Nexus Xpress Hotel has welcomed
              guests looking for a comfortable place to stay in Abuja. Whether
              you're visiting for business, travelling with family or simply
              passing through the city, we want you to feel at home from the
              moment you arrive.
            </p>

            <p className="mt-5 text-base leading-8 text-brand-muted md:text-lg">
              One of the things that makes our location special is our
              proximity to the Airport Expressway. Situated in Lugbe, Abuja,
              just by the expressway, the hotel offers convenient access to
              the airport and major routes into the city.
            </p>

            <p className="mt-5 text-base leading-8 text-brand-muted md:text-lg">
              We believe a good hotel stay is about more than having a room
              to sleep in. It's also about being welcomed, receiving good
              service and having a comfortable place to return to at the end
              of the day. This is what we strive to offer every guest at
              Nexus Xpress Hotel.
            </p>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Welcome;
