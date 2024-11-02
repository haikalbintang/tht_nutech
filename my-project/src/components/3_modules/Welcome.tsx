import React from "react";

export default function Welcome() {
  return (
    <div className="w-2/5 flex flex-col justify-evenly">
      <div className="mb-6">
        <img className="w-20" src="/ProfilePhoto.png" alt="" />
      </div>
      <h1 className="text-2xl">Selamat datang,</h1>
      <h2 className="text-4xl font-medium">Kristanto Wibowo</h2>
    </div>
  );
}
