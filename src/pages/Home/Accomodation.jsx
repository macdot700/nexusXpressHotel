import { NavLink } from "react-router-dom";
import Container from "../../components/Container";
import standardRoom from "../../assets/images/standardRoom.jpg";
import superiorRoom from "../../assets/images/superiorRoom.jpg";
import deluxeRoom from "../../assets/images/deluxeRoom.jpg";

const rooms = [
  {
    name: "Standard Room",
    image: standardRoom,
    weekday: "₦28,000",
    weekend: "₦25,000",
    link: "/accommodation/standard_room",
  },
  {
    name: "Superior Room",
    image: superiorRoom,
    weekday: "₦33,000",
    weekend: "₦30,000",
    link: "/accommodation/superior_room",
  },
  {
    name: "Deluxe Room",
    image: deluxeRoom,
    weekday: "₦38,000",
    weekend: "₦35,000",
    link: "/accommodation/deluxe_room",
  },
];

const Accomodation = () => {
  return (
    <section className="bg-white pb-12 pt-4 md:pb-14 md:pt-6 lg:pb-16 lg:pt-8">
      <Container>

        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block bg-brand-lightBlue px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-deepBlue">
            Our Accommodation
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-brand-deepBlue sm:text-5xl md:text-6xl">
            Rooms Made for Your Comfort
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-brand-muted md:text-lg">
            Choose from our range of comfortable rooms, thoughtfully designed
            to give you a relaxing and convenient stay.
          </p>

        </div>

        {/* Room cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {rooms.map((room) => (
            <div
              key={room.name}
              className="overflow-hidden border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <img
                src={room.image}
                alt={room.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-7">

                <h3 className="font-display text-3xl font-semibold text-brand-deepBlue">
                  {room.name}
                </h3>

                <div className="mt-6 flex items-end justify-between gap-6">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                      Weekday
                    </p>

                    <p className="mt-2 text-xl font-bold text-brand-deepBlue">
                      {room.weekday}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                      Weekend
                    </p>

                    <p className="mt-2 text-xl font-bold text-brand-deepBlue">
                      {room.weekend}
                    </p>
                  </div>

                </div>

                <NavLink
                  to={room.link}
                  className="mt-7 flex items-center justify-center border border-brand-deepBlue px-6 py-4 text-sm font-bold uppercase tracking-widest text-brand-deepBlue transition-colors duration-300 hover:bg-brand-deepBlue hover:text-white"
                >
                  View Room
                </NavLink>

              </div>
            </div>
          ))}

        </div>

        {/* View all rooms */}
        <div className="mt-8 text-center">
          <NavLink
            to="/accommodation"
            className="inline-flex bg-brand-blue px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-deepBlue"
          >
            View All Rooms
          </NavLink>
        </div>

      </Container>
    </section>
  );
};

export default Accomodation;