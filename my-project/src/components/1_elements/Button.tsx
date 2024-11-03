import React from "react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  bgColor: string;
  textColor: string;
  border?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({
  children,
  bgColor,
  textColor,
  border,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className={`${textColor} ${border && `${border}`} ${
          disabled ? "bg-zinc-300" : bgColor
        } w-full py-3 rounded-md font-medium mt-6`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
