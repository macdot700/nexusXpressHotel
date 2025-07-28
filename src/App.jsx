import { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom"; // ⛔ removed HashRouter
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
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
import Reservation from "./pages/Reservation";
import ThankYouPage from "./pages/ThankYouPage";

// RedirectHandler (still okay to leave if needed)
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");
    if (redirectPath) {
      navigate(redirectPath);
    }
  }, [navigate]);

  return null;
}

const rooms = [
  {
    path: "/accommodation/standard_room",
    title: "Standard Room",
    description:
      "The Standard Room is our most affordable option at Nexus Xpress Hotel...",
    price: "₦25,000",
    img: standardRoom,
  },
  {
    path: "/accommodation/superior_room",
    title: "Superior Room",
    description:
      "The Superior Room was designed with the traveler in mind...",
    price: "₦30,000",
    img: superiorRoom,
  },
  {
    path: "/accommodation/deluxe_room",
    title: "Deluxe Room",
    description:
      "The Deluxe Room is Nexus Xpress Hotel’s diamond in the rough...",
    price: "₦35,000",
    img: deluxeRoom,
  },
  {
    path: "/accommodation/executive_room",
    title: "Executive Room",
    description:
      "The Executive Room is the most spacious and refined accommodation...",
    price: "₦40,000",
    img: executiveRoom,
  },
  {
    path: "/accommodation/suite",
    title: "Suite",
    description:
      "The Nexus Suite is the ultimate choice for ambience and luxury...",
    price: "₦45,000",
    img: executiveRoom,
  },
];

function App() {
  return (
    <>
      <RedirectHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {rooms.map((route, idx) => (
          <Route
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
        ))}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
