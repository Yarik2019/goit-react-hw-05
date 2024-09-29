import { useEffect, useState } from "react";

export const useHttp = (fn, param) => {
  const [data, setDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fn(param);
        setDate(data);
      } catch (err) {
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [fn, param]);

  return [isLoading, isError, data, setDate];
};
