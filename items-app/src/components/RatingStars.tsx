type Props = {
  rating: number;
};

export default function RatingStars({ rating }: Props) {
  return (
    <div>
      {"⭐".repeat(Math.round(rating))}
    </div>
  );
}