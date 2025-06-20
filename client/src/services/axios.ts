import axios from "axios";

const api = axios.create({
  //api adresi
  baseURL: "http://localhost:5001/api",
  //cookie ile token gönder
  withCredentials: true,
  //api'ye gönderilen verilerin tipi
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
