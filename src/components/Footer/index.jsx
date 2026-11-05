
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
    <footer className="bg-blue-1 px-4 pt-6 pb-3 text-white md:pt-7 md:pb-4">
      <div className="mx-auto w-full max-w-[1990px] px-4 sm:px-10 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3 md:gap-8 lg:gap-14">

          {/* Hotel */}
          <div>
            <NavLink to="/">
              <img
                src={Logo}
                alt="Nexus Xpress Hotel"
                className="mix-blend-plus-lighter"
                width={100}
                height={40}
              />
            </NavLink>

            <p className="mt-4 max-w-[340px] text-sm leading-6 text-white/70">
              Comfortable rooms, warm hospitality and convenient access to the
              airport and major routes into Abuja.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-2.5 text-sm text-white/75">
              {navLinks.map((navItem, idx) => (
                <li key={idx}>
                  <NavLink
                    to={navItem.href}
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {navItem.label}
                  </NavLink>
                </li>
              ))}

              <li>
                <NavLink
                  to="/privacy_policy"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Privacy Policy
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/hotel-policies"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Hotel Policies & House Rules
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact Us
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/75">

              <p className="flex items-start gap-4">
                <img
                  src={location}
                  alt=""
                  width="15"
                  height="15"
                  className="mt-1 shrink-0"
                />

                <span>
                  Plot 454, Cadastral Zone 07-07, Okada Bridge Road, Phase 1,
                  FHA, Lugbe, Abuja, Nigeria.
                </span>
              </p>

              <a
                href="tel:+2348067792621"
                className="flex items-center gap-4 transition-colors duration-300 hover:text-white"
              >
                <img
                  src={phone}
                  alt=""
                  width="15"
                  height="15"
                  className="shrink-0"
                />

                <span>+234 806 779 2621</span>
              </a>

              <a
                href="mailto:nexusxpresshotel@gmail.com"
                className="flex items-center gap-4 transition-colors duration-300 hover:text-white"
              >
                <img
                  src={email}
                  alt=""
                  width="15"
                  height="15"
                  className="shrink-0"
                />

                <span>nexusxpresshotel@gmail.com</span>
              </a>

              <div className="flex gap-4 pt-1">
                <a
                  href="https://twitter.com/nexusxpress"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nexus Xpress Hotel on Twitter"
                >
                  <Twitter />
                </a>

                <a
                  href="https://www.instagram.com/nexusxpresshotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nexus Xpress Hotel on Instagram"
                >
                  <Instagram />
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-white/10 pt-3">
          <p className="text-center text-xs text-white/50">
            © {new Date().getFullYear()} Nexus Xpress Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
