import React, { useEffect, useState } from 'react';

export type UseFetchType = {
  url: string;
};

export const useFetch = ({ url }: UseFetchType) => {
  const [data, setData] = useState<[] | null>(null);
  const [isLoading, setIsLoading] = useState<React.SetStateAction<boolean>>(false);
  const [isError, setIsError] = useState<React.SetStateAction<boolean>>(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response: Response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    }

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
};
