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
const standardRoomGallery = [
  "/rooms/standard/Standard_Room_01.jpg",
  "/rooms/standard/Standard_Room_02.jpg",
  "/rooms/standard/Standard_Room_03.jpg",
  "/rooms/standard/Standard_Room_04.jpg",
  "/rooms/standard/Standard_Room_05.jpg",
  "/rooms/standard/Standard_Room_06.jpg",
  "/rooms/standard/Standard_Room_07.jpg",
  "/rooms/standard/Standard_Room_08.jpg",
];

const superiorRoomGallery = [
  "/rooms/superior/Superior_01.jpg",
  "/rooms/superior/Superior_02.jpg",
  "/rooms/superior/Superior_03.jpg",
  "/rooms/superior/Superior_04.jpg",
  "/rooms/superior/Superior_05.jpg",
  "/rooms/superior/Superior_06.jpg",
  "/rooms/superior/Superior_07.jpg",
  "/rooms/superior/Superior_08.jpg",
  "/rooms/superior/Superior_09.jpg",
  "/rooms/superior/Superior_10.jpg",
];

const deluxeRoomGallery = [
  "/rooms/deluxe/Deluxe_Room_01.jpg",
  "/rooms/deluxe/Deluxe_Room_02.jpg",
  "/rooms/deluxe/Deluxe_Room_03.jpg",
  "/rooms/deluxe/Deluxe_Room_04.jpg",
  "/rooms/deluxe/Deluxe_Room_05.jpg",
  "/rooms/deluxe/Deluxe_Room_06.jpg",
  "/rooms/deluxe/Deluxe_Room_07.jpg",
  "/rooms/deluxe/Deluxe_Room_08.jpg",
  "/rooms/deluxe/Deluxe_Room_09.jpg",
  "/rooms/deluxe/Deluxe_Room_10.jpg",
];

const executiveRoomGallery = [
  "/rooms/executive/Executive_Room_01.jpg",
  "/rooms/executive/Executive_Room_02.jpg",
  "/rooms/executive/Executive_Room_03.jpg",
  "/rooms/executive/Executive_Room_04.jpg",
  "/rooms/executive/Executive_Room_05.jpg",
  "/rooms/executive/Executive_Room_06.jpg",
  "/rooms/executive/Executive_Room_07.jpg",
  "/rooms/executive/Executive_Room_08.jpg",
  "/rooms/executive/Executive_Room_09.jpg",
];

const suiteGallery = [
  "/rooms/suite/Suite_01.jpg",
  "/rooms/suite/Suite_02.jpg",
  "/rooms/suite/Suite_03.jpg",
  "/rooms/suite/Suite_04.jpg",
  "/rooms/suite/Suite_05.jpg",
  "/rooms/suite/Suite_06.jpg",
  "/rooms/suite/Suite_07.jpg",
  "/rooms/suite/Suite_08.jpg",
  "/rooms/suite/Suite_09.jpg",
  "/rooms/suite/Suite_10.jpg",
];
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
      "A comfortable and practical room designed for a relaxing stay, with everything you need for a convenient visit to Abuja.",
    weekdayPrice: "28,000",
    weekendPrice: "25,000",
    img: standardRoom,
    roomSize: "10.9 sqm",
    bed: "4 × 6 ft",
    guests: 2,
    gallery: standardRoomGallery,
    amenities: [
      "Private Bathroom",
      "Air Conditioning",
      "Smart TV",
      "DSTV / Cable",
      "Refrigerator",
      "Wardrobe",
      "Work Desk / Table",
      "Hot Water",
      "WiFi",
      "Room Service",
      "Complimentary Breakfast",
      "Complimentary Toiletries",
    ],
  },

  {
    path: "/accommodation/superior_room",
    title: "Superior Room",
    description:
      "A more spacious room with a comfortable setting designed for guests who want a little more room to relax during their stay.",
    weekdayPrice: "33,000",
    weekendPrice: "30,000",
    img: superiorRoom,
    roomSize: "17.3 sqm",
    bed: "5 × 6 ft",
    guests: 2,
    gallery: superiorRoomGallery,
    amenities: [
      "Private Bathroom",
      "Air Conditioning",
      "Smart TV",
      "DSTV / Cable",
      "Refrigerator",
      "Wardrobe",
      "Work Desk / Table",
      "Hot Water",
      "WiFi",
      "Room Service",
      "Complimentary Breakfast",
      "Complimentary Toiletries",
    ],
  },

  {
    path: "/accommodation/deluxe_room",
    title: "Deluxe Room",
    description:
      "A spacious and comfortable room offering a relaxed environment with the amenities you need for a pleasant stay.",
    weekdayPrice: "38,000",
    weekendPrice: "35,000",
    img: deluxeRoom,
    roomSize: "20.3 sqm",
    bed: "6 × 6 ft",
    guests: 2,
    gallery: deluxeRoomGallery,
    amenities: [
      "Private Bathroom",
      "Air Conditioning",
      "Smart TV",
      "DSTV / Cable",
      "Refrigerator",
      "Wardrobe",
      "Work Desk / Table",
      "Hot Water",
      "WiFi",
      "Room Service",
      "Complimentary Breakfast",
      "Complimentary Toiletries",
    ],
  },

  {
    path: "/accommodation/executive_room",
    title: "Executive Room",
    description:
      "A generously sized room designed for guests who appreciate extra space and a comfortable setting for work or relaxation.",
    weekdayPrice: "43,000",
    weekendPrice: "40,000",
    img: executiveRoom,
    roomSize: "24.8 sqm",
    bed: "6 × 6 ft with Ottoman",
    guests: 2,
    gallery: executiveRoomGallery,
    amenities: [
      "Private Bathroom",
      "Air Conditioning",
      "Smart TV",
      "DSTV / Cable",
      "Refrigerator",
      "Wardrobe",
      "Work Desk / Table",
      "Hot Water",
      "WiFi",
      "Room Service",
      "Complimentary Breakfast",
      "Complimentary Toiletries",
    ],
  },

  {
    path: "/accommodation/nexus_suite",
    title: "Nexus Suite",
    description:
      "Our most spacious accommodation, combining a comfortable bedroom with a separate living room for guests who want additional space during their stay.",
    weekdayPrice: "45,000",
    weekendPrice: "43,000",
    img: deluxeRoom,
    roomSize: "20.3 sqm bedroom",
    livingRoom: "16.4 sqm",
    bed: "6 × 6 ft",
    guests: 3,
    gallery: suiteGallery,
    amenities: [
      "Separate Living Room",
      "2 Private Bathrooms",
      "2 Air Conditioners",
      "2 Smart TVs",
      "DSTV / Cable",
      "Refrigerator",
      "Microwave",
      "Wardrobe",
      "Work Desk / Table",
      "Hot Water",
      "WiFi",
      "Room Service",
      "Sofa",
      "2 Toilets",
      "Complimentary Breakfast",
      "Complimentary Toiletries",
    ],
  },
];

function App() {
  return (
    <>
      <RedirectHandler />
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />

  <Route path="/accommodation" element={<Accommodation />} />

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
  weekdayPrice={route.weekdayPrice}
  weekendPrice={route.weekendPrice}
  img={route.img}
  roomSize={route.roomSize}
  livingRoom={route.livingRoom}
  bed={route.bed}
  guests={route.guests}
  amenities={route.amenities}
  gallery={route.gallery}
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
