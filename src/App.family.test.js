import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";
import { familyBranches } from "./data/family";
import { friends } from "./data/friends";

test("shows all family sections together and filters relatives", () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole("link", { name: "Family & Friends" })[0]);

  expect(
    screen.queryByRole("tablist", { name: "Family sections" }),
  ).not.toBeInTheDocument();
  let immediateTree = screen
    .getByRole("heading", { name: "Immediate family" })
    .closest(".family-tree");
  const paternalTree = screen
    .getByRole("heading", { name: "Paternal family" })
    .closest(".family-tree");
  const maternalTree = screen
    .getByRole("heading", { name: "Maternal family" })
    .closest(".family-tree");
  expect(immediateTree).toBeInTheDocument();
  expect(paternalTree).toBeInTheDocument();
  expect(maternalTree).toBeInTheDocument();
  expect(immediateTree.closest(".family-directory")).toBeInTheDocument();
  expect(paternalTree.closest(".family-directory")).toBe(
    immediateTree.closest(".family-directory"),
  );
  expect(maternalTree.closest(".family-directory")).toBe(
    immediateTree.closest(".family-directory"),
  );
  expect(within(immediateTree).getByText("Jameel Ahmad")).toBeInTheDocument();
  expect(within(immediateTree).getByText("Zahida Khatoon")).toBeInTheDocument();
  const parentsSection = within(immediateTree)
    .getByRole("heading", { name: "Parents" })
    .closest("section");
  const siblingsSection = within(immediateTree)
    .getByRole("heading", { name: "Siblings" })
    .closest("section");
  expect(within(parentsSection).getByText("Jameel Ahmad")).toBeInTheDocument();
  expect(
    within(parentsSection).getByText("Zahida Khatoon"),
  ).toBeInTheDocument();
  expect(within(siblingsSection).getByText("Zahid Kamal")).toBeInTheDocument();
  expect(within(siblingsSection).getByText("Shahid Jamal")).toBeInTheDocument();
  expect(within(siblingsSection).getByText("Junaid Ahmad")).toBeInTheDocument();
  const arshadCard = within(siblingsSection)
    .getByText("Arshad Waseem")
    .closest(".family-member-card");
  expect(arshadCard.querySelector(".family-inline-spouse")).toHaveTextContent(
    "H/o Saba Khan",
  );
  expect(within(arshadCard).getByText("Hamza Arshad")).toBeInTheDocument();
  expect(siblingsSection.querySelectorAll(".family-member-card")).toHaveLength(
    4,
  );
  expect(
    immediateTree.querySelector(".family-birthday"),
  ).not.toBeInTheDocument();
  expect(immediateTree).not.toHaveTextContent(/Birthday/);
  expect(immediateTree.querySelectorAll(".family-initials")).toHaveLength(7);
  expect(immediateTree.querySelectorAll(".family-portrait")).toHaveLength(0);
  expect(immediateTree.querySelectorAll(".family-member img")).toHaveLength(0);
  const familyPanel = screen.getByRole("tabpanel", { name: "Family" });
  fireEvent.click(
    within(familyPanel).getByRole("button", { name: "Siblings" }),
  );
  immediateTree = screen
    .getByRole("heading", { name: "Immediate family" })
    .closest(".family-tree");
  expect(within(immediateTree).getByText("Zahid Kamal")).toBeInTheDocument();
  expect(
    within(immediateTree).queryByText("Jameel Ahmad"),
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "Paternal family" }),
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "Maternal family" }),
  ).not.toBeInTheDocument();
  fireEvent.click(within(familyPanel).getByRole("button", { name: "Parents" }));
  immediateTree = screen
    .getByRole("heading", { name: "Immediate family" })
    .closest(".family-tree");
  expect(within(immediateTree).getByText("Jameel Ahmad")).toBeInTheDocument();
  expect(
    within(immediateTree).queryByText("Zahid Kamal"),
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "Paternal family" }),
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "Maternal family" }),
  ).not.toBeInTheDocument();
  fireEvent.click(within(familyPanel).getByRole("button", { name: "Uncles" }));
  const activePaternalTree = screen
    .getByRole("heading", { name: "Paternal family" })
    .closest(".family-tree");
  const activeMaternalTree = screen
    .getByRole("heading", { name: "Maternal family" })
    .closest(".family-tree");
  expect(
    within(activePaternalTree).getByText("Raees Ahmad"),
  ).toBeInTheDocument();
  expect(
    within(activeMaternalTree).getByText("Mohd Saeed"),
  ).toBeInTheDocument();
  expect(screen.queryByText(/W\/o Sohab Ansari/)).not.toBeInTheDocument();
  expect(screen.queryByText(/W\/o Salahuddin Ansari/)).not.toBeInTheDocument();
  expect(screen.queryByText(/H\/o Faheema Ansari/)).not.toBeInTheDocument();
  expect(screen.queryByText("Salma")).not.toBeInTheDocument();
  expect(screen.queryByText("Ameena")).not.toBeInTheDocument();
  expect(screen.queryByText("Wajhan")).not.toBeInTheDocument();
  expect(screen.queryByText("Arshan")).not.toBeInTheDocument();
  expect(
    screen.queryByText(/Married|Wedding|Birthday/i),
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "Immediate family" }),
  ).not.toBeInTheDocument();
  fireEvent.click(within(familyPanel).getByRole("button", { name: "Aunts" }));
  expect(screen.getByText("Zainab Khatoon")).toBeInTheDocument();
  expect(screen.getByText("Wahida Khatoon")).toBeInTheDocument();
  expect(screen.queryByText("Yasir")).not.toBeInTheDocument();
  expect(screen.queryByText("Sufiyan")).not.toBeInTheDocument();
  expect(screen.queryByText("Raees Ahmad")).not.toBeInTheDocument();
  fireEvent.click(
    within(familyPanel).getByRole("button", { name: "Grandparents" }),
  );
  expect(screen.getByText("Abdul Rauf")).toBeInTheDocument();
  expect(screen.getByText("Mohd Mustafa")).toBeInTheDocument();
  expect(screen.queryByText("Raees Ahmad")).not.toBeInTheDocument();
  fireEvent.click(within(familyPanel).getByRole("button", { name: "Cousins" }));
  expect(screen.getAllByText("Salma").length).toBeGreaterThan(0);
  expect(screen.getByText("Shadab")).toBeInTheDocument();
  const cousinIcons = [
    ...document.querySelectorAll(".family-member-card .family-initials"),
  ];
  expect(
    cousinIcons.some((icon) =>
      icon.classList.contains("family-icon-cousin-girl"),
    ),
  ).toBe(true);
  expect(
    cousinIcons.some((icon) =>
      icon.classList.contains("family-icon-cousin-boy"),
    ),
  ).toBe(true);
  expect(
    [...document.querySelectorAll(".family-member-card")].every(
      (card) => !card.querySelector(".family-descendants"),
    ),
  ).toBe(true);
  expect(screen.queryByText("Raees Ahmad")).not.toBeInTheDocument();
});

test("shows all family members in separate paternal and maternal trees", () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole("link", { name: "Family & Friends" })[0]);
  fireEvent.click(screen.getByRole("tab", { name: "Family Tree" }));

  const tree = screen.getByRole("tabpanel", { name: "Family Tree" });
  expect(tree.querySelector(".family-directory")).not.toBeInTheDocument();
  const diagram = tree.querySelector(".family-lineage-sides");
  const paternalLineage = tree.querySelector(".family-lineage-paternal");
  const maternalLineage = tree.querySelector(".family-lineage-maternal");
  expect(diagram).toHaveAttribute("data-direction", "top-to-bottom");
  expect(paternalLineage).toBeInTheDocument();
  expect(maternalLineage).toBeInTheDocument();
  expect(
    paternalLineage.querySelector(".family-lineage-roots").textContent,
  ).toContain("Abdul Rauf");
  expect(
    maternalLineage.querySelector(".family-lineage-roots").textContent,
  ).toContain("Mohd Mustafa");
  expect(
    paternalLineage.querySelector(".family-lineage-tree"),
  ).toBeInTheDocument();
  expect(
    within(paternalLineage).getByRole("heading", { name: "Grandparents" }),
  ).toBeInTheDocument();
  expect(
    within(maternalLineage).getByRole("heading", {
      name: "Their children: parents, aunts, and uncles",
    }),
  ).toBeInTheDocument();
  expect(
    maternalLineage.querySelector(".family-lineage-tree"),
  ).toBeInTheDocument();
  familyBranches.forEach((branch) => {
    const checkMembers = (members) => {
      members.forEach((member) => {
        if (typeof member === "string") {
          expect(tree.textContent).toContain(member);
          return;
        }
        expect(tree.textContent).toContain(member.title);
        if (member.spouse) expect(tree.textContent).toContain(member.spouse);
        checkMembers(member.children || []);
      });
    };
    checkMembers(branch.members);
  });
  expect(paternalLineage.textContent).toContain("Raees Ahmad");
  expect(paternalLineage.textContent).toContain("Abdul Rasheed");
  expect(paternalLineage.textContent).toContain("Jameel Ahmad");
  expect(maternalLineage.textContent).toContain("Mohd Saeed");
  expect(maternalLineage.textContent).toContain("Wahida Khatoon");
  expect(maternalLineage.textContent).toContain("Zahida Khatoon");
  expect(paternalLineage.querySelector('[title="Raees Ahmad"]')).toHaveClass(
    "family-icon-uncle",
  );
  expect(paternalLineage.querySelector('[title="Zainab Khatoon"]')).toHaveClass(
    "family-icon-aunt",
  );
  const salmaNode = [...paternalLineage.querySelectorAll(".family-child")].find(
    (child) => child.textContent.includes("Salma"),
  );
  expect(salmaNode.querySelector(".family-initials")).toHaveClass(
    "family-icon-cousin-girl",
  );
  expect(maternalLineage.querySelector('[title="Mohd Saeed"]')).toHaveClass(
    "family-icon-uncle",
  );
  expect(maternalLineage.querySelector('[title="Wahida Khatoon"]')).toHaveClass(
    "family-icon-aunt",
  );
  const usmanNode = [...maternalLineage.querySelectorAll(".family-child")].find(
    (child) => child.textContent.includes("Usman"),
  );
  expect(usmanNode.querySelector(".family-initials")).toHaveClass(
    "family-icon-cousin-boy",
  );
  expect(
    [...paternalLineage.querySelectorAll(".family-inline-spouse")].some(
      (spouse) => spouse.textContent.includes("H/o Saba Khan"),
    ),
  ).toBe(true);
  expect(tree.querySelectorAll(".family-initials").length).toBeGreaterThan(0);
  expect(tree.querySelectorAll(".family-portrait")).toHaveLength(0);
  expect(tree).not.toHaveTextContent(/Birthday/);
  expect(tree).not.toHaveTextContent(/Wedding|Married/i);
});

test("shows friend photo, name, and engineer designation without a friend tag", () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole("link", { name: "Family & Friends" })[0]);
  fireEvent.click(screen.getByRole("tab", { name: "Friends" }));

  const friendCards = document.querySelectorAll(".friend-card");
  expect(friendCards).toHaveLength(12);
  friendCards.forEach((card) => {
    expect(card.querySelector("img")).toHaveAttribute("src");
    expect(card.querySelector("h3")).toBeInTheDocument();
    expect(card.querySelector("span")).toHaveTextContent("Engineer");
    expect(card.querySelector(".friend-praise")).toBeInTheDocument();
    expect(card.querySelector(".record-meta")).not.toBeInTheDocument();
  });
  friends.forEach((friend) => {
    expect(friend.praise.trim().split(/\s+/)).toHaveLength(10);
    expect(screen.getByText(friend.praise)).toBeInTheDocument();
  });
  expect(screen.getByText("Zaheer Hashmi")).toBeInTheDocument();
});
