/*AUTH TYPES*/

interface LoginValues {
  email: string;
  password: string;
}
interface RegisterValues {
  fistName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface AuthResponse {
  message: string;
  user: User;
}
interface RefreshResponse {
  accessToken: string;
}
interface LogoutResponse {
  message: string;
}
interface GetMeResponse {
  message: string;
  user: User;
}

/*PRODUCT TYPES*/

interface Product {
  _id: string;
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: string;
  price: number;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

//type ProductFormValues = Omit<Product, "_id" | "__v" | "createdAt" | "updatedAt">;
interface ProductFormValues {
  name: string;
  price: string;
  discount: string;
  color: string;
  size: string;
  description: string;
  isNew: boolean;
  gender: string;
}
export type {
  LoginValues,
  RegisterValues,
  AuthResponse,
  RefreshResponse,
  GetMeResponse,
  LogoutResponse,
  Product,
  ProductFormValues,
};
