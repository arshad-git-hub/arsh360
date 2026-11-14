import arsh1 from "../images/image_arsh (1).jpg"
import arsh2 from "../images/image_arsh (2).webp"
import arsh3 from "../images/image_arsh (3).webp"
import arsh4 from "../images/image_arsh (4).webp"
import arsh5 from "../images/image_arsh (5).webp"
import arsh6 from "../images/image_arsh (6).webp"
import arsh7 from "../images/image_arsh (7).webp"
import arsh8 from "../images/image_arsh (8).jpg"


const profile = {
  name: "Arshad Waseem",
  birthday: "1998-09-22",
  introduction:
    "Computer Science and Engineering graduate focused on building responsive, user-friendly web experiences.",
  location: "Okhla, New Delhi, Delhi",
  phone: "+91 991 881 1554",
  email: "arshadce18@gmail.com",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=85",
};

const story = [
  {
    id: "s1",
    title: "A new beginning",
    date: "1998-09-22",
    category: "Early years",
    description: "The day Arshad Waseem's story began.",
  },
  {
    id: "s2",
    title: "First day of school",
    date: "2007-09-04",
    category: "Childhood",
    description: "A new backpack, a little nervousness, and a lot to discover.",
  },
  {
    id: "s3",
    title: "A milestone worth celebrating",
    date: "2021-06-22",
    category: "Milestone",
    description: "One chapter closed, another one just beginning.",
  },
];

const books = [
  {
    id: "b1",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Books Read",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg",
  },
  {
    id: "b2",
    title: "The Power of Our Subconscious Mind",
    author: "Joseph Murphy",
    category: "Books Read",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg",
  },
  {
    id: "b3",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "Books Read",
    image: "https://covers.openlibrary.org/b/isbn/9781612680194-M.jpg",
  },
  {
    id: "b4",
    title: "Do Epic Shit",
    author: "Ankur Warikoo",
    category: "Books Read",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg",
  },
  {
    id: "b5",
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Books Read",
    image: "https://covers.openlibrary.org/b/isbn/9780062315007-M.jpg",
  },
  {
    id: "b6",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Books Read",
    image: "https://covers.openlibrary.org/b/isbn/9780857197689-M.jpg",
  },
  {
    id: "b9",
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    category: "Books Yet to Read",
    image: "/book-wings-of-fire.svg",
  },
  {
    id: "b10",
    title: "A Suitable Boy",
    author: "Vikram Seth",
    category: "Books Yet to Read",
    image: "/book-a-suitable-boy.svg",
  },
  {
    id: "b7",
    title: "Successful Married Life",
    category: "Books Formatted by Me",
    image: "/book-successful-married-life.svg",
  },
  {
    id: "b8",
    title: "Successful Husband",
    category: "Books Formatted by Me",
    image: "/book-successful-husband.svg",
  },
];

const dates = [
  {
    id: "d1",
    title: "Arshad Waseem’s birthday",
    category: "Birthday",
    date: "1998-09-22",
    recurring: true,
  },
  {
    id: "d2",
    title: "Wedding anniversary",
    category: "Anniversary",
    date: "2025-11-19",
    recurring: true,
  },
  {
    id: "d3",
    title: "Saba Khan’s birthday",
    category: "Birthday",
    date: "2024-08-02",
    recurring: true,
  },
  {
    id: "d4",
    title: "Hamza Arshad’s birthday",
    category: "Birthday",
    date: "2026-10-27",
    recurring: true,
  },
  {
    id: "d5",
    title: "First day at college",
    category: "Milestone",
    date: "2018-09-10",
  },
  {
    id: "d6",
    title: "A mountain morning",
    category: "Travel memory",
    date: "2026-08-03",
  },
];

const digital = [
  {
    id: "l1",
    title: "Facebook",
    category: "Friends & family",
    url: "https://facebook.com",
  },
  {
    id: "l2",
    title: "Instagram",
    category: "Photos & moments",
    url: "https://instagram.com",
  },
  {
    id: "l3",
    title: "X",
    category: "Posts & updates",
    url: "https://x.com",
  },
  {
    id: "l4",
    title: "YouTube",
    category: "Videos & playlists",
    url: "https://youtube.com",
  },
  {
    id: "l5",
    title: "LinkedIn",
    category: "Work & learning",
    url: "https://linkedin.com",
  },
];

const photo = (id, width = 720) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${Math.round((width * 16) / 9)}&q=85`;

const gallery = [
  {
    id: "g1",
    title: "Golden hour walk",
    category: "College",
    date: "2026-09-18",
    location: "Campus",
    image: arsh2,
  },
  {
    id: "g2",
    title: "The mountain view",
    category: "Hill Station",
    date: "2025-08-12",
    location: "Hunza",
    image: arsh3,
  },
  {
    id: "g3",
    title: "A table for everyone",
    category: "College",
    date: "2025-05-04",
    location: "Home",
    image: arsh4,
  },
  {
    id: "g4",
    title: "Sea, then sky",
    category: "Tour",
    date: "2023-10-06",
    location: "Karachi",
    image: arsh5,
  },
  {
    id: "g5",
    title: "A childhood memory",
    category: "Childhood",
    location: "Family album",
    image: arsh6,
  },
  {
    id: "g5",
    title: "A childhood memory",
    category: "School",
    location: "Family album",
    image: arsh7,
  },
  {
    id: "g5",
    title: "A childhood memory",
    category: "Marraige",
    location: "Family album",
    image: arsh8,
  },
  {
    id: "g5",
    title: "A childhood memory",
    category: "School",
    location: "Family album",
    image: arsh6,
  },
];

const goalRecords = [
  {
    id: "go1",
    title: "Learn to make a short film",
    category: "Creative",
    status: "In progress",
    description: "Keep practicing by making small things, often.",
  },
  {
    id: "go2",
    title: "See the northern lights",
    category: "Travel",
    status: "Someday",
    description: "A winter trip somewhere wonderfully quiet.",
  },
  {
    id: "go3",
    title: "Finish a 10K run",
    category: "Personal",
    status: "Achieved",
    date: "2024-11-09",
    description: "One step at a time, all the way to the finish.",
  },
];

export const archiveProfile = profile;
export const lifeStory = story;
export const booksRead = books;
export const specialDates = dates;
export const digitalProfiles = digital;
export const photoGallery = gallery;
export const goals = goalRecords;
