import { CommonNavbar } from "../layouts/CommonNavBar";

export const NotFound = () => {
  return (
    <section className="custom-container">
      <div className=" text-left  md:text-center">
        <CommonNavbar className=" px-0" />

        <div className="mt-20">
          <h1 className="mb-2 text-4xl font-bold text-secondary-400 text md:text-3xl md:leading-tight md:font-semibold">
            Coming Soon!
          </h1>
          <p className=" text-lg  text-primary-200 md:text-xl md:leading-normal">
            Stay tuned for more updates
          </p>
        </div>
      </div>
    </section>
  );
};
