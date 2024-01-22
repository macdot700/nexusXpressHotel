import Container from "../../components/Container";
import welcomeImg from "../../assets/images/welcome.jpg";
import arrow from "../../assets/images/arrow.jpeg";

const Welcome = () => {
  return (
    <div className="bg-grey-1 w-full">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 py-[50px]">
        <div className="">
          <img src={welcomeImg} className="w-full"/>
        </div>
        {/* <div className="flex justify-center items-start">
          <img src={arrow} alt="" width={100} className="rotate-90 md:rotate-0"/>
        </div> */}
        <div className="font-opensans flex flex-col gap-5">
        <p  className="">
          {/* Welcome to */}
           <span className="text-2xl md:text-[2rem] font-semibold font-lato">Nexus Hotel,</span> <span className="text-opensans font-light">Your Home Away From Home! Discover a world of
          luxury, comfort, and impeccable service at Nexus Hotel. Nestled in the
          heart of Abuja, our hotel offers a perfect blend of sophistication and
          warmth, making it an ideal choice for both business and leisure
          travelers. </span>
        </p>
        <p className="font-light">
        Take advantage of our prime location to explore the vibrant surroundings of Abuja. Our concierge team is here to help you plan exciting excursions, recommend local attractions, and ensure that your stay is filled with memorable experiences.
        </p>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
