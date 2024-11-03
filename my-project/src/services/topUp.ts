import { postFunction } from ".";

export async function postTopUp(setData, setError, setIsLoading, requestBody) {
  await postFunction(
    setIsLoading,
    "/topup",
    setData,
    setError,
    [102, 108],
    requestBody
  );
}
