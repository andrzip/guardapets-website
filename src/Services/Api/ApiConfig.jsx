import axios from "axios";

export const Api = axios.create({
  baseURL: "https://9rz5t2-3001.csb.app",
  withCredentials: true,
});
