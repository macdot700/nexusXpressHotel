import HeroSection from "./HeroSection";
import standardRoom from "../../assets/images/standardRoom.jpg";
import superiorRoom from "../../assets/images/superiorRoom.jpg";
import deluxeRoom from "../../assets/images/deluxeRoom.jpg";
import executiveRoom from "../../assets/images/executiveRoom.jpg";
import RoomCard from "../../components/RoomCard";
import { routeConverter } from "../../utils";

const rooms = [{
    title: "Standard Room",
    img: standardRoom,
    price: "150,000"
}, {
    title: "Superior Room",
    img: superiorRoom,
    price: "150,000"
}, {
    title: "Deluxe Room",
    img: deluxeRoom,
    price: "150,000"
}, {
    title: "Executive Room",
    img: executiveRoom,
    price: "150,000"
}, {
    title: "Living Room",
    img: deluxeRoom,
    price: "150,000"
}]
const Accommodation = ({ children, title }) => {
  return (
    <div>
      <HeroSection />
      <div className="py-20">
        {children}
        <p className="text-lg font-light max-w-[750px] text-center mt-[100px] m-auto">
          Book your stay now and immerse yourself in a world of unparalleled
          hospitality. We look forward to welcoming you to your home away from
          home. Nexus Xpress. We also brought together some of the nicest
          persons to take care of you while you stay with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 px-4">
        {rooms.map((room, idx)=>{return room.title !== title ?  <RoomCard key={idx} {...room} link={routeConverter(room.title)} /> : null})}
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
