import React, { useEffect, useState } from "react";
import { banners } from "../../constants/banners";
import { BannerType } from "../../types/banner";
import { getBanner } from "../../services/banner";

export default function Banner() {
  const [bannerData, setBannerData] = useState<BannerType[]>([
    {
      banner_name: "",
      banner_image: "",
      description: ",",
    },
  ]);
  const [bannerError, setBannerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBanner(setBannerData, setBannerError, setIsLoading);
  }, []);

  if (bannerError) {
    console.error(bannerError);
  }

  return (
    <>
      <h5 className="font-semibold mb-6">Temukan promo menarik</h5>
      <ul className="flex overflow-x-visible gap-10 mb-20">
        {isLoading
          ? "loading..."
          : bannerData.map((bannerItem) => (
              <li key={bannerItem.banner_name}>
                <img
                  className="min-w-80"
                  src={bannerItem.banner_image}
                  alt={bannerItem.description}
                />
              </li>
            ))}
      </ul>
    </>
  );
}
