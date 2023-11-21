import { InputComponent } from "../components/InputComponent";
import { LinkEl, ButtonEl } from "../components/ButtonComponent";
import { CustomContainer } from "../layouts/Custom-container";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const tableSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const LogIn = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // enableReinitialize: true,
    validationSchema: tableSchema,
    onSubmit: (values) => {
      console.log(values);

      navigate("/NotFound");
    },
  });

  return (
    <section className="bg-primary-200">
      {/* <div className="custom-container flex justify-between"> */}
      <CustomContainer>
        <div className="mx-auto   flex  w-full flex-col h-[calc(100vh-5rem)]  ">
          <form
            onSubmit={formik.handleSubmit}
            className="mx-auto  mt-16 flex w-[40rem]  max-w-[30rem]  flex-col  md:ml-auto md:w-[25rem]"
          >
            <InputComponent
              type="email"
              touched={formik.touched.email}
              errors={formik.errors.email}
              id="email"
              label="Email"
              LabelClass="mb-0"
              className="-mt-1"
              requiredIcon="*"
              placeholder="you@gmail.com"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            <InputComponent
              type="password"
              touched={formik.touched.password}
              errors={formik.errors.password}
              id="password"
              label="Password"
              requiredIcon="*"
              placeholder="************"
              className="placeholder:text-2xl -mt-1
               font-semibold text-2xl placeholder:font-semibold"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />

            <ButtonEl
              type="submit"
              label="Log in"
              className="mt-12 w-[12.5rem]"
              disabled={!formik.isValid || formik.isSubmitting}
            />
          </form>
        </div>
      </CustomContainer>
    </section>
  );
};
