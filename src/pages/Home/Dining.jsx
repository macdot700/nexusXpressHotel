import Container from "../../components/Container";
import dining from "../../assets/images/dining.jpg";

import { Link } from "react-router-dom";

const Dining = () => {
  return (
    <div className="bg-white w-full grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center gap-10">
      {/* <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-[50px]"> */}
      <div className="text-center">
          <img src={dining} className="w-full" />
        </div>
        <div className="max-w-[560px] m-auto">
          <h2 className="text-2xl md:text-[2rem] font-bold mb-4 font-lato">Dinning</h2>
          <p className="text-lg font-light pb-10 md:pb-0">
          At Nexus Xprees Hotel, we understand that dining is an integral part of your overall experience. Our elegant dining area is carefully curated to create a warm and inviting atmosphere, perfect for enjoying a delightful meal with family, friends, or colleagues. The centerpiece of our dining experience is the exquisite dinning table, where memories are made, and conversations flow seamlessly.
          </p>
        </div>
     
      {/* </Container> */}
    </div>
  );
};

export default Dining;
