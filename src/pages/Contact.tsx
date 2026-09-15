import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Contact Varanasi Spiritual Tour | Book Dev Diwali Boat & Ganga Aarti"
        description="Contact Varanasi Spiritual Tour on WhatsApp, phone or email to book Dev Diwali boat, Ganga Aarti, Laser Show and sunrise boat experiences."
        keywords="Contact Varanasi tour, Book Ganga Aarti, Dev Diwali boat WhatsApp, Varanasi boat booking contact, Visit Kashi contact"
      />
      <Header />
      <div className="pt-24" />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
