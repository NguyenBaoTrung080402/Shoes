/* eslint-disable no-unused-vars */
import axios from "axios";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: "https://localhost:8080/api/",
  withCredentials: true,
  headers: {
    common: {
      Authorization: token !== null ? "Bearer" + token : "",
    }
  }
});

instance.interceptors.request.use(
  (config) => {
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);


export default instance;
