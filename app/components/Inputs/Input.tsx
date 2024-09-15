import { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  iconRight?: boolean;
}

const Input = ({ icon, iconRight, ...rest }: Props) => {
  return (
    <div className="relative flex-grow">
      <span
        className={`${
          iconRight ? " right-6" : " left-6 "
        } absolute text-2xl text-secondary-normal top-0 bottom-0
        flex justify-center items-center`}
      >
        {icon}
      </span>
      <input
        {...rest}
        className={`${
          icon ? "px-[3.8rem]" : "px-4"
        } border border-secondary-normal h-12 w-full min-w-full rounded-lg 
        text-secondary-normal placeholder:text-secondary-normal `}
      />
    </div>
  );
};

export default Input;
