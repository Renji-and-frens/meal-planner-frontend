import { render, screen } from "@testing-library/react";
import Signin from "../Signin";

test("should contain signin text", () => {
  render(<Signin />);
  expect(screen.getByText(/Signin/i)).toBeInTheDocument();
});
