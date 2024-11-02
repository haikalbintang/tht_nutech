import React, { ReactNode } from "react";

interface MainColProps {
  children: ReactNode;
}

export default function MainCol({ children }: MainColProps) {
  return <div className="w-full flex flex-col">{children}</div>;
}
