import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../Icons/Hamburger";
import NavClose from "../Icons/NavClose";
import Logo from "../../assets/images/logo.jpg";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/accommodation/standard_room", label: "Accommodation" },
  { href: "/contact-us", label: "Contact Us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixedNav, setFixedNav] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 221.41) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  });

  const fixedNavLinks = navLinks.toSpliced(2, 0, {
    href: "/",
    label: <img src={Logo} alt="nexus hotel" width={50} height={20} />,
  });
  return (
    <>
      <div className="bg-[#ffffff] text-black">
        <div className="z-10 w-full max-w-[1990px] px-4 sm:px-10 lg:px-[48px] m-auto">
          <div className="text-sm grid grid-cols-2 lg:grid-cols-3 justify-between items-center py-5">
            <div className="flex flex-col gap-1.5">
              <p>Nexus Xpress Hotel,</p>
              <p> 9, Okada Bridge Road, FHA, Lugbe, Abuja</p>
            </div>

            <NavLink to="/" className="hidden lg:flex justify-center">
              <img src={Logo} alt="nexus hotel" width={100} height={40} />
            </NavLink>
            <div className="flex flex-col justify-center items-end gap-1.5">
              <a
                href="tel:+234 806 779 2621"
                className=""
                target="_blank" rel="noopener noreferrer"
              >
                  {/* <img src={phone} width="15" height="15" /> */}
                <span>+234 806 779 2621</span>
              </a>
              <a
                href="mailto:nexusxpresshotel@gmail.com"
                target="_blank" rel="noopener noreferrer"
                className=""
              >
                {/* <img src={email} width="15" height="15" /> */}
                <span className="hidden lg:inline">nexusxpresshotel@gmail.com</span>
                <span className="inline lg:hidden">Send us a mail</span>
              </a>
            </div>
          </div>
          <div className="text-sm bg-white z-30 h-[40px] w-full">
            <nav className="flex justify-center items-center">
              <ul className="max-w-[600px] flex-1 flex justify-between items-center max-lg:hidden font-semibold">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "flex justify-center p-2 text-primary-blue"
                          : "flex justify-center p-2 text-[#000000]"
                      }
                      to={item.href}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div
                className="hidden max-lg:block cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <Hamburger />
              </div>
            </nav>
          </div>
        </div>
        {isMenuOpen && (
          <div>
            <nav className="z-40 bg-white fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto">
              <div
                className="hidden max-lg:block fixed right-0 px-8 py-4 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <NavClose />
              </div>
              <ul className="lg:hidden flex flex-col gap-6 items-center justify-center h-full">
                {navLinks.map((item) => (
              <li key={item.label} onClick={() => setIsMenuOpen(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-center p-2 text-primary-blue"
                    : "flex justify-center p-2 text-black"
                }
                to={item.href}
              >
                {item.label}
              </NavLink>
            </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
      <div
        className={`${
          isFixedNav ? "fixed" : "hidden"
        } bg-nav_bg top-0 w-full`}
      >

        <nav className="flex justify-center items-center">
          <ul className="m-auto grid grid-cols-5 justify-between justify-items-center items-center max-lg:hidden font-semibold">
          {/* <div className="grid grid-cols-2 justify-between gap-4"><li>Home</li><li>About Us</li></div> <li><img src={Logo} alt="nexus hotel" width={50} height={20} /></li> <div className="grid grid-cols-2 justify-between gap-4"><li>Accomodation</li><li>Contact Us</li></div> */}
          
            {fixedNavLinks.map((item, index) => (
              <li key={item.label}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex justify-center p-2 text-[#F3E5AB]"
                      : "flex justify-center p-2 text-white"
                  }
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="max-lg:flex md:hidden w-full justify-between bg-white px-2.5">
            <div>
              <img src={Logo} alt="nexus hotel" width={60} height={20} />
            </div>
            <button
              className="cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {" "}
              <Hamburger color="#1F5EF5"/>
            </button>

            {/* <RxHamburgerMenu className="text-4xl" /> */}
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
