import React from "react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  bgColor: string;
  textColor: string;
}

function Button({ children, bgColor, textColor }: ButtonProps) {
  return (
    <div className="w-full">
      <button
        className={`bg-${bgColor} text-${textColor} w-full py-3 rounded-md font-medium mt-6`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
