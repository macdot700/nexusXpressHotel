import Container from "../../components/Container";

const experiences = [
  {
    number: "01",
    title: "A Comfortable Stay",
    text: "Our rooms provide a comfortable place to rest, whether you're in Abuja for a short visit, a business trip or a longer stay.",
  },
  {
    number: "02",
    title: "Time to Unwind",
    text: "Take a break and enjoy the relaxed atmosphere of our Bush Bar or spend some time at our outdoor sit-out.",
  },
  {
    number: "03",
    title: "A Warm Welcome",
    text: "From arrival to departure, we want every guest to feel welcome. Our team is here to make your stay as comfortable as possible.",
  },
];

const NexusExperience = () => {
  return (
    <section className="bg-brand-deepBlue pt-10 pb-6 md:pt-14 md:pb-8 lg:pt-16 lg:pb-10">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-coral">
            The Nexus Experience
          </p>

          <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            A Stay That Feels Right
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            A good stay is about more than a comfortable room. It's also about
            the welcome you receive, the spaces you can enjoy and having a
            place where you can relax at the end of the day. That's what we
            aim to offer at Nexus Xpress Hotel.
          </p>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden bg-white/20 md:grid-cols-3">
          {experiences.map((experience) => (
            <div
              key={experience.number}
              className="bg-brand-deepBlue p-7 md:p-8"
            >
              <span className="text-sm font-bold tracking-widest text-brand-coral">
                {experience.number}
              </span>

              <h3 className="mt-5 font-display text-3xl font-semibold text-white">
                {experience.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">
                {experience.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NexusExperience;