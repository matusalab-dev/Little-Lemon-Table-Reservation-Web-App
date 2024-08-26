import { useReducer, useState } from "react";
import * as yup from "yup";
import { FaUser } from "react-icons/fa";
import { MdRestaurant, MdOutlineCalendarToday, MdAlarm } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import { SubmitAPI, FetchAPI } from "../data/FetchAPI";
import useLocalStorage from "../Hooks/useLocalStorage";
import { InputComponent } from "./InputComponent";
import { ButtonEl } from "./ButtonComponent";

const initialState = {
  selectedDate: "",
  availableTimes: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      return { ...state, selectedDate: action.payload };
    case "UPDATE_TIME":
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
};

// form validation using yup
// check the right data-type for checkbox
const tableSchema = yup.object().shape({
  date: yup.date().required("pick a date"),
  seating: yup.string().required("pick one of our seatings"),
  // occasion: yup.string().required("Required"),
  // resTime: yup.string().required("Required"),
});

// Radio input seatingOptions
const seatingOptions = [
  { key: "Indoor", value: "Indoor" },
  { key: "Outdoor", value: "Outdoor" },
];

export const BookingForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [reserve, setReserve] = useLocalStorage("reserved", "");
  const [item, setItem] = useLocalStorage("formState", {});
  const [previousState, setPreviousState] = useState({});

  const navigate = useNavigate();
  // console.log(`default available time:  ${defaultValue}`);

  console.log("previousState in booking: ", previousState);

  function fetchAvailableTimes(date) {
    const availableSlot = FetchAPI(date);

    const reservedTable = {
      time: availableSlot,
      date: date,
    };

    setReserve(reservedTable);

    dispatch({ type: "UPDATE_TIME", payload: availableSlot });
  }

  // date picker triggers the new available times
  // based on the selectedDate
  function handleDate(date) {
    const currentDate = new Date(date);

    dispatch({ type: "UPDATE_DATE", payload: currentDate });

    fetchAvailableTimes(currentDate);
  }

  const formik = useFormik({
    initialValues: {
      date: "",
      dinners: 1,
      seating: "",
      resTime: `${new Date().getHours().toLocaleString()}:${new Date()
        .getMinutes()
        .toLocaleString()}`,
      occasion: "Birthday",
    },
    enableReinitialize: true,
    validationSchema: tableSchema,
    onSubmit: (values) => {
      console.log("booking-values", values);

      const previousState = {
        date: values.date,
        dinners: values.dinners,
        seating: values.seating,
        resTime: values.resTime,
        occasion: values.occasion,
      };
      // const submitBtnState = false;
      setPreviousState(values);

      const isFilled = SubmitAPI(values);
      if (isFilled) {
        setItem(values);
        navigate("CustomerForm", { state: previousState });
        // saveStateToStorage(state, values);

        console.log("submission-status : " + isFilled);
      }
    },
  });

  return (
    <>
      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-[50rem] max-w-[60rem] md:w-[17rem] md:mx-auto lg:w-[45rem] mr-auto space-y-4 "
        >
          <h2 className="mb-10 text-6xl font-primary text-primary-100 md:text-5xl">
            Reservations
          </h2>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className="flex justify-between md:flex-col"
          >
            <div className="mb-3 flex w-1/2 md:w-[17.5rem] sm:w-full  items-center justify-start md:mb-6 md:justify-between">
              <label
                htmlFor={seatingOptions[0].value}
                className="mr-16 text-xl font-semibold font-secondary sm:text-lg text-secondary-300 md:mr-0"
              >
                {seatingOptions[0].key}
              </label>
              <input
                type="radio"
                id={seatingOptions[0].value}
                name="seating"
                value={seatingOptions[0].value}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.seating === seatingOptions[0].value}
                // required
                // className="w-8 h-8 "
                className={`seating sm:h-12 sm:w-12 ${
                  formik.touched.seating && formik.errors.seating
                    ? "error"
                    : " "
                } `}
              />
            </div>
            <div className="mb-3 flex w-1/2 md:w-[17.5rem] sm:w-full items-center justify-start md:mb-0 md:justify-between">
              <label
                htmlFor={seatingOptions[1].value}
                className="mr-16 text-xl font-semibold font-secondary sm:text-lg text-secondary-300 md:mr-0"
              >
                {seatingOptions[1].key}
              </label>
              <input
                type="radio"
                id={seatingOptions[1].value}
                name="seating"
                value={seatingOptions[1].value}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.seating === seatingOptions[1].value}
                // required
                className={`seating ${
                  formik.touched.seating && formik.errors.seating
                    ? "error"
                    : " "
                }`}
              />
            </div>
          </div>

          <div className="flex justify-between w-full md:mx-auto md:flex-col md:space-y-2">
            <div className="relative w-1/2 mb-3 md:mb-0 sm:w-full ">
              <MdOutlineCalendarToday
                className={`absolute left-4 top-[4.6rem] sm:top-[3.3rem] text-2xl font-semibold text-primary-200 active:text-primary-200 ${
                  formik.touched.date && formik.errors.date
                    ? " text-red-600 focus:text-primary-200 active:text-primary-200 "
                    : ""
                }
              `}
              />
              <InputComponent
                type="date"
                id="date"
                name="date"
                className="w-[17.5rem] sm:w-full mt-2 px-14 py-4  text-lg sm:text-sm sm:font-bold font-bold  text-primary-200 bg-secondary-300 cursor-pointer"
                touched={formik.touched.date}
                errors={formik.errors.date}
                value={formik.values.date}
                LabelClass="mr-0"
                label="Date"
                onChange={(e) => {
                  handleDate(e.target.value);
                  formik.setFieldValue("date", e.target.value);
                }}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="relative w-1/2 mb-3 md:w-full">
              <FaUser className="absolute left-4 top-[4.4rem] sm:top-[3rem] text-2xl font-semibold text-primary-200" />

              <InputComponent
                type="number"
                className="w-[17.5rem] sm:w-full mt-2 cursor-pointer rounded-[0.19rem]  bg-secondary-300 py-[0.8rem] pl-24 pr-8 font-secondary text-lg sm:text-sm sm:font-semibold font-semibold text-primary-200 outline-8 outline-red-600"
                name="dinners"
                label="Number of dinners"
                LabelClass="mr-0"
                id="dinners"
                min={1}
                max={10}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dinners}
              />
            </div>
          </div>
          <div className="flex justify-between w-full mt-4 md:flex-col md:space-y-2">
            <div className="relative w-1/2 mb-3 sm:w-full ">
              <label
                htmlFor="occasion"
                className="block mb-2 font-semibold sm:mb-1 sm:text-sm text-secondary-300"
              >
                <MdRestaurant className="absolute z-30 text-2xl font-semibold bottom-4 left-4 text-primary-200" />
                Occasion
              </label>
              <select
                id="occasion"
                className={` group relative flex w-[17.5rem] sm:w-full cursor-pointer rounded-md  bg-secondary-300 px-6 py-4 text-center font-secondary  text-lg sm:text-sm sm:font-semibold font-semibold text-primary-200`}
                onChange={formik.handleChange}
                // value={formik.values.occasion}
                defaultValue={formik.values.occasion}
              >
                <option className="  w-[19.5rem] py-16 pl-8">Engagement</option>
                <option className="mt-5 w-[19.5rem] ">Birthday</option>
                <option className="mt-5 w-[19.5rem] p-10">Anniversary</option>
              </select>
            </div>
            <div className="relative w-1/2 mb-3 sm:w-full ">
              <label
                htmlFor="resTime"
                className="block mb-2 font-semibold sm:mb-1 sm:text-sm text-secondary-300"
              >
                <MdAlarm className="absolute z-20 text-2xl font-semibold left-4 top-12 sm:top-10 text-primary-200" />
                Choose Time
              </label>

              <select
                id="resTime"
                name="resTime"
                className="group relative w-[17.5rem] sm:w-full cursor-pointer rounded-md bg-secondary-300 px-6 py-4 text-center font-secondary  text-lg sm:text-sm  font-semibold text-primary-200"
                onChange={formik.handleChange}
                value={formik.values.resTime}
                // defaultValue={formik.values.resTime}
              >
                {state.availableTimes.map(function (time, index) {
                  return (
                    <option className="mt-5 w-[300px] " key={index}>
                      {time}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="  flex w-full justify-between sm:w-full  md:w-[17.5rem] ">
            <ButtonEl
              type="submit"
              label="Reserve a Table"
              className="mt-12 w-[17.5rem] sm:text-lg"
              disabled={!formik.isValid || formik.isSubmitting}
            />
          </div>
        </form>
      </FormikProvider>
    </>
  );
};
