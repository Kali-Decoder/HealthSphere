import axios from "axios";
const baseUrl = " https://healthidsbx.abdm.gov.in/";
const AccessToken ="";
const customHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  "Authorization":`Bearer ${AccessToken}`
};
const abhaInstance = axios.create({
  baseURL: baseUrl,
  headers: customHeaders,
});

export default abhaInstance;
