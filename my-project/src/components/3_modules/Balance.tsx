import React, { useEffect, useState } from "react";
import { getBalance } from "../../services/balance";
import { BalanceType } from "../../types/transactionModule";

export default function Balance() {
  const [balanceData, setBalanceData] = useState<BalanceType>({
    balance: 0,
  });
  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBalance(setBalanceData, setBalanceError, setIsLoading);
  }, []);

  if (balanceError) {
    console.error(balanceError);
  }

  return (
    <div className="w-3/5 bg-[url('/BackgroundSaldo.png')] bg-left bg-no-repeat bg-contain text-white h-full">
      <div className="w-full h-full flex flex-col justify-between p-9">
        <h4 className="text-lg">Saldo anda</h4>
        <p className="text-5xl font-semibold tracking-wider pb-3">
          Rp {isLoading ? "loading..." : `${balanceData.balance}`}
        </p>
        <h5 className="text-sm">Lihat Saldo</h5>
      </div>
    </div>
  );
}
