import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import aartiImg from "@/assets/ganga-aarti.jpg";
import h2 from "@/assets/H-2.jpeg";
import h3 from "@/assets/H-3.jpg";
import h4 from "@/assets/H-4.jpg";
import h5 from "@/assets/H-5.jpg";
import h6 from "@/assets/H-6.jpeg";
import h7 from "@/assets/H-7.jpeg";
import h8 from "@/assets/H-8.jpeg";
import h9 from "@/assets/H-9.jpg";
import h10 from "@/assets/H-10.jpg";
import h11 from "@/assets/H-11.jpeg";
import h12 from "@/assets/H-12.jpeg";
import h13 from "@/assets/H-13.jpg";
import h14 from "@/assets/H-14.jpg";
import h15 from "@/assets/H-15.jpg";
import h16 from "@/assets/H-16.jpg";

const slides = [
  { src: aartiImg, alt: "Ganga Aarti Varanasi" },
  { src: h2, alt: "Varanasi Visuals 2" },
  { src: h3, alt: "Varanasi Visuals 3" },
  { src: h4, alt: "Varanasi Visuals 4" },
  { src: h5, alt: "Varanasi Visuals 5" },
  { src: h6, alt: "Varanasi Visuals 6" },
  { src: h7, alt: "Varanasi Visuals 7" },
  { src: h8, alt: "Varanasi Visuals 8" },
  { src: h9, alt: "Varanasi Visuals 9" },
  { src: h10, alt: "Varanasi Visuals 10" },
  { src: h11, alt: "Varanasi Visuals 11" },
  { src: h12, alt: "Varanasi Visuals 12" },
  { src: h13, alt: "Varanasi Visuals 13" },
  { src: h14, alt: "Varanasi Visuals 14" },
  { src: h15, alt: "Varanasi Visuals 15" },
  { src: h16, alt: "Varanasi Visuals 16" },
];

const ImageSlideshow = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 bg-black overflow-hidden ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Blurred Background */}
          <img
            src={slide.src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover blur-3xl opacity-50 scale-125 ${
              i === current ? "animate-kenburns" : ""
            }`}
          />
          {/* Main Contained Image */}
          <img
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-contain z-10 ${
              i === current ? "animate-kenburns" : ""
            }`}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/70" />

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-8" : "bg-primary-foreground/50"
              }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-40 glass-dark rounded-full p-2 text-primary-foreground/80 hover:text-primary-foreground hidden md:block">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-40 glass-dark rounded-full p-2 text-primary-foreground/80 hover:text-primary-foreground hidden md:block">
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default ImageSlideshow;
