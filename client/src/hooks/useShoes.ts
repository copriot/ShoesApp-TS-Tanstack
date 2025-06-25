import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import shoeApi from "../services/shoe";
import type { ProductFormValues } from "../types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useShoes = (id?: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const shoes = useQuery({
    queryKey: ["shoes"],
    queryFn: () => shoeApi.getAll(),
    select: (res) => res.data,
  });

  const shoe = useQuery({
    queryKey: ["shoe", id],
    queryFn: () => shoeApi.getById(id!), //id var güven bana
    select: (res) => res.data,
    enabled: !!id, //id varsa çalıştır
  });

  const create = useMutation({
    mutationKey: ["create-shoe"],
    mutationFn: (data: ProductFormValues) => shoeApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      navigate("/");
      toast.success("Product created successfully");
    },
    onError: () => {
      toast.error("An error occurred while creating the product");
    },
  });

  const update = useMutation({
    mutationKey: ["update-shoe"],
    mutationFn: ({ id, data }: { id: string; data: Partial<ProductFormValues> }) =>
      shoeApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      navigate("/");
      toast.success("Product updated successfully");
    },
    onError: () => {
      toast.error("An error occurred while updating the product");
    },
  });

  const remove = useMutation({
    mutationKey: ["delete-shoe"],
    mutationFn: (id: string) => shoeApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      navigate("/");
      toast.success("Product deleted successfully");
    },
    onError: () => {
      toast.error("An error occurred while deleting the product");
    },
  });

  return { shoes, shoe, create, update, remove };
};

export default useShoes;
