import { BASE_URL } from "../constants/constants";

export async function getFunction(
  setIsLoading,
  apiEndpoint,
  setData,
  setError,
  errorCode
) {
  try {
    setIsLoading(true);
    const token = sessionStorage.getItem("token");
    const response = await fetch(BASE_URL + apiEndpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    if (result.status === 0) {
      setData(result.data);
    } else {
      for (let i = 0; i < errorCode.length; i++) {
        if (result.status === errorCode[i]) {
          setError(result.message);
        }
      }
    }
  } catch (error) {
    console.error("ERROR Fetching:", error);
  } finally {
    setIsLoading(false);
  }
}

export async function postFunction(
  setIsLoading,
  apiEndpoint,
  setData,
  setError,
  errorCode,
  requestBody
) {
  try {
    setIsLoading(true);
    const token = sessionStorage.getItem("token");
    const response = await fetch(BASE_URL + apiEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.status === 400) {
      errorCode = [102];
    } else if (response.status === 401) {
      errorCode = [108];
    }

    const result = await response.json();

    if (result.status === 0) {
      setData(result.data);
    } else {
      for (let i = 0; i < errorCode.length; i++) {
        if (result.status === errorCode[i]) {
          setError(result.message);
        }
      }
    }
  } catch (error) {
    console.error("ERROR Fetching:", error);
  } finally {
    setIsLoading(false);
  }
}

export async function editFileFunction(
  setIsLoading,
  apiEndpoint,
  setData,
  setError,
  errorCode,
  requestBody
) {
  try {
    setIsLoading(true);
    const token = sessionStorage.getItem("token");
    const response = await fetch(BASE_URL + apiEndpoint, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: requestBody,
    });

    if (response.status === 400) {
      errorCode = [102];
    } else if (response.status === 401) {
      errorCode = [108];
    }

    const result = await response.json();

    if (result.status === 0) {
      setData(result.data);
    } else {
      for (let i = 0; i < errorCode.length; i++) {
        if (result.status === errorCode[i]) {
          setError(result.message);
        }
      }
    }
  } catch (error) {
    console.error("ERROR Fetching:", error);
  } finally {
    setIsLoading(false);
  }
}
