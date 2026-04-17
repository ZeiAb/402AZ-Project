type Review = {
  businessId: number;
  reviewId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

type Props = {
  reviews: Review[];
};

export default function ReviewList({ reviews }: Props) {
  if (reviews.length === 0) {
    return <p className="text-gray-600">No reviews yet.</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.reviewId} className="border rounded p-4 bg-white">
          <h3 className="font-semibold">{review.userName}</h3>
          <p className="text-sm text-gray-600">Rating: {review.rating}/5</p>
          <p className="mt-2">{review.comment}</p>
          <p className="text-xs text-gray-500 mt-2">{review.createdAt}</p>
        </div>
      ))}
    </div>
  );
}