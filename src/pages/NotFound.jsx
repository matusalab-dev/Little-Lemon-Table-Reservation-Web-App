import { Link, NavLink } from "react-router-dom";

// export const NotFound = () => {
//   return (
//     <div className="text-primary-200 custom-container h-screen bg-secondary-300 flex items-start md:flex-col md:items-center md:justify-center justify-start ">
//       <Link to="/">
//         {" "}
//         <img
//           src="../../public/Logo.svg"
//           alt="Little lemon "
//           width="250px"
//           className="lg:ml-0 ml-8 mt-8 "
//         />
//       </Link>
//       <div className="flex space-y-12  flex-col justify-center md:justify-center -mt-10 h-screen">
//         <h2 className="text-center font-semibold text-6xl ">COMMING SOON!</h2>
//         <NavLink to="/" className="text-2xl self-center text-center">
//           please go back to Home
//         </NavLink>
//       </div>
//     </div>
//   );
// };

export const NotFound = () => {
  return (
    <section className="px-4 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
        <div className="flex items-start justify-start md:justify-center w-[16rem] pr-12 pl-0 pb-3 pt-1 mb-6 ">
          <Link to="/">
            <img
              src="../../public/Logo.svg"
              alt="Little lemon restuarant"
              width="250px"
              className="lg:ml-0 mt-8 object-cover max-w-full max-h-full"
            />
          </Link>
        </div>
        <div className="mt-20">
          <h1 className="mb-3 text-4xl font-bold text-secondary-400 text md:text-5xl md:leading-tight md:font-extrabold">
            Coming Soon!
          </h1>
          <p className="mb-6 text-lg  text-primary-200 md:text-xl md:leading-normal">
            Stay tuned for more updates
          </p>
        </div>
      </div>
    </section>
  );
};
