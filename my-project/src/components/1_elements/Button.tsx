import React from "react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  bgColor: string;
  textColor: string;
  border?: string;
  onClick?: () => void;
}

function Button({
  children,
  bgColor,
  textColor,
  border,
  onClick,
}: ButtonProps) {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className={`${bgColor} ${textColor} ${
          border && `${border}`
        } w-full py-3 rounded-md font-medium mt-6`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
