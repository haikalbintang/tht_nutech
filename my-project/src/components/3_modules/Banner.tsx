import React from "react";

export default function Banner() {
  const bannerItems = [
    {
      id: 1,
      img: "/Banner1.png",
      alt: "Saldo Gratis!",
    },
    {
      id: 2,
      img: "/Banner2.png",
      alt: "Diskon listrik!",
    },
    {
      id: 3,
      img: "/Banner3.png",
      alt: "Promo makan!",
    },
    {
      id: 4,
      img: "/Banner4.png",
      alt: "Cashback 25%",
    },
    {
      id: 5,
      img: "/Banner5.png",
      alt: "Buy 1 Get 2!",
    },
  ];

  return (
    <>
      <h5 className="font-semibold mb-6">Temukan promo menarik</h5>
      <ul className="flex overflow-x-visible gap-10 mb-20">
        {bannerItems.map((bannerItem) => (
          <li className="">
            <img
              className="min-w-80"
              src={bannerItem.img}
              alt={bannerItem.alt}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
