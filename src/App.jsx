import { useEffect } from "react";
import { useNavigate, Routes, Route, BrowserRouter } from "react-router-dom";
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

// RedirectHandler to support static hosting
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
      "The Standard Room is our most affordable option at Nexus Xpress Hotel, thoughtfully designed to offer comfort, warmth, and a homely atmosphere. It features a 4x6 bed, smart TV, complimentary breakfast for one guest, free beverages and bottled water, air conditioning, a private bathroom, and high-speed Wi-Fi.",
    price: "₦25,000",
    img: standardRoom,
  },
  {
    path: "/accommodation/superior_room",
    title: "Superior Room",
    description:
      "The Superior Room was designed with the traveler in mind, offering a warm and relaxing space that feels like home. It features a 5x6 bed, smart TV, complimentary breakfast for one guest, free beverages and bottled water, air conditioning, a private bathroom, and high-speed Wi-Fi.",
    price: "₦30,000",
    img: superiorRoom,
  },
  {
    path: "/accommodation/deluxe_room",
    title: "Deluxe Room",
    description:
      "The Deluxe Room is Nexus Xpress Hotel’s diamond in the rough. Its simple yet elegant design creates a memorable and comfortable stay. It features a 6x6 bed, smart TV, complimentary breakfast for one guest, free beverages and bottled water, air conditioning, a private bathroom, and high-speed Wi-Fi.",
    price: "₦35,000",
    img: deluxeRoom,
  },
  {
    path: "/accommodation/executive_room",
    title: "Executive Room",
    description:
      "The Executive Room is the most spacious and refined accommodation at Nexus Xpress Hotel, ideal for business travelers or long stays. Its serene atmosphere, generous layout, and luxurious finish provide unmatched comfort and a truly memorable experience. It features a large bed, smart TV, complimentary breakfast for one guest, free beverages and bottled water, air conditioning, a private bathroom, and high-speed Wi-Fi.",
    price: "₦40,000",
    img: executiveRoom,
  },
  {
    path: "/accommodation/suite",
    title: "Suite",
    description:
      "The Nexus Suite is the ultimate choice for ambience and luxury, brimming with contemporary charm and grandeur while offering top notch privacy and tranquility. It features a separate bedroom and living room with a long sofa, two chairs, two smart TVs, two air conditioners, and two bathrooms. Guests also enjoy a complimentary breakfast for 1 person, free beverages and bottled water, and high-speed Wi-Fi.",
    price: "₦45,000",
    img: executiveRoom,
  },
];

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
