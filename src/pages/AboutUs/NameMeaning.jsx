import Container from "../../components/Container";
import nexusLogo from "../../assets/images/nexus-logo.png";

const NameMeaning = () => {
  return (
    <section className="bg-brand-lightBlue py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Content */}
          <div>
            <p className="mb-4 inline-block bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue md:text-sm">
              Our Identity
            </p>

            <h2 className="font-display text-3xl font-semibold leading-tight text-brand-deepBlue sm:text-4xl md:text-5xl">
              The Story Behind Our Name
            </h2>

            <p className="mt-6 text-base leading-8 text-brand-muted md:text-lg">
              Nexus means a connection or meeting point. We chose the name to
              reflect the people and journeys that come together here. Xpress
              is inspired by the Airport Expressway, right beside the hotel in
              Lugbe, Abuja.
            </p>

            <p className="mt-5 text-base leading-8 text-brand-muted md:text-lg">
              Our location makes it convenient for guests travelling to and
              from the airport, as well as those visiting Abuja for business
              or leisure.
            </p>

            <p className="mt-5 text-base leading-8 text-brand-muted md:text-lg">
              The logo reflects these ideas through its aircraft, palm trees,
              sunset and sailboat. Together, they bring to mind travel, rest
              and relaxation, which are all part of the experience we want
              guests to enjoy at Nexus Xpress Hotel.
            </p>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md bg-white p-8 shadow-sm md:p-12">
              <img
                src={nexusLogo}
                alt="Nexus Xpress Hotel logo"
                className="mx-auto h-auto w-full max-w-xs object-contain"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default NameMeaning;