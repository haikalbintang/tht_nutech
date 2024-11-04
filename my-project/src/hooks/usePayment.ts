import { useState } from "react";
import { postPay } from "../services/pay";

export function usePayment() {
  const [paymentData, setPaymentData] = useState({
    invoice_number: "",
    service_code: "",
    service_name: "",
    transaction_type: "",
    total_amount: Number,
    created_on: "",
  });
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const [serviceChosen, setServiceChosen] = useState({
    service_code: "",
    service_name: "",
    service_icon: "",
    service_tariff: 0,
  });

  const paymentCode = { service_code: serviceChosen.service_code };

  async function handlePay() {
    await postPay(
      setPaymentData,
      setPaymentError,
      setIsPaymentLoading,
      paymentCode
    );
    location.reload();
  }

  return {
    paymentData,
    isPaymentLoading,
    paymentError,
    serviceChosen,
    handlePay,
    setServiceChosen,
  };
}
