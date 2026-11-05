import Container from "../../components/Container";
import BushBarImage from "../../assets/images/bushBar.jpg";

const BushBar = () => {
  return (
    <section className="bg-brand-lightBlue py-10 md:py-14 lg:py-18">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={BushBarImage}
              alt="Bush Bar at Nexus Xpress Hotel"
              className="h-[380px] w-full object-cover md:h-[460px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 inline-block bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-deepBlue md:text-sm">
              Relax & Unwind
            </p>

            <h2 className="max-w-xl font-display text-4xl font-semibold leading-tight text-brand-deepBlue sm:text-5xl md:text-6xl">
              A Different Kind of Evening
            </h2>

            <p className="mt-5 text-base leading-8 text-brand-muted md:text-lg">
              Step away from the ordinary and enjoy a relaxed atmosphere at
              our Bush Bar. Settle into the comfortable lounge, enjoy a drink,
              challenge friends to a game or simply spend some time together.
            </p>

            <p className="mt-4 text-base leading-8 text-brand-muted md:text-lg">
              With its bamboo setting, greenery and laid back atmosphere, the
              Bush Bar gives guests a different way to enjoy their time at
              Nexus.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default BushBar;