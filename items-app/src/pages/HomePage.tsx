
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-4">Coventry EcoConnect</h1>
      <p className="text-lg mb-6">
        Discover eco-conscious businesses and sustainable services in Coventry!
    </p>

    <div className="flex gap-4">
      <Link
        to="/directory"
        className="bg-green-700 text-white px-4 py-2 rounded"
        >
          Explore Directory
        </Link>

        <Link 
        to="/register"
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
        >
          Join Community
        </Link>
      </div>
    </section>
  );
}
