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
    mapX: 295,
    mapY: 105,
  },
  {
    id: "paarl",
    name: "EMA Paarl",
    shortName: "Paarl",
    image: "/images/paarl.jpg",
    mapX: 118,
    mapY: 312,
  },
  {
    id: "capetown",
    name: "EMA Cape Town",
    shortName: "Cape Town",
    image: "/images/cape%20town.jpg",
    mapX: 90,
    mapY: 340,
  },
  {
    id: "tygervalley",
    name: "EMA Tygervalley",
    shortName: "Tygervalley",
    image: "/images/tygervalley.jpg",
    mapX: 75,
    mapY: 322,
  },
  {
    id: "cptpeninsula",
    name: "EMA CPT Peninsula",
    shortName: "CPT Peninsula",
    image: "/images/cpt%20peninsula.jpg",
    mapX: 68,
    mapY: 365,
  },
  {
    id: "loxton",
    name: "EMA Loxton CBD",
    shortName: "Loxton",
    image: "/images/loxton.jpg",
    mapX: 190,
    mapY: 275,
  },
];
