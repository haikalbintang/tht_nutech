import { useEffect, useState } from "react";
import { getBalance } from "../services/balance";

export function useBalance() {
  const [balanceData, setBalanceData] = useState({
    balance: 0,
  });
  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [isBalanceLoading, setIsBalanceLoading] = useState(false);

  const [topUpData, setTopUpData] = useState({ balance: 0 });

  useEffect(() => {
    getBalance(setBalanceData, setBalanceError, setIsBalanceLoading);
  }, [topUpData]);

  return { balanceData, isBalanceLoading, balanceError };
}
