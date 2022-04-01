import axios from "axios";
const clientAxios = axios.create({
  baseURL: "https://the-one-api.dev/v2/",
  headers: {
    Authorization: "Bearer ExV9GCjkAoq6a6WRtIZB",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export default clientAxios;
