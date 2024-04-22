import { FormatDate } from "../utils/FormatDate";
import { useLocation } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";

const ConfirmedBooking = () => {
  const values = useLocation();
  const [month, day] = FormatDate(values.state.date);

  return (
    <div className="bg-primary-200">
      <div className="custom-container flex h-60  flex-col items-center justify-center bg-primary-200 p-8 text-left text-lg font-normal text-primary-100 sm:w-full sm:items-start sm:p-3 ">
        <div className="mx-auto flex max-w-[30rem] flex-col items-center xs:text-center">
          <MdCheckCircle className=" text-center text-5xl" />
          <h1 className="block max-w-[35ch] self-center text-2xl font-bold sm:font-semibold sm:text-lg  md:text-xl">
            Your reservation has been confirmed!
          </h1>
          <p className="mt-2 ">
            Your table is reserved for {`${month.slice(0, 3)}, ${day}.`}
          </p>
          <p className="-mt-1 text-center">
            Please check your email for more details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
