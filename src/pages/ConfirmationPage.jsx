// import {  } from "react-icons/fa";
import React from "react";
import { FaUser } from "react-icons/fa";
import {
  MdRestaurant,
  MdAccessAlarm,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { GridSlot } from "../components/GridSlot";
import { CustomContainer } from "../layouts/Custom-container";
import { Link } from "react-router-dom";
// const hero = require("../assets/restauranfood.jpg");

export const Booking = () => {
  const NumberOfDinners = [
    ["1 Dinners", "2 Dinners"],
    ["3 Dinners", "4 Dinners"],
    ["5 Dinners", "6 Dinners"],
    ["7 Dinners", "8 Dinners"],
    ["9 Dinners", "10 Dinners"],
  ];
  const availableTime = [
    ["5:00 pm", "6:00 pm"],
    ["7:00 pm", "8:00 pm"],
    ["9:00 pm", "10:00 pm"],
  ];
  const occasions = ["Birthday", "Engagement", "Anniversary"];

  return (
    <section className="  bg-primary-200 ">
      {/* <div className="custom-container flex justify-between"> */}
      <CustomContainer>
        <div className="mx-auto flex w-full flex-col py-8  ">
          <form
            onSubmit={handleSubmit}
            className="mx-auto  flex w-[50rem]  flex-col"
          >
            <Link
              to=".."
              relative="path"
              className="mt-2 font-semibold text-secondary-300"
            >
              back to home
              <img src="../assets/home icon.svg" />
            </Link>
            <h2 className="mb-10 mt-3 font-primary  text-6xl text-primary-100">
              Reservations
            </h2>
            <div className="flex w-full justify-between">
              <div class="mb-3 flex w-1/2 items-center justify-start">
                <label
                  for="indoor"
                  class="form-label mr-16 font-secondary text-xl font-semibold text-secondary-300"
                >
                  Indoor seating
                </label>
                <input
                  type="radio"
                  class="form-control h-8 w-8"
                  name="seating"
                  id="indoor"
                  aria-describedby="helpId"
                  placeholder=""
                />
              </div>
              <div class="mb-3 flex w-1/2 items-center justify-start">
                <label
                  for="outdoor"
                  class="form-label mr-16 font-secondary text-xl font-semibold text-secondary-300"
                >
                  Outdoor seating
                </label>
                <input
                  type="radio"
                  class="form-control h-8 w-8"
                  name="seating"
                  id="outdoor"
                  aria-describedby="helpId"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-3 flex w-full justify-between">
              <div class="relative mb-3 w-1/2">
                <MdOutlineCalendarToday className="absolute left-5 top-[3.05rem] text-2xl font-semibold text-primary-200" />
                <label
                  for="date"
                  class="form-label mb-2 block font-bold text-secondary-300"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="cursor-pointer rounded-[0.175rem] bg-secondary-300 px-16 py-4 font-secondary text-lg font-semibold text-primary-200"
                />
              </div>
              <div className="w-1/2">
                <GridSlot
                  NumberOfSlot={NumberOfDinners}
                  colNumber={2}
                  label={"Number of Dinners "}
                  value={"No. of Dinners"}
                  icon={
                    <FaUser className="absolute left-5 top-4 text-2xl font-semibold text-primary-200" />
                  }
                />
              </div>
            </div>
            <div className="mt-4 flex w-full justify-between ">
              <div class="mb-3 w-1/2">
                <GridSlot
                  NumberOfSlot={occasions}
                  colNumber={1}
                  label={"Occasions"}
                  value={"Occasions"}
                  icon={
                    <MdRestaurant className="absolute left-5 top-4 text-2xl font-semibold text-primary-200" />
                  }
                />
              </div>
              <div className="mb-3 w-1/2">
                <GridSlot
                  NumberOfSlot={availableTime}
                  colNumber={2}
                  label={"Time"}
                  value={"Select time"}
                  icon={
                    <MdAccessAlarm className="absolute left-5 top-4 text-2xl font-semibold text-primary-200" />
                  }
                />
              </div>
            </div>
            <div className="mt-4 flex w-full justify-between ">
              <button
                type="submit"
                className="mt-8 rounded-[0.3rem] bg-primary-100 px-8 py-3 text-2xl font-semibold text-secondary-400"
              >
                Reserve a Table
              </button>
            </div>
          </form>
        </div>
      </CustomContainer>
    </section>
  );
};
