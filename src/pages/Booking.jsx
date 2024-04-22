import { BookingForm } from "../components/BookingForm";
import { BlockContainer } from "../layouts/CustomContainer";
import "../App.css";
export const Booking = () => {
  return (
    <section className="relative bg-primary-200 ">
      <BlockContainer>
        <div className=" mx-auto  flex flex-col w-full  py-8 h-min md:h-full md:ml-0 lg:ml-8">
          <BookingForm />
        </div>
      </BlockContainer>
    </section>
  );
};
