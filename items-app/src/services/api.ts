import axios from "axios";
import { getIdToken } from "./auth";

const api = axios.create({
  baseURL: "https://wypjvdyv89.execute-api.us-east-1.amazonaws.com",
});

export async function getBusinesses() {
  const response = await api.get("/businesses");
  return response.data;
}

export async function getBusinessById(id: string) {
  const response = await api.get(`/businesses/${id}`);
  return response.data;
}

export async function getReviewsByBusiness(id: string) {
  const response = await api.get(`/businesses/${id}/reviews`);
  return response.data;
}

export async function createReview(
  id: string,
  review: {
    userName?: string;
    rating: number;
    comment: string;
    createdAt?: string;
  }
) {
  const token = await getIdToken();

  const response = await api.post(`/businesses/${id}/reviews`, review, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}