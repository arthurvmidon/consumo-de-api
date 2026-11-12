import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ativo = true;

    const getData = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await axios.get(url);

        if (ativo) {
          setData(response.data);
        }

      } catch (error) {
        if (ativo) {
          setError(true);
          console.log("Erro:", error);
        }

      } finally {
        if (ativo) {
          setLoading(false);
        }
      }
    };

    getData();

    return () => {
      ativo = false;
    };

  }, [url]);

  return { data, loading, error };
}

export default useFetch;