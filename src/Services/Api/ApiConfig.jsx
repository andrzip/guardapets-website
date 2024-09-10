import axios from "axios";

export const Api = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:3001",
=======
  baseURL: "http://localhost:3001/",
>>>>>>> d719ab91c262dc383a8c9c517c3a7f9c2999b3d8
  withCredentials: true,
});
