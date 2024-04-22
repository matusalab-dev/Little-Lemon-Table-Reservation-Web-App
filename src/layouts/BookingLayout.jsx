import { Outlet } from "react-router-dom";
import { CommonNavbar } from "../layouts/CommonNavBar";

export const BookingLayout = () => {
  return (
    <>
      <CommonNavbar />
      <Outlet />
    </>
  );
};
