import Container from "../../components/Container";
const HeroSection = () => {
  return (
    <div className="h-[70vh] bg-home_hero_bg bg-cover bg-center	w-full">
     <Container className="h-full flex items-end pb-10">
      <h1 className="text-white font-lobster text-2xl md:text-[3rem]">
        Nexus Xpress Hotel, feel the warmth of home away from home.
      </h1>
      </Container>
    </div>
  );
};

export default HeroSection;
