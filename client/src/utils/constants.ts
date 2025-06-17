import type { LoginValues, RegisterValues } from "../types";

const initialLoginValues: LoginValues = {
  email: "",
  password: "",
};
const initialRegisterValues: RegisterValues = {
  fistName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export { initialLoginValues, initialRegisterValues };
