import { Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import { Specials } from "../pages/Specials";
import { CustomerSay } from "../pages/CustomerSay";
import { Footer } from "../pages/Footer";
import { Chicago } from "../pages/Chicago";
import { Navbar } from "./Navbar";

export const HomeLayout = () => {
  return (
    <>
      <Navbar />

      <Home />
      <Specials />
      <CustomerSay />
      <Chicago />
      <Footer />
      <Outlet />
    </>
  );
};
