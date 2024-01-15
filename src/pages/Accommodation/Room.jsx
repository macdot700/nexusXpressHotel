import Container from "../../components/Container";
import Button from "../../components/Button";


const Room = ({title, description, img}) => {
  return (
    <Container className="h-full pb-10">
      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <div>
          <h1 className="text-2xl md:text-[2rem] font-bold mb-4 font-lato">
            {title}
          </h1>
          <p className="text-lg font-light">
        
          </p>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-6">
      <img src={img} alt={title} />    
        <div className="flex flex-col justify-between">
          <div>
          <h2 className="text-xl md:text-2xl font-bold font-lobster">Room Amenities</h2>
          <p className="text-lg font-light">{description}</p>
            </div>
            <Button text="Book Now"/>
        </div>
       
      </div>
    </Container>
  );
};

export default Room;
