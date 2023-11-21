import { BookingForm } from "../components/BookingForm";
import { CustomContainer } from "../layouts/Custom-container";
import "../App.css";
import { BgOverlay } from "../components/BgOverlay";
export const Booking = () => {
  return (
    <section className="relative bg-primary-200 ">
      {/* <div className="custom-container flex justify-between"> */}
      <CustomContainer>
        {/* <BgOverlay top="60%" left="30" /> */}
        <div className=" mx-auto  flex  w-full flex-col py-8 h-[calc(100vh-5rem)] md:h-full lg:ml-8">
          <BookingForm />
        </div>
      </CustomContainer>
    </section>
  );
};
