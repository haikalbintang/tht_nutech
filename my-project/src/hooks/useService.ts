import { useEffect, useState } from "react";
import { ServiceType } from "../types/service";
import { getService } from "../services/service";

export function useService() {
  const [serviceData, setServiceData] = useState<ServiceType[]>([]);
  const [serviceError, setServiceError] = useState<string | null>(null);
  const [isServiceLoading, setIsServiceLoading] = useState(false);

  useEffect(() => {
    getService(setServiceData, setServiceError, setIsServiceLoading);
  }, []);

  return { serviceData, isServiceLoading, serviceError };
}
