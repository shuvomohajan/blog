import { useState, useEffect } from "react";

function useFatch(url) {
  const [data, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.status + " " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setDatas(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setIsLoading(false);
          setError(error.message);
        }
      });

    return () => abortController.abort();
  }, [url]);

  return [data, isLoading, error];
}

export default useFatch;
