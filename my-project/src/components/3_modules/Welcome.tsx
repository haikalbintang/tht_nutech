import React from "react";
import HeadingWelcome from "../1_elements/HeadingWelcome";
import HeadingName from "../1_elements/HeadingName";

export default function Welcome() {
  return (
    <div className="w-2/5 flex flex-col justify-evenly">
      <div className="mb-6">
        <img className="w-20" src="/ProfilePhoto.png" alt="" />
      </div>
      <HeadingWelcome>Selamat datang,</HeadingWelcome>
      <HeadingName>Kristanto Wibowo</HeadingName>
    </div>
  );
}
