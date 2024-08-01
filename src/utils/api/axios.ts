import axios from "axios";

const customAxios = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_DEV_TYPE === "dev"
      ? "http://localhost:8080"
      : "http://api.wildflower-gardening.com",
  headers: {
    accept: "*/*",
  },
});

export default customAxios;
