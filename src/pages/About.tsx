import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";

const About = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="About Varanasi Spiritual Tour | Local Guide for Ganga Aarti & Boat Tours"
        description="Meet your trusted Varanasi local guide for Dev Diwali boat bookings, Ganga Aarti, sunrise boat rides, Kashi Vishwanath Temple visits and authentic spiritual tours."
        keywords="Varanasi local guide, Visit Kashi, Dev Diwali boat operator, Ganga Aarti tour guide, Varanasi Spiritual Tour, Kashi boat ride"
      />
      <Header />
      <div className="pt-24" />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
