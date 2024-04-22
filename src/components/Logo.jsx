import { twMerge } from "tailwind-merge";

const Logo = ({ Logo, className }) => {
  const mergedClass = twMerge("h-24 w-48 sm:w-36 ", className);

  return <img src={Logo} className={mergedClass} alt="little lemon Logo" />;
};

export default Logo;
