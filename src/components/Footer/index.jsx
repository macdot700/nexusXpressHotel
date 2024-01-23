import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import Logo from "../../assets/images/logo2.jpg";
import { NavLink } from "react-router-dom";
import { navLinks } from "../Navbar/Navbar";
import location from "../../assets/images/location.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";

const Footer = () => {
  return (
      <div className="bg-blue-1 py-[63px] text-white px-4">
        <div className="max-w-[1200px] px-4 md:px-0 w-full m-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-6">
            <div className="max-w-[502px] flex flex-col justify-between">
              <div className="flex flex-col gap-6">
              <NavLink to="/">
                <img
                  src={Logo}
                  alt="nexus hotel"
                  className="mix-blend-plus-lighter"
                  width={100}
                  height={40}
                />
                </NavLink>
                <p className="text-sm max-w-[300px]">
                  Elevate your escape with luxury and charm at our hotel. Where
                  comfort meets sophistication, your unforgettable stay begins
                  here.
                </p>
              </div>
            </div>
            <ul className="flex flex-col justify-between items-start md:items-center">
              {navLinks.map((navItem, idx) => (
                <NavLink key={idx} to={navItem.href}>
                  {navItem.label}
                </NavLink>
              ))}
              <NavLink to={"/"}>Privacy Policy</NavLink>
            </ul>

            <div className="w-full flex flex-col justify-between gap-2">
                <p className="flex gap-4 items-center">
                  
                  <img src={location} width="15" height="15" />
                  <span>
                    Nexus Xpress Hotel, 9, Okada Bridge Road, FHA, Lugbe, Abuja
                  </span>
                </p>
                <a
                  href="tel:+234 806 779 2621"
                  className="flex gap-4 items-center"
                >
                  <img src={phone} width="15" height="15" />
                  <span>+234 806 779 2621</span>
                </a>
                <a
                  href="mailto:nexusxpresshotel@gmail.com"
                  className="flex gap-4 items-center"
                >
                <img src={email} width="15" height="15" />
                  <span className="">nexusxpresshotel@gmail.com</span>
                </a>
                <ul className="flex gap-4">
                  <a href="https://twitter.com/nexusxpress" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                  </a>
                  <a href="https://www.instagram.com/nexusxpresshotel?igsh=MWVhMXo5cXo1Zmx6ZA==" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                  </a>
                </ul>
              
            </div>
          </div>
        </div>
        <p className="text-xs my-10 text-center">Copyright 2023. All Rights reserved</p>
      </div>
  );
};

export default Footer;
