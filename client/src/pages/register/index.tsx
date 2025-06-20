import { Formik, Form } from "formik";
import { type FC } from "react";
import Input from "../../components/form/input";
import { initialRegisterValues } from "../../utils/constants";
import type { RegisterValues } from "../../types";
import { Link } from "react-router-dom";
import { registerSchema } from "../../utils/schemas";
import useAuth from "../../hooks/useAuth";

const Register: FC = () => {
  const { register } = useAuth();
  const onSubmit = (values: RegisterValues) => {
    register.mutate(values);
  };
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="KICKS LOGO" src={"/logo.svg"} className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Hesabınızı Oluşturun
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={initialRegisterValues}
          onSubmit={onSubmit}
          validationSchema={registerSchema}
        >
          <Form className="space-y-6">
            <Input label="Adınız" name="firstName" type="text" />
            <Input label="Soyadınız" name="lastName" type="text" />
            <Input label="Email Adresiniz" name="email" type="email" />
            <Input label="Şifreniz" name="password" type="password" />

            <div>
              <button
                disabled={register.isPending}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Giriş yap
              </button>
            </div>
          </Form>
        </Formik>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Hesabınız var mı ?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Giriş Yap
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
