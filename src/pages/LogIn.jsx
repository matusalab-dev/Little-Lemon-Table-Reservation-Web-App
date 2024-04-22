import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import { InputComponent } from "../components/InputComponent";
import { ButtonEl } from "../components/ButtonComponent";
import { BlockContainer } from "../layouts/CustomContainer";

const tableSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
});

const LogIn = () => {
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
      <BlockContainer>
        <div className="w-[30rem] max-w-[40rem] md:w-[25rem] md:mx-2 mx-auto sm:w-full  flex flex-col h-[calc(100vh-5rem)]  lg:pb-10 ">
          <form
            onSubmit={formik.handleSubmit}
            className="w-full mx-auto mt-16 flex flex-col"
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
              className="placeholder:text-2xl -mt-1 font-semibold text-2xl placeholder:font-semibold"
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
      </BlockContainer>
    </section>
  );
};

export default LogIn;
