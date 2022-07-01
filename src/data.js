let stays = [
  {
    id: "theamanjenaresort:",
    name: "The Amanjena Resort",
    img: "https://www.annees-de-pelerinage.com/wp-content/uploads/2018/11/amanjena-luxury-hotel-morocco-five-stars.jpg",
    description:
      "Inspired by the rose-hued buildings of old Marrakech,Amanjena translating peaceful paradise is the first Amanresort on the African continent. The resort's 32 pavilions, six, two-storey maisons and largest accommodation, the Al-Hamra Maison, are set within an oasis of palms and mature olive trees. .",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"],
    activities: "Swimming, Spa",
    rating: "5 stars"
  },
  {
    id: "hotellamamounia",
    name: "Hotel La Mamounia",
    img:"https://www.fivestaralliance.com/files/fivestaralliance.com/styles/juicebox_large/public/field/image/nodes/2009/10656/10656_0_hotellamamounia_fsa-g.jpg?itok=Kdfm-64G",
    description:
      "Today, more than ever, La Mamounia offers an outstanding sensory experience, surpassing the standards of other luxury hotel groups. With its unique and ancient name, La Mamouina invites you for a tailor-made stay, thanks to those among us who have chosen hospitality as their profession and their passion.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"],
    activities:  "Swimming, Spa",
    rating: "5 stars"

  },
  {
    id: "fairmontroyalpalmmarrakech",
    name: "Fairmont Royal Palm Marrakech",
    img: "https://www.fivestaralliance.com/files/fivestaralliance.com/field/image/nodes/2020/47152/0-G.jpg",
    description:
      "Moroccan resort offering six restaurants and lounges, locally-infused rooms, villas, and suites, an 18-hole golf course, semi-Olympic swimming pool, full-service spa, and Kids' Club. Located about 20 minutes from the vibrant medina at Marrakech.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"],
    activities:  "Swimming, Spa",
    rating: "5 stars"
  },
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
