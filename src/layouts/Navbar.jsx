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
        <Link to="/" className="self-center  lg:-order-first lg:pl-8 sm:pl-0">
          <Logo Logo={logoImage} />
        </Link>
        {/* <a
          href="#"
          className="hidden self-center lg:-order-first  lg:inline-block"
        >
          <span className="relative h-[10rem] w-[10rem]" title="Coming soon">
            <img src={cart} className="h-8 w-8 sm:w-8 " />
            <span className=" absolute -top-2 -right-3 flex h-6 w-6  items-center justify-center rounded-full bg-primary-100 text-primary-200">
              2
            </span>
          </span>
        </a> */}
        <NavLinkList
          title="Log In"
          to="/log-in"
          className="bg-primary-200 text-secondary-300 sm:px-3 sm:py-1 hidden self-center lg:-order-first  lg:flex"
        />

        {/* rendering the Desktop Nav List */}
        <ul className="max-w-1/2 space-x-2 lg:space-x-0 text-sm   flex items-center justify-between font-secondary font-semibold capitalize">
          <li>
            <NavLinkList
              title="Home"
              to="/"
              className="flex lg:hidden
            "
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
              to="/order"
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
              className="px-2 py-2 lg:flex  hidden rounded-sm bg-secondary-300  hover:cursor-pointer "
            >
              <img
                src={hamburgerMenu}
                className="h-4 w-6 "
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
          <div className="flex justify-between items-center px-6 ">
            <Link to="/" className="self-center" onClick={handleIsToggled}>
              <Logo Logo={logoImage} className="w-40" />
            </Link>
            <button
              onClick={handleIsToggled}
              className="h-7 w-7 text-sm sm:w-6 sm:h-6 sm:text-xs font-thin flex items-center  justify-center rounded-full  bg-primary-200 text-secondary-300 transition-all hover:cursor-pointer"
            >
              X
            </button>
          </div>

          {/* rendering the Mobile Nav List */}
          <div className="space-y-7 sm:space-y-4 pb-8">
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
