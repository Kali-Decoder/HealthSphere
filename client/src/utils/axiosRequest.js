import axios from "axios";
const baseUrl = "http://localhost:8080/";
const customHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: customHeaders,
});

export default axiosInstance;
