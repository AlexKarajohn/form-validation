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

export const PasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
