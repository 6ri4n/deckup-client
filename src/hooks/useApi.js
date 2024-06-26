import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";

const useApi = () => {
  // retrieve access token from auth context
  const { user, login } = useAuth();
  const accessToken = user.isSignedIn ? user.accessToken : null;

  const axiosInstance = axios.create({
    baseURL: "http://localhost:4000",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });

  const [state, setState] = useState({
    data: undefined,
    loading: false,
    error: { status: undefined, message: undefined },
  });
  const [cancelToken, setCancelToken] = useState(undefined);

  const navigate = useNavigate();

  const sendRequest = async (method, url, payload) => {
    let requestMethod;

    try {
      // available methods: POST, GET, PATCH, DELETE
      requestMethod = axiosInstance[method.toLowerCase()];
      if (!requestMethod) {
        throw new Error("Invalid Method.");
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        data: undefined,
        loading: false,
        error: { status: 400, message: error.message },
      }));
      return;
    }

    if (cancelToken) {
      cancelToken.cancel("Canceled previous request.");
    }

    const newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);

    setState((prev) => ({
      ...prev,
      data: undefined,
      loading: true,
      error: { status: undefined, message: undefined },
    }));

    try {
      const response = await requestMethod(url, payload, {
        cancelToken: newCancelToken.token,
      });
      setState((prev) => ({
        ...prev,
        data: response.data,
      }));
    } catch (error) {
      if (
        error.response?.status === 403 &&
        error.response?.data.error.includes("expired")
      ) {
        await retryRequest(requestMethod, url, payload, newCancelToken);
      } else {
        setState((prev) => ({
          ...prev,
          error: {
            status: error.response?.status,
            message: error.response?.data.error,
          },
        }));
      }
    } finally {
      setState((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  const retryRequest = async (
    requestMethod,
    url,
    payload,
    cancelTokenSource
  ) => {
    try {
      // attempt to refresh access token
      const response = await axiosInstance.post("/api/account/refresh");
      const newAccessToken = response.accessToken;

      // update headers and auth context
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newAccessToken}`;
      login(response);

      // retry the original request
      const retryResponse = await requestMethod(url, payload, {
        cancelToken: cancelTokenSource.token,
      });

      setState((prev) => ({
        ...prev,
        data: retryResponse.data,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: {
          status: error.response?.status,
          message: error.response?.data.error,
        },
      }));

      // route user back to login page
      navigate("/login");
    }
  };

  return { ...state, sendRequest };
};

export default useApi;
