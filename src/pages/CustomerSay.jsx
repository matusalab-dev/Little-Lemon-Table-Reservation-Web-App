import React from "react";
import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { GridLayout } from "../layouts/GridLayout";
import dish1 from "../assets/image-thomas.jpg";
import dish2 from "../assets/image-emily.jpg";
import user3 from "../assets/profile-pic-3.jpg";

export const CustomerSay = () => {
  const fullStarIcon = <FaStar fontSize="26px" />;
  const halfStarIcon = <FaStarHalfAlt fontSize="26px" />;

  const testimonials = [
    {
      firstName: "matusalab",
      lastName: "Abrha",
      rating: [
        fullStarIcon,
        fullStarIcon,
        fullStarIcon,
        fullStarIcon,
        fullStarIcon,
      ],
      imageUrl: user3,
      review:
        "I recently visited Little-Lemon restaurant and was blown away by the delicious food and friendly service.  I would definitely recommend LLMN restaurant to anyone looking for a great Italian meal.",
    },
    {
      firstName: "john ",
      lastName: "smith",
      rating: [
        fullStarIcon,
        fullStarIcon,
        fullStarIcon,
        fullStarIcon,
        halfStarIcon,
      ],
      imageUrl: dish1,
      review:
        "I had an incredible experience at Little-Lemon restaurant. The staff was incredibly welcoming and attentive, and the food was simply amazing. Overall, I highly recommend Little-Lemon restaurant for a memorable dining experience.",
    },
    {
      firstName: "Emily",
      lastName: "carry",
      rating: [fullStarIcon, fullStarIcon, halfStarIcon],
      imageUrl: dish2,
      review:
        "I was really disappointed with my experience at Little-Lemon restaurant. The service was slow and unresponsive, and my food arrived cold. I hope the restaurant can improve in these areas in the future.",
    },
  ];

  return (
    <section className="h-min bg-secondary-100 py-16">
      <h2 className="text-center font-primary text-secondary-400 text-6xl md:text-5xl font-bold sm:py-1">
        Testimonials
      </h2>
      {/*testimonials grid  */}
      <GridLayout className={`custom-container md:px-8`}>
        {/* <div className="custom-container mt-16 sm:mt-12 grid grid-cols-galleryCol  grid-flow-row-dense gap-x-6 gap-y-12"> */}
        {/* looping through the customers */}
        {testimonials.map((testimonial, index) => {
          return (
            <div
              key={index}
              className=" cursor-pointer bg-red-200 px-7 py-7 transition-all hover:scale-105 hover:shadow-md"
            >
              <div className="flex flex-col  space-y-8">
                <span className="flex font-primary text-4xl font-bold text-primary-100">
                  {
                    // testimonial.rating.length >= 3 ?
                    // (<>
                    testimonial.rating.map((testimonial, index) => testimonial)
                    // </>)(
                    // <>
                    // {testimonial.rating?.map(
                    //   (testimonial, index) => testimonial
                    // )}
                    // </>
                    // )
                  }
                </span>

                <div className="flex content-center space-x-6">
                  <img
                    className="h-[100px] w-[100px] rounded-full  object-cover"
                    src={testimonial.imageUrl}
                    alt="Title"
                  />
                  <p className="self-center text-secondary-400 text-xl font-bold">
                    {`${
                      testimonial.firstName[0].toUpperCase() +
                      testimonial.firstName.slice(
                        1,
                        testimonial.firstName.length
                      )
                    } ${testimonial.lastName[0].toUpperCase()}.`}
                  </p>
                </div>

                <p className=" font-semibold text-primary-200 max-w-[45ch]">
                  {testimonial.review}
                </p>
              </div>
            </div>
          );
        })}

        {/* {/each} */}
        {/* </div> */}
      </GridLayout>
    </section>
  );
};
