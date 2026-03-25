import Header from "@/components/Header";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Booking = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24" />
      <BookingSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Booking;
