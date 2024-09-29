import { useEffect, useState } from "react";

export const useHttp = (fn, param) => {
  const [data, setDate] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fn(param);
      setDate(data);
    };

    getData();
  }, [fn, param]);

  return [data, setDate];
};
