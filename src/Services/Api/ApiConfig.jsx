import axios from "axios";

export const Api = axios.create({
  baseURL: "https://73xwj4-3001.csb.app",
  withCredentials: true,
});
