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
    <section className="py-24 bg-secondary-100 lg:px-4">
      <div className="">
        <h2 className="text-6xl font-bold text-center font-primary text-secondary-400 md:text-5xl sm:py-1">
          Testimonials
        </h2>
        {/*testimonials grid  */}
        <GridLayout className="gap-y-6">
          {testimonials.map((testimonial, index) => {
            return (
              <div
                className="max-w-sm col-span-2 lg:col-span-3 md:col-span-6 space-y-4 px-8 py-10 bg-red-200 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-md"
                key={index}
              >
                <div className="flex content-center space-x-6 xs:space-x-4">
                  <LazyLoadedImage
                    src={testimonial.imageUrl}
                    alt={`our testimonial ${testimonial.firstName} profile image`}
                    width="100px"
                    height="100px"
                    className="sm:h-[80px] sm:w-[80px] rounded-full  object-cover"
                  />

                  <p className="self-center text-xl font-semibold capitalize text-secondary-400 sm:text-lg">
                    {`${
                      testimonial.firstName
                    } ${testimonial.lastName[0].toUpperCase()}.`}
                  </p>
                </div>

                <p className="xs:text-sm xs:max-w-[33ch] text-base leading-tight text-primary-200 max-w-[45ch] ">
                  {testimonial.review}
                </p>

                <span className="flex text-4xl font-semibold font-primary sm:text-xs xs:font-semibold text-primary-100">
                  {testimonial.rating?.map((testimonial, index) => (
                    <span key={index}>{testimonial}</span>
                  ))}
                </span>
              </div>
            );
          })}
        </GridLayout>
      </div>
    </section>
  );
};
