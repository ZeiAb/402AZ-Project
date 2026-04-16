
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <main className="bg-[#f6fbf6] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Sustainable Living in Coventry
            </span>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Discover eco-conscious businesses in Coventry!
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              EcoConnect helps local residents find sustainable cafes, repair
              workshops, zero-waste stores, and other green businesses across
              Coventry.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/directory"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Directory
              </Link>

              <Link
                to="/register"
                className="border border-black bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Join Community
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-white rounded-xl p-4 shadow-sm border">
                <p className="text-2xl font-bold text-green-700">50+</p>
                <p className="text-sm text-gray-600">Eco businesses</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border">
                <p className="text-2xl font-bold text-green-700">100+</p>
                <p className="text-sm text-gray-600">Community reviews</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border">
                <p className="text-2xl font-bold text-green-700">5</p>
                <p className="text-sm text-gray-600">Key categories</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border p-6">
            <img
              src="/images/homepage.jpeg"
              alt="Eco-friendly business"
              className="w-full h-72 object-cover rounded-xl mb-6"
            />

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Find trusted local green services
            </h2>

            <p className="text-gray-600 mb-6">
              Browse detailed business profiles, read reviews, and support
              businesses making a positive environmental impact.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm">
                Cafes
              </span>
              <span className="bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm">
                Repair
              </span>
              <span className="bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm">
                Zero Waste
              </span>
              <span className="bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm">
                Groceries
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}