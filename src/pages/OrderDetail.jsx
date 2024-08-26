import { useOutletContext } from "react-router-dom";
import { LinkEl } from "../components/ButtonComponent";

export const OrderDetail = () => {
  const menu = useOutletContext();
  const { dishName, imageUrl, description, price } = menu;
  return (
    <div className="w-1/2 mb-4 sm:max-w-sm sm:w-full sm:mr-auto sm:mt-6">
      {/* <img
        src={menu.imageUrl}
        className=" h-[14.5rem] w-full rounded-tl-lg rounded-tr-lg object-cover sm:w-full"
      />

      <h2 className="pt-4 text-3xl font-bold text-secondary-300">
        {menu.dishName}
      </h2>
      <h2 className="pt-3 text-secondary-300">{menu.description}</h2>
      <h2 className="pt-3 font-bold text-secondary-300">{menu.price}</h2>

      <LinkEl
        link="DeliveryForm"
        role="button"
        className="inline-block w-full py-3 mt-8 text-2xl font-semibold"
        label="Order a Delivery"
      /> */}
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
          link="DeliveryForm"
          role="button"
          className="inline-block w-full py-3 mt-8 text-2xl font-semibold"
          label="Order a Delivery"
        />
      </div>
    </div>
  );
};
