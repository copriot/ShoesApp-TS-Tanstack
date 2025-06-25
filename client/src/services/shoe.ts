import type { Product, ProductFormValues } from "../types";
import api from "./axios";

const shoeApi = {
  getAll: () => api.get<Product[]>("/shoes"),
  getById: (id: string) => api.get<Product>(`/shoes/${id}`),
  create: (data: ProductFormValues) => api.post<ProductFormValues>("/shoes", data),
  update: (id: string, data: Partial<ProductFormValues>) =>
    api.patch<Product>(`/shoes/${id}`, data),
  delete: (id: string) => api.delete<Product>(`/shoes/${id}`),
};

export default shoeApi;
