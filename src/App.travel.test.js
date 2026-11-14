import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("travel entries use image-first two-column mobile card layout", () => {
  render(<App />);
  fireEvent.click(
    within(
      screen.getByRole("navigation", { name: "Main navigation" }),
    ).getByRole("link", { name: "Travel" }),
  );

  const travelList = document.querySelector(".travel-list");
  expect(travelList).toBeInTheDocument();

  const firstCard = travelList.firstElementChild;
  expect(firstCard.className).toContain("record-card");
  expect(firstCard.firstElementChild).toHaveClass("record-image");
  expect(firstCard.lastElementChild).toHaveClass("record-card-main");
  expect(travelList.children).toHaveLength(6);
  expect(screen.getByRole("button", { name: "Travel page 1" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  expect(
    screen.getByRole("button", { name: "Travel page 2" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Travel page 3" }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "Lotus Temple" }),
  ).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Travel page 2" }));
  expect(screen.getByRole("button", { name: "Travel page 2" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  expect(
    screen.getByRole("heading", { name: "Lotus Temple" }),
  ).toBeInTheDocument();
  expect(travelList.children).toHaveLength(6);

  fireEvent.click(screen.getByRole("button", { name: "Travel page 3" }));
  expect(screen.getByRole("button", { name: "Travel page 3" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  expect(travelList.children).toHaveLength(4);
});
