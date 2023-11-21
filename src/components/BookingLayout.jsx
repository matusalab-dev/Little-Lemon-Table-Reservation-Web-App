import { Outlet, Link } from "react-router-dom";
import { CommonNavbar } from "./CommonNavBar";

export const BookingLayout = () => {
  return (
    <>
      <CommonNavbar />
      <Outlet />
    </>
  );
};
