import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  test("renders Home page when navigating to '/' route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  test("renders Login page when navigating to '/login' route", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("login-page")).toBeInTheDocument();
  });

  test("renders About page when navigating to '/about' route", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("renders Contact page when navigating to '/contact' route", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("contact-page")).toBeInTheDocument();
  });
});
