import { useParams, Link } from "react-router-dom";
import { mockItems } from "../data/mockItems";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import RatingStars from "../components/RatingStars";

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
      <img
        src={business.image}
        alt={business.name}
        className="w-full max-w-xl h-64 object-cover rounded mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{business.name}</h1>
      <p className="text-gray-600 mb-2">{business.category}</p>
      <p className="mb-4">{business.description}</p>
      <p className="mb-4">
        <strong>Address:</strong> {business.address}
      </p>

      {business.rating && (
        <div className="mb-6">
          <RatingStars rating={business.rating} />
        </div>
      )}

      <h2 className="text-2xl font-semibold mt-8 mb-4">Reviews</h2>
      <ReviewList reviews={business.reviews || []} />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Leave a Review</h2>
      <ReviewForm />

      <Link to="/directory" className="inline-block mt-6 text-blue-600 underline">
        Back to Directory
      </Link>
    </section>
  );
}