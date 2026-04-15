export type Business = {
  businessId: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  address: string;
  website?: string;
  imageUrl?: string;
  createdAt: string;
};

export type Review = {
  reviewId: string;
  businessId: string;
  userId: string; 
  username: string;
  rating: number;
  comment: string;
  createdAt: string;
};