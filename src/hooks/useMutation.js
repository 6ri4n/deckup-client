import { useEffect, useState } from "react";
import APIClient from "../services/apiClient";

const useMutation = (action, url, data = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = APIClient();

    // available actions: POST, GET, PATCH, DELETE
    const requestMethod = api[action.toLowerCase()];

    if (!requestMethod) {
      setError(new Error("Invalid Action."));
      setLoading(false);
      return;
    }

    setLoading(true);

    requestMethod(url, data)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [action, url, data]);

  return { data, loading, error };
};

export default useMutation;
