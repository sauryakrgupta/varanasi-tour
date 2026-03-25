import Header from "@/components/Header";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Reviews = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24" />
      <ReviewsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Reviews;
