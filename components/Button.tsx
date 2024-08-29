import React, { ButtonHTMLAttributes } from "react";
import { BsArrowRight } from "react-icons/bs";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <button
      className="flex justify-center items-center  md:w-auto w-full md:block gap-4 bg-purple-600 hover:bg-purple-500 text-white text-lg  font-bold py-2 px-4 rounded disabled:bg-gray"
      {...rest}
    >
      <span>Contact Us</span>
      <BsArrowRight />
    </button>
  );
};

export default Button;
