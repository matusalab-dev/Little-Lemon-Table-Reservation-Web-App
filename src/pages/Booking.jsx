import { BookingForm } from "../components/BookingForm";
import { BlockContainer } from "../layouts/CustomContainer";
import "../App.css";
export const Booking = () => {
  return (
    <section className="relative bg-primary-200 ">
      {/* <BlockContainer> */}
      <div className="flex flex-col justify-between w-full py-8 mx-auto custom-container h-min md:h-full md:ml-0 lg:ml-8">
        <BookingForm />
      </div>
      {/* </BlockContainer> */}
    </section>
  );
};
