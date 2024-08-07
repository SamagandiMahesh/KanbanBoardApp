
import { useState, useEffect } from "react";
import { Result } from "../organisms/Board/Board.types";

export const useFetchData = (
  url: string,
  onSuccess: (data: Result) => void,
  onError: (error: string) => void
): boolean => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result: Result = await response.json();
        onSuccess(result);
      } catch (error) {
        console.error(error);
        onError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return loading;
};
