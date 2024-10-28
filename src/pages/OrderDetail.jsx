import { useContext } from "react";
import { useParams } from "react-router-dom";

import { MenuContext } from "../contexts/MenuContext";
import { LinkEl } from "../components/ButtonComponent";
import { MealCard } from "../components/Specials";

export const OrderDetail = () => {
  const { id } = useParams();

  const { MEALS } = useContext(MenuContext);
  const getMeals = MEALS.filter((mealDetail) => mealDetail.id === id);
  const { dishName, imageUrl, description, price } = getMeals[0];

  return (
    <div className="py-5 custom-container sm:px-5 h-min">
      <h2 className="mt-3 mb-4 text-4xl font-normal font-secondary">
        Orders-Detail
      </h2>
      <div className="max-w-sm mb-4 overflow-hidden sm:max-w-sm sm:w-full sm:mr-auto sm:mt-6">
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
          <LinkEl
            link="order-confirmation"
            role="button"
            className="inline-block w-full py-3 mt-8 text-2xl font-semibold"
            label="Order a Delivery"
          />
        </div>
      </div>
    </div>
  );
};
