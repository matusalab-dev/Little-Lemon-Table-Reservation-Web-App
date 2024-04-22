import person1 from "../assets/Mario and Adrian b.jpg";
import person2 from "../assets/Mario and Adrian A.jpg";
import LazyLoadedImage from "./LazyLoadedImage";
import { BlockContainer } from "../layouts/CustomContainer";
import { useState } from "react";
import useToggle from "../Hooks/useToggle";

export const Chicago = () => {
  const [isHovered, setIsHovered] = useState(false);

  // console.log("about-Image isHovered: ", isHovered);

  return (
    <section className="bg-primary-200  md:pt-20 md:pb-64 sm:pb-80 py-32 ">
      <BlockContainer
        id="about"
        className={`md:flex-col sm:w-11/12 sm:mx-auto sm:items-start  h-min max-h-[468px] md:pb-64 xs:pb-[37rem] lg:gap-10 gap-4 bg-primary-200`}
      >
        <div className="flex  max-w-[45ch] flex-col  justify-start items-start md:pb-20 ">
          <h1 className="text-left font-primary text-5xl md:text-4xl font-semibold text-primary-100">
            Little Lemon
          </h1>
          <h2 className="font-primary text-4xl text-white md:text-2xl">
            Chicago
          </h2>
          <p className=" mt-6 font-normal md:text-sm text-secondary-300 sm:max-w-[42ch] md:max-w-[45ch] leading-tight">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Our menu is inspired
            by the rich culinary heritage of the Mediterranean region, and we
            use only the freshest ingredients to create dishes that are both
            healthy and delicious. Come and experience the taste of the
            Mediterranean at Little Lemon.
          </p>
        </div>
        <div className="w-1/2 xs:w-full xs:items-start h-96 flex flex-col items-start  justify-start  relative z-30">
          <LazyLoadedImage
            src={person2}
            alt="our chief's on the kitchen preparing a food"
            className="z-50 absolute top-0 md:-top-10 left-0 h-[clamp(16rem,49.2vh,24rem)] w-[clamp(16rem,28vw,18rem)] xs:w-[clamp(13rem,28vw,18rem)] rounded-sm object-cover"
          />
          <LazyLoadedImage
            src={person1}
            alt="our chief's on the kitchen preparing a food"
            className="z-40 absolute right-0 top-10 md:top-0  md:left-36 xs:top-36 xs:left-12  self-start h-[clamp(16rem,49.2vh,24rem)] w-[clamp(16rem,28vw,18rem)] xs:w-[clamp(13rem,28vw,18rem)]  rounded-sm object-cover"
          />
        </div>
      </BlockContainer>
    </section>
  );
};
