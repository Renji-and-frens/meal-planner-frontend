import { render, screen } from "@testing-library/react";
import Saved from "../Saved";

test("should contain saved text", () => {
  render(<Saved />);
  expect(screen.getByText(/Saved/i)).toBeInTheDocument();
});
