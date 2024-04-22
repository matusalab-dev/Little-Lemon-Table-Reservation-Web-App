import { Outlet } from "react-router-dom";
import { Specials } from "../components/Specials";
import { CustomerSay } from "../components/CustomerSay";
import { Chicago } from "../components/Chicago";
import { HeroSection } from "../components/Hero";
import { Navbar } from "./Navbar";

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Specials />
      <CustomerSay />
      <Chicago />
      {/* <Footer /> */}
      <Outlet />
    </>
  );
};
