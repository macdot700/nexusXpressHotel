import Container from "../../components/Container";
import { Link } from "react-router-dom";
import RoomGallery from "../../components/RoomGallery";

const Room = ({
  title,
  description,
  weekdayPrice,
  weekendPrice,
  img,
  roomSize,
  bed,
  guests,
  breakfast = true,
  livingRoom,
  amenities = [],
  gallery = [],
}) => {
  return (
    <section className="bg-white py-8 md:py-10 lg:py-12">
      <Container>

        {/* Room heading */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-3 inline-block bg-brand-lightBlue px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue md:text-sm">
              Accommodation
            </p>

            <h1 className="font-display text-4xl font-semibold leading-tight text-brand-deepBlue sm:text-5xl md:text-6xl">
              {title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-brand-muted md:text-lg">
              {description}
            </p>
          </div>

          {/* Room rates */}
          <div className="border-l-4 border-brand-blue bg-brand-lightBlue px-5 py-4 lg:min-w-[220px]">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Room Rates
            </p>

            <div className="mt-2 space-y-1.5">
              <p className="text-sm text-brand-muted">
                Weekday
                <span className="ml-2 font-bold text-brand-deepBlue">
                  ₦{weekdayPrice}
                </span>
              </p>

              <p className="text-sm text-brand-muted">
                Weekend
                <span className="ml-2 font-bold text-brand-deepBlue">
                  ₦{weekendPrice}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Image and room details */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-10">

          
<div className="overflow-hidden">
  {gallery.length > 0 ? (
    <RoomGallery images={gallery} title={title} />
  ) : (
    <img
      src={img}
      alt={title}
      className="h-[340px] w-full object-cover sm:h-[430px] lg:h-[540px]"
    />
  )}
</div>


          <div className="flex flex-col">

            {/* Room details */}
            <div className="border border-gray-100 p-6 md:p-7">
              <h2 className="font-display text-3xl font-semibold text-brand-deepBlue">
                Room Details
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                    Room Size
                  </p>
                  <p className="mt-1 text-sm font-semibold text-brand-deepBlue">
                    {roomSize}
                  </p>
                </div>

                {livingRoom && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                      Living Room
                    </p>
                    <p className="mt-1 text-sm font-semibold text-brand-deepBlue">
                      {livingRoom}
                    </p>
                  </div>
                )}

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                    Bed
                  </p>
                  <p className="mt-1 text-sm font-semibold text-brand-deepBlue">
                    {bed}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                    Guests
                  </p>
                  <p className="mt-1 text-sm font-semibold text-brand-deepBlue">
                    Up to {guests}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                    Breakfast
                  </p>
                  <p className="mt-1 text-sm font-semibold text-brand-deepBlue">
                    {breakfast ? "1 guest included" : "Not included"}
                  </p>
                </div>

              </div>
            </div>

            {/* Booking button */}
            <Link
              to={`/reservation?room=${encodeURIComponent(title)}`}
              className="mt-5 flex items-center justify-center bg-brand-blue px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-deepBlue"
            >
              Book This Room
            </Link>

          </div>
        </div>

        {/* Amenities */}
        <div className="mt-10 border-t border-gray-100 pt-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">
              What's Included
            </p>

            <h2 className="font-display text-4xl font-semibold text-brand-deepBlue sm:text-5xl">
              Room Amenities
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden bg-gray-200 sm:grid-cols-3 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div
                key={amenity}
                className="bg-white px-5 py-4 text-sm font-medium text-brand-deepBlue"
              >
                {amenity}
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Room;