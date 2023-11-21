import { twMerge } from "tailwind-merge";

export const GridLayout = ({ className, children }) => {
  const overridedClass = twMerge(
    "my-16 lg:px-4 grid grid-flow-row-dense grid-cols-galleryCol grid-rows-galleryRow gap-x-8 gap-y-8",
    className
  );
  return <section className={overridedClass}>{children}</section>;
};
