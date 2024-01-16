import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Dispatch, FC, SetStateAction } from "react";

interface VisibilityToggleProps {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

export const VisibilityToggle: FC<VisibilityToggleProps> = ({
  value,
  setValue,
}) => {
  const handleClickShowPassword = () => {
    setValue((prev) => !prev);
  };

  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        edge="end"
      >
        {value ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
};
