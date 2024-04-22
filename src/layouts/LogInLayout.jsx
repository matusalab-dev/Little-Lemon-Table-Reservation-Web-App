import { Outlet } from "react-router-dom";
import { CommonNavbar } from "../layouts/CommonNavBar";
// import { useState } from "react";

export const LogInLayout = () => {
  // const [toggle, setToggle] = useState(false);

  return (
    <div>
      <CommonNavbar />

      <Outlet />
    </div>
  );
};
