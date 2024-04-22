import { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import { MenuContext } from "../Contexts/MenuContext";
import { CommonNavbar } from "../layouts/CommonNavBar";

export const OrderLayout = () => {
  //   const location = useLocation();
  const { id, category } = useParams();
  const menuDetails = useContext(MenuContext);

  const menu = menuDetails.filter((menuDetail) => menuDetail.id === id);
  //   console.log(location.state.search);
  console.log(id, category);

  // console.log(menu[0]);
  // console.log(typeof menu[0]);

  return (
    <>
      <CommonNavbar />
      <div className="bg-primary-200">
        <div className="custom-container  bg-primary-200 py-5  sm:px-5 h-min text-secondary-300">
          <h2 className="mt-3 mb-7 p-0 text-4xl font-bold ">Orders Detail </h2>
          <Outlet context={menu[0]} />
        </div>
      </div>
    </>
  );
};
