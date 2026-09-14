export type LocationInfo = {
  id: string;
  name: string;
  shortName: string;
  image: string;
  mapX: number;
  mapY: number;
  phone: string;
  email: string;
  address: string;
};

export const LOCATIONS: LocationInfo[] = [
  {
    id: "joburg",
    name: "EMA Joburg",
    shortName: "Joburg",
    image: "/images/johannesburg%20colour.png",
    mapX: 729,
    mapY: 325,
    phone: "011 958 9100",
    email: "admin@ema.co.za",
    address:
      "Unit 31 (Block B) Willowbrook Office Park, Cnr Hendrik Potgieter & Van der Kloof Street, Ruimsig, Roodepoort",
  },
  {
    id: "paarl",
    name: "EMA Paarl",
    shortName: "Paarl",
    image: "/images/Paarl%20colour.png",
    mapX: 215,
    mapY: 775,
    phone: "021 872 2525",
    email: "infopaarl@ema.co.za",
    address: "Workshop 17, Tabak Street, Paarl",
  },
  {
    id: "capetown",
    name: "EMA Cape Town",
    shortName: "Cape Town",
    image: "/images/cape%20town%20colour.png",
    mapX: 165,
    mapY: 843,
    phone: "021 422 5117",
    email: "infoct@ema.co.za",
    address: "Unit 2A, 2nd Floor, 83 Castle St, Cape Town City Centre, 8000",
  },
  {
    id: "tygervalley",
    name: "EMA Tygervalley",
    shortName: "Tygervalley",
    image: "/images/Tygervalley%20colour.png",
    mapX: 150,
    mapY: 795,
    phone: "021 914 0053",
    email: "infotv@ema.co.za",
    address: "First Floor, Willowbridge Centre, Carl Cronje Dr, Bellville Park, 7530",
  },
  {
    id: "cptpeninsula",
    name: "EMA CPT Peninsula",
    shortName: "CPT Peninsula",
    image: "/images/CPT%20Peninsula%20colour.png",
    mapX: 120,
    mapY: 890,
    phone: "021 492 5677",
    email: "infopen@ema.co.za",
    address: "Unit 2C, Castle Gate, 83 Castle Street, Cape Town, 8000",
  },
  {
    id: "loxton",
    name: "EMA Loxton CBD",
    shortName: "Loxton",
    image: "/images/Loxton%20colour.png",
    mapX: 400,
    mapY: 686,
    phone: "021 422 5117",
    email: "info@ema.co.za",
    address: "83 Castle St, Cape Town City Centre, Cape Town, 8000",
  },
];
