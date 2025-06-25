import type {
  AuthResponse,
  GetMeResponse,
  LoginValues,
  LogoutResponse,
  RefreshResponse,
  RegisterValues,
} from "../types";
import api from "./axios";
//auth api için kullanılacak olan istekler
export const authApi = {
  register: (data: RegisterValues) => api.post<AuthResponse>("/auth/register", data),
  login: (data: LoginValues) => api.post<AuthResponse>("/auth/login", data),
  refreshToken: () => api.post<RefreshResponse>("/auth/refresh-token"),
  logout: () => api.post<LogoutResponse>("/auth/logout"),
  getMe: () => api.get<GetMeResponse>("/auth/me"),
};

export default authApi;
