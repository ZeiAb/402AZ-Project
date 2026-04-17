import { useState } from "react";

type Props = {
  onAddReview: (newReview: {
    userName?: string;
    rating: number;
    comment: string;
    createdAt?: string;
  }) => void;
};

export default function ReviewForm({ onAddReview }: Props) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAddReview({
      userName: name,
      rating,
      comment,
      createdAt: new Date().toISOString().split("T")[0],
    });

    setName("");
    setComment("");
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full"
      />

      <textarea
        placeholder="Your review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border p-2 w-full"
      />

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border p-2 w-full"
      >
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>
            {r} Star
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-green-600 text-white px-5 py-3 rounded border border-black"
      >
        Submit Review
      </button>
    </form>
  );
}