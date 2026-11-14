import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Arshad Waseem portfolio and family tree", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /arshad waseem/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /projects i’ve built/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByText("ITS Engineering College · Greater Noida"),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /live project/i })).toHaveAttribute(
    "href",
    "https://companyt2b.vercel.app",
  );
  expect(screen.getByRole("link", { name: "Portfolio" })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Personal life" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Family", exact: true }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Travel" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "More" })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("link", { name: /family & khandan/i }));

  expect(
    screen.getByText("My family", { selector: ".family-group-label" }),
  ).toBeInTheDocument();
  expect(
    screen.getByText("Paternal", { selector: ".family-group-label" }),
  ).toBeInTheDocument();
  expect(
    screen.getByText("Maternal", { selector: ".family-group-label" }),
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByText("Paternal", { selector: ".family-group-label" }),
  );
  fireEvent.click(screen.getByText("Abbu’s brothers"));

  expect(screen.getByText("Raees Ahmad")).toBeInTheDocument();
  expect(screen.getByText("Maulana Abdul Rasheed Riyadhi")).toBeInTheDocument();
  expect(screen.getByText("Musfira Khatoon")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Abbu’s sisters (Fufis)"));
  expect(screen.getAllByText("Female").length).toBe(4);

  fireEvent.click(screen.getByRole("link", { name: /special dates/i }));
  expect(screen.getByText("Arshad Waseem’s birthday")).toBeInTheDocument();
  expect(screen.getAllByText("Wedding anniversary").length).toBeGreaterThan(0);
  expect(screen.getByText("Saba Khan’s birthday")).toBeInTheDocument();
  expect(screen.getByText("Hamza Arshad’s birthday")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("link", { name: /books & learning/i }));
  expect(screen.getByText("Atomic Habits")).toBeInTheDocument();
  expect(
    screen.getByText("The Power of Our Subconscious Mind"),
  ).toBeInTheDocument();
  expect(screen.getByText("Rich Dad Poor Dad")).toBeInTheDocument();
  expect(screen.getByText("Do Epic Shit")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("link", { name: /travel & places/i }));
  expect(screen.getByText("Supa Devrali Mandir")).toBeInTheDocument();
  expect(screen.getByText("Narpani")).toBeInTheDocument();
  expect(screen.getByText("Tansen")).toBeInTheDocument();
  expect(screen.getByText("Taj Mahal")).toBeInTheDocument();
  expect(screen.getByText("Jama Masjid")).toBeInTheDocument();
  expect(screen.getByText("Agra Fort")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("link", { name: "Friends", exact: true }));
  [
    "Zaheer Hashmi",
    "Shaquib Khan",
    "Irfan Shah",
    "Aasif Jamal",
    "Ashwani Kumar",
    "Naved Ahsan",
    "Ali Zaid Khan",
    "Mazhar Hashmi",
    "Aamior Hamza",
    "Sameer Ahmad",
    "Iftekhar Ahmad",
    "Jubair Idrisi",
  ].forEach((name) => expect(screen.getByText(name)).toBeInTheDocument());
});
