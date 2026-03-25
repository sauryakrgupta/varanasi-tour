import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import t1 from "@/assets/T-1.jpeg";
import t2 from "@/assets/T-2.jpeg";
import t3 from "@/assets/T-3.jpeg";
import t4 from "@/assets/T-4.jpeg";
import t5 from "@/assets/T-5.jpg";
import t6 from "@/assets/T-6.jpg";
import t7 from "@/assets/T-7.jpg";
import t8 from "@/assets/T-8.jpg";
import t9 from "@/assets/T-9.jpeg";
import t10 from "@/assets/T-10.jpeg";
import t11 from "@/assets/T-11.jpg";
import t12 from "@/assets/T-12.jpg";
import t13 from "@/assets/T-13.jpg";
import t14 from "@/assets/T-14.jpg";

const memories = [
  { src: t3, caption: "Moments with Travelers 1" },
  { src: t4, caption: "Moments with Travelers 2" },
  { src: t5, caption: "Moments with Travelers 3" },
  { src: t6, caption: "Moments with Travelers 4" },
  { src: t7, caption: "Moments with Travelers 5" },
  { src: t8, caption: "Moments with Travelers 6" },
  { src: t9, caption: "Moments with Travelers 7" },
  { src: t10, caption: "Moments with Travelers 8" },
  { src: t11, caption: "Moments with Travelers 9" },
  { src: t12, caption: "Moments with Travelers 10" },
  { src: t13, caption: "Moments with Travelers 11" },
  { src: t14, caption: "Moments with Travelers 12" },
  { src: t1, caption: "Moments with Travelers 13" },
  { src: t2, caption: "Moments with Travelers 14" },
];

const MemorySlideshow = () => {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % memories.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + memories.length) % memories.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Memories</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Moments with <span className="text-gradient-gold">Travelers</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-warm-lg">
          <div className="relative h-[400px] md:h-[500px]">
            {memories.map((m, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 bg-black overflow-hidden ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Blurred Background */}
                <img 
                  src={m.src} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-50 scale-125" 
                />
                {/* Main Contained Image */}
                <img 
                  src={m.src} 
                  alt={m.caption} 
                  className="absolute inset-0 w-full h-full object-contain z-10" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
                <p className="absolute bottom-6 left-6 text-white text-lg font-display font-semibold z-30 drop-shadow-md">
                  {m.caption}
                </p>
              </div>
            ))}
          </div>

          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-40 glass-dark rounded-full p-2 text-primary-foreground/80 hover:text-primary-foreground">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-40 glass-dark rounded-full p-2 text-primary-foreground/80 hover:text-primary-foreground">
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-6 right-6 flex gap-2 z-40">
            {memories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-primary-foreground/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemorySlideshow;
