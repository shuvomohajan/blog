import { useState, useEffect } from "react";

function useFatch(url) {
  const [data, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
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
          setIsLoading(false);
          setError(error.message);
        });
    }, 1000);

    return () => console.log("ok");
  }, [url]);

  return [data, isLoading, error];
}

export default useFatch;
