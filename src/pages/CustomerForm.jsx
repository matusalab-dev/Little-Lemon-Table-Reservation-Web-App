import { Link, useLocation, useNavigate } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  MdAlarm,
  MdArrowCircleLeft,
  MdOutlineCalendarToday,
  MdRestaurant,
} from "react-icons/md";
import { FaUser } from "react-icons/fa";
import useLocalStorage from "../Hooks/useLocalStorage";
import { FormatDate } from "../utils/FormatDate";
import { BlockContainer } from "../layouts/CustomContainer";
import { InputComponent } from "../components/InputComponent";
import { ButtonEl } from "../components/ButtonComponent";

// const msg = {
//   to: "mattyabrha45@gmail.com", // Change to your recipient
//   from: "mtslabrh97@gmail.com", // Change to your verified sender
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };

const personalInfoSchema = yup.object().shape({
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

  // console.log(user);
  console.log("previousStepForm resTime: " + location.state.resTime);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      request: "",
    },
    // enableReinitialize: true,
    validationSchema: personalInfoSchema,
    onSubmit: (values) => {
      console.log(values);
      setUser(values);

      navigate("/reserve/booking-confirmation", { state: location.state });
    },
  });

  return (
    <>
      <section className="pb-6 bg-primary-200">
        <BlockContainer className="w-full">
          <FormikProvider value={formik}>
            <form
              onSubmit={formik.handleSubmit}
              className=" mr-auto flex w-[60rem] max-w-[70rem] md:max-w-[40rem]  flex-col  md:ml-auto md:text-sm"
            >
              <div className="flex flex-col w-full py-4 mx-auto space-y-4 lg:px-6 md:px-0 md:space-y-6 sm:space-y-8">
                <Link
                  to=".."
                  // relative="path"
                  className="flex items-start self-start justify-start font-semibold text-secondary-300"
                >
                  <MdArrowCircleLeft className="inline text-3xl" />
                </Link>
                <div className="flex items-end justify-between gap-10 sm:block">
                  <div className="w-1/2 sm:w-full">
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
                <div className="flex items-end gap-10 md:space-y-2 sm:space-y-6 sm:block">
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
                  <div className="w-1/2 mt-5 sm:w-full ">
                    <label
                      htmlFor="phoneNumber"
                      className="flex font-semibold text-secondary-300 "
                    >
                      <span className="mr-1 text-3xl ">*</span> Phone Number
                    </label>

                    <PhoneInput
                      className={`${
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                          ? "phone-input-error phoneInputInput"
                          : ""
                      }   mt-1`}
                      list="defaultTels"
                      id="phoneNumber"
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

                    <datalist id="defaultTels" className="px-3 py-4 bg-black">
                      <dt value="+2519-1422-0188" className="bg-black"></dt>
                      <dt value="+122-2222-2222" className="bg-black"></dt>
                      <dt value="+333-3333-3333" className="bg-black"></dt>
                      <dt value="+344-4444-4444" className="bg-black"></dt>
                    </datalist>
                  </div>
                </div>

                <div className="flex items-start w-full gap-10 sm:block sm:space-y-10 ">
                  <div className="flex flex-col w-1/2 space-y-5 font-semibold text-secondary-300 sm:w-full">
                    <div className="flex justify-between ">
                      <h3 className="flex items-center space-x-3 ">
                        <MdOutlineCalendarToday className="text-2xl md:text-xl" />
                        <span>{`${month}, ${day}`}</span>
                      </h3>

                      <h3 className="flex items-end space-x-3">
                        <FaUser className="text-2xl md:text-xl" />
                        <span> {location.state.dinners} Dinners</span>
                      </h3>
                    </div>
                    <div className="flex justify-between">
                      <h3 className="flex space-x-3 ">
                        <MdAlarm className="text-2xl md:text-xl" />
                        <span>{location.state.resTime}</span>
                      </h3>
                      <h3 className="flex space-x-3">
                        <MdRestaurant className="text-2xl md:text-xl" />

                        <span>{location.state.occasion}</span>
                      </h3>
                    </div>
                    <h3 className="flex self-center text-2xl font-semibold">
                      {location.state.seating} Seating
                    </h3>
                  </div>
                  <div className="w-1/2 sm:w-full">
                    <label
                      htmlFor="request"
                      className="flex mb-3 font-semibold text-secondary-300 "
                    >
                      Special Request
                    </label>
                    <textarea
                      className={`text-[1rem] text-primary-200 h-32 w-full rounded-[0.3rem] p-3 font-semibold placeholder:opacity-60`}
                      name="request"
                      id="request"
                      placeholder="can we be seated near the exit as one guest is in a wheelchair. Thank you"
                      onChange={formik.handleChange}
                      value={formik.values.request}
                    />
                  </div>
                </div>

                <div className="flex justify-between md:w-1/2 sm:w-full">
                  <ButtonEl
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                    label="confirm a reservation"
                    className="mt-6 rounded-[0.3rem] bg-primary-100 px-8 py-3 text-xl font-semibold text-secondary-400 disabled:bg-secondary-200"
                  />
                </div>
              </div>
            </form>
          </FormikProvider>
        </BlockContainer>
      </section>
    </>
  );
};
