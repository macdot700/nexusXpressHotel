import Container from "../../components/Container";

const experiences = [
  {
    number: "01",
    title: "Arrive",
    text: "A convenient base for guests travelling into Abuja, with easy access to the airport and major routes.",
  },
  {
    number: "02",
    title: "Unwind",
    text: "A comfortable environment where you can settle in, relax and enjoy your time away from home.",
  },
  {
    number: "03",
    title: "Connect",
    text: "A practical location that keeps you connected to the expressway, the airport and key destinations across Abuja.",
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
            Where Travel Meets Comfort
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            Nexus Xpress brings together the convenience of a well connected
            location with the comfort and warmth of a place that feels like
            home. Whether you are arriving in Abuja, passing through or
            staying for a while, Nexus gives you a comfortable place to
            settle in.
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