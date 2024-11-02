import React from "react";

export default function Balance() {
  return (
    <div className="w-3/5 bg-[url('/BackgroundSaldo.png')] bg-left bg-no-repeat bg-contain text-white h-full">
      <div className="w-full h-full flex flex-col justify-between p-9">
        <h4 className="text-lg">Saldo anda</h4>
        <p className="text-5xl font-semibold tracking-wider pb-3">Rp 0000000</p>
        <h5 className="text-sm">Lihat Saldo</h5>
      </div>
    </div>
  );
}
