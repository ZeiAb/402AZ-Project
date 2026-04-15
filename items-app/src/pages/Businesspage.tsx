import { useParams } from "react-router-dom";
import { mockItems } from "../data/mockItems";

export default function Businesspage() {
  const { id } = useParams();
  const business = mockItems.find((item) => item.id === id);

  if (!business) {
    return (
      <section className="p-8">
        <h1 className="text-2xl font-bold mb-4">Business not found</h1>
        <Link to="/directory" className="text-blue-600 underline">
          Back to Directory
        </Link>
      </section>
  );
}

return (
  <section className="p-8">
    <Image
    src={business.image}
    alt={business.name}
    className="w-full max-h-96 object-cover rounded mb-6"
  />

  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-4">
    {business.category}
  </span>

  <h1 className="text-3xl font-bold">{business.nam}</h1>
  <p className="mb-4">{business.fulldescription}</p>
  <p className="mb-2">
    <strong>Address:</strong> {business.address}
  </p>

  <Link to="/directory" className="text-blue-600 underline">
    Back to Directory
      </Link>
    </section>
  );
}
