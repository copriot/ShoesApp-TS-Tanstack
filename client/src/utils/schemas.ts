import * as Yup from "yup";

//güçlü şifre için regex
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//kayıt olurken kullanılacak şema
const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("Adınızı giriniz"),
  lastName: Yup.string().required("Soyadınızı giriniz"),
  email: Yup.string().email("Geçersiz email adresi").required("Email adresinizi giriniz"),
  password: Yup.string()
    .matches(
      strongPasswordRegex,
      "Şifre en az 8 karakter uzunluğunda olmalı ve en az 1 büyük harf, 1 küçük harf, 1 sayı ve 1 özel karakter içermelidir"
    )
    .required("Şifrenizi giriniz"),
});

//giriş yaparken kullanılacak olan schema
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Geçersiz email adresi").required("Email adresinizi giriniz"),
  password: Yup.string().required("Şifrenizi giriniz"),
});

export { registerSchema, loginSchema };
