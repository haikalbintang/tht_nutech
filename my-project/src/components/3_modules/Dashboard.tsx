import React, { ReactNode } from "react";

interface DashboardProps {
  children: ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
  return <div className="w-full flex h-[200px] mt-8 mb-16">{children}</div>;
}
