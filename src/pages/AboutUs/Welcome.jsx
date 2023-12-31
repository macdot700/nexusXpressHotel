import Container from "../../components/Container";
import welcomeImg from "../../assets/images/welcome.jpg";
import arrow from "../../assets/images/arrow.jpeg";

const Welcome = () => {
  return (
    <div className="w-full">
      <Container className="py-[50px]">
        <h2 className="text-2xl">Nexus Xpress Hotel</h2>

        <p className="leading-[30px] mt-4">
          Nexus Xpress Hotel is conveniently located in a safe and secured
          environment at Federal Housing Authority (FHA) Lugbe, Abuja. It has a
          close proximity to the Nnamdi Azikiwe International Airport (25
          minutes drive) and 15 minutes drive to the city center. Our purpose is
          to redefine hospitality in Lugbe and its environs by offering an
          affordable and seamless blend of contemporary luxury and “warmth”
          mirroring home. With an array of 26 beautifully furnished rooms with
          facilities to make your stay comfortable we offer impeccable services
          to our guests such as 24/7 electricity, a cyber cafe center, laundry
          services, 24/7 restaurant with tasteful homemade meals, bush bar and
          in-house car hire services. Our dedicated staff is always ready to
          make your stay a most memorable one as they are trained to assist our
          guests with special needs as much as possible while respecting our
          guest’s privacy. At our hotel we are driven by a purpose to redefine
          hospitality with commitment to excellent service and top notch
          customer satisfaction.
        </p>
      </Container>
    </div>
  );
};

export default Welcome;
