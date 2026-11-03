import { Link } from "react-router-dom";

const RoomCard = ({
  img,
  title,
  weekdayPrice,
  weekendPrice,
  link,
}) => {
  return (
    <div className="group overflow-hidden border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <Link to={link}>
        <div className="overflow-hidden">
          <img
            src={img}
            alt={title}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="font-display text-3xl font-semibold text-brand-deepBlue">
            {title}
          </h3>

          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Weekday
              </p>
              <p className="mt-1 text-lg font-bold text-brand-deepBlue">
                ₦{weekdayPrice}
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Weekend
              </p>
              <p className="mt-1 text-lg font-bold text-brand-deepBlue">
                ₦{weekendPrice}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center border border-brand-deepBlue px-5 py-3 text-sm font-bold uppercase tracking-widest text-brand-deepBlue transition-colors duration-300 group-hover:bg-brand-deepBlue group-hover:text-white">
            View Room
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RoomCard;