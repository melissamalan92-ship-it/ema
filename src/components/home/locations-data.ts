export type LocationInfo = {
  id: string;
  name: string;
  shortName: string;
  image: string;
  mapX: number;
  mapY: number;
};

export const LOCATIONS: LocationInfo[] = [
  {
    id: "joburg",
    name: "EMA Joburg",
    shortName: "Joburg",
    image: "/images/joburg.jpg",
    mapX: 729,
    mapY: 325,
  },
  {
    id: "paarl",
    name: "EMA Paarl",
    shortName: "Paarl",
    image: "/images/paarl.jpg",
    mapX: 215,
    mapY: 775,
  },
  {
    id: "capetown",
    name: "EMA Cape Town",
    shortName: "Cape Town",
    image: "/images/cape%20town.jpg",
    mapX: 165,
    mapY: 843,
  },
  {
    id: "tygervalley",
    name: "EMA Tygervalley",
    shortName: "Tygervalley",
    image: "/images/tygervalley.jpg",
    mapX: 150,
    mapY: 795,
  },
  {
    id: "cptpeninsula",
    name: "EMA CPT Peninsula",
    shortName: "CPT Peninsula",
    image: "/images/cpt%20peninsula.jpg",
    mapX: 120,
    mapY: 890,
  },
  {
    id: "loxton",
    name: "EMA Loxton CBD",
    shortName: "Loxton",
    image: "/images/loxton.jpg",
    mapX: 400,
    mapY: 686,
  },
];
