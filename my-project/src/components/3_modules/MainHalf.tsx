import React from "react";
import { ReactNode } from "react";

interface MainHalfProps {
  children: ReactNode;
}

function MainHalf({ children }: MainHalfProps) {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center p-24">
      {children}
    </div>
  );
}

export default MainHalf;
