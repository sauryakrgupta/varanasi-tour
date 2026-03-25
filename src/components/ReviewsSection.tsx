import { useState } from "react";
import { useReviews, useAddReview } from "@/services/api";
import { useToast } from "@/hooks/use-toast";

const ratingLabels: Record<number, string> = {
  1: 'Poor',
  2: 'Fair',
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent'
};

const ReviewsSection = () => {
  const { data: reviews = [], isLoading } = useReviews();
  const addReviewMutation = useAddReview();
  const { toast } = useToast();
  
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [tour, setTour] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || rating === 0) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    
    addReviewMutation.mutate(
      { reviewerName: name, country, rating, comment: message },
      {
        onSuccess: () => {
          toast({ title: "Thank you! 🙏", description: "Your review has been submitted successfully." });
          setName("");
          setCountry("");
          setEmail("");
          setTour("");
          setMessage("");
          setRating(5);
        },
        onError: () => {
          toast({ title: "Error", description: "Failed to submit review.", variant: "destructive" });
        }
      }
    );
  };

  return (
    <section id="reviews" className="code-section py-20 lg:py-32 bg-[#FDF4E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] rounded-full px-4 py-2 mb-6">
            <i className="fa-solid fa-star text-[#D97706]"></i>
            <span className="text-[#92400E] font-medium text-sm">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-6 font-[Outfit]">
            What Travelers <span className="text-[#D97706]">Say</span>
          </h2>
          <p className="text-lg text-[#6B7280]">
            Real experiences from travelers who explored Varanasi with me
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {isLoading ? (
            <div className="col-span-full text-center py-10">Loading reviews...</div>
          ) : reviews.length > 0 ? (
            reviews.map((review, i) => (
              <div key={review._id || i} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4">
                     {Array.from({ length: review.rating }).map((_, j) => (
                        <i key={j} className="fa-solid fa-star text-[#F59E0B]"></i>
                     ))}
                     {Array.from({ length: 5 - review.rating }).map((_, j) => (
                        <i key={j + review.rating} className="fa-solid fa-star text-gray-300"></i>
                     ))}
                  </div>
                  <p className="text-[#6B7280] mb-6 italic">"{review.comment}"</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D97706] to-[#F59E0B] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.reviewerName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F2937]">{review.reviewerName}</h4>
                    {review.country && <p className="text-sm text-[#6B7280]">📍 {review.country}</p>}
                  </div>
                </div>
              </div>
            ))
          ) : (
             <div className="col-span-full text-center text-gray-500 py-10">No reviews yet. Be the first to share your experience!</div>
          )}
        </div>

        {/* Submit Review Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] rounded-full mb-4">
              <i className="fa-solid fa-pen-to-square text-[#D97706] text-2xl"></i>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-3 font-[Outfit]">
              Share Your Experience
            </h3>
            <p className="text-[#6B7280]">
              Had an amazing time? We'd love to hear about it! Your review helps future travelers.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="review-name" className="block text-sm font-medium text-[#1F2937] mb-2">Your Name *</label>
                <input type="text" id="review-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="John Smith" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="review-country" className="block text-sm font-medium text-[#1F2937] mb-2">Country *</label>
                <input type="text" id="review-country" required value={country} onChange={(e) => setCountry(e.target.value)} placeholder="United States" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none transition-all duration-300" />
              </div>
            </div>

            <div>
              <label htmlFor="review-email" className="block text-sm font-medium text-[#1F2937] mb-2">Email Address *</label>
              <input type="email" id="review-email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none transition-all duration-300" />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">Your Rating *</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className={`text-3xl transition-colors focus:outline-none ${
                        star <= (hoveredRating || rating) ? "text-[#F59E0B]" : "text-gray-300"
                    }`}
                  >
                    <i className="fa-solid fa-star"></i>
                  </button>
                ))}
                <span className="ml-3 text-[#6B7280] text-sm">{ratingLabels[hoveredRating || rating] || 'Excellent'}</span>
              </div>
            </div>

            <div>
              <label htmlFor="review-tour" className="block text-sm font-medium text-[#1F2937] mb-2">Which Tour Did You Experience?</label>
              <select id="review-tour" value={tour} onChange={(e) => setTour(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none transition-all duration-300 bg-white">
                <option value="">Select a tour</option>
                <option value="Sunrise Boat Tour">Sunrise Boat Tour</option>
                <option value="Evening Ganga Aarti">Evening Ganga Aarti</option>
                <option value="Old City Walking Tour">Old City Walking Tour</option>
                <option value="Spiritual Temple Tour">Spiritual Temple Tour</option>
                <option value="Custom Private Tour">Custom Private Tour</option>
              </select>
            </div>

            <div>
              <label htmlFor="review-message" className="block text-sm font-medium text-[#1F2937] mb-2">Your Review *</label>
              <textarea id="review-message" required value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder="Tell us about your experience..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none transition-all duration-300 resize-none"></textarea>
            </div>

            <button type="submit" disabled={addReviewMutation.isPending} className="w-full py-4 bg-[#D97706] hover:bg-[#B45309] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg">
              <i className="fa-solid fa-paper-plane"></i>
              {addReviewMutation.isPending ? "Submitting..." : "Submit Review"}
            </button>

            <p className="text-center text-sm text-[#6B7280]">
              <i className="fa-solid fa-shield-halved text-[#6B7280] mr-1"></i>
              Your review will be displayed after moderation
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ReviewsSection;
