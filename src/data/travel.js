const image = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=85`;

const travelPhotos = [
  "1470252649378-9c29740c9fa8",
  "1472396961693-142e6e269027",
  "1524231757912-21f4fe3a7200",
  "1519046904884-53103b34b206",
];

const visitedPlaces = [
  [
    "Supa Devrali Mandir",
    "Temple",
    "Nepal",
    "A peaceful hilltop shrine surrounded by Nepal’s scenic mountain landscapes.",
  ],
  [
    "Narpani",
    "Place",
    "Nepal",
    "A quiet hillside village with sweeping views and fresh air.",
  ],
  [
    "Butwal",
    "City",
    "Nepal",
    "A lively city connecting Nepal’s hills and Terai plains.",
  ],
  [
    "Tansen",
    "City",
    "Palpa, Nepal",
    "A charming hill town known for heritage, crafts, and views.",
  ],
  [
    "Rani Mahal",
    "Historic site",
    "Palpa, Nepal",
    "A riverside palace offering striking architecture and quiet historic atmosphere.",
  ],
  [
    "Taj Mahal",
    "Historic site",
    "Agra, India",
    "Marble mausoleum admired for symmetry, gardens, and timeless beauty.",
  ],
  [
    "Lotus Temple",
    "Temple",
    "New Delhi, India",
    "Serene temple celebrated for lotus-inspired design and open spaces.",
  ],
  [
    "Chota Imambara",
    "Historic site",
    "Lucknow, India",
    "Ornate halls and chandeliers create a memorable historic Lucknow landmark.",
  ],
  [
    "Bada Imambara",
    "Historic site",
    "Lucknow, India",
    "Explore grand halls and remarkable architecture at this celebrated monument.",
  ],
  [
    "Ambedkar Park",
    "Park",
    "Lucknow, India",
    "Expansive lawns, sculptures, and stone avenues shape this striking park.",
  ],
  [
    "Purana Qila",
    "Historic site",
    "Delhi, India",
    "Ancient ramparts and quiet gardens reveal Delhi’s layered historic past.",
  ],
  [
    "Lucknow Zoo",
    "Zoo",
    "Lucknow, India",
    "Meet diverse wildlife along shaded paths at this welcoming zoo.",
  ],
  [
    "Kanpur Zoo",
    "Zoo",
    "Kanpur, India",
    "Sanctuary featuring wildlife exhibits, gardens, and relaxed family outings.",
  ],
  [
    "Jama Masjid",
    "Mosque",
    "Delhi, India",
    "Grand mosque with impressive courtyards and bustling old-city surroundings.",
  ],
  [
    "Red Fort",
    "Historic site",
    "Delhi, India",
    "Imposing sandstone walls, historic gates, and enduring Mughal-era stories await.",
  ],
  [
    "Agra Fort",
    "Historic site",
    "Agra, India",
    "Red sandstone fort filled with palaces, courtyards, and Mughal history.",
  ],
];

export const visitedPlacesList = visitedPlaces.map(
  ([title, category, location, description], index) => ({
    id: `travel-${index + 1}`,
    title,
    category,
    location,
    description,
    image: image(travelPhotos[index % travelPhotos.length]),
  }),
);
