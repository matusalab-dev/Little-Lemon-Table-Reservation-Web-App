import { useOutletContext } from "react-router-dom";
import { LinkEl } from "../components/ButtonComponent";

export const OrderDetail = () => {
  const menu = useOutletContext();

  return (
    <div className="w-1/2 mb-4 sm:w-full">
      <img
        src={menu.imageUrl}
        className=" h-[14.5rem] w-full rounded-tl-lg rounded-tr-lg object-cover sm:w-full"
      />

      <h2 className=" pt-4 text-3xl font-bold text-secondary-300">
        {menu.dishName}
      </h2>
      <h2 className=" pt-3 text-secondary-300">{menu.description}</h2>
      <h2 className="pt-3 font-bold text-secondary-300">{menu.price}</h2>

      <LinkEl
        link="DeliveryForm"
        role="button"
        className="inline-block font-semibold mt-8 w-full py-3 text-2xl"
        label="Order a Delivery"
      />
    </div>
  );
};
