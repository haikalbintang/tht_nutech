import React, { ReactNode } from "react";
import LogoSmall from "../2_widgets/LogoSmall";

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <LogoSmall />
      </div>
      {children}
    </div>
  );
}

export default Header;
