import { useEffect } from "react"

import HeroSection from "./HeroSection";
import standardRoom from "../../assets/images/standardRoom.jpg";
import superiorRoom from "../../assets/images/superiorRoom.jpg";
import deluxeRoom from "../../assets/images/deluxeRoom.jpg";
import executiveRoom from "../../assets/images/executiveRoom.jpg";
import RoomCard from "../../components/RoomCard";
import { routeConverter } from "../../utils";

const rooms = [
  {
    title: "Standard Room",
    img: standardRoom,
    price: "25,000",
  },
  {
    title: "Superior Room",
    img: superiorRoom,
    price: "30,000",
  },
  {
    title: "Deluxe Room",
    img: deluxeRoom,
    price: "35,000",
  },
  {
    title: "Executive Room",
    img: executiveRoom,
    price: "40,000",
  },
  {
    title: "Suite",
    img: deluxeRoom,
    price: "45,000",
  },
];
const Accommodation = ({ children, title }) => {
  useEffect(()=>{
    window.scroll(0, 0)
}, [])
  return (
    <div>
      <HeroSection />
      <div className="py-20">
        {children}
        <p className="text-lg  max-w-[750px] text-center mt-[100px] m-auto">
          Secure your accommodation today and indulge in a realm of unmatched
          hospitality. We eagerly anticipate hosting you at Nexus Xpress Hotel,
          your "home away from home." Our team comprises some of the most
          welcoming individuals dedicated to ensuring your comfort during your
          stay with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 max-w-[1990px] px-4 sm:px-10 lg:px-[48px] m-auto">
          {rooms.map((room, idx) => {
            return room.title !== title ? (
              <RoomCard key={idx} {...room} link={routeConverter(room.title)} />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
