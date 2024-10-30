import { useState, useEffect } from "react";

export const useHttp = (fn, params) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const results = await fn(params);
        setData(results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [fn, params]);

  return { data, isError, isLoading };
};
