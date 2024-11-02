import React from "react";
import { ReactNode } from "react";

interface ButtonNominalProps {
  children: ReactNode;
  onClick: () => void;
}

function ButtonNominal({ children, onClick }: ButtonNominalProps) {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className={`bg-white border border-zinc-300 text-zinc-700 w-full py-3 rounded-md font-medium`}
      >
        {children}
      </button>
    </div>
  );
}

export default ButtonNominal;
