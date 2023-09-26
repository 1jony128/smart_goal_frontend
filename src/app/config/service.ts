import axios from "axios";

export const HOME_URL = "";
export const BASE_URL = "";

export const $api = axios.create({
  baseURL: BASE_URL + "/api/",
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    if (localStorage.getItem("token")) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
  }
  return config;
});
