import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Accommodation from "./pages/Accommodation";
import Room from "./pages/Accommodation/Room";
import standardRoom from "./assets/images/standardRoom.jpg";
import superiorRoom from "./assets/images/superiorRoom.jpg";
import deluxeRoom from "./assets/images/deluxeRoom.jpg";
import executiveRoom from "./assets/images/executiveRoom.jpg";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const rooms = [
  {
    path: "/accommodation/standard_room",
    title: "Standard Room",
    description:
      "The standard room is the most economic room at nexus and is designed with warmth and the  comfortability of our guest in mind, it's homely ambiance makes you feel welcomed. ",
    price: "₦20,000",
    img: standardRoom,
  },
  {
    path: "/accommodation/superior_room",
    title: "Superior Room",
    description:
      "The Superior room was designed with the 'traveler' in mind and enables you to unwind and relax comfortably with a feel of home.",
      price: "₦25,000",
    img: superiorRoom,
  },
  {
    path: "/accommodation/deluxe_room",
    title: "Deluxe Room",
    description:
      "The Deluxe room is Nexus' 'Diamond in the rough'; it's unassuming aesthetics makes for a memorable stay and comes with a complimentary breakfast.",
      price: "₦30,000",
      img: deluxeRoom,
  },
  {
    path: "/accommodation/executive_room",
    title: "Executive Room",
    description:
      "The Executive room is the ideal choice for astute visitors travelling for business or long stay. It's serene embrace and luxurious design will give you all the comfort you need while making your stay memorable. It comes with a complimentary breakfast. ",
      price: "₦40,000",
    img: executiveRoom,
  },
  {
    path: "/accommodation/suite",
    title: "Suite",
    description:
      "Nexus Suite is an absolute option for ambience and luxury brimming with contemporary charm and grandeur while you enjoy top-notch privacy and tranquility. It comes with a complimentary breakfast.",
      price: "₦45,000",
    img: executiveRoom,
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {rooms.map((route, idx) => <Route
            key={idx}
            path={route.path}
            element={
              <Accommodation
                title={route.title}
                children={
                  <Room
                    title={route.title}
                    description={route.description}
                    price={route.price}
                    img={route.img}
                  />
                }
              />
            }
          />
        )}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
