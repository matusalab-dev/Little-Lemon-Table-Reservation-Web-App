import person1 from "../assets/MarioandAdrian-b-compressed.jpg";
import person2 from "../assets/MarioandAdrian-a-compressed.jpg";
import LazyLoadedImage from "./LazyLoadedImage";
import { BlockContainer } from "../layouts/CustomContainer";
import { useState } from "react";

export const Chicago = () => {
  const [isHovered, setIsHovered] = useState(false);

  // console.log("about-Image isHovered: ", isHovered);

  return (
    <section className="pt-32 pb-44 md:pb-[32rem] bg-primary-200 xs:px-2">
      <BlockContainer
        id="about"
        className="md:max-w-sm md:mx-auto md:flex-col md:items-center h-min max-h-[468px] md:pb-64 xs:pb-[37rem] lg:gap-10 gap-4 bg-primary-200"
      >
        <div className="flex  max-w-[45ch] flex-col  justify-start items-start md:pb-20">
          <h1 className="text-5xl font-semibold text-left font-primary sm:text-4xl text-primary-100">
            Little Lemon
          </h1>
          <h2 className="text-4xl text-white font-primary md:text-3xl">
            Chicago
          </h2>
          <p className="mt-6 font-normal text-lg text-secondary-300 sm:max-w-[42ch] md:max-w-[45ch] leading-tight">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Our menu is inspired
            by the rich culinary heritage of the Mediterranean region, and we
            use only the freshest ingredients to create dishes that are both
            healthy and delicious. Come and experience the taste of the
            Mediterranean at Little Lemon.
          </p>
        </div>
        <div className="relative flex flex-col items-start justify-start w-1/2 md:w-full md:items-center h-96">
          <LazyLoadedImage
            src={person2}
            alt="our chief's preparing a food on the kitchen"
            className="z-50 absolute top-0 md:-top-10 md:left-0 xs:left-0 h-[clamp(16rem,49.2vh,24rem)] w-[clamp(14rem,28vw,18rem)] xs:w-[clamp(14rem,28vw,18rem)] rounded-sm object-cover"
          />
          <LazyLoadedImage
            src={person1}
            alt="our chief's preparing a food on the kitchen"
            className="absolute right-0 top-10 md:top-36 md:left-24 xs:top-44 xs:left-12 self-start h-[clamp(16rem,49.2vh,24rem)] w-[clamp(14rem,28vw,18rem)] xs:w-[clamp(14rem,28vw,18rem)] rounded-sm object-cover"
          />
        </div>
      </BlockContainer>
    </section>
  );
};
