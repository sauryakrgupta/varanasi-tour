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

type Tour = {
  title: string;
  emoji: string;
  description: string;
  image: string;
  featured?: boolean;
  subtitle?: string;
  trustTitle?: string;
  trustText?: string;
  includesTitle?: string;
  includes?: string[];
};

const tours: Tour[] = [
  {
    title: "Dev Diwali Boat Booking | Ganga Aarti, Laser",
    emoji: "🎆",
    subtitle: "Ganga Aarti + Laser Show + Fire Show",
    description:
      "Witness the spectacular Dev Diwali celebration from the Ganga — lakhs of diyas on 84 ghats, grand Ganga Aarti, mesmerising Laser Show, and thrilling Fire Show all from your boat.",
    image: aartiImg,
    featured: true,
    trustTitle: "Varanasi's #1 Dev Diwali Boat Operator",
    trustText:
      "Visit Kashi has successfully completed 1500+ Dev Diwali boat bookings since 2017. 4.9 stars rated on Google. Trusted by thousands of families, corporates, and travel groups.",
    includesTitle: "What's Included in Dev Diwali Boat Package",
    includes: [
      "Life Jackets for all passengers (mandatory safety)",
      "Licensed & experienced boatman",
      "Snacks Box & Mineral Water",
      "Grand Welcome on boarding",
      "Dev Diwali Ganga Aarti viewing from the river",
      "Laser Show & Fire Show viewing",
      "84-Ghat panoramic view (all ghats illuminated with diyas)",
      "Hindi / English assistance on board",
    ],
  },
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
              transition={{ delay: Math.min(i * 0.08, 0.4) }}
              className={`group bg-background rounded-2xl overflow-hidden shadow-warm hover-lift ${
                tour.featured ? "md:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div className={tour.featured ? "grid lg:grid-cols-2" : ""}>
                <div className={`relative overflow-hidden ${tour.featured ? "h-64 lg:h-full min-h-[16rem]" : "h-52"}`}>
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`${tour.featured ? "text-2xl" : "text-xl"} font-bold mb-2`}>
                    {tour.emoji} {tour.title}
                  </h3>
                  {tour.subtitle && (
                    <p className="text-primary font-semibold mb-2">{tour.subtitle}</p>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {tour.description}
                  </p>
                  {tour.trustTitle && (
                    <div className="rounded-xl bg-primary/5 border border-primary/15 p-4 mb-4">
                      <p className="font-semibold text-sm mb-1">{tour.trustTitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{tour.trustText}</p>
                    </div>
                  )}
                  {tour.includes && (
                    <div className="mb-4">
                      <p className="font-semibold text-sm mb-3">{tour.includesTitle}</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {tour.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex items-center justify-end">
                    <Link
                      to="/booking"
                      className="flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                    >
                      Book Now <ArrowRight size={16} />
                    </Link>
                  </div>
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
