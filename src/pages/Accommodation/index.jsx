import { useEffect } from "react";

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
    weekdayPrice: "28,000",
    weekendPrice: "25,000",
  },
  {
    title: "Superior Room",
    img: superiorRoom,
    weekdayPrice: "33,000",
    weekendPrice: "30,000",
  },
  {
    title: "Deluxe Room",
    img: deluxeRoom,
    weekdayPrice: "38,000",
    weekendPrice: "35,000",
  },
  {
    title: "Executive Room",
    img: executiveRoom,
    weekdayPrice: "43,000",
    weekendPrice: "40,000",
  },
  {
    title: "Nexus Suite",
    img: deluxeRoom,
    weekdayPrice: "45,000",
    weekendPrice: "43,000",
  },
];

const Accommodation = ({ children, title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isRoomPage = Boolean(title);

  return (
    <div>
      <HeroSection />

      {isRoomPage ? (
        <div className="py-10 md:py-14 lg:py-16">
          {children}

          <div className="mx-auto mt-10 grid max-w-[1990px] grid-cols-1 gap-6 px-4 sm:px-10 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
            {rooms.map((room) => {
              if (room.title === title) return null;

              return (
                <RoomCard
                  key={room.title}
                  {...room}
                  link={`/accommodation/${routeConverter(room.title)}`}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <section className="bg-white py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[1990px] px-4 sm:px-10 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 inline-block bg-brand-lightBlue px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">
                Find Your Room
              </p>

              <h2 className="font-display text-4xl font-semibold leading-tight text-brand-deepBlue sm:text-5xl md:text-6xl">
                Comfort for Every Stay
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-muted md:text-lg">
                Choose from our range of comfortable rooms, each designed to
                give you a relaxing stay with the essential amenities you need.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {rooms.map((room) => (
                <RoomCard
                  key={room.title}
                  {...room}
                  link={`/accommodation/${routeConverter(room.title)}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Accommodation;