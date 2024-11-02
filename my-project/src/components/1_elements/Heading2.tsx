import React from "react";
import { ReactNode } from "react";

interface Heading2Props {
  children: ReactNode;
}

function Heading2({ children }) {
  return (
    <h2 className="text-zinc-900 font-semibold text-3xl m-4 text-center px-10">
      {children}
    </h2>
  );
}

export default Heading2;
