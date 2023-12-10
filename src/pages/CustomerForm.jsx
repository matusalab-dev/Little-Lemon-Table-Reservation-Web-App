// import {  } from "react-icons/fa";
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../index.css";

import { FormatDate } from "../utils/FormatDate";
import { CustomContainer } from "../layouts/Custom-container";
import { InputComponent } from "../components/InputComponent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import {
  MdAlarm,
  MdArrowCircleLeft,
  MdOutlineCalendarToday,
  MdRestaurant,
} from "react-icons/md";
import { FaUser } from "react-icons/fa";
// import sendEmail from "../components/email";
// import sgMail from "../components/email";
// import "../App.css";
// import axios from "axios";
import useLocalStorage from "../Hooks/useLocalStorage";
import { ButtonEl } from "../components/ButtonComponent";

const msg = {
  to: "mattyabrha45@gmail.com", // Change to your recipient
  from: "mtslabrh97@gmail.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

const personalSchema = yup.object().shape({
  firstName: yup.string().required("first Name is required"),
  lastName: yup.string().required("last Name is required"),
  email: yup.string().email().required("email address is required"),
  phoneNumber: yup.string().required("phone Number is required"),
});

export const CustomerForm = () => {
  const [user, setUser] = useLocalStorage("userData", {});
  const navigate = useNavigate();
  const location = useLocation();

  const [month, day] = FormatDate(location.state.date);

  // const d = new Date(location.state.date);
  // let month = months[d.getMonth()];
  // let day = d.getDate();
  console.log(user);
  console.log("previousStep seating: " + location.state.seating);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      request: "",
    },
    // enableReinitialize: true,
    validationSchema: personalSchema,
    onSubmit: (values) => {
      console.log(values);

      setUser(values);
      // sgMail(
      //   values.email,
      //   "Your order has been placed",
      //   "Your order has been placed successfully. Your order number is 123456."
      // );
      // axios
      //   .post("http://localhost:3000/send", msg)
      //   .then(() => alert("Email sent successfully"))
      //   .catch((error) => alert(error.message));

      // sgMail
      //   .send(msg)
      //   .then(() => {
      //     console.log("Email sent");
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });

      navigate("/reserve/ConfirmedBooking", { state: location.state });
    },
  });

  return (
    <>
      <section className="md:h-full h-screen  bg-primary-200 ">
        <CustomContainer>
          <FormikProvider value={formik}>
            <form
              onSubmit={formik.handleSubmit}
              className=" mr-auto flex w-[50rem] max-w-[60rem]  flex-col  md:ml-auto md:w-[25rem]"
            >
              <div className="mx-auto flex w-full flex-col space-y-4 py-4 lg:px-6 md:space-y-6 ">
                <Link
                  to=".."
                  // relative="path"
                  className="flex items-start self-start justify-start font-semibold text-secondary-300"
                >
                  <MdArrowCircleLeft className="inline text-3xl" />
                </Link>
                <div className="flex justify-between gap-10 md:space-y-2 sm:block">
                  <div className="  w-1/2 sm:w-full">
                    <InputComponent
                      type="text"
                      touched={formik.touched.firstName}
                      errors={formik.errors.firstName}
                      id="firstName"
                      label="First Name"
                      requiredIcon="*"
                      placeholder="First Name"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="w-1/2 sm:w-full">
                    <InputComponent
                      type="text"
                      touched={formik.touched.lastName}
                      errors={formik.errors.lastName}
                      id="lastName"
                      label="Last Name"
                      requiredIcon="*"
                      placeholder="Last Name"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
                <div className="flex gap-10 md:space-y-2 sm:block">
                  <div className="w-1/2 sm:w-full">
                    <InputComponent
                      type="email"
                      touched={formik.touched.email}
                      errors={formik.errors.email}
                      id="email"
                      label="Email"
                      requiredIcon="*"
                      placeholder="you@gmail.com"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="w-1/2 mt-5 sm:w-full">
                    <label
                      htmlFor="phoneNumber"
                      className="flex font-semibold text-secondary-300 "
                    >
                      <span className="mr-1 text-3xl">*</span> Phone Number
                    </label>

                    <PhoneInput
                      className={`${
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                          ? "PhoneInputInput error"
                          : ""
                      }   mt-1`}
                      name="phoneNumber"
                      placeholder="Phone number"
                      value={formik.values.phoneNumber}
                      onChange={(phone) =>
                        formik.setFieldValue("phoneNumber", phone)
                      }
                      onBlur={formik.handleBlur}
                      defaultCountry="ET"
                      international
                      withCountryCallingCode
                      countryCallingCodeEditable={false}
                    />

                    <datalist id="defaultTels">
                      <option value="+2519-1422-0188"></option>
                      <option value="+122-2222-2222"></option>
                      <option value="+333-3333-3333"></option>
                      <option value="+344-4444-4444"></option>
                    </datalist>
                  </div>
                </div>

                <div className="flex w-full gap-10 sm:block sm:space-y-6">
                  <div className="flex w-1/2 flex-col space-y-5 font-semibold text-secondary-300 sm:w-full">
                    <div className="flex justify-between  ">
                      <h3 className="flex items-center space-x-3 ">
                        <MdOutlineCalendarToday className="text-2xl" />
                        <span>{`${month}, ${day}`}</span>
                      </h3>

                      <h3 className="flex items-end space-x-3">
                        <FaUser className="text-2xl" />
                        <span> {location.state.guests} Dinners</span>
                      </h3>
                    </div>
                    <div className="flex justify-between">
                      <h3 className=" flex space-x-3">
                        <MdAlarm className="text-2xl" />
                        <span>{location.state.resTime}</span>
                      </h3>
                      <h3 className="flex space-x-3">
                        <MdRestaurant className="text-2xl" />

                        <span>{location.state.occasion}</span>
                      </h3>
                    </div>
                    <h3 className="flex self-center text-2xl font-semibold">
                      <span className="mr-3 ">{location.state.seating}</span>
                      seating
                    </h3>
                  </div>
                  <div className="w-1/2 sm:w-full">
                    <label
                      htmlFor="request"
                      className="mb-3 flex  font-semibold text-secondary-300 "
                    >
                      Special Request
                    </label>
                    <textarea
                      className={`text-[1rem] text-primary-200 h-32 w-full rounded-[0.3rem] p-3 font-semibold placeholder:opacity-60`}
                      name="request"
                      id="request"
                      placeholder="Special Request"
                      onChange={formik.handleChange}
                      value={formik.values.request}
                    />
                  </div>
                </div>

                <div className=" flex w-full justify-between  md:w-full ">
                  <ButtonEl
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                    label="confirm a reservation"
                    className="mt-6 rounded-[0.3rem] bg-primary-100 px-8 py-3 text-xl font-semibold text-secondary-400 disabled:bg-secondary-200 sm:w-full"
                  />
                </div>
              </div>
            </form>
          </FormikProvider>
        </CustomContainer>
      </section>
    </>
  );
};
