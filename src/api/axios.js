import axios from "axios";
const BASE_URL = "https://backend-restapi-973f.onrender.com";
// https://backend-restapi-973f.onrender.com

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
