import React, { ReactNode } from "react";
import LogoSmall from "../2_widgets/LogoSmall";

interface HeaderProps {
  children: ReactNode;
  onHomeClick: () => void;
}

function Header({ children, onHomeClick }: HeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="cursor-pointer" onClick={onHomeClick}>
        <LogoSmall />
      </div>
      {children}
    </div>
  );
}

export default Header;
