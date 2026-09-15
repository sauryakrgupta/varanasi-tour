import Header from "@/components/Header";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";

const Reviews = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Varanasi Tour Reviews | Dev Diwali Boat & Ganga Aarti Experiences"
        description="Read traveler reviews of Varanasi Spiritual Tour: Dev Diwali boat booking, Ganga Aarti, Laser Show, sunrise boat rides and temple tours in Kashi."
        keywords="Varanasi tour reviews, Dev Diwali boat reviews, Ganga Aarti reviews, Visit Kashi Google rating, Varanasi boat tour testimonials"
      />
      <Header />
      <div className="pt-24" />
      <ReviewsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Reviews;
