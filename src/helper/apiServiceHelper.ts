import axios from "axios";
import { API_BASE_URL } from "./urlApi";

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
});

export { apiInstance };
