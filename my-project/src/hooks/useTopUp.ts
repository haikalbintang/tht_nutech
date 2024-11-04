import { useState } from "react";
import { postTopUp } from "../services/topUp";

export function useTopUp() {
  const [topUpData, setTopUpData] = useState({ balance: 0 });
  const [topUpError, setTopUpError] = useState<string | null>(null);
  const [isTopUpLoading, setIsTopUpLoading] = useState(false);

  const [topUpNominal, setTopUpNominal] = useState({ top_up_amount: 0 });

  async function handleTopUp() {
    await postTopUp(
      setTopUpData,
      setTopUpError,
      setIsTopUpLoading,
      topUpNominal
    );
    location.reload();
  }

  return {
    topUpData,
    isTopUpLoading,
    topUpError,
    topUpNominal,
    setTopUpNominal,
    handleTopUp,
  };
}
