import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:3001", // URL da API
  withCredentials: true,
});
