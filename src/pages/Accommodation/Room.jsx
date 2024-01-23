import Container from "../../components/Container";
import Button from "../../components/Button";

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
              <span className="hidden md:inline">From</span> <span className="font-medium">{price}</span>/night
            </p>
          </div>

          <p className="text-lg font-light"></p>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
        <img src={img} alt={title} />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-lobster">
              Room Amenities
            </h2>
            <p className="text-lg font-light">{description}</p>
          </div>
          <a
            href="https://wa.me/qr/ENYDU7YZMWXRF1"
            target="_blank"
            className="text-center px-6 py-4 bg-book hover:text-book hover:bg-white transition ease-in-out delay-150 font-medium text-white shadow-xs"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
          {/* <Button text="Book now" onClick={window.open("url", '_blank')} /> */}
        </div>
      </div>
    </Container>
  );
};

export default Room;
