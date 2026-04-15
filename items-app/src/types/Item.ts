export type Review = {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}
export type Item = {
  id: number
  name: string
  category: string;
  description: string
  image: string;
  address: string;
  rating?: number;
  reviews?: Review[];
  };