import Container from "../../components/Container";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Room = ({ title, description, price, img }) => {
  return (
    <Container className="h-full pb-10">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
        <div>
          <div className="flex justify-between">
            <h1 className="text-2xl md:text-[2rem] font-bold mb-4 font-lato">
              {title}
            </h1>
            <p className="text-lg">
              <span className="hidden md:inline">From</span>{" "}
              <span className="font-medium text-book">{price}</span>
              <span className="font-medium">/night</span>
            </p>
          </div>

          <p className="text-lg "></p>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
        <img src={img} alt={title} className="w-full" />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-lobster">
              Room Amenities
            </h2>
            <p className="text-lg ">{description}</p>
          </div>

          {/* Book Now Button that links to the reservation form */}
          <Link
            to="/reservation"
            className="text-center mt-4 px-6 py-4 bg-book hover:text-book hover:bg-white transition ease-in-out delay-150 font-medium text-white shadow-xs rounded-md"
          >
            Book Now
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Room;
