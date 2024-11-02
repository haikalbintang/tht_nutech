import React from "react";

export default function Menu() {
  const menuItems = [
    {
      id: 1,
      img: "/PBB.png",
      text: "PBB",
    },
    {
      id: 2,
      img: "/Listrik.png",
      text: "Listrik",
    },
    {
      id: 3,
      img: "/Pulsa.png",
      text: "Pulsa",
    },
    {
      id: 4,
      img: "/PDAM.png",
      text: "PDAM",
    },
    {
      id: 5,
      img: "/PGN.png",
      text: "PGN",
    },
    {
      id: 6,
      img: "/Televisi.png",
      text: "TV Langganan",
    },
    {
      id: 7,
      img: "/Musik.png",
      text: "Musik",
    },
    {
      id: 8,
      img: "/Game.png",
      text: "Voucher Game",
    },
    {
      id: 9,
      img: "/VoucherMakanan.png",
      text: "Voucher Makanan",
    },
    {
      id: 10,
      img: "/Kurban.png",
      text: "Kurban",
    },
    {
      id: 11,
      img: "/Zakat.png",
      text: "Zakat",
    },
    {
      id: 12,
      img: "/PaketData.png",
      text: "Paket Data",
    },
  ];
  return (
    <ul className="flex w-full justify-between mb-16">
      {menuItems.map((menuItem) => (
        <li key={menuItem.id} className="max-w-20">
          <img className="w-20" src={menuItem.img} alt={menuItem.text} />
          <h6 className="text-center">{menuItem.text}</h6>
        </li>
      ))}
    </ul>
  );
}
