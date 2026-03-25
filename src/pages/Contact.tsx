import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24" />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
