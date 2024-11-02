import React, { ReactNode } from "react";

interface HeadingWelcomeProps {
  children: ReactNode;
}

export default function HeadingWelcome({ children }: HeadingWelcomeProps) {
  return <h1 className="text-2xl">{children}</h1>;
}
