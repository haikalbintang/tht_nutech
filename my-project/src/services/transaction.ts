import { getFunction } from ".";

export async function getTransactions(setData, setError, setIsLoading) {
  await getFunction(setIsLoading, "/transaction/history", setData, setError, [
    108,
  ]);
}
