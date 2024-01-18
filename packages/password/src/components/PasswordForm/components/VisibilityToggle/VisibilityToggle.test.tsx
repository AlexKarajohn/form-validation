import { VisibilityToggle } from "./VisibilityToggle";
import { render, screen } from "@testing-library/react";
import { testIds } from "./constants/testIds";
import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";

describe("VisibilityToggle", () => {
  describe("Icon", () => {
    it("should display visibilityOn icon when value is false", () => {
      render(<VisibilityToggle value={false} setValue={vi.fn()} />);
      expect(screen.getByTestId(testIds.visibility)).toBeInTheDocument();
      expect(
        screen.queryByTestId(testIds.visibilityOff)
      ).not.toBeInTheDocument();
    });
    it("should display visibilityOff icon when value is true", () => {
      render(<VisibilityToggle value={true} setValue={vi.fn()} />);
      expect(screen.getByTestId(testIds.visibilityOff)).toBeInTheDocument();
      expect(screen.queryByTestId(testIds.visibility)).not.toBeInTheDocument();
    });
  });
  describe("User actions", () => {
    it.each([
      [true, true],
      [false, false],
    ])("clicking either icon should toggle the value", async (initialValue) => {
      const user = userEvent.setup();
      const mock = vi.fn();
      const HelperComp = () => {
        const [testState, setTestState] = useState(initialValue);

        useEffect(() => {
          mock(testState);
        }, [testState]);

        return <VisibilityToggle value={testState} setValue={setTestState} />;
      };

      render(<HelperComp />);
      expect(mock.mock.lastCall[0]).toBe(initialValue);
      await user.click(
        screen.getByTestId(
          initialValue ? testIds.visibilityOff : testIds.visibility
        )
      );

      expect(mock.mock.lastCall[0]).toBe(!initialValue);

      expect(
        screen.getByTestId(
          initialValue ? testIds.visibility : testIds.visibilityOff
        )
      ).toBeInTheDocument();
    });
  });
});
