import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://localhost:8089",
});

export default customAxios;
