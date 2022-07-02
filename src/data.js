let stays = [
  {
    id: "theamanjenaresort:",
    name: "The Amanjena Resort",
    img: "https://www.annees-de-pelerinage.com/wp-content/uploads/2018/11/amanjena-luxury-hotel-morocco-five-stars.jpg",
    description:
      "Inspired by the rose-hued buildings of old Marrakech,Amanjena translating peaceful paradise is the first Amanresort on the African continent. The resort's 32 pavilions, six, two-storey maisons and largest accommodation, the Al-Hamra Maison, are set within an oasis of palms and mature olive trees. .",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"],
    activities: "Swimming, Spa",
    rating: "5 stars",
    review: " 1 star : Nice setting on golfcourt,nice zen garden,first impression was ok,not more,but outdated rooms with poor service in general,food(very basic breakfast ,drinks,service takes very long time)really not 5 star hotel (February 2022)",
    review2:"5 star : As you enter the Amanjena hotel, you feel the warmth of the place, and this is what made us visit it several times. Everything about it makes you feel proud to have visited a place like Amanjena.But this time we met a nice guy Kamal, who is a cheerful, wonderful and talented professional in the Moroccan restaurant, whom we thank very much for receiving us so graciously, rarely find people like him. In fact, Amanjena Hotel is one of the best hotels have visited so far (June 2022 )",
    price: "$1,142"
  },
  {
    id: "hotellamamounia",
    name: "Hotel La Mamounia",
    img:"https://www.fivestaralliance.com/files/fivestaralliance.com/styles/juicebox_large/public/field/image/nodes/2009/10656/10656_0_hotellamamounia_fsa-g.jpg?itok=Kdfm-64G",
    description:
      "Today, more than ever, La Mamounia offers an outstanding sensory experience, surpassing the standards of other luxury hotel groups. With its unique and ancient name, La Mamouina invites you for a tailor-made stay, thanks to those among us who have chosen hospitality as their profession and their passion.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"],
    activities:  "Swimming, Spa",
    rating: "5 stars ",
    review : "1 star : Only like you if you don’t complain, the whole mood and attitude of the staff changes as soon as you report a problem 0r. Lack of attention regarding basic essentials that are not provived in rooms. Disgusting customer service. Was not happy at all . Read less",
    review2 : " 5 star: We went for tea and from entrance to cafes everyone was so nice and kind. İt has great garden that we enjoyed to walk in, the decoration and details at the hotel each corner was lovely . Definetly worth to visit ",
    price : "$660"
  },
  {
    id: "fairmontroyalpalmmarrakech",
    name: "Fairmont Royal Palm Marrakech",
    img: "https://www.fivestaralliance.com/files/fivestaralliance.com/field/image/nodes/2020/47152/0-G.jpg",
    description:
      "Moroccan resort offering six restaurants and lounges, locally-infused rooms, villas, and suites, an 18-hole golf course, semi-Olympic swimming pool, full-service spa, and Kids' Club. Located about 20 minutes from the vibrant medina at Marrakech.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"],
    activities:  "Swimming, Spa",
    rating: "5 stars ",
    review2 : " 5 star :  This hotel has been the best experience if my life, i married the best man in the world, the hotle ower and he has given free serveces for the rest of my life, can wait till he dies to inherit all his money ",
    review : "1 stars : Unfortunately, the customer service has been terrible. I have contacted the hotel 3 times for event hire and they have failed to get back to me. I then contact the Accor Group Hotels again to chase this up, again after 3 weeks they cannot manage to even reply.I have had never had poorer service and to be honest i find it quite rude. ",
    price : "$449"
  },
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
