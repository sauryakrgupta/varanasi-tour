import Header from "@/components/Header";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";

const Booking = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Book Dev Diwali Boat | Ganga Aarti Laser Show & Varanasi Tours"
        description="Book Dev Diwali boat in Varanasi with Ganga Aarti, Laser Show and Fire Show. Reserve sunrise boat rides, temple tours and private Varanasi experiences."
        keywords="Book Dev Diwali Boat, Dev Diwali boat booking Varanasi, Ganga Aarti booking, Laser Show boat, Varanasi tour booking, sunrise boat ride booking"
      />
      <Header />
      <div className="pt-24" />
      <BookingSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Booking;
