import Container from "../../components/Container";
import welcomeImg from "../../assets/images/welcome.jpg";

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
              Nexus Xpress Hotel was created with a simple idea: a hotel stay
              should be comfortable, welcoming and convenient. From the moment
              you arrive, our aim is to provide a relaxed environment where
              guests can settle in and feel at ease.
            </p>

            <p className="mt-5 text-base leading-8 text-brand-muted md:text-lg">
              Located in Federal Housing Authority, Lugbe, the hotel offers
              convenient access to the expressway, the airport and major routes
              into Abuja. This makes Nexus a practical choice for guests
              visiting Abuja, travelling through the city or looking for a
              comfortable place to stay.
            </p>

            <p className="mt-5 text-base leading-8 text-brand-muted md:text-lg">
              At the heart of our approach is warm hospitality. We believe
              good service is about paying attention to the details, creating
              a welcoming atmosphere and giving every guest a comfortable
              place to return to.
            </p>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Welcome;