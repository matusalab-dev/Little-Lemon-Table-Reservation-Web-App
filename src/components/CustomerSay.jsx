import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GridLayout } from "../layouts/GridLayout";
import LazyLoadedImage from "./LazyLoadedImage";
import user1 from "../assets/image-thomas.jpg";
import user2 from "../assets/image-emily.jpg";
import user3 from "../assets/image-matusala.jpg";

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
      imageUrl: user1,
      review:
        "I had an incredible experience at Little-Lemon restaurant. The staff was incredibly welcoming and attentive, and the food was simply amazing. Overall, I highly recommend Little-Lemon restaurant for a memorable dining experience.",
    },
    {
      firstName: "Emily",
      lastName: "carry",
      rating: [fullStarIcon, fullStarIcon, halfStarIcon],
      imageUrl: user2,
      review:
        "I was really disappointed with my experience at Little-Lemon restaurant. The service was slow and unresponsive, and my food arrived cold. I hope the restaurant can improve in these areas in the future.",
    },
  ];

  return (
    <section className=" bg-secondary-100 py-24">
      <h2 className="text-center font-primary text-secondary-400 text-6xl  md:text-5xl font-bold sm:py-1">
        Testimonials
      </h2>
      {/*testimonials grid  */}
      <GridLayout
        className={`custom-container xs:grid-cols-[18rem] xs:justify-center md:px-8 sm:px-4 xs:px-0 sm:my-10`}
      >
        {testimonials.map((testimonial, index) => {
          return (
            <div
              key={index}
              className=" cursor-pointer bg-red-200 p-7 sm:px-4 transition-all hover:scale-[1.02] hover:shadow-md"
            >
              <div className="flex flex-col  space-y-8 sm:space-y-5 h-min">
                <span className="flex font-primary text-4xl sm:text-xl sm:font-semibold font-bold text-primary-100">
                  {testimonial.rating?.map((testimonial, index) => (
                    <span key={index}>{testimonial}</span>
                  ))}
                </span>

                <div className="flex content-center space-x-6 xs:space-x-4">
                  <LazyLoadedImage
                    src={testimonial.imageUrl}
                    alt={`our testimonial ${testimonial.firstName} profile image`}
                    width="100px"
                    height="100px"
                    className="sm:h-[80px] sm:w-[80px] rounded-full  object-cover"
                  />

                  <p className="self-center capitalize text-secondary-400 text-xl sm:text-lg  font-semibold">
                    {`${
                      testimonial.firstName
                    } ${testimonial.lastName[0].toUpperCase()}.`}
                  </p>
                </div>

                <p className="xs:text-sm xs:max-w-[33ch] text-base leading-tight text-primary-200 max-w-[45ch] ">
                  {testimonial.review}
                </p>
              </div>
            </div>
          );
        })}
      </GridLayout>
    </section>
  );
};
