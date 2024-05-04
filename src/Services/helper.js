import axios from "axios";

export const BASE_URL = "http://localhost:1212";
export const myAxios = axios.create({
  baseUrl: BASE_URL,
});
