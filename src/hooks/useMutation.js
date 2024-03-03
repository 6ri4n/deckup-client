import { useEffect, useState } from "react";
import APIClient from "../services/apiClient";

const useMutation = (method, url, data = null) => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const api = new APIClient();

    // available methods: POST, GET, PATCH, DELETE
    const requestMethod = api[method.toLowerCase()];

    if (!requestMethod) {
      setState({
        data: null,
        loading: false,
        error: new Error("Invalid Method."),
      });
      return;
    }

    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    requestMethod(url, data)
      .then((response) => {
        setState((prev) => ({
          ...prev,
          data: response.data,
        }));
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          error: error,
        }));
      })
      .finally(() => {
        setState((prev) => ({
          ...prev,
          loading: false,
        }));
      });
  }, [method, url, data]);

  return { ...state };
};

export default useMutation;
