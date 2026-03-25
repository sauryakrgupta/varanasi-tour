import Header from "@/components/Header";
import ImageSlideshow from "@/components/ImageSlideshow";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ReviewsSection from "@/components/ReviewsSection";
import MemorySlideshow from "@/components/MemorySlideshow";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ImageSlideshow />
      <HeroSection />
      <WhyChooseSection />
      <ReviewsSection />
      <MemorySlideshow />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
