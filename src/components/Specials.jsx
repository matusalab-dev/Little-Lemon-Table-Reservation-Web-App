import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";

import { MenuContext } from "../contexts/MenuContext";
import { GridLayout } from "../layouts/GridLayout";

export const MealCard = ({ menu, children }) => {
  const { id, dishName, imageUrl, price, description } = menu;

  return (
    <Link
      to={`/order/${id}`}
      key={id}
      className="max-w-sm col-span-2 overflow-hidden transition-all bg-secondary-300 md:max-w-md lg:col-span-3 md:col-span-6 group hover:shadow-sm rounded-t-xl"
    >
      <img
        className="h-[200px] w-[595px] rounded-t-xl object-cover group-hover:scale-105 group-hover:rounded-t-xl transition-all"
        src={imageUrl}
        alt={dishName}
        width="595px"
        height="350px"
        loading="lazy"
      />
      <div className="flex flex-col justify-between p-5 space-y-6 bg-secondary-300 ">
        <div className="flex justify-between mt-6 ">
          <h2 className="text-2xl font-primary text-secondary-400">
            {dishName}
          </h2>
          <p className="text-red-700">{price}</p>
        </div>
        <p className="self-start max-w-[45ch] font-semibold text-primary-200">
          {description}
        </p>
        <h3 className="flex items-center text-2xl cursor-pointer font-secondary text-secondary-400">
          Order a delivery
          <MdDeliveryDining
            size={40}
            className="ml-8 transition-all ease-out group-hover:translate-x-6"
          />
        </h3>
      </div>
    </Link>
  );
};

export const Specials = () => {
  const { MEALS } = useContext(MenuContext);

  return (
    <main id="menu" className="pt-32 pb-24 mx-auto custom-container md:mb-20">
      <header className="flex items-start justify-between w-full gap-3 xs:flex-col xs:gap-6">
        <p className="font-primary text-5xl font-medium  underline-offset-[6px]  md:text-[2.75rem] sm:text-[2.3rem] xs:text-4xl xs:font-thin sm:leading-snug sm:underline ">
          This Weeks Specials!
        </p>
        <p className="px-8 py-2 text-lg font-semibold leading-tight text-center rounded-md bg-primary-100 xs:font-normal text-secondary-400 max-w-40 sm:break-words sm:px-4 xs:self-start ">
          Online Menu
        </p>
      </header>

      {/* Menu Gallery */}
      <GridLayout>
        {MEALS.map((menu, index) => (
          <MealCard key={index} menu={menu} />
        ))}
      </GridLayout>
    </main>
  );
};
