import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Dispatch, FC, SetStateAction } from "react";
import { testIds } from "./constants/testIds";

interface VisibilityToggleProps {
  /**
  If set to false, shows the visibility indicator; if true, displays a crossed-out visibility indicator.
  */
  value: boolean;
  /**
   * Invoked when the button is clicked, this function returns the negation of the previous value (!prev).
   */
  setValue: Dispatch<SetStateAction<boolean>>;
}

/**
 * Adornment to be used in MUIs [endAdornment](https://mui.com/material-ui/api/input/#input-prop-endAdornment) or [startAdornment](https://mui.com/material-ui/api/input/#input-prop-startAdornment).
 */
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
        {value ? (
          <VisibilityOff data-testid={testIds.visibilityOff} />
        ) : (
          <Visibility data-testid={testIds.visibility} />
        )}
      </IconButton>
    </InputAdornment>
  );
};
