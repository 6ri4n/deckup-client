import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  async (error) => {
    if (error.response && error.response.status === 400) {
      try {
        const newAccessToken = await refreshAccessToken();
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(error.config);
      } catch (error) {
        throw error;
      }
    }

    return Promise.reject(error);
  }
);

async function refreshAccessToken() {
  const refreshToken = getRefreshToken();

  try {
    const response = await axiosInstance.post("/refresh", { refreshToken });
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
}

function getRefreshToken() {
  const cookieParts = document.cookie.split("=");

  if (cookieParts.length > 1) {
    return cookieParts[1];
  }

  return null;
}

class APIClient {
  constructor(accessToken = null) {
    this.accessToken = accessToken;
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.accessToken}`;
  }

  post(url, data) {
    return axiosInstance.post(url, data);
  }

  get(url) {
    return axiosInstance.get(url);
  }

  patch(url, data) {
    return axiosInstance.patch(url, data);
  }

  delete(url, data) {
    return axiosInstance.delete(url, data);
  }
}

export default APIClient;
