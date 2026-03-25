import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ghatsImg from "@/assets/varanasi-ghats-sunrise.jpg";
import aartiImg from "@/assets/ganga-aarti.jpg";
import oldCityImg from "@/assets/old-city.jpg";
import templeImg from "@/assets/temple.jpg";
import boatImg from "@/assets/boat-ride.jpg";

const tours = [
  {
    title: "Sunrise Boat Tour",
    emoji: "🌅",
    description: "Witness the magical sunrise over the ghats from a traditional wooden boat on the Ganges.",
    duration: "2-3 hours",
    price: "From ₹1,500",
    image: ghatsImg,
  },
  {
    title: "Evening Ganga Aarti",
    emoji: "🪔",
    description: "Experience the mesmerizing fire ceremony at Dashashwamedh Ghat — a spiritual spectacle.",
    duration: "2 hours",
    price: "From ₹1,200",
    image: aartiImg,
  },
  {
    title: "Old City Walking Tour",
    emoji: "🚶",
    description: "Navigate the vibrant alleys, discover hidden temples, taste local street food, and meet artisans.",
    duration: "3-4 hours",
    price: "From ₹1,800",
    image: oldCityImg,
  },
  {
    title: "Spiritual & Temple Tour",
    emoji: "🛕",
    description: "Visit the most sacred temples including Kashi Vishwanath and learn their ancient stories.",
    duration: "4-5 hours",
    price: "From ₹2,000",
    image: templeImg,
  },
  {
    title: "Customized Private Tour",
    emoji: "✨",
    description: "A fully personalized experience tailored to your interests, pace, and curiosities.",
    duration: "Flexible",
    price: "Custom pricing",
    image: boatImg,
  },
];

const ToursSection = () => {
  return (
    <section id="tours" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Experiences</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Unforgettable <span className="text-gradient-gold">Tours</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Choose from curated experiences or create your own adventure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-background rounded-2xl overflow-hidden shadow-warm hover-lift"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1">
                  <Clock size={14} className="text-primary" />
                  {tour.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {tour.emoji} {tour.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {tour.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{tour.price}</span>
                  <Link
                    to="/booking"
                    className="flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                  >
                    Book Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
