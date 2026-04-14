import type { Item } from "../types/Item";

export const mockItems: Item[] = [
  {
    id: "1",
    name: "Green Leaf Cafe",
    category: "Cafe",
    description: "A sustainable local cafe using eco-friendly packaging.",
    image: "../images/business1.jpg",
    address: "Coventry City Centre",
    rating: 4.5,
  },
  {
    id: "2",
    name: "Eco Mart",
    category: "Shop",
    description: "Organic and plastic-free grocery store.",
    image: "../images/business2.jpeg",
    address: "Earlsdon, Coventry",
    rating: 4.2,
  },
  {
    id: "3",
    name: "CycleFix Coventry",
    category: "Repair",
    description: "Bike repair and reuse workshop promoting green travel.",
    image: "../images/business3.jpeg",
    address: "Stoke, Coventry",
    rating: 4.8,
  },
];