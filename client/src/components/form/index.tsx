import { Field, Formik, Form as FormikForm } from "formik";
import type { FC } from "react";
import type { Product, ProductFormValues } from "../../types";
import Input from "./input";
interface Props {
  onSubmit: (value: ProductFormValues) => void;
  data?: Product;
}
const Form: FC<Props> = ({ onSubmit, data }) => {
  const initialValues = {
    name: data?.name || "",
    price: String(data?.price) || "",
    discount: String(data?.discount) || "",
    color: data?.color || "",
    size: data?.size || "",
    description: data?.description || "",
    isNew: data?.isNew || false,
    gender: data?.gender || "",
  };
  const handleSubmit = (value: ProductFormValues) => {
    onSubmit(value);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormikForm className="flex flex-col gap-4">
        <Input label="Name" name="name" type="text" />
        <Input label="Price" name="price" type="number" />
        <Input label="Discount" name="discount" type="number" />
        <Input label="Color" name="color" type="text" />
        <Input label="Size" name="size" type="text" />
        <Input label="Description" name="description" type="textarea" />
        <Input label="New" name="isNew" type="checkbox" />

        <div className="flex items-center gap-2">
          <label htmlFor="men">Men</label>
          <Field type="radio" name="gender" value="men" id="men" />
          <label htmlFor="women">Women</label>
          <Field type="radio" name="gender" value="women" id="women" />
        </div>
        <button
          type="submit"
          className="bg-my-blue text-my-faWhite py-1 px-4 transition hover:bg-my-blue/80 cursor-pointer"
        >
          Submit
        </button>
      </FormikForm>
    </Formik>
  );
};

export default Form;
