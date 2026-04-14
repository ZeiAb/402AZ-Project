import type { Review } from "../types/Review";

type Props = {
  reviews: Review[];
};

export default function ReviewList({ reviews }: Props) {
  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border p-4 rounded">
          <h4 className="font-bold">{review.userName}</h4>
          <p>Rating: {review.rating}/5</p>
          <p>{review.comment}</p>
          <p className="text-sm text-gray-500">{review.createdAt}</p>
        </div>
      ))}
    </div>
  );
}