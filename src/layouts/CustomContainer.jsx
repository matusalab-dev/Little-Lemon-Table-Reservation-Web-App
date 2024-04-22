import { twMerge } from "tailwind-merge";

export const BlockContainer = ({ id, className, children }) => {
  const mergedClass = twMerge(
    "custom-container flex justify-between",
    className
  );

  return (
    <div id={id} className={mergedClass}>
      {children}
    </div>
  );
};
