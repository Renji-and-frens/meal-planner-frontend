import { render, screen } from "@testing-library/react";
import Signup from "../Signup";

test("should contain signup text", () => {
  render(<Signup />);
  expect(screen.getByText(/Signup/i)).toBeInTheDocument();
});
