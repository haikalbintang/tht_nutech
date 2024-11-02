import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[1366px] w-full min-h-screen">{children}</div>
    </div>
  );
}
