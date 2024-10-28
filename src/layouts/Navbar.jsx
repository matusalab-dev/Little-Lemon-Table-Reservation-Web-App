import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { NavLinkList } from "../components/NavList";
import { NavHashList } from "../components/NavList";
import Logo from "../components/Logo";
import logoImage from "../assets/Logo-1.svg";
import hamburgerMenu from "../assets/icon _hamburger menu.svg";
import useToggle from "../Hooks/useToggle";

export const Navbar = ({ className }) => {
  const { isToggled, handleIsToggled } = useToggle();

  // const links = [
  //   ["home", "/"],
  //   ["about", "/about"],
  //   ["menu", "/menu"],
  //   ["reservation", "/reserve"],
  //   ["order online", "/order"],
  //   ["log in", "/log-in"],
  // ];

  const mergedClass = twMerge(
    "custom-container align-center flex h-20 justify-between bg-white text-primary-200 lg:blur-none ",
    className
  );

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={mergedClass}
      >
        <Link to="/" className="self-center lg:-order-first lg:pl-8 sm:pl-0">
          <Logo Logo={logoImage} />
        </Link>
        {/* <a
          href="#"
          className="self-center hidden lg:-order-first lg:inline-block"
        >
          <span className="relative h-[10rem] w-[10rem]" title="Coming soon">
            <img src={cart} className="w-8 h-8 sm:w-8 " />
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full  -top-2 -right-3 bg-primary-100 text-primary-200">
              2
            </span>
          </span>
        </a> */}
        <NavLinkList
          title="Log In"
          to="/log-in"
          className="self-center hidden bg-primary-200 text-secondary-300 sm:px-3 sm:py-1 lg:-order-first lg:flex"
        />

        {/* rendering the Desktop Nav List */}
        <ul className="flex items-center justify-between space-x-2 text-sm font-semibold capitalize max-w-1/2 lg:space-x-0 font-secondary">
          <li>
            <NavLinkList
              title="Home"
              to="/"
              className="flex lg:hidden "
              // reloadDocument
            >
              Home
            </NavLinkList>
          </li>
          <li>
            <NavHashList title="Menu" href="#menu" className="flex lg:hidden" />
          </li>
          <li>
            <NavHashList
              title="About"
              href="#about"
              className="flex lg:hidden"
            />
          </li>

          <li>
            <NavLinkList
              title="Reservation"
              to="/reserve"
              className="flex lg:hidden"
            >
              Reservation
            </NavLinkList>
          </li>
          <li>
            <NavLinkList
              title="Order Online"
              to="/order-online"
              className="flex lg:hidden"
            />
          </li>
          <li>
            <NavLinkList
              title="Log In"
              to="/log-in"
              className="flex lg:hidden"
            />
          </li>

          {/* hamburger-menu btn */}
          <li>
            <span
              onClick={handleIsToggled}
              className="hidden px-2 py-2 rounded-sm lg:flex bg-secondary-300 hover:cursor-pointer "
            >
              <img
                src={hamburgerMenu}
                className="w-6 h-4 "
                alt="mobile menu list button"
              />
            </span>
          </li>
        </ul>
      </nav>

      {/* Mobile-navigation */}
      <nav role="navigation" aria-label="Mobile Navigation" aria-hidden="true">
        <ul
          className={`${
            isToggled
              ? "translate-x-0 opacity-100"
              : "-translate-x-[100rem] opacity-80 "
          } text-md fixed left-0 top-0 z-40 w-[20rem]  h-[calc(100vh-6rem)]  overflow-auto  flex-col items-center justify-between pt-8   space-y-14  bg-secondary-300 text-primary-200 shadow-lg font-secondary font-semibold capitalize  transition-all duration-[150ms] ease-out`}
        >
          <div className="flex items-center justify-between px-6 ">
            <Link to="/" className="self-center" onClick={handleIsToggled}>
              <Logo Logo={logoImage} className="w-40" />
            </Link>
            <button
              onClick={handleIsToggled}
              className="flex items-center justify-center text-sm font-thin transition-all rounded-full h-7 w-7 sm:w-6 sm:h-6 sm:text-xs bg-primary-200 text-secondary-300 hover:cursor-pointer"
            >
              X
            </button>
          </div>

          {/* rendering the Mobile Nav List */}
          <div className="pb-8 space-y-7 sm:space-y-4">
            <NavLinkList title="Home" to="/" className="flex pl-7" />
            <NavHashList
              title="Menu"
              href="#menu"
              className="flex pl-7"
              onClick={handleIsToggled}
            />
            <NavHashList
              title="About"
              href="#about"
              className="flex pl-7"
              onClick={handleIsToggled}
            />

            <NavLinkList
              title="Reservation"
              to="/reserve"
              className="flex pl-7"
            />
            <NavLinkList
              title="Order Online"
              to="/order"
              className="flex pl-7"
            />
            {/* <NavLinkList title="Log In" to={"/log-in"} className="flex pl-7" /> */}
          </div>
        </ul>
      </nav>
    </>
  );
};
