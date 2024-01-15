import Container from "../../components/Container";
import executiveRoom from "../../assets/images/executiveRoom.jpg";

import { Link } from "react-router-dom";

const Accomodation = () => {
  return (
    <div className="bg-grey-1 w-full">
      <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-[50px]">
        <div className="order-2 md:order-1">
          <Link to={"/accommodation/standard_room"}><h2 className="text-2xl md:text-[2rem] font-bold mb-4 font-lato hover:text-primary-blue">Accommodation</h2></Link>
          <p className="text-lg font-light">
            Indulge in the epitome of comfort with our elegantly appointed rooms
            and suites. Each room is thoughtfully designed to provide a tranquil
            retreat, featuring modern amenities, plush furnishings, and
            breathtaking views of Lugbe. Whether you're here for a quick
            business trip or a relaxing vacation, our accommodations are
            tailored to meet your every need.
          </p>
        </div>
        <div className="text-center order-1 md:order-2">
          <img src={executiveRoom} className="w-full" />
        </div>
      </Container>
    </div>
  );
};

export default Accomodation;
