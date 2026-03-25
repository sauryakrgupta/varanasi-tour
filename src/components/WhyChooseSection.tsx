import { motion } from "framer-motion";
import { Star, Users, Globe, Compass, MapPin, Shield } from "lucide-react";

const features = [
  { icon: Star, title: "1000+ Happy Travelers", desc: "Trusted by travelers from over 50 countries worldwide" },
  { icon: Globe, title: "Multilingual Guide", desc: "Fluent in English, Hindi, Spanish, French & German" },
  { icon: Compass, title: "Authentic Experience", desc: "Beyond tourist spots — discover the real Varanasi" },
  { icon: MapPin, title: "Hidden Gems Access", desc: "Secret spots only a true local knows about" },
  { icon: Shield, title: "Safe & Trusted", desc: "Verified, insured, and committed to your safety" },
  { icon: Users, title: "Personalized Tours", desc: "Every tour is tailored to your interests and pace" },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Your Journey, <span className="text-gradient-gold">Our Passion</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-8 hover-lift shadow-warm text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <f.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
