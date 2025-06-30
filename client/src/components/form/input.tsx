import { ErrorMessage, Field } from "formik";
import { type FC } from "react";
interface InputProps {
  label: string;
  name: string;
  type: string;
}

const Input: FC<InputProps> = ({ label, name, type }) => {
  return (
    <div
      className={`relative ${
        type === "checkbox" ? "flex items-center gap-2 justify-start" : ""
      }`}
    >
      <label htmlFor={name} className="block text-sm/6  text-gray-900 font-semibold">
        {label}
      </label>
      <div className={`${type !== "checkbox" ? "mt-2" : ""}`}>
        <Field
          id={name}
          name={name}
          type={type}
          required={type !== "checkbox"}
          autoComplete={name}
          as={type === "textarea" ? "textarea" : "input"}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 absolute text-xs"
        />
      </div>
    </div>
  );
};

export default Input;
