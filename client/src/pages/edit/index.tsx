import type { FC } from "react";
import Form from "../../components/form";
import type { ProductFormValues } from "../../types";
import useShoes from "../../hooks/useShoes";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Edit: FC = () => {
  const { id } = useParams();
  const { shoe, update } = useShoes(id as string);
  const { isLoading, error, data } = shoe;
  console.log(data);
  const onSubmit = (value: ProductFormValues) => {
    update.mutate({ id: id!, data: value });
  };
  if (isLoading) return <Loader />;
  if (error) return <Error error={error.message} />;
  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5">Edit a Product</h1>
      <Form onSubmit={onSubmit} data={data} />
    </div>
  );
};

export default Edit;
