import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ghatsImg from "@/assets/varanasi-ghats-sunrise.jpg";
import aartiImg from "@/assets/ganga-aarti.jpg";
import oldCityImg from "@/assets/old-city.jpg";
import templeImg from "@/assets/temple.jpg";
import boatImg from "@/assets/boat-ride.jpg";
import kashiImg from "@/assets/kashi_vishwanath_temple.jpg";
import sarnathImg from "@/assets/sarnath.jpg";
import prayagrajImg from "@/assets/prayagraj.jpg";
import ayodhyaImg from "@/assets/ayodhya.jpg";
import bodhgayaImg from "@/assets/bodhgaya.jpeg";
import goldenImg from "@/assets/golden.webp";

const tours = [
  {
    title: "Sunrise Boat Tour",
    emoji: "🌅",
    description: "Witness the magical sunrise over the ghats from a traditional wooden boat on the Ganges.",
    image: ghatsImg,
  },
  {
    title: "Evening Ganga Aarti",
    emoji: "🪔",
    description: "Experience the mesmerizing fire ceremony at Dashashwamedh Ghat — a spiritual spectacle.",
    image: aartiImg,
  },
  {
    title: "Old City Walking Tour",
    emoji: "🚶",
    description: "Navigate the vibrant alleys, discover hidden temples, taste local street food, and meet artisans.",
    image: oldCityImg,
  },
  {
    title: "Spiritual & Temple Tour",
    emoji: "🛕",
    description: "Visit the most sacred temples including Kashi Vishwanath and learn their ancient stories.",
    image: templeImg,
  },
  {
    title: "Kashi Vishwanath Temple",
    emoji: "🕌",
    description: "A dedicated visit to the holiest Jyotirlinga shrine — Kashi Vishwanath — the heart of Varanasi's spiritual identity.",
    image: kashiImg,
  },
  {
    title: "Sarnath Tour",
    emoji: "☸️",
    description: "Explore Sarnath, the sacred Buddhist site where Lord Buddha gave his first sermon after attaining enlightenment.",
    image: sarnathImg,
  },
  {
    title: "Prayagraj Tour",
    emoji: "🌊",
    description: "Visit the Triveni Sangam — the holy confluence of the Ganga, Yamuna and Saraswati rivers — in the city of Prayagraj.",
    image: prayagrajImg,
  },
  {
    title: "Ayodhya Tour",
    emoji: "🏛️",
    description: "Journey to Ayodhya, the birthplace of Lord Ram, and witness the grand Ram Mandir and sacred ghats of the Saryu river.",
    image: ayodhyaImg,
  },
  {
    title: "Bodhgaya Tour",
    emoji: "🌳",
    description: "Travel to Bodhgaya, where Lord Buddha attained enlightenment under the Bodhi Tree, and visit the majestic Mahabodhi Temple.",
    image: bodhgayaImg,
  },
  {
    title: "Golden Triangle Tour",
    emoji: "🔺",
    description: "Discover India's iconic Golden Triangle — the grandeur of Delhi, the timeless Taj Mahal in Agra, and the pink-walled palaces of Jaipur.",
    image: goldenImg,
  },
  {
    title: "Customized Private Tour",
    emoji: "✨",
    description: "A fully personalized experience tailored to your interests, pace, and curiosities.",
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
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {tour.emoji} {tour.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {tour.description}
                </p>
                <div className="flex items-center justify-end">
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
