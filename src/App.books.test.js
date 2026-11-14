import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("groups books by reading status and formatted books", () => {
  render(<App />);
  fireEvent.click(
    within(
      screen.getByRole("navigation", { name: "Main navigation" }),
    ).getByRole("link", { name: "Books & learning" }),
  );

  expect(screen.getByText("The Alchemist")).toBeInTheDocument();
  expect(screen.getByText(/Paulo Coelho/)).toBeInTheDocument();
  expect(screen.getByText("The Psychology of Money")).toBeInTheDocument();
  expect(screen.getByText(/Morgan Housel/)).toBeInTheDocument();
  expect(screen.getByText("Wings of Fire")).toBeInTheDocument();
  expect(screen.getByText(/A\.P\.J\. Abdul Kalam/)).toBeInTheDocument();
  expect(screen.getByText("A Suitable Boy")).toBeInTheDocument();
  expect(screen.getByText(/Vikram Seth/)).toBeInTheDocument();
  expect(screen.getByText("Successful Married Life")).toBeInTheDocument();
  expect(screen.getByText("Successful Husband")).toBeInTheDocument();

  const bookTiles = document.querySelectorAll(".book-tile");
  expect(bookTiles).toHaveLength(10);
  expect(document.querySelectorAll(".book-cover-image")).toHaveLength(10);
  bookTiles.forEach((tile) => {
    const cover = tile.querySelector(".book-cover-image");
    expect(cover).toHaveAttribute("src");
    expect(cover).toHaveAttribute("alt");
  });

  fireEvent.click(screen.getByRole("button", { name: "Books Read" }));
  expect(document.querySelectorAll(".book-tile")).toHaveLength(6);
  expect(screen.queryByText("Successful Married Life")).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Books Yet to Read" }));
  expect(document.querySelectorAll(".book-tile")).toHaveLength(2);
  expect(screen.getByText("Wings of Fire")).toBeInTheDocument();
  expect(screen.getByText("A Suitable Boy")).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", { name: "Books Formatted by Me" }),
  );
  expect(document.querySelectorAll(".book-tile")).toHaveLength(2);
  expect(screen.getByText("Successful Married Life")).toBeInTheDocument();
  expect(screen.getByText("Successful Husband")).toBeInTheDocument();
  expect(screen.queryByText("The Alchemist")).not.toBeInTheDocument();
});
