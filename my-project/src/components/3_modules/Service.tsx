import React, { useEffect, useState } from "react";
import { getService } from "../../services/service";
import { ServiceType } from "../../types/service";

interface ServiceProps {
  onClickService: (service: ServiceType) => void;
  isLoading: boolean;
  serviceData: ServiceType[];
  handleClickService: () => void;
}

export default function Service({
  onClickService,
  isLoading,
  serviceData,
  handleClickService,
}: ServiceProps) {
  return (
    <ul className="flex w-full justify-between mb-16">
      {isLoading
        ? "loading..."
        : serviceData.map((serviceItem) => (
            <li
              key={serviceItem.service_code}
              onClick={() => {
                onClickService(serviceItem);
                handleClickService();
              }}
              className="max-w-20 cursor-pointer"
            >
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
