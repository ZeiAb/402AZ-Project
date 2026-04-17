import { useEffect, useMemo, useState } from "react";
import Businesscard from "../components/Businesscard";
import { getBusinesses } from "../services/api";

type Business = {
  id: number;
  name: string;
  category: string;
  description: string;
  address: string;
  image: string;
  rating?: number;
};

export default function Directory() {
  const [items, setItems] = useState<Business[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function loadBusinesses() {
      try {
        const data = await getBusinesses();
        console.log("Businesses from API:", data);
        setItems(data);
      } catch (error) {
        console.error("Failed to load businesses:", error);
      }
    }

    loadBusinesses();
  }, []);

  const categories = ["All", ...new Set(items.map((item) => item.category))];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, selectedCategory]);

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Business Directory</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search businesses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded px-4 py-2 w-full"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-4 py-2"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <p className="mb-4">{filteredItems.length} business(es) found</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Businesscard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}