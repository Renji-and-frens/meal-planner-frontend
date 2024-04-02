import { render, screen } from "@testing-library/react";
import React from "react";
import NavBar from "../NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

describe("NavBar Component", () => {
  test("renders navigation links", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();

    const recipesLink = screen.getByText(/recipes/i);
    expect(recipesLink).toBeInTheDocument();

    const plannerLink = screen.getByText(/planner/i);
    expect(plannerLink).toBeInTheDocument();

    const savedLink = screen.getByText(/saved/i);
    expect(savedLink).toBeInTheDocument();

    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText(/contact/i);
    expect(contactLink).toBeInTheDocument();

    const signinLink = screen.getByText(/sign in/i);
    expect(signinLink).toBeInTheDocument();
  });
});
