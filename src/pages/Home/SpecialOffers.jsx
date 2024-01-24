import Container from "../../components/Container";
import roomImg from "../../assets/images/room.jpg";

const SpecialOffers = () => {
  return (
    <div className="w-full bg-white">
      <Container className="max-w-[750px] text-center py-[100px]">
        <h2 className="text-2xl md:text-[2rem] font-bold mb-4 font-lato">Special Offers</h2>
        <p className="text-lg ">
        Enhance your stay with our exclusive packages and promotions. Whether you're planning a romantic getaway, a family vacation, or a weekend escape, our special offers add extra value to your stay.
        </p>
      </Container>
    </div>
  );
};

export default SpecialOffers;
