import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://api.wildflower-gardening.com",
  headers: {
    accept: "*/*",
  },
});

export default customAxios;
