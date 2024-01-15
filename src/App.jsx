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

const rooms = [
  {
    path: "/accommodation/standard_room",
    title: "Standard Room",
    description:
      "The Standard Room is the most economic room at Nexus, has a size of 10.9sqm.designed for the business traveler. It's designed for a couple or economic traveller, whose preference is privacy and comfort.",
    img: standardRoom,
  },
  {
    path: "/accommodation/superior_room",
    title: "Superior Room",
    description:
      "The Superior Room is the most economic room at Nexus, has a size of 10.9sqm.designed for the business traveler. It's designed for a couple or economic traveller, whose preference is privacy and comfort.",
    img: superiorRoom,
  },
  {
    path: "/accommodation/deluxe_room",
    title: "Deluxe Room",
    description:
      "The Deluxe Room is the most economic room at Nexus, has a size of 10.9sqm.designed for the business traveler. It's designed for a couple or economic traveller, whose preference is privacy and comfort.",
    img: deluxeRoom,
  },
  {
    path: "/accommodation/executive_room",
    title: "Executive Room",
    description:
      "The Executive Room is the most economic room at Nexus, has a size of 10.9sqm.designed for the business traveler. It's designed for a couple or economic traveller, whose preference is privacy and comfort.",
    img: executiveRoom,
  },
  {
    path: "/accommodation/suite",
    title: "Suite",
    description:
      "The Suite is the most economic room at Nexus, has a size of 10.9sqm.designed for the business traveler. It's designed for a couple or economic traveller, whose preference is privacy and comfort.",
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
                    img={route.img}
                  />
                }
              />
            }
          />
        )}
        {/* <Route
          path="/accommodation/standard_room"
          element={
            <Accommodation
              title="Standard Room"
              children={
                <Room
                  title="Standard Room"
                  description={
                    "The Standard Room is the most economic room at Nexus, has a size of 10.9sqm.designed for the business traveler. It's designed for a couple or economic traveller, whose preference is privacy and comfort."
                  }
                  img={standardRoom}
                />
              }
            />
          }
        /> */}
        {/* <Route
          path="/accommodation/superior_room"
          element={
            <Accommodation
              title="Superior Room"
              children={
                <Room
                  title="Superior Room"
                  description={
                    "The Superior Room is the most economic room at Nexus, has a size of 10.9sqm.designed for the business traveler. It's designed for a couple or economic traveller, whose preference is privacy and comfort."
                  }
                  img={superiorRoom}
                />
              }
            />
          }
        />
        <Route
          path="/accommodation/deluxe_room"
          element={
            <Accommodation
              title="Deluxe Room"
              children={
                <Room
                  title="Deluxe Room"
                  description={
                    "The Deluxe Room is the most economic room at Nexus, has a size of 10.9sqm.designed for the business traveler. It's designed for a couple or economic traveller, whose preference is privacy and comfort."
                  }
                  img={deluxeRoom}
                />
              }
            />
          }
        />
        <Route
          path="/accommodation/executive_room"
          element={
            <Accommodation
              title="Executive Room"
              children={
                <Room
                  title="Executive Room"
                  description={
                    "The Executive Room is the most economic room at Nexus, has a size of 10.9sqm.designed for the business traveler. It's designed for a couple or economic traveller, whose preference is privacy and comfort."
                  }
                  img={executiveRoom}
                />
              }
            />
          }
        /> */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
