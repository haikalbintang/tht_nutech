import React, { ReactNode } from "react";

interface AlternativeProps {
  children: ReactNode;
  onClick: () => void;
}

export default function Alternative({ children, onClick }: AlternativeProps) {
  return (
    <p className="text-sm text-zinc-500">
      {children}
      <span onClick={onClick} className="font-semibold text-[#f42619]">
        di sini
      </span>
    </p>
  );
}
