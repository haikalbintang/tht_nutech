import React from "react";

export default function Navbar() {
  const navLinks = ["Top Up", "Transaction", "Akun"];
  return (
    <div>
      <ul className="flex gap-20">
        {navLinks.map((navLink) => (
          <li key={navLink}>
            <h2 className="font-medium text-xl">{navLink}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
