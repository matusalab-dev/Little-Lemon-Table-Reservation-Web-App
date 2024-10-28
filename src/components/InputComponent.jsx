import { twMerge } from "tailwind-merge";

export const InputComponent = ({
  type,
  name,
  label,
  touched,
  errors,
  className,
  labelClass,
  labelIconClass,
  id,
  placeholder,
  value,
  onChange,
  onBlur,
  requiredIcon = "",
  ...props
}) => {
  const InputMerged = twMerge(
    " text-[1rem] w-full text-primary-200 rounded-[0.3rem] p-3 mt-1 sm:mt-0 font-semibold placeholder:opacity-60 focus:border-none focus:outline-none  focus:outline-offset-0",
    className
  );

  const LabelIconMerged = twMerge("mr-1 text-3xl md:text-2xl ", labelIconClass);
  const LabelMerged = twMerge(
    "flex font-semibold sm:text-sm text-secondary-300",
    labelClass
  );

  return (
    <div className="mt-6 sm:mt-4">
      <label htmlFor={id} className={`${LabelMerged} `}>
        <span className={LabelIconMerged}>{requiredIcon}</span>
        {label}
      </label>

      <input
        type={type}
        className={` ${
          touched && errors ? "border-red-500 " : ""
        } ${InputMerged} `}
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
};
