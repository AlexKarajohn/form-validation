import * as yup from "yup";

/**
 * yup object creating a validation schema to be used by the useFormik hook to validate the password strength, as well as that the two passwords match.
 * see more {@link https://www.npmjs.com/package/yup}.
 */
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
