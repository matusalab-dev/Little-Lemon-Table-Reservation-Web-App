import { twMerge } from "tailwind-merge";

export const GridLayout = ({ className, children }) => {
  const mergedClass = twMerge(
    "grid max-w-5xl grid-cols-6 mx-auto md:mx-2 sm:mx-0 lg:justify-items-center gap-x-4 gap-y-12 mt-24",
    className
  );

  return <section className={mergedClass}>{children}</section>;
};
