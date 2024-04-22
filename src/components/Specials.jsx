import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";

import { MenuContext } from "../Contexts/MenuContext";
import { GridLayout } from "../layouts/GridLayout";

export const Specials = () => {
  const menus = useContext(MenuContext);

  return (
    <main
      id="menu"
      className="custom-container pt-32 pb-24 lg:px-4 md:mb-[5rem] "
    >
      <header className="w-full flex justify-between items-start gap-3 xs:flex-col   xs:gap-6">
        <p className="font-primary text-5xl font-medium  underline-offset-[6px]  md:text-[2.75rem] sm:text-[2.3rem] xs:text-4xl xs:font-thin sm:leading-snug sm:underline ">
          This Weeks Specials!
        </p>
        <p className="rounded-md bg-primary-100 px-8 py-2 text-lg font-semibold xs:font-normal text-secondary-400 max-w-40 sm:break-words sm:px-4 leading-tight text-center xs:self-start ">
          Online Menu
        </p>
      </header>

      {/* Menu Gallery */}
      <GridLayout
        className={"h-min xs:grid-cols-[18.2rem] xs:justify-center sm:px-0"}
      >
        {menus.map((menu) => {
          return (
            <Link
              to={`/order/${menu.id}/${menu.dishName}`}
              key={menu.id}
              // state={{
              //   search: `${searchParams}`,
              //   // type: typeFilter
              // }}
              className="group hover:shadow-sm overflow-hidden  rounded-t-xl transition-all"
            >
              <img
                className="h-[200px] w-[595px] rounded-t-xl object-cover group-hover:scale-105 group-hover:rounded-t-xl transition-all"
                src={menu.imageUrl}
                alt={menu.dishName}
                width="595px"
                height="350px"
                loading="lazy"
              />
              <div className="flex flex-col space-y-6 justify-between bg-secondary-300 p-5 ">
                <div className="mt-6 flex justify-between ">
                  <h2 className="font-primary text-2xl  text-secondary-400">
                    {menu.dishName}
                  </h2>
                  <p className="text-red-700">{menu.price}</p>
                </div>
                <p className="self-start max-w-[45ch] font-semibold text-primary-200">
                  {menu.description}
                </p>
                <h3 className=" flex cursor-pointer  items-center font-secondary  text-2xl text-secondary-400">
                  Order a delivery{" "}
                  <MdDeliveryDining
                    size={40}
                    className="ml-8 transition-all ease-out group-hover:translate-x-6"
                  />
                </h3>
              </div>
            </Link>
          );
        })}
      </GridLayout>
    </main>
  );
};
