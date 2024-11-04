import { postFunction } from ".";

export async function postPay(setData, setError, setIsLoading, requestBody) {
  await postFunction(
    setIsLoading,
    "/transaction",
    setData,
    setError,
    [102, 108],
    requestBody
  );
}
