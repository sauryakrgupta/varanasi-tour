import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24" />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
