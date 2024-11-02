import React, { ReactNode } from "react";

interface HeadingNameProps {
  children: ReactNode;
}

export default function HeadingName({ children }: HeadingNameProps) {
  return <h2 className="text-4xl font-medium">{children}</h2>;
}
