import type { FC } from "react";
import Form from "../../components/form";
import type { ProductFormValues } from "../../types";
import useShoes from "../../hooks/useShoes";

const Create: FC = () => {
  const { create } = useShoes();
  const onSubmit = (value: ProductFormValues) => {
    create.mutate(value);
  };
  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5">Add a Product</h1>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default Create;
