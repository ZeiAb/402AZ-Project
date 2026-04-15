import { Link } from "react-router-dom";
import type { Item } from "../types/Item";

type Props = {
  item: Item;
};

export default function Businesscard({ item }: Props) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded mb-3"
      />

      <h2 className="text-xl font-semibold">{item.name}</h2>
      <p className="text-sm text-gray-600">{item.category}</p>
      <p className="mt-2">{item.description}</p>

      <Link
        to={`/businesses/${item.id}`}
        className="inline-block mt-4 text-blue-600 underline"
      >
        View details
      </Link>
    </div>
  );
}