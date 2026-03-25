import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAddReview } from "@/services/api";

const ReviewFormSection = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [review, setReview] = useState("");

  const addReviewMutation = useAddReview();
  const submitting = addReviewMutation.isPending;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !review.trim() || rating === 0) {
      toast({ title: "Please fill all fields and select a rating", variant: "destructive" });
      return;
    }
    
    addReviewMutation.mutate(
      { reviewerName: name, country, rating, comment: review },
      {
        onSuccess: () => {
          toast({ title: "Thank you! 🙏", description: "Your review has been submitted successfully." });
          setName("");
          setCountry("");
          setReview("");
          setRating(0);
        },
        onError: () => {
          toast({ title: "Error", description: "Failed to submit review. Please try again later.", variant: "destructive" });
        }
      }
    );
  };

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Share Your Experience</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Leave a <span className="text-gradient-gold">Review</span>
          </h2>
          <p className="text-muted-foreground mt-4">Traveled with us? We'd love to hear about your experience!</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-background rounded-2xl p-6 md:p-8 shadow-warm space-y-6"
        >
          {/* Star Rating */}
          <div className="text-center">
            <p className="text-sm font-medium mb-3">How was your experience?</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={32}
                    className={`transition-colors ${
                      star <= (hoveredRating || rating)
                        ? "fill-gold text-gold"
                        : "text-muted-foreground/30"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Your Name *</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Mitchell"
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Country</label>
              <Input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. United States"
                maxLength={100}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Your Review *</label>
            <Textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Tell us about your experience in Varanasi..."
              rows={4}
              maxLength={1000}
            />
          </div>

          <Button type="submit" disabled={submitting} className="w-full gap-2" size="lg">
            <Send size={18} />
            {submitting ? "Submitting..." : "Submit Review"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ReviewFormSection;
