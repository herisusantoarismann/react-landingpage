import React from "react";

interface IProps {
  styles?: string;
}

const Button = ({ styles }: IProps) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
