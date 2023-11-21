export const CustomContainer = ({ id, className, children }) => {
  return (
    <div
      id={id}
      className={`custom-container flex justify-between ${className}`}
    >
      {children}
    </div>
  );
};
