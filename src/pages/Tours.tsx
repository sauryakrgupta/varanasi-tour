import Header from "@/components/Header";
import ToursSection from "@/components/ToursSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Tours = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24" />
      <ToursSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Tours;
