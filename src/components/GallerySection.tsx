import { motion } from "framer-motion";

import ghatsImg from "@/assets/varanasi-ghats-sunrise.jpg";
import aartiImg from "@/assets/ganga-aarti.jpg";
import boatImg from "@/assets/boat-ride.jpg";
import templeImg from "@/assets/temple.jpg";
import oldCityImg from "@/assets/old-city.jpg";
import guideImg from "@/assets/G-1.jpeg";

const images = [
  { src: ghatsImg, alt: "Ghats at Sunrise", span: "md:col-span-2 md:row-span-2" },
  { src: aartiImg, alt: "Ganga Aarti" },
  { src: templeImg, alt: "Ancient Temple" },
  { src: oldCityImg, alt: "Old City Streets", span: "md:col-span-2" },
  { src: boatImg, alt: "Boat on the Ganges" },
  { src: guideImg, alt: "Your Guide" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Gallery</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Moments from <span className="text-gradient-gold">Varanasi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-xl ${img.span || ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end">
                <p className="text-primary-foreground font-medium text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
