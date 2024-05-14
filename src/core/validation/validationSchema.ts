import * as Yup from "yup";

export const LoginValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .required("Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Enter a valid email address"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "example: Pass@123"
    ),
});

export const RegisterValidation = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "example: Pass@123"
    ),
});
