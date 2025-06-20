import type { LoginValues, RegisterValues } from "../types";
import api from "./axios";
//auth api için kullanılacak olan istekler
export const authApi = {
  register: (data: RegisterValues) => api.post("/auth/register", data),
  login: (data: LoginValues) => api.post("/auth/login", data),
  refreshToken: () => api.post("/auth/refresh-token"),
  logout: () => api.post("/auth/logout"),
  getMe: () => api.get("/auth/me"),
};

export default authApi;
