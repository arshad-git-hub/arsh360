import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("shows portrait sample photos under gallery categories", () => {
  render(<App />);
  fireEvent.click(
    within(
      screen.getByRole("navigation", { name: "Main navigation" }),
    ).getByRole("link", { name: "Photos & gallery" }),
  );

  [
    "All",
    "College Life",
    "Hill Station",
    "Family",
    "Tour",
    "Childhood",
  ].forEach((category) => {
    expect(screen.getByRole("button", { name: category })).toBeInTheDocument();
  });

  const photos = [...document.querySelectorAll(".gallery-card .record-image")];
  expect(photos).toHaveLength(5);
  photos.forEach((photo) => {
    expect(photo.getAttribute("src")).toMatch(/w=\d+&h=\d+/);
  });

  fireEvent.click(screen.getByRole("button", { name: "Childhood" }));
  expect(screen.getByText("A childhood memory")).toBeInTheDocument();
  expect(screen.queryByText("The mountain view")).not.toBeInTheDocument();
});
