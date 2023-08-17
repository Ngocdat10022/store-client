import axios from "axios";
import { VITE_APP_URL } from "@/config";
const instance = axios.create({
  baseURL: VITE_APP_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
