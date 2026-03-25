import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_BASE_URL || '';

export interface Review {
  _id: string;
  reviewerName: string;
  country?: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const useReviews = () => {
  return useQuery<Review[]>({
    queryKey: ['reviews'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/api/reviews`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  });
};

export const useAddReview = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (newReview: { reviewerName: string, country: string, rating: number, comment: string }) => {
      const response = await fetch(`${API_URL}/api/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });
      if (!response.ok) {
        throw new Error('Failed to submit review');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
  });
};
