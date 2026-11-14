import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  Code2,
  Compass,
  Facebook,
  FileText,
  Github,
  GraduationCap,
  Heart,
  Image,
  Instagram,
  Link2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Search,
  Sun,
  Trophy,
  Users,
  Youtube,
  X,
} from "lucide-react";
import {
  archiveProfile,
  booksRead,
  digitalProfiles,
  goals,
  lifeStory,
  photoGallery,
  specialDates,
} from "./data/archive";
import { familyBranches } from "./data/family";
import { friends } from "./data/friends";
import { notes } from "./data/notes";
import {
  education,
  personalStrengths,
  portfolioProjects,
  skillGroups,
  workExperience,
} from "./data/portfolio";
import { visitedPlacesList } from "./data/travel";
import "./App.css";
import "./App.tab.css";
import "./App.mobile.css";

const sections = [
  { path: "/", label: "Personal", icon: Heart },
  { path: "/portfolio", label: "Portfolio", icon: BriefcaseBusiness },
  { path: "/story", label: "Personal life", icon: Heart, key: "story" },
  { path: "/people", label: "Family & Friends", icon: Users, key: "people" },
  {
    path: "/education",
    label: "Education",
    icon: GraduationCap,
    key: "education",
  },
  { path: "/books", label: "Books & learning", icon: BookOpen, key: "books" },
  { path: "/dates", label: "Special dates", icon: CalendarDays, key: "dates" },
  { path: "/travel", label: "Travel", icon: Compass, key: "travel" },
  { path: "/digital", label: "Digital life", icon: Link2, key: "digital" },
  { path: "/gallery", label: "Photos & gallery", icon: Image, key: "gallery" },
  { path: "/goals", label: "Achievements & goals", icon: Trophy, key: "goals" },
  { path: "/notes", label: "Notes", icon: FileText, key: "notes" },
];

const descriptions = {
  story: "The moments, milestones, and turning points in your life.",
  education: "Schools, courses, and what you have learned.",
  books: "Books I have read, plan to read, and formatted.",
  dates: "Birthdays, anniversaries, and special days.",
  travel: "Places visited and memories made there.",
  digital: "Your corners of the internet, collected in one place.",
  gallery:
    "Your photos, grouped by tours, college life, hill stations, childhood, and more.",
  goals: "What you have achieved and what is still ahead.",
  notes: "Thoughts, ideas, and small things worth remembering.",
};

const collectionData = {
  story: lifeStory,
  education,
  books: booksRead,
  dates: specialDates,
  travel: visitedPlacesList,
  digital: digitalProfiles,
  gallery: photoGallery,
  goals,
  notes,
};

const bookCategories = [
  "Books Read",
  "Books Yet to Read",
  "Books Formatted by Me",
];

function App() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("arsh360-theme-v2") !== "light",
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("arsh360-theme-v2", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollableHeight > 0
          ? Math.min(window.scrollY / scrollableHeight, 1)
          : 0,
      );
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <div className={`app-shell ${dark ? "theme-dark" : ""}`}>
        <header className="topbar">
          <NavBrand />

          <h1>In the name of Allah SWT</h1>

          <div className="top-div">
            <NavLink className="topbar-cta" to="/portfolio">
              <span>LET’S CONNECT</span>
              <strong>Explore my work</strong>
              <ArrowUpRight size={16} />
            </NavLink>

            <div className="topbar-controls">
              <button
                className="topbar-theme-toggle"
                aria-label={
                  dark ? "Switch to light mode" : "Switch to dark mode"
                }
                title={dark ? "Switch to light mode" : "Switch to dark mode"}
                onClick={() => setDark((value) => !value)}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                className={`icon-button mobile-menu ${sidebarOpen ? "is-open" : ""}`}
                aria-label={
                  sidebarOpen ? "Close navigation" : "Toggle navigation"
                }
                aria-expanded={sidebarOpen}
                onClick={() => setSidebarOpen((value) => !value)}
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </header>

        <div className="app-body">
          {sidebarOpen && (
            <button
              className="mobile-scrim"
              aria-label="Close navigation"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
            {/* <div className="profile-switch">
              <img className="avatar avatar-small" src={archiveProfile.image} alt="" />
              <span className="profile-switch-copy">
                <strong>{archiveProfile.name}’s archive</strong>
                <small>Personal collection</small>
              </span>
            </div> */}
            {/* <p className="nav-caption">ARSH360</p> */}
            <nav className="main-nav" aria-label="Main navigation">
              {sections.map((section) => (
                <NavItem
                  key={section.path}
                  item={section}
                  onClick={() => setSidebarOpen(false)}
                />
              ))}
            </nav>
            <SidebarSocialLinks />
          </aside>

          <div className="main-column">
            <main className="page-content">
              <Routes>
                <Route path="/" element={<PersonalHome />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/people" element={<FamilyFriendsPage />} />
                {sections
                  .filter((section) => section.key !== "people")
                  .map((section) => (
                    <Route
                      key={section.path}
                      path={section.path}
                      element={
                        <CollectionPage
                          section={section}
                          records={collectionData[section.key]}
                        />
                      }
                    />
                  ))}
              </Routes>
            </main>
            <MobileNavigation />
            <footer className="footer">
              <div className="footer-bottom">
                <span className="footer-copyright">
                  © {new Date().getFullYear()} ARSH360. All rights reserved.
                </span>
                <nav className="footer-links" aria-label="Important pages">
                  <span>Important pages</span>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                  <NavLink to="/story">Personal life</NavLink>
                  <NavLink to="/people">Family &amp; Friends</NavLink>
                </nav>
              </div>
            </footer>
            <button
              className={`scroll-top ${scrollProgress > 0.02 ? "is-visible" : ""}`}
              aria-label={`Back to top, ${Math.round(scrollProgress * 100)}% page progress`}
              title="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <svg
                className="scroll-top-progress"
                viewBox="0 0 52 52"
                aria-hidden="true"
              >
                <circle className="scroll-top-track" cx="26" cy="26" r="22" />
                <circle
                  className="scroll-top-value"
                  cx="26"
                  cy="26"
                  r="22"
                  style={{ strokeDashoffset: 138.23 * (1 - scrollProgress) }}
                />
              </svg>
              <ArrowUp size={19} />
            </button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

function NavBrand() {
  return (
    <NavLink className="brand" to="/" aria-label="Arsh360 home">
      <img src="/arsh360-icon.svg" alt="" />
      <span>
        Arsh<span className="brand-number">360</span>
      </span>
    </NavLink>
  );
}

function NavItem({ item, onClick }) {
  const Icon = item.icon;
  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      <Icon size={17} />
      <span>{item.label}</span>
    </NavLink>
  );
}

function SidebarSocialLinks() {
  return (
    <div className="sidebar-social">
      <p className="nav-caption">SOCIAL CONNECT</p>
      <nav className="sidebar-social-links" aria-label="Social links">
        {digitalProfiles.map((profile) => (
          <a
            key={profile.id}
            href={profile.url}
            target="_blank"
            rel="noreferrer"
            aria-label={profile.title}
            title={profile.title}
          >
            <DigitalIcon value={profile.title} />
          </a>
        ))}
      </nav>
    </div>
  );
}

function MobileNavigation() {
  const tabs = [
    { path: "/", label: "Personal", icon: Heart },
    { path: "/portfolio", label: "Portfolio", icon: BriefcaseBusiness },
    { path: "/people", label: "Family", icon: Users },
    { path: "/travel", label: "Travel", icon: Compass },
    { path: "/notes", label: "Notes", icon: FileText },
  ];
  return (
    <nav className="mobile-navigation" aria-label="Quick navigation">
      {tabs.map(({ path, label, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          end={path === "/"}
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
        >
          <Icon size={19} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

function PersonalHome() {
  const familyCount = countFamilyMembers(
    familyBranches.flatMap((branch) => branch.members),
  );
  const upcoming = specialDates
    .map((date) => ({ ...date, nextDate: getNextDate(date) }))
    .filter((date) => date.nextDate)
    .sort((a, b) => a.nextDate - b.nextDate)
    .slice(0, 3);

  return (
    <div className="personal-page page-enter">
      <section className="personal-welcome">
        <span className="portfolio-kicker">A LITTLE ABOUT ME</span>
        <h1>
          Hi, I’m <span>{archiveProfile.name}.</span>
        </h1>
        <p>{archiveProfile.introduction}</p>
        <div className="personal-actions">
          <NavLink to="/portfolio">
            Explore my work <ArrowUpRight size={16} />
          </NavLink>
          <NavLink to="/story">
            My story <ArrowRight size={16} />
          </NavLink>
        </div>
        <div className="personal-contact">
          <span>
            <MapPin size={16} />
            {archiveProfile.location}
          </span>
          <a href={`mailto:${archiveProfile.email}`}>
            <Mail size={16} />
            {archiveProfile.email}
          </a>
          <a href={`tel:${archiveProfile.phone.replaceAll(" ", "")}`}>
            <Phone size={16} />
            {archiveProfile.phone}
          </a>
        </div>
      </section>
      <section className="personal-facts">
        <div className="personal-fact fact-birthday">
          <span>MY BIRTHDAY</span>
          <strong>{formatDate(archiveProfile.birthday)}</strong>
        </div>
        <NavLink to="/people" className="personal-fact fact-family">
          <span>MY PEOPLE</span>
          <strong>{familyCount} family members</strong>
          <small>
            Family & friends <ArrowRight size={14} />
          </small>
        </NavLink>
        <NavLink to="/travel" className="personal-fact fact-travel">
          <span>PLACES I’VE BEEN</span>
          <strong>{visitedPlacesList.length} places</strong>
          <small>
            Explore my travels <ArrowRight size={14} />
          </small>
        </NavLink>
      </section>
      <section className="personal-notes-preview">
        <div className="personal-section-heading">
          <div>
            <span className="portfolio-kicker">RECENT THOUGHTS</span>
            <h2>A few notes to myself</h2>
          </div>
          <NavLink to="/notes">
            All notes <ArrowRight size={15} />
          </NavLink>
        </div>
        <div className="note-preview-grid">
          {notes.slice(0, 2).map((note) => (
            <article className="note-preview" key={note.id}>
              <span>{note.category}</span>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="personal-next">
        <span className="portfolio-kicker">COMING UP</span>
        <div className="personal-next-list">
          {upcoming.map((item) => (
            <div key={item.id}>
              <strong>{item.title}</strong>
              <span>
                {formatDate(item.nextDate.toISOString().slice(0, 10))}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function PortfolioPage() {
  return (
    <div className="portfolio-page page-enter">
      <section className="portfolio-hero" id="about">
        <div className="portfolio-intro">
          <span className="portfolio-kicker">HELLO, I'M</span>
          <h1>
            Arshad <span>Waseem</span>
          </h1>
          <p className="portfolio-role">Frontend Developer</p>
          <p className="portfolio-summary">
            Passionate Computer Science and Engineering graduate focused on
            building responsive, user-friendly web experiences.
          </p>
          <div className="portfolio-hero-actions">
            <a className="portfolio-button" href="#projects">
              Explore my work <ArrowDown size={16} />
            </a>
            <a
              className="portfolio-text-link"
              href={`mailto:${archiveProfile.email}`}
            >
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="portfolio-contact-list">
            <span>
              <MapPin size={15} />
              {archiveProfile.location}
            </span>
            <a href={`tel:${archiveProfile.phone.replaceAll(" ", "")}`}>
              <Phone size={15} />
              {archiveProfile.phone}
            </a>
            <a href={`mailto:${archiveProfile.email}`}>
              <Mail size={15} />
              {archiveProfile.email}
            </a>
          </div>
        </div>
        {/* <div className="portfolio-visual">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85" alt="Laptop and workspace" />
          <div className="portfolio-visual-note"><Code2 size={17} /><span>Building for the web</span></div>
          <span className="portfolio-visual-index">01 / FRONTENDs</span>
        </div> */}
      </section>
      <section className="portfolio-section projects-section" id="projects">
        <div className="portfolio-section-heading">
          <div>
            <span className="portfolio-kicker">MY PROJECTS</span>
            <h2>Some of my work are mentioned belwo:</h2>
          </div>
          <span className="portfolio-section-mark">01 — 06</span>
        </div>
        <div className="portfolio-project-grid">
          {portfolioProjects.map((project, index) => (
            <article
              className={`portfolio-project project-${project.color} ${index === 0 ? "project-featured" : ""}`}
              key={project.id}
            >
              <div className="project-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Code2 size={18} />
              </div>
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              {project.description && <p>{project.description}</p>}
              {project.technologies && (
                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              )}
              {(project.liveUrl || project.sourceUrl) && (
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live project <ArrowUpRight size={15} />
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <Github size={15} />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="portfolio-section experience-section" id="experience">
        <div className="portfolio-section-heading">
          <div>
            <span className="portfolio-kicker">CAREER</span>
            <h2>Work experience</h2>
          </div>
        </div>
        <div className="experience-list">
          {workExperience.map((item) => (
            <article className="experience-entry" key={item.id}>
              <span className="experience-icon">
                <BriefcaseBusiness size={19} />
              </span>
              <div>
                <h3>{item.role}</h3>
                {item.organization && <p>{item.organization}</p>}
                <span>{item.period}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="portfolio-details-grid">
        <section className="portfolio-section education-section" id="education">
          <span className="portfolio-kicker">EDUCATION</span>
          {education.map((item) => (
            <div className="education-entry" key={item.id}>
              <span className="education-icon">
                <GraduationCap size={22} />
              </span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span>
                  {item.organization} · {item.location}
                </span>
              </div>
            </div>
          ))}
        </section>
        <section className="portfolio-section skills-section" id="skills">
          <span className="portfolio-kicker">TECHNICAL SKILLS</span>
          <div className="skill-group-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="portfolio-strengths">
        <div>
          <span className="portfolio-kicker">A LITTLE ABOUT HOW I WORK</span>
          <h2>Curious, dependable, always learning.</h2>
        </div>
        <ul>
          {personalStrengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </section>
      <section className="portfolio-contact" id="contact">
        <div>
          <span className="portfolio-kicker">CONTACT</span>
          <h2>Let’s build something useful.</h2>
        </div>
        <a href={`mailto:${archiveProfile.email}`}>
          {archiveProfile.email} <ArrowUpRight size={17} />
        </a>
      </section>
    </div>
  );
}

function FamilyFriendsPage() {
  const [peopleTab, setPeopleTab] = useState("family");
  const [relativeFilter, setRelativeFilter] = useState("all");
  const familySections = [
    { side: "my-family", familyTreeSide: "immediate" },
    { side: "paternal", familyTreeSide: "paternal" },
    { side: "maternal", familyTreeSide: "maternal" },
  ];
  const relationFilters = [
    { id: "all", label: "All" },
    { id: "parents", label: "Parents" },
    { id: "siblings", label: "Siblings" },
    { id: "grandparents", label: "Grandparents" },
    { id: "uncles", label: "Uncles" },
    { id: "aunts", label: "Aunts" },
    { id: "cousins", label: "Cousins" },
  ];
  return (
    <div className="people-page collection-page page-enter">
      <div className="collection-title-row">
        <div>
          <span className="portfolio-kicker">MY PEOPLE</span>
          <h1>Family & Friends</h1>
          <p>Close family and friends, all in one place.</p>
        </div>
      </div>
      <div className="people-tabs" role="tablist" aria-label="People sections">
        <button
          id="family-tab"
          type="button"
          role="tab"
          aria-selected={peopleTab === "family"}
          aria-controls="family-panel"
          className={peopleTab === "family" ? "active" : ""}
          onClick={() => setPeopleTab("family")}
        >
          Family
        </button>
        <button
          id="friends-tab"
          type="button"
          role="tab"
          aria-selected={peopleTab === "friends"}
          aria-controls="friends-panel"
          className={peopleTab === "friends" ? "active" : ""}
          onClick={() => setPeopleTab("friends")}
        >
          Friends
        </button>
        <button
          id="tree-tab"
          type="button"
          role="tab"
          aria-selected={peopleTab === "tree"}
          aria-controls="tree-panel"
          className={peopleTab === "tree" ? "active" : ""}
          onClick={() => setPeopleTab("tree")}
        >
          Family Tree
        </button>
      </div>
      {peopleTab === "family" ? (
        <section id="family-panel" role="tabpanel" aria-labelledby="family-tab">
          <div className="people-toolbar">
            <div className="filter-tabs" aria-label="Family categories">
              {relationFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={relativeFilter === filter.id}
                  className={relativeFilter === filter.id ? "selected" : ""}
                  onClick={() => setRelativeFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <div className="family-directory family-tree-layout">
            {familySections.map((section) => (
              <FamilyTree
                key={section.side}
                branches={filterFamily(
                  familyBranches,
                  section.side,
                  relativeFilter,
                )}
                side={section.familyTreeSide}
              />
            ))}
          </div>
        </section>
      ) : peopleTab === "friends" ? (
        <section
          id="friends-panel"
          role="tabpanel"
          aria-labelledby="friends-tab"
        >
          <div className="people-toolbar friends-toolbar">
            <span className="record-count">{friends.length} friends</span>
          </div>
          <div className="record-list friends-list">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        </section>
      ) : (
        <section id="tree-panel" role="tabpanel" aria-labelledby="tree-tab">
          <CompleteFamilyTree branches={familyBranches} />
        </section>
      )}
    </div>
  );
}

function FriendCard({ friend }) {
  return (
    <article className="friend-card">
      <img src={friend.image} alt="" loading="lazy" />
      <div>
        <h3>{friend.title}</h3>
        <span>{friend.designation}</span>
        <p className="friend-praise">{friend.praise}</p>
      </div>
    </article>
  );
}

function filterFamily(branches, side, relationship) {
  let visible = branches.filter((branch) => branch.side === side);
  if (["parents", "siblings"].includes(relationship) && side !== "my-family") {
    return [];
  }
  if (
    ["grandparents", "uncles", "aunts", "cousins"].includes(relationship) &&
    side === "my-family"
  ) {
    return [];
  }
  if (side === "my-family" && relationship === "parents") {
    visible = visible.map((branch) => ({
      ...branch,
      members: branch.members
        .filter((member) => /father|mother/i.test(member.category))
        .map((member) => ({ ...member, children: [] })),
    }));
  }
  if (side === "my-family" && relationship === "siblings") {
    visible = visible.map((branch) => ({
      ...branch,
      members: branch.members.flatMap((member) =>
        (member.children || [])
          .filter((child) => /you|brother/i.test(child.category || ""))
          .map((child, index) =>
            typeof child === "string"
              ? { id: `${branch.id}-sibling-${index}`, title: child }
              : { id: child.id || `${branch.id}-sibling-${index}`, ...child },
          ),
      ),
    }));
  }
  if (relationship === "grandparents") {
    visible = visible.filter((branch) =>
      ["paternal-grandparents", "maternal-grandparents"].includes(branch.id),
    );
  }
  if (relationship === "uncles")
    visible = visible
      .filter((branch) => ["fathers-brothers", "mamu"].includes(branch.id))
      .map((branch) => ({
        ...branch,
        members: branch.members.map((member) => ({ ...member, children: [] })),
      }));
  if (relationship === "aunts")
    visible = visible
      .filter((branch) => ["fathers-sisters", "khala"].includes(branch.id))
      .map((branch) => ({
        ...branch,
        members: branch.members.map((member) => ({ ...member, children: [] })),
      }));
  if (relationship === "cousins")
    visible = visible
      .filter(
        (branch) =>
          !["home", "paternal-grandparents", "maternal-grandparents"].includes(
            branch.id,
          ),
      )
      .map((branch) => ({
        ...branch,
        title: `${branch.title} · Cousins`,
        members: branch.members.flatMap((member) =>
          (member.children || []).map((entry, index) => {
            const child = typeof entry === "string" ? { title: entry } : entry;
            return {
              ...child,
              id: child.id || `${member.id}-cousin-${index}`,
              category: child.category || "Cousin",
              familyRole:
                child.familyRole ||
                getCousinCategory(child.title, child.category),
              children: [],
            };
          }),
        ),
      }))
      .filter((branch) => branch.members.length > 0);
  return visible.filter((branch) => branch.members.length > 0);
}

function countFamilyMembers(members) {
  const names = new Set();
  const addMembers = (entries) =>
    entries.forEach((entry) => {
      if (typeof entry === "string") {
        names.add(entry.trim().toLowerCase());
        return;
      }
      if (entry.title) names.add(entry.title.trim().toLowerCase());
      if (entry.spouse) names.add(entry.spouse.trim().toLowerCase());
      addMembers(entry.children || []);
    });
  addMembers(members);
  return names.size;
}

function FamilyTree({ branches, side }) {
  if (!branches.length) {
    return null;
  }

  const title =
    side === "immediate"
      ? "Immediate family"
      : `${side[0].toUpperCase()}${side.slice(1)} family`;
  const isImmediateFamily = side === "immediate";

  return (
    <section className={`family-tree family-tree-${side}`}>
      <div className="family-tree-heading">
        <div>
          <h2>{title}</h2>
        </div>
      </div>
      {isImmediateFamily ? (
        <ImmediateFamilyCards branches={branches} />
      ) : (
        <div className="family-tree-groups">
          {branches.map((branch) => (
            <details className="family-tree-group" key={branch.id} open>
              <summary>
                <span className="family-group-label">{branch.title}</span>
                <span className="family-group-count">
                  {countFamilyMembers(branch.members)}
                </span>
              </summary>
              <div className="family-member-list">
                {branch.members.map((member) => (
                  <FamilyMemberCard member={member} key={member.id} />
                ))}
              </div>
            </details>
          ))}
        </div>
      )}
    </section>
  );
}

function ImmediateFamilyCards({ branches }) {
  const members = branches.flatMap((branch) => branch.members);
  const parents = members.filter((member) =>
    /father|mother/i.test(member.category || ""),
  );
  const children =
    parents.length > 0
      ? parents.flatMap((parent) => parent.children || [])
      : members.filter((member) => /you|brother/i.test(member.category || ""));

  return (
    <div className="immediate-family-groups">
      {parents.length > 0 && (
        <section>
          <h3>Parents</h3>
          <div className="immediate-family-cards">
            {parents.map((parent) => (
              <FamilyMemberCard
                key={parent.id}
                member={{ ...parent, children: [] }}
              />
            ))}
          </div>
        </section>
      )}
      {children.length > 0 && (
        <section>
          <h3>Siblings</h3>
          <div className="immediate-family-cards">
            {children.map((child, index) => {
              const member =
                typeof child === "string"
                  ? { id: `sibling-${index}`, title: child }
                  : { id: child.id || `sibling-${index}`, ...child };
              return <FamilyMemberCard key={member.id} member={member} />;
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function CompleteFamilyTree({ branches }) {
  const sides = ["paternal", "maternal"].map((side) =>
    buildFamilySide(branches, side),
  );

  return (
    <section
      className="complete-family-tree"
      aria-labelledby="complete-tree-title"
    >
      <header className="complete-family-tree-heading">
        <span className="section-overline">MY FAMILY</span>
        <h2 id="complete-tree-title">Family Tree</h2>
        <p>Both sides of the family, arranged from grandparents downward.</p>
      </header>
      <div className="family-lineage-sides" data-direction="top-to-bottom">
        {sides.map((side) => (
          <section
            className={`family-lineage-side family-lineage-${side.id}`}
            key={side.id}
          >
            <header className="family-lineage-heading">
              <span>{`${side.id[0].toUpperCase()}${side.id.slice(1)} family`}</span>
              <small>
                {countFamilyMembers([...side.roots, ...side.children])} people
              </small>
            </header>
            <div className="family-lineage-scroll">
              <div className="family-lineage-tree">
                <section className="family-lineage-generation">
                  <h3 className="family-generation-label">Grandparents</h3>
                  <div className="family-lineage-roots">
                    {side.roots.map((root) => (
                      <FamilyMemberCard key={root.id} member={root} />
                    ))}
                  </div>
                </section>
                <section className="family-lineage-generation">
                  <h3 className="family-generation-label">
                    Their children: parents, aunts, and uncles
                  </h3>
                  <div className="family-lineage-children">
                    {side.children.map((member) => (
                      <FamilyLineageNode key={member.id} member={member} />
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function buildFamilySide(branches, side) {
  const rootBranch = branches.find(
    (branch) => branch.id === `${side}-grandparents`,
  );
  const household = branches.find((branch) => branch.id === "home");
  const father = household?.members.find(
    (member) => member.category === "Father",
  );
  const mother = household?.members.find(
    (member) => member.category === "Mother",
  );
  const roots = (rootBranch?.members || []).map((member, index, members) => ({
    ...member,
    spouse: members.find((other, otherIndex) => otherIndex !== index)?.title,
  }));
  const children = branches
    .filter((branch) => branch.side === side && branch.id !== rootBranch?.id)
    .flatMap((branch) => branch.members);

  if (side === "paternal" && father && mother) {
    children.push({
      ...father,
      spouse: mother.title,
      children: mother.children,
    });
  }
  if (side === "maternal" && father && mother) {
    children.push({
      ...mother,
      spouse: father.title,
    });
  }

  return { id: side, roots, children };
}

function FamilyLineageNode({ member }) {
  return (
    <div className="family-lineage-node">
      <FamilyMemberCard member={{ ...member, children: [] }} />
      {member.children?.length > 0 && (
        <div className="family-lineage-descendants">
          <h4 className="family-generation-label">Children</h4>
          <FamilyDescendants
            members={member.children}
            parentCategory={member.familyRole || member.category}
          />
        </div>
      )}
    </div>
  );
}

function FamilyMemberCard({ member }) {
  return (
    <article className="family-member-card">
      <div className="family-member">
        <span
          className={`family-initials ${getFamilyIconClass(member)}`}
          aria-hidden="true"
          title={member.title}
        >
          {getInitials(member.title)}
        </span>
        <div>
          <strong>
            {member.title}
            {member.spouse && (
              <span className="family-inline-spouse">
                {" "}
                {getSpousePrefix(member.familyRole || member.category)}{" "}
                {member.spouse}
              </span>
            )}
          </strong>
          <span>{member.category}</span>
        </div>
      </div>
      {member.children?.length > 0 && (
        <FamilyDescendants
          members={member.children}
          parentCategory={member.familyRole || member.category}
        />
      )}
    </article>
  );
}

function getSpousePrefix(category = "") {
  if (
    /mother|grandmother|sister|daughter|fufi|khala|wife|female|girl/i.test(
      category,
    )
  ) {
    return "W/o";
  }
  if (
    /father|grandfather|brother|son|chacha|mamu|husband|male|you/i.test(
      category,
    )
  ) {
    return "H/o";
  }
  return "H/o";
}

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function getCousinCategory(name, category = "") {
  const femaleNames =
    /\b(aafiya|aafreen|afeefa|afreen|alishba|areeba|azra|fatima|fehmida|habiba|huda|hiba|humaira|iqra|musfira|nusrat|rubeena|saeeda|saima|salma|sadiya|sara|shama|sidra|zeenat|zakiya)\b/i;
  const isFemale =
    /female|girl|sister|daughter/i.test(category) ||
    /\bkhatoon\b/i.test(name) ||
    femaleNames.test(name);
  return isFemale ? "Cousin girl" : "Cousin boy";
}

function getFamilyIconClass(member) {
  const category = member.familyRole || member.category || "";
  if (/chacha|mamu|uncle/i.test(category)) return "family-icon-uncle";
  if (/fufi|khala|aunt/i.test(category)) return "family-icon-aunt";
  if (/cousin/i.test(category)) {
    return /girl|female|sister/i.test(category)
      ? "family-icon-cousin-girl"
      : "family-icon-cousin-boy";
  }
  return "";
}

function FamilyDescendants({ members, parentCategory }) {
  return (
    <ul className="family-descendants">
      {members.map((entry, index) => {
        const child = typeof entry === "string" ? { title: entry } : entry;
        const isCousin = /chacha|mamu|fufi|khala|cousin/i.test(
          parentCategory || "",
        );
        const familyChild = isCousin
          ? {
              ...child,
              familyRole:
                child.familyRole ||
                getCousinCategory(child.title, child.category),
            }
          : child;
        return (
          <li key={`${child.title}-${index}`}>
            <div className="family-child">
              <span
                className={`family-initials ${getFamilyIconClass(familyChild)}`}
                aria-hidden="true"
              >
                {getInitials(familyChild.title)}
              </span>
              <span className="family-child-name">
                {familyChild.title}
                {familyChild.spouse && (
                  <span className="family-inline-spouse">
                    {" "}
                    {getSpousePrefix(
                      familyChild.familyRole || familyChild.category,
                    )}{" "}
                    {familyChild.spouse}
                  </span>
                )}
              </span>
              {familyChild.category && <small>{familyChild.category}</small>}
            </div>
            {familyChild.children?.length > 0 && (
              <FamilyDescendants
                members={familyChild.children}
                parentCategory={familyChild.familyRole || familyChild.category}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

function CollectionPage({ section, records }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [travelPage, setTravelPage] = useState(1);
  const categories =
    section.key === "books"
      ? ["All", ...bookCategories]
      : [
          "All",
          ...new Set(records.map((record) => record.category).filter(Boolean)),
        ];
  const filtered = filterRecords(records, search, filter);
  const isTravelPage = section.key === "travel";
  const travelPageSize = 6;
  const pageCount = Math.ceil(filtered.length / travelPageSize);
  const visibleRecords = isTravelPage
    ? filtered.slice(
        (travelPage - 1) * travelPageSize,
        travelPage * travelPageSize,
      )
    : filtered;
  const Icon = section.icon;
  return (
    <div
      className={`collection-page page-enter ${section.key === "notes" ? "notes-page" : ""} ${section.key === "travel" ? "travel-page" : ""}`}
    >
      {/* <div className="collection-topline">
        <div className="eyebrow"><span className="eyebrow-line" /> ARSH360 ARCHIVE</div>
        <span className="record-count">{filtered.length} {filtered.length === 1 ? "entry" : "entries"}</span>
      </div> */}
      <div className="collection-title-row">
        <div>
          <h1>{section.label}</h1>
          <p>{descriptions[section.key]}</p>
        </div>
      </div>
      <div className="collection-toolbar">
        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={filter === category ? "selected" : ""}
              onClick={() => {
                setFilter(category);
                setTravelPage(1);
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="collection-search">
          <Search size={16} />
          <input
            aria-label={`Search ${section.label}`}
            placeholder={`Search ${section.label.toLowerCase()}`}
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setTravelPage(1);
            }}
          />
        </label>
      </div>
      {filtered.length ? (
        <>
          <div
            className={`${section.key === "gallery" ? "record-grid gallery-grid" : "record-list"} ${isTravelPage ? "travel-list" : ""} ${section.key === "books" ? "book-list" : ""}`}
          >
            {visibleRecords.map((record) => (
              <RecordCard
                key={record.id}
                record={record}
                section={section}
                gallery={section.key === "gallery"}
              />
            ))}
          </div>
          {isTravelPage && pageCount > 1 && (
            <nav className="travel-pagination" aria-label="Travel list pages">
              {Array.from({ length: pageCount }, (_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    type="button"
                    aria-label={`Travel page ${page}`}
                    aria-current={travelPage === page ? "page" : undefined}
                    onClick={() => setTravelPage(page)}
                  >
                    {page}
                  </button>
                );
              })}
            </nav>
          )}
        </>
      ) : (
        <div className="collection-empty">
          <div className="empty-art">
            <Icon size={23} />
          </div>
          <h2>
            {filter === "Books Yet to Read"
              ? "No books added to this list yet."
              : "Nothing found just yet."}
          </h2>
          <p>
            {filter === "Books Yet to Read"
              ? "Add books here when you have titles you plan to read."
              : "Try a different search or category."}
          </p>
        </div>
      )}
    </div>
  );
}

function RecordCard({ record, section, gallery = false }) {
  return (
    <article
      className={`record-card ${gallery ? "gallery-card" : ""} ${section.key === "notes" ? "note-post-card" : ""} ${section.key === "books" ? "book-tile" : ""}`}
    >
      {record.image && (
        <img
          className={`record-image ${section.key === "books" ? "book-cover-image" : ""}`}
          src={record.image}
          alt={record.title}
          loading="lazy"
        />
      )}
      <div className="record-card-main">
        <div className="record-meta">
          {section.key === "digital" && <DigitalIcon value={record.title} />}
          <span>{record.category || section.label}</span>
          {record.date && <time>{formatDate(record.date)}</time>}
        </div>
        <h3>{record.title}</h3>
        {record.author && (
          <span className="record-extra">
            By {record.author}
            {record.rating ? ` · ${record.rating}/5` : ""}
          </span>
        )}
        {record.organization && (
          <span className="record-extra">{record.organization}</span>
        )}
        {record.status && (
          <span className="record-status">{record.status}</span>
        )}
        {record.description && <p>{record.description}</p>}
        {record.location && (
          <span className="record-location">
            <Compass size={13} /> {record.location}
          </span>
        )}
        {record.url && (
          <a
            className="record-url"
            href={record.url}
            target="_blank"
            rel="noreferrer"
          >
            <Link2 size={13} /> Visit link
          </a>
        )}
      </div>
    </article>
  );
}

function DigitalIcon({ value }) {
  const name = value.toLowerCase();
  const Icon = name.includes("facebook")
    ? Facebook
    : name.includes("instagram")
      ? Instagram
      : name === "x" || name.includes("twitter")
        ? X
        : name.includes("linkedin")
          ? Linkedin
          : name.includes("youtube")
            ? Youtube
            : name.includes("github")
              ? Github
              : name.includes("camera")
                ? Camera
                : Link2;
  return <Icon size={14} className="digital-platform-icon" />;
}

function filterRecords(items, search, category = "All") {
  const query = search.trim().toLowerCase();
  return items.filter(
    (item) =>
      `${item.title} ${item.category || ""} ${item.description || ""} ${item.location || ""} ${item.author || ""}`
        .toLowerCase()
        .includes(query) &&
      (category === "All" || item.category === category),
  );
}

function formatDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getNextDate(record) {
  if (!record.date) return null;
  const savedDate = new Date(`${record.date}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (!record.recurring) return savedDate >= today ? savedDate : null;
  const nextDate = new Date(
    today.getFullYear(),
    savedDate.getMonth(),
    savedDate.getDate(),
  );
  if (nextDate < today) nextDate.setFullYear(nextDate.getFullYear() + 1);
  return nextDate;
}

export default App;
