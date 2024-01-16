import * as yup from "yup";

export const validationSchema = yup.object({
  password: yup
    .string()
    .min(6, "Password must be 6 characters long")
    .matches(/[a-z]/, "Password requires a lowercase character")
    .matches(/[A-Z]/, "Password requires an uppercase character")
    .matches(/[0-9]/, "Password requires a number")
    .matches(
      /[!@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|:;"'<,>\.]/,
      "Password requires a symbol"
    )
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords need to match")
    .required("Required"),
});
