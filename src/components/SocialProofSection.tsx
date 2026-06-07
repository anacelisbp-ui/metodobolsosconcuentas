import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import CTAButton from "./CTAButton";

import sp1 from "@/assets/social-proof-1.webp";
import sp2 from "@/assets/social-proof-2.webp";
import sp3 from "@/assets/social-proof-3.webp";
import sp4 from "@/assets/social-proof-4.webp";
import sp5 from "@/assets/social-proof-5.webp";
import sp6 from "@/assets/social-proof-6.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const testimonials = [sp1, sp2, sp3, sp4, sp5, sp6];

const SocialProofSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center justify-center gap-2 mb-4">
          <MessageCircle className="w-6 h-6 text-verde-dark" />
          <span className="text-sm uppercase tracking-widest text-muted-foreground font-body">Resultados reales de alumnas</span>
        </motion.div>

        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
          Mira lo que nuestras alumnas están creando 💬
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-muted-foreground mb-10 font-body">
          Capturas reales del grupo de alumnas donde comparten sus creaciones y avances
        </motion.p>

        <div className="relative max-w-lg mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Testimonio de alumna ${i + 1}`}
                  className="w-full flex-shrink-0 object-cover"
                  loading="eager"
                />
              ))}
            </div>
          </div>

          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-background transition-colors">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-background transition-colors">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all ${i === current ? "bg-gold w-6" : "bg-muted-foreground/30 w-2.5"}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
