import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/nexus-logo.png";
import WhiteLogo from "../../assets/images/nexus-logo-white.png";
import Hamburger from "../Icons/Hamburger";
import NavClose from "../Icons/NavClose";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/accommodation", label: "Accommodation" },
  { href: "/contact-us", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50">

      {/* Top information bar */}
      <div className="hidden border-b border-brand-lightBlue bg-brand-lightBlue lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-sm text-brand-muted">

          Plot 454, Cadastral Zone 07-07, Okada Bridge Road, Phase 1, F.H.A, Lugbe, Abuja, Nigeria.

          <div className="flex items-center gap-8">
            <a
              href="tel:+2348067792621"
              className="transition-colors hover:text-brand-blue"
            >
              +234 806 779 2621
            </a>

            <a
              href="mailto:nexusxpresshotel@gmail.com"
              className="transition-colors hover:text-brand-blue"
            >
              nexusxpresshotel@gmail.com
            </a>
          </div>

        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "fixed left-0 right-0 top-0 bg-brand-deepBlue shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="flex h-[60px] items-center justify-between">

            {/* Mobile logo */}
            <NavLink
              to="/"
              className="flex items-center lg:hidden"
            >
              <img
                src={Logo}
                alt="Nexus Xpress Hotel"
                className="h-12 w-auto object-contain"
              />
            </NavLink>

            {/* Desktop navigation */}
            <nav className="hidden w-full items-center justify-center lg:flex">

              <div className="flex items-center gap-6">

                {/* Left navigation links */}
                {navLinks.slice(0, 2).map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `text-base font-semibold tracking-wide transition-colors ${
                        isActive
                          ? isScrolled
                            ? "text-brand-coral"
                            : "text-brand-blue"
                          : isScrolled
                            ? "text-white hover:text-brand-coral"
                            : "text-brand-deepBlue hover:text-brand-blue"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                {/* Centre logo */}
                <NavLink
                  to="/"
                  className="mx-4 flex h-[60px] items-center"
                >
                  <img
                    src={isScrolled ? WhiteLogo : Logo}
                    alt="Nexus Xpress Hotel"
                    className="h-14 w-auto object-contain"
                  />
                </NavLink>

                {/* Right navigation links */}
                {navLinks.slice(2).map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `text-base font-semibold tracking-wide transition-colors ${
                        isActive
                          ? isScrolled
                            ? "text-brand-coral"
                            : "text-brand-blue"
                          : isScrolled
                            ? "text-white hover:text-brand-coral"
                            : "text-brand-deepBlue hover:text-brand-blue"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                {/* Book Now */}
                <NavLink
                  to="/reservation"
                  className={`ml-1 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors ${
                    isScrolled
                      ? "bg-brand-blue hover:bg-brand-purple"
                      : "bg-brand-blue hover:bg-brand-deepBlue"
                  }`}
                >
                  Book Now
                </NavLink>

              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label="Open navigation menu"
            >
              <Hamburger
                color={isScrolled ? "#FFFFFF" : "#0E2575"}
              />
            </button>

          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-brand-deepBlue">

          {/* Mobile menu header */}
          <div className="flex h-20 items-center justify-between px-6">

            <NavLink
              to="/"
              onClick={closeMenu}
              className="flex items-center"
            >
              <img
                src={WhiteLogo}
                alt="Nexus Xpress Hotel"
                className="h-12 w-auto object-contain"
              />
            </NavLink>

            <button
              type="button"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center"
              aria-label="Close navigation menu"
            >
              <NavClose />
            </button>

          </div>

          {/* Mobile navigation */}
          <nav className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">

            <ul className="flex w-full max-w-sm flex-col items-center gap-7">

              {navLinks.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `text-xl font-semibold tracking-wide transition-colors ${
                        isActive
                          ? "text-brand-coral"
                          : "text-white hover:text-brand-coral"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}

              <li className="pt-3">
                <NavLink
                  to="/reservation"
                  onClick={closeMenu}
                  className="inline-flex bg-brand-blue px-9 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-purple"
                >
                  Book Now
                </NavLink>
              </li>

            </ul>

          </nav>
        </div>
      )}

    </header>
  );
};

export default Navbar;