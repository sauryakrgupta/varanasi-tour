import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pb-16 md:pb-24 pt-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            ⭐ Top Rated Guide in Varanasi
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gradient-gold">Varanasi Spiritual Tour</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">Sunrise Boat Ride | Ganga Arti &amp; Temple Tours...</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Welcome to Varanasi Spiritual Tour, your trusted local guide service for authentic spiritual
            experiences in Varanasi. Join sunrise boat rides, Ganga Aarti tours, temple visits,
            and cultural walks led by experienced local guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-warm"
            >
              Book an Experience
            </Link>
            <Link
              to="/tours"
              className="border-2 border-foreground/20 text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:border-primary hover:text-primary transition-all"
            >
              View Experiences
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
