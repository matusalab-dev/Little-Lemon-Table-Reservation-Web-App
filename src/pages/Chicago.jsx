import person2 from "../assets/Mario and Adrian A.jpg";
import person1 from "../assets/Mario and Adrian b.jpg";
import { CustomContainer } from "../layouts/Custom-container";

export const Chicago = () => {
  return (
    <section className="bg-primary-200 md:py-20 py-32">
      <CustomContainer
        id="about"
        className={`h-min max-h-[468px] md:py-6 lg:mx-6 sm:mx-6 bg-primary-200`}
      >
        <div className="flex  max-w-[45ch] flex-col  justify-start pb-20 ">
          <h1 className="text-left font-primary text-5xl font-semibold text-primary-100">
            Little Lemon
          </h1>
          <h3 className="font-primary text-4xl text-white">Chicago</h3>
          <p className=" mt-6 font-bold text-secondary-300 md:w-max sm:max-w-[45ch] md:max-w-[28ch]">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
        <div className=" basis-[50%] flex flex-col  relative z-30  sm:hidden">
          <img
            src={person2}
            alt="restaurant-food"
            className="absolute top-[15%] z-50 h-[clamp(14rem,45vh,22rem)] w-[clamp(12rem,28vw,18rem)] rounded-sm object-cover md:right-[10rem]  "
          />
          <img
            src={person1}
            alt="restaurant-food"
            className="absolute self-end z-40 h-[clamp(14rem,45vh,22rem)] w-[clamp(12rem,28vw,18rem)]  rounded-sm object-cover "
          />
        </div>
      </CustomContainer>
    </section>
  );
};
