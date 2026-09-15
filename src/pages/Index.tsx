import Header from "@/components/Header";
import ImageSlideshow from "@/components/ImageSlideshow";
import HeroSection from "@/components/HeroSection";
import ToursSection from "@/components/ToursSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ReviewsSection from "@/components/ReviewsSection";
import MemorySlideshow from "@/components/MemorySlideshow";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        // title="Dev Diwali Boat Booking Varanasi | Ganga Aarti, Laser Show & Spiritual Tours"
        title="Varanasi Spiritual Tours"
        description="Book Dev Diwali boat in Varanasi with Ganga Aarti, Laser Show and Fire Show from the Ganga. Also sunrise boat rides, Kashi Vishwanath Temple tours and local spiritual experiences."
        keywords="Dev Diwali Boat Booking, Dev Diwali Varanasi, Ganga Aarti Laser Show, Fire Show Ganga, Sunrise Boat Tour Varanasi, Kashi Vishwanath Temple, Varanasi Spiritual Tour"
      />
      <Header />
      <ImageSlideshow />
      <HeroSection />
      <ToursSection />
      <WhyChooseSection />
      <ReviewsSection />
      <MemorySlideshow />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
