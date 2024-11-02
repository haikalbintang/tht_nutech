import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return <div className="w-full flex">{children}</div>;
}
