import { useParams, Link } from "react-router-dom";
import { mockItems } from "../data/mockItems";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import RatingStars from "../components/RatingStars";
import { getLoggedInUser } from "../services/auth";
import { getBusinessById, getReviewsByBusiness, createReview,} from "../services/api";
import { useEffect, useState } from "react";

type Review = {
  businessId: number;
  reviewid: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

type Business = {
  id: Number;
  name: string;
  category: string;
  description: string;
  address: string;
  image: string;
  rating?: number;
};

export default function Businesspage() {
  const { id } = useParams();
  const [business, setBusiness] = useState<Business | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    async function loadPage() {
      try {
        if (!id) return;

        const [businessData, reviewData, user] = await Promise.all([
          getBusinessById(id),
          getReviewsByBusiness(id),
          getLoggedInUser(),
        ]);

        setBusiness(businessData);
        setReviews(reviewData);
        setCurrentUser(user);
      } catch (error) {
        console.error("Failed to load business page", error);
      } finally {
        setLoading(false);
      }
    }

    loadPage();
  }, [id]);

  async function handleAddReview(newReview: {
    userName?: string;
    rating: number;
    comment: string;
    createdAt?: string;
  }) {
    if (!id) return;

    const created = await createReview(id, newReview);
    setReviews((prev) => [created, ...prev]);
  }

  if (loading) {
    return <section className="p-8">Loading business...</section>;
  }

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
    <section className="p-8 max-w-5xl mx-auto">
      <img
        src={business.image}
        alt={business.name}
        className="w-full max-w-3xl h-72 object-cover rounded-xl mb-6"
      />

      <h1 className="text-4xl font-bold mb-2">{business.name}</h1>
      <p className="text-gray-600 mb-3">{business.category}</p>
      <p className="mb-4 text-lg">{business.description}</p>
      <p className="mb-4">
        <strong>Address:</strong> {business.address}
      </p>

      {business.rating && (
        <div className="mb-6">
          <RatingStars rating={business.rating} />
        </div>
      )}

      <h2 className="text-2xl font-semibold mt-8 mb-4">Reviews</h2>
      <ReviewList reviews={reviews} />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Leave a Review</h2>
      {currentUser ? (
        <ReviewForm onAddReview={handleAddReview} />
      ) : (
        <p className="text-red-600">You must be logged in to leave a review.</p>
      )}

      <Link
        to="/directory"
        className="inline-block mt-6 text-blue-600 underline"
      >
        Back to Directory
      </Link>
    </section>
  );
}