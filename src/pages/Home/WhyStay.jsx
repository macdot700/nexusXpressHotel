import Container from "../../components/Container";

const features = [
  {
    number: "01",
    title: "Comfortable Rooms",
    text: "Well furnished rooms designed for a comfortable and restful stay.",
  },
  {
    number: "02",
    title: "Convenient Location",
    text: "Just minutes from the expressway, with easy access to the airport and city centre.",
  },
  {
    number: "03",
    title: "A Place to Unwind",
    text: "Relax at the Bush Bar, play snooker or enjoy games with friends.",
  },
  {
    number: "04",
    title: "Warm Hospitality",
    text: "A welcoming environment and a team committed to making your stay comfortable.",
  },
];

const WhyStay = () => {
  return (
    <section className="bg-brand-deepBlue py-8 md:py-10 lg:py-12">
      <Container>

        {/* Section heading */}
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-coral">
            Why Stay at Nexus?
          </p>

          <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            More Than Just a Place to Stay
          </h2>
        </div>

        {/* Features */}
        <div className="mt-10 grid gap-px overflow-hidden bg-white/20 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-brand-deepBlue p-6 md:p-7"
            >
              <span className="text-sm font-bold tracking-widest text-brand-coral">
                {feature.number}
              </span>

              <h3 className="mt-5 font-display text-2xl font-semibold text-white md:text-3xl">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">
                {feature.text}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default WhyStay;