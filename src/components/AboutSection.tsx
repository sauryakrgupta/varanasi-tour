import { motion } from "framer-motion";
import { Users, Globe, Award, Calendar } from "lucide-react";
import guideImg from "@/assets/G-1.jpeg";

const stats = [
  { icon: Users, value: "1000+", label: "Happy Travelers" },
  { icon: Globe, value: "5", label: "Languages Spoken" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Calendar, value: "500+", label: "Tours Completed" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-warm-lg">
              <img src={guideImg} alt="Your Varanasi Guide" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-warm">
              <p className="text-2xl font-bold font-display">10+</p>
              <p className="text-sm opacity-90">Years of Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Your Guide, Himanshu</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
              A Lifetime Dedicated to <span className="text-gradient-gold">Varanasi</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Born and raised on the banks of the Ganges, I've spent over a decade sharing the magic
              of Varanasi with travelers from around the world. Every narrow lane, every ancient temple,
              every sunrise over the ghats — I know this city like the back of my hand.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Fluent in English, Hindi, Spanish, French, and German, I ensure every guest feels at home
              while experiencing the authentic soul of India's spiritual capital.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-4 shadow-warm hover-lift">
                  <stat.icon className="text-primary mb-2" size={24} />
                  <p className="text-2xl font-bold font-display">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
