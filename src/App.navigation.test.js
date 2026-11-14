import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("hamburger opens one navigation drawer and closes it after navigation", () => {
  render(<App />);

  const menuButton = screen.getByRole("button", { name: "Toggle navigation" });
  const navigation = within(
    screen.getByRole("navigation", { name: "Main navigation" }),
  );

  expect(menuButton).toHaveAttribute("aria-expanded", "false");
  expect(navigation.getAllByRole("link", { name: "Personal" })).toHaveLength(1);
  expect(navigation.getAllByRole("link", { name: "Portfolio" })).toHaveLength(
    1,
  );

  fireEvent.click(menuButton);
  expect(
    screen.getByRole("button", { name: "Close navigation", expanded: true }),
  ).toBeInTheDocument();

  fireEvent.click(navigation.getByRole("link", { name: "Portfolio" }));
  expect(
    screen.getByRole("button", { name: "Toggle navigation" }),
  ).toHaveAttribute("aria-expanded", "false");
});

test("shows Facebook, Instagram, X, YouTube, and LinkedIn social links", () => {
  render(<App />);

  const socialLinks = within(
    screen.getByRole("navigation", { name: "Social links" }),
  ).getAllByRole("link");
  expect(socialLinks.map((link) => link.getAttribute("aria-label"))).toEqual([
    "Facebook",
    "Instagram",
    "X",
    "YouTube",
    "LinkedIn",
  ]);
  expect(socialLinks[0].querySelector("svg")).toHaveClass("lucide-facebook");
  expect(socialLinks[1].querySelector("svg")).toHaveClass("lucide-instagram");
  expect(socialLinks[2]).toHaveAttribute("href", "https://x.com");
  expect(socialLinks[2].querySelector("svg")).toHaveClass("lucide-x");
  expect(socialLinks[3].querySelector("svg")).toHaveClass("lucide-youtube");
  expect(socialLinks[4].querySelector("svg")).toHaveClass("lucide-linkedin");
});
