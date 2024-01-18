import { PasswordForm } from "./PasswordForm";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
const passwordSelector = () =>
  screen.getByLabelText("Password", { selector: "input" });
const insertPassword = async (value: string, user: UserEvent) => {
  const input = passwordSelector();
  await user.type(input, value);
};
const confirmPasswordSelector = () =>
  screen.getByLabelText("Confirm Password", { selector: "input" });
const insertConfirmPassword = async (value: string, user: UserEvent) => {
  const input = confirmPasswordSelector();
  await user.type(input, value);
};
const submitEvent = async (user: UserEvent) => {
  await user.click(screen.getByText("Submit"));
};

describe("PasswordForm", () => {
  describe("Validation", async () => {
    it("Component", async () => {
      const user = userEvent.setup();
      render(<PasswordForm />);
      await insertPassword("aaaaaaaaA1!", user);
      await insertConfirmPassword("aaaaaaaaA1!", user);

      console.log(passwordSelector().getAttribute("value"));
      await submitEvent(user);
      await waitFor(() => {
        expect(screen.getByText("Submitted!")).toBeInTheDocument();
      });
    });
  });
});
