import React from "react";

interface NavLink {
  text: string;
  id: string;
}

interface NavbarProps {
  navLinks: NavLink[];
  onSelectLink: (string) => void;
  selectedLink: string;
}

export default function Navbar({
  navLinks,
  onSelectLink,
  selectedLink,
}: NavbarProps) {
  return (
    <div>
      <ul className="flex gap-20">
        {navLinks.map((navLink) => (
          <li
            key={navLink.id}
            onClick={() => onSelectLink(navLink.id)}
            className="cursor-pointer"
          >
            <h2
              className={`font-medium text-xl ${
                selectedLink === navLink.id && "text-[#f42619]"
              }`}
            >
              {navLink.text}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
