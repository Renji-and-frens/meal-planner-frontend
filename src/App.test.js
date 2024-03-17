import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app screen", () => {
  render(<App />);
  const mealElement = screen.getByText(/meal/i);
  expect(mealElement).toBeInTheDocument();
});
