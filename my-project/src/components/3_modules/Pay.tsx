import React, { useState } from "react";
import HeadingWelcome from "../1_elements/HeadingWelcome";
import { ServiceType } from "../../types/service";
import Input from "../1_elements/Input";
import Button from "../1_elements/Button";
import { postPay } from "../../services/pay";

interface PayProps {
  serviceChosen: ServiceType;
  isLoading: boolean;
  handlePay: () => void;
}

export default function Pay({ serviceChosen, isLoading, handlePay }: PayProps) {
  return (
    <>
      <HeadingWelcome>Pembayaran</HeadingWelcome>
      <div className="flex items-center gap-2 my-2">
        <img
          src={serviceChosen.service_icon}
          alt={serviceChosen.service_name}
        />
        <h3 className="text-2xl font-semibold">{serviceChosen.service_name}</h3>
      </div>
      <Input type="number" value={serviceChosen.service_tariff} icon="N" />
      <Button
        onClick={handlePay}
        bgColor={"bg-[#f42619]"}
        textColor={"text-white"}
      >
        {isLoading ? "loading..." : "Bayar"}
      </Button>
    </>
  );
}
