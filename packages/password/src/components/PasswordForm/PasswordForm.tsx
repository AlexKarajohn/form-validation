import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import { useState } from "react";
import { VisibilityToggle } from "./components/VisibilityToggle/VisibilityToggle";
import { validationSchema } from "./utils/validation";
import { useFormik } from "formik";

/**
Generates a password form including a submit button. Upon submission, the entered passwords
are validated against the specified validation schema {@link validationSchema}. If the passwords
meet the validation criteria, a success message is displayed; otherwise, error messages
are shown for each input.
*/
export const PasswordForm = () => {
  //Boolean value that is used to show the password as text or asterisks.
  const [showPassword, setShowPassword] = useState(false);
  //Boolean value that is used to show the confirm password as text or asterisks.
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //Boolean value that handles the rendering of the mock success case.
  const [showSuccess, setShowSuccess] = useState(false);

  /**
   * useFormik hook, used to handle state management, validation and the submit event.\
   * see more [here](https://formik.org/docs/examples/with-material-ui)
   */
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: () => {
      setShowPassword(false);
      setShowConfirmPassword(false);
      setShowSuccess(true);
    },
  });

  return showSuccess ? (
    <Grow
      in={showSuccess}
      style={{ transformOrigin: "50% 50%" }}
      {...(showSuccess ? { timeout: 500 } : {})}
    >
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body1">Submitted!</Typography>
        <CheckCircleIcon fontSize="large" color="success" />
      </Box>
    </Grow>
  ) : (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={1}
      gap={1}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        id="password"
        label="Password"
        name="Password"
        fullWidth
        disabled={showSuccess}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={(formik.touched.password && formik.errors.password) || " "}
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <VisibilityToggle value={showPassword} setValue={setShowPassword} />
          ),
        }}
      />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        name="Confirm Password"
        fullWidth
        disabled={showSuccess}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          (formik.touched.confirmPassword && formik.errors.confirmPassword) ||
          " "
        }
        type={showConfirmPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <VisibilityToggle
              value={showConfirmPassword}
              setValue={setShowConfirmPassword}
            />
          ),
        }}
      />
      <Button variant="contained" type="submit" disabled={showSuccess}>
        Submit
      </Button>
    </Box>
  );
};
