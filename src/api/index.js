import axios from "axios";

const API = axios.create({ baseURL: "https://backend-restapi-973f.onrender.com" });

// interceptors

// similar to postman - sending req in same format as postman
export const textQuery = (text) => API.post("/api/dialogflow/textQuery", text);
export const eventQuery = (event) =>
  API.post("/api/dialogflow/eventQuery", event);
