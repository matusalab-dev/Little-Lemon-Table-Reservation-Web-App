import { twMerge } from "tailwind-merge";

export const GridLayout = ({ className, children }) => {
  const mergedClass = twMerge(
    "my-16 lg:px-4 md:px-0 grid grid-flow-row-dense grid-cols-galleryCol grid-rows-galleryRow gap-x-4 gap-y-8 ",
    className
  );

  return <section className={mergedClass}>{children}</section>;
};
