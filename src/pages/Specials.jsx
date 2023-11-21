import { useEffect } from "react";
import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";

import { MdDeliveryDining } from "react-icons/md";
import { GridLayout } from "../layouts/GridLayout";
import { MenuContext } from "../Contexts/MenuContext";
import { Link } from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage";
export const Specials = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const menus = [
  //   {
  //     imageUrl: dish1,
  //     dishName: "Greek Salad",
  //     description:
  //       "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  //     price: "$12.99",
  //   },
  //   {
  //     imageUrl: dish2,
  //     dishName: "Bruschetta",
  //     description:
  //       "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  //     price: "$5.99",
  //   },
  //   {
  //     imageUrl: dish3,
  //     dishName: "Lemon desert",
  //     description:
  //       " This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  //     price: "$5.00",
  //   },
  // ];

  const menus = useContext(MenuContext);

  // src/hooks/useLocalStorage.js

  useEffect(() => {
    console.count("UseEffect runs after return JSX markup runs");
    //componentDidMount is called when the component is inserted into the DOM.
    //componentDidUpdate is called when the component's DOM is updated, when state is updated.

    // if we want to run some pieces of code after a change in state. write your code inside this Block {}.
    // we don't have to pass the state variable as useEffect's props,
    // we can immediately put the state variable(not the setter) into the dependecies arrays List.
    // we can leave the dependecies array empty to render the effect only once at the very first.

    return () => {
      // componentWillUnmount
      // if we want to remove the component from the DOM.
    };
  }, []);

  return (
    <main
      id="menu"
      className="custom-container py-10 pt-24 lg:px-4 md:mb-[5rem] sm:mb-[7.5rem]"
    >
      <header className="flex justify-between sm:justify-center">
        <h2 className="font-primary   text-5xl font-medium capitalize underline-offset-[6px]  md:text-[2.75rem]  sm:underline ">
          this weeks specials!
        </h2>
        <button className="rounded-md bg-primary-100 px-8 py-2 text-lg font-semibold text-secondary-400 sm:hidden">
          Online Menu
        </button>
      </header>

      {/* Menu Gallery */}
      {/* <section className="my-16  h-min grid grid-cols-galleryCol grid-rows-galleryRow grid-flow-row-dense gap-x-8 gap-y-8"> */}
      {/* looping through dishes */}

      <GridLayout className={"h-min sm:px-4"}>
        {menus.map((menu) => {
          // console.log(menu.id);
          return (
            <Link
              to={`/order/${menu.id}/${menu.dishName}`}
              key={menu.id}
              state={{
                search: `${searchParams}`,
                // type: typeFilter
              }}
              className="group hover:shadow-sm overflow-hidden  rounded-t-xl transition-all"
            >
              <img
                className="h-[200px] w-full rounded-t-xl object-cover group-hover:scale-105 group-hover:rounded-t-xl transition-all"
                src={menu.imageUrl}
                alt={menu.dishName}
                loading="lazy"
              />
              <div className="flex flex-col space-y-6 justify-between bg-secondary-300 p-5 ">
                <div className="mt-6 flex justify-between ">
                  <h4 className="font-primary text-2xl  text-secondary-400">
                    {menu.dishName}
                  </h4>
                  <p className="text-red-300">{menu.price}</p>
                </div>
                <p className="self-center max-w-prose font-semibold text-primary-200">
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

      {/* </section> */}
    </main>
  );
};
