import React, { useEffect, useState } from "react";
import { getService } from "../../services/service";
import { ServiceType } from "../../types/service";

export default function Service() {
  const [serviceData, setServiceData] = useState<ServiceType[]>([
    {
      service_code: "",
      service_name: "",
      service_icon: "",
      service_tariff: 0,
    },
  ]);
  const [serviceError, setServiceError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getService(setServiceData, setServiceError, setIsLoading);
  }, []);

  if (serviceError) {
    console.error(serviceError);
  }

  return (
    <ul className="flex w-full justify-between mb-16">
      {isLoading
        ? "loading..."
        : serviceData.map((serviceItem) => (
            <li key={serviceItem.service_code} className="max-w-20">
              <img
                className="w-20"
                src={serviceItem.service_icon}
                alt={serviceItem.service_name}
              />
              <h6 className="text-center text-sm">
                {serviceItem.service_name}
              </h6>
            </li>
          ))}
    </ul>
  );
}
