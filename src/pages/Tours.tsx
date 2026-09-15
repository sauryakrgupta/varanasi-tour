import Header from "@/components/Header";
import ToursSection from "@/components/ToursSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";

const Tours = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Varanasi Tours | Dev Diwali Boat Booking, Ganga Aarti & Sunrise Boat Ride"
        description="Explore Varanasi tours: Dev Diwali boat booking with Ganga Aarti, Laser Show and Fire Show, sunrise boat ride, Kashi Vishwanath Temple, Sarnath, Ayodhya and private tours."
        keywords="Dev Diwali Boat Booking, Ganga Aarti Varanasi, Laser Show Fire Show, Sunrise Boat Tour, Kashi Vishwanath Temple Tour, Sarnath Tour, Ayodhya Tour, Varanasi boat ride"
      />
      <Header />
      <div className="pt-24" />
      <ToursSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Tours;
