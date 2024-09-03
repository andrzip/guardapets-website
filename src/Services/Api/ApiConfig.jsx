import axios from "axios";

export const Api = axios.create({
  baseURL: "https://pmk84q-3001.csb.app",
  withCredentials: true,
});
