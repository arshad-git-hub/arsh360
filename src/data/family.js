const member = (id, name, relationship, details = {}) => ({
  id,
  title: name,
  category: relationship,
  ...details,
});

export const familyBranches = [
  {
    id: "home",
    title: "Immediate family",
    side: "my-family",
    members: [
      member("home-father", "Jameel Ahmad", "Father", {}),
      member("home-mother", "Zahida Khatoon", "Mother", {
        children: [
          {
            title: "Arshad Waseem",
            category: "You",
            spouse: "Saba Khan",
            children: [
              {
                title: "Hamza Arshad",
              },
            ],
          },
          { title: "Zahid Kamal", category: "Brother" },
          { title: "Shahid Jamal", category: "Brother" },
          { title: "Junaid Ahmad", category: "Brother" },
        ],
      }),
    ],
  },
  {
    id: "paternal-grandparents",
    title: "Paternal grandparents",
    side: "paternal",
    members: [
      member("pgf", "Abdul Rauf", "Dada"),
      member("pgm", "Aqleema Khatoon", "Dadi"),
    ],
  },
  {
    id: "fathers-brothers",
    title: "Paternal Uncles ( Chacha )",side: "paternal",
    members: [
      member("puncle-1", "Raees Ahmad", "Chacha", { spouse: "Badi Ammi",
        children: [
          {
            title: "Salma", spouse: "Sohab", children: ["Afreen", "Samreen", "Asad"],
          },
          {
            title: "Fehmida", spouse: "Salahuddin", children: ["Nasreen", "Saniya"],
          },
          "Nusra ", "Rizwan", "MUsman", "Humaira", "Ajaz",
        ],
      }),
      member("puncle-2", "Abdul Rasheed", "Chacha", { spouse: "Badi Ammi",
        children: [
          {
            title: "Raqeeb",
            spouse: "Faheema",
            children: ["Hassan", "Fauzan"],
          },
          {
            title: "Moeed",
            spouse: "Rubeena",
            children: ["Musfira", "Ameena"],
          },
          "Saima",
          "Sadiya",
          "Irfan",
          "Aarif",
        ],
      }),
      member("puncle-4", "Anees Ahmad", "Chacha", {
        spouse: "Fatima",
        children: [
          {
            title: "Shama",
            children: ["Wajhan", "Arshan"],
          },
          "Rashid",
          "Nazeer",
          "Fahad",
          "Aftab",
          "Zaid",
          "Afreen",
          "Haroon",
        ],
      }),
      member("puncle-5", "Abdul Raheem", "Chacha", {
        spouse: "Asma",
        children: ["Hamna", "Sara"],
      }),
      member("puncle-6", "Nisar Ahmad", "Chacha"),
    ],
  },
  {
    id: "fathers-sisters",
    title: "Patrenal Aunts ( Fufi )",
    side: "paternal",
    members: [
      member("fufi-1", "Zainab Khatoon", "Fufi", {
        spouse: "Azizurrahman",
        children: [
          {
            title: "Waheeda",
            children: ["Yasir"],
          },
          "Obaida",
          "Saeeda",
          "Iqra",
          "Abu",
        ],
      }),
      member("fufi-2", "Mariyam Khatoon", "Fufi", {
        spouse: "Abdurraheem",
        children: [
          "Habiba",
          "Osama",
          "Salma",
          "Zeenat",
          "Zakiya",
          "Shuraih",
        ],
      }),
      member("fufi-3", "Husna Khatoon", "Fufi", {
        spouse: "Firoz",
        children: [
          { title: "Azra"},
          { title: "Sidra" },
          "Asad",
          "Anas",
        ],
      }),
      member("fufi-4", "Mahmooda Khatoom", "Fufi", {
        spouse: "Riyaz",
        children: ["Ali", "Zyan"],
      }),
      member("fufi-5", "Hameeda Khatoon", "Fufi", {
        spouse: "Noorul Hasan",
        children: [
          { title: "Huda" },
          { title: "Hiba" },
          { title: "Abdul Hadi"}
        ],
      }),
    ],
  },
  {
    id: "maternal-grandparents",
    title: "Maternal grandparents",
    side: "maternal",
    members: [
      member("mgf", "Mohd Mustafa", "Nana"),
      member("mgm", "Tarabunnisa", "Nani"),
    ],
  },
  {
    id: "mamu",
    title: "Maternal Uncles ( Mamu )",
    side: "maternal",
    members: [
      member("mamu-1", "Mohd Saeed", "Mamu", {
        spouse: "Shayra",
        children: ["Shama", "Shadab", "Sadique", "Sajid"],
      }),
      member("mamu-2", "Mohd Raees", "Mamu", {
        spouse: "Safiya",
        children: ["Areeba", "Afeefa"],
      }),
      member("mamu-3", "Mohd Shafique", "Mamu", {
        spouse: "Sana",
        children: ["Aasif", "Aarif"],
      }),
      member("mamu-4", "Mohd Aslam", "Mamu"),
    ],
  },
  {
    id: "khala",
    title: "Maternal Aunts ( Khala )",
    side: "maternal",
    members: [
      member("khala-1", "Wahida Khatoon", "Khala", {
        spouse: "Hazrat Ali",
        children: [
          { title: "Sufiyan", spouse: "Yasmeen" },
          "Usman",
          "Salman",
          "Parwez",
        ],
      }),
      member("khala-3", "Aabida Khatoon", "Khala", {
        spouse: "Farooq Ansari",
        children: ["Sadiya", "Fatima", "Umair", "Alishba"],
      }),
      member("khala-4", "Aayesha Khatoon", "Khala", {
        spouse: "Afzal",
        children: [
          "Aasim",
          "Aatif",
          "Humaira",
          "Anas",
        ],
      }),
      member("khala-5", "Shafiya Khatoon", "Khala", {
        spouse: "Salahuddin",
        children: ["Shahzan", "Adnan"],
      }),
    ],
  },
];
