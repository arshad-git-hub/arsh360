import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("shows the provided work experience on the portfolio page", () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole("link", { name: "Portfolio" })[0]);

  expect(
    screen.getByRole("heading", { name: "Work experience" }),
  ).toBeInTheDocument();
  expect(
    screen.getByText("Presentation Designer (PPT Making)"),
  ).toBeInTheDocument();
  expect(screen.getByText("Since June 2022")).toBeInTheDocument();
  expect(screen.getByText("Subject Matter Expert")).toBeInTheDocument();
  expect(screen.getByText("Chegg India")).toBeInTheDocument();
  expect(screen.getByText("April 2023 – December 2024")).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Frontend Developer", level: 3 }),
  ).toBeInTheDocument();
  expect(screen.getByText("January 2024 – Present")).toBeInTheDocument();
});
