import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    accept: "*/*",
  },
});

export default customAxios;
