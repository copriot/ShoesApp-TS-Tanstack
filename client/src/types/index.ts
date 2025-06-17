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

export type { LoginValues, RegisterValues };
