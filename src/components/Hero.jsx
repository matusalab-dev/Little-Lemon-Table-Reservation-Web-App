import { BlockContainer } from "../layouts/CustomContainer";
import { HashLink as Link } from "react-router-hash-link";
import heroImage from "../assets/hero-image-compressed.jpg";

export const HeroSection = () => {
  return (
    <div className="relative bg-primary-200">
      <BlockContainer className="sm:flex-col sm:items-center xs:items-start">
        <div className="flex flex-col max-w-sm py-8">
          <h1 className="text-5xl font-semibold font-primary md:text-4xl text-primary-100">
            Little Lemon
          </h1>
          <h2 className="text-4xl text-white font-primary md:text-3xl">
            Chicago
          </h2>
          <p className=" mt-6 font-semibold md:max-w-[30ch] sm:max-w-[39ch] xs:max-w-[30ch] leading-tight  text-secondary-300">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Link
            to="/reserve"
            role="button"
            // replace={true}
            className=" mt-10 self-start rounded-md bg-primary-100 px-7 py-[0.5rem] text-center text-lg font-semibold text-secondary-400 transition-all  ease-in hover:shadow-2xl"
          >
            Reserve a Table
          </Link>
        </div>
        <div className="shrink-0">
          <img
            src={heroImage}
            alt="our delicious restaurant-food"
            className="h-80  w-[22rem] md:h-70 md:w-[18rem] sm:w-[22rem] self-start translate-y-10  rounded-lg object-cover "
          />
        </div>
      </BlockContainer>
    </div>
  );
};
