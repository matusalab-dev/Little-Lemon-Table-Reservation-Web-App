import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import useToggle from "../Hooks/useToggle";
import { NavLinkList } from "../components/NavList";
import Logo from "../components/Logo";
import hamburgerMenu from "../assets/icon _hamburger menu.svg";
import logoImage from "../assets/Logo-1.svg";

export const CommonNavbar = ({ className }) => {
  const { isToggled, handleIsToggled } = useToggle();

  const mergedClass = twMerge(
    "custom-container align-center flex h-20 justify-between bg-white text-primary-200 lg:blur-none",
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
          <Logo Logo={logoImage} className="xs:w-32" />
        </Link>
        <NavLinkList
          title="Log In"
          to="/log-in"
          className="  bg-primary-200 text-secondary-300 sm:px-3 sm:py-1 hidden self-center lg:-order-first  lg:inline-block"
        />

        {/* rendering the Desktop Nav List */}
        <ul className="max-w-1/2 text-sm space-x-2 lg:space-x-0  flex items-center justify-between font-secondary font-semibold capitalize">
          <li>
            <NavLinkList title="Home" to="/" className="flex lg:hidden mr-4">
              Home
            </NavLinkList>
          </li>
          <li>
            <NavLinkList
              title="Reservation"
              to="/reserve"
              className="flex lg:hidden"
            />
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

          {/* hamburger-menu navigation btn  */}
          <li>
            <span
              onClick={handleIsToggled}
              className="px-2 py-2 hidden rounded-sm bg-secondary-300  hover:cursor-pointer lg:flex"
            >
              <img
                src={hamburgerMenu}
                className="h-4 w-6"
                alt="mobile menu list button"
              />
            </span>
          </li>
        </ul>
      </nav>

      {/* Mobile-navigation */}
      <nav
        role="navigation"
        aria-label="Mobile Navigation"
        aria-hidden="true"
        // className="hidden"
      >
        <ul
          className={`${
            isToggled
              ? "translate-x-0 opacity-100"
              : "-translate-x-[100rem] opacity-80"
          } text-md  fixed left-0 top-0 z-40 w-[20rem] h-[calc(100vh-6rem)] overflow-auto   flex-col items-center justify-between pt-8 space-y-14 bg-secondary-300 text-primary-200 shadow-lg  font-secondary font-semibold capitalize  transition-all duration-[120ms] ease-in-out`}
        >
          <div className="flex justify-between items-center px-6 ">
            <Link to="/" className="self-center" onClick={handleIsToggled}>
              {/* <img src={Logo} className="h-10 w-36" alt="little lemon Logo" /> */}
              <Logo Logo={logoImage} className="w-40" />
            </Link>
            <button
              onClick={handleIsToggled}
              // className=" absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 text-secondary-300 transition-all hover:cursor-pointer"
              className="h-7 w-7 text-sm sm:w-6 sm:h-6 sm:text-xs sm:font-thin flex items-center  justify-center rounded-full font-thin bg-primary-200 text-secondary-300 transition-all hover:cursor-pointer"
            >
              X
            </button>
          </div>
          {/* rendering the Mobile Nav List */}
          <div className="space-y-7 sm:space-y-4 pb-8 overflow-auto">
            <li>
              <NavLinkList title="Home" to="/" className="flex pl-7" />
            </li>
            <li>
              <NavLinkList
                title="Reservation"
                to="/reserve"
                className="flex pl-7"
              />
            </li>

            <li>
              <NavLinkList
                title="Order Online"
                to="/order"
                className="flex pl-7"
              />
            </li>
            {/* <NavLinkList title="Log In" to="/log-in" className="flex pl-7" /> */}
          </div>
        </ul>
      </nav>
    </>
  );
};
