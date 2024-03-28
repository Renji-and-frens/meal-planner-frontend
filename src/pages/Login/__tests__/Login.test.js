import { render, screen } from "@testing-library/react";
import Login from "../Login";

test("should contain login text", () => {
  render(<Login />);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});
