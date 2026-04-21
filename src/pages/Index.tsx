import { motion } from "framer-motion";
import { Shield, Check, Star, Gift, ChevronDown, Heart, Sparkles, Award, Zap, Crown } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import CountdownTimer, { OfferCountdown } from "@/components/CountdownTimer";
import SocialProofPopup from "@/components/SocialProofPopup";
import SocialProofSection from "@/components/SocialProofSection";

import heroImg from "@/assets/hero-creator.webp";
import deseoImg from "@/assets/deseo-creator.webp";
import productoImg from "@/assets/producto-creator.webp";
import galeria1 from "@/assets/galeria-1.webp";
import galeria2 from "@/assets/galeria-2.webp";
import galeria3 from "@/assets/galeria-3.webp";
import galeria4 from "@/assets/galeria-4.webp";
import galeria5 from "@/assets/galeria-5.webp";
import galeria6 from "@/assets/galeria-6.webp";
import galeriaNew1 from "@/assets/galeria-new-1.webp";
import galeriaNew2 from "@/assets/galeria-new-2.png";
import galeriaNew3 from "@/assets/galeria-new-3.webp";
import bonoPlantillas from "@/assets/bono-plantillas.jpg";
import bonoMantenimiento from "@/assets/bono-mantenimiento.jpg";
import bonoReparacion from "@/assets/bono-reparacion.jpg";
import bonoMallaPlastica from "@/assets/bono-malla-plastica.jpg";
import bonoFotografia from "@/assets/bono-fotografia.jpg";
import bonoRedes from "@/assets/bono-redes.jpg";
import bonoEmpaque from "@/assets/bono-empaque.jpg";
import bonoTelegram from "@/assets/bono-telegram.jpg";
import beneficiosImg from "@/assets/beneficios-modelo.webp";
import creatorImg from "@/assets/creator-isabella-new.webp";
import ctaFinalImg from "@/assets/cta-final-modelo.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── 1. HERO ─── */
const Hero = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-gradient-to-r from-rosa-dark/90 to-gold shadow-lg">
        <Sparkles className="w-4 h-4 text-background" />
        <p className="text-xs md:text-sm uppercase tracking-wider text-background font-body font-bold">
          Para mujeres que quieren crear algo propio desde casa
        </p>
        <Sparkles className="w-4 h-4 text-background" />
      </motion.div>

      <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="text-3xl md:text-5xl font-bold leading-tight mb-6 font-heading">
        Aprende a crear bolsos de cuentas hermosos desde cero… y conviértelos en una fuente de ingresos desde casa
      </motion.h1>

      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="text-lg text-muted-foreground mb-8 font-body">
        Curso online con +23 módulos donde aprenderás paso a paso (aunque empieces desde cero)
      </motion.p>

      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-foreground font-body">
        {["Sin experiencia previa", "Diseños modernos que sí se venden", "Aprende a tu ritmo", "Incluye guía para vender"].map((t) => (
          <motion.li key={t} variants={fadeUp} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-verde-dark" /> {t}
          </motion.li>
        ))}
      </motion.ul>

      <CTAButton />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-10">
        <img src={heroImg} alt="Isabella Toscano sosteniendo un bolso de cuentas artesanal" width={800} height={1024} className="rounded-2xl mx-auto shadow-lg max-w-md w-full" />
      </motion.div>
    </div>
  </section>
);

/* ─── 2. PROBLEMA ─── */
const Problema = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline text-center">
        Sabes que podrías hacer algo bonito con tus manos… pero no sabes por dónde empezar
      </motion.h2>
      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4 max-w-md mx-auto">
        {["Te confunden los materiales", "No sabes qué técnica usar", "Tienes miedo de que no te quede bien", "No sabes cómo vender"].map((t) => (
          <motion.li key={t} variants={fadeUp} className="flex items-start gap-3 text-muted-foreground text-lg font-body">
            <span className="text-rosa-dark mt-1">✕</span> {t}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

/* ─── 3. DESEO ─── */
const Deseo = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-shrink-0 md:w-1/2">
          <img src={deseoImg} alt="Mujer con bolso de cuentas morado" loading="lazy" width={800} height={800} className="rounded-2xl shadow-lg w-full max-w-sm mx-auto" />
        </motion.div>
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
            Imagina crear bolsos hermosos… y sentirte orgullosa de cada uno
          </motion.h2>
          <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4 max-w-md">
            {["Crear piezas únicas con tus manos", "Recibir cumplidos por tus creaciones", "Generar ingresos desde casa", "Tener algo propio y sentirte realizada"].map((t) => (
              <motion.li key={t} variants={fadeUp} className="flex items-center gap-3 text-lg font-body">
                <Heart className="w-5 h-5 text-rosa-dark flex-shrink-0" /> {t}
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-8">
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 4. MECANISMO ─── */
const Mecanismo = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        No necesitas talento… necesitas una guía paso a paso
      </motion.h2>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-lg text-muted-foreground max-w-xl mx-auto font-body">
        Este curso te lleva desde lo básico hasta diseños listos para vender, sin confusión. Cada módulo está pensado para que avances con confianza.
      </motion.p>
    </div>
  </section>
);

/* ─── 5. PRODUCTO ─── */
const Producto = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline text-center">
        Bolsos de Cuentas: Crea Bolsos de Alta Calidad desde Cero
      </motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="my-10">
        <img src={productoImg} alt="Creadora mostrando bolso de cuentas turquesa" loading="lazy" width={800} height={1000} className="rounded-2xl shadow-lg mx-auto w-full max-w-md" />
      </motion.div>

      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto">
        {["Técnicas paso a paso", "Diseños completos", "Instalación de cierres, asas y accesorios", "Acabados profesionales", "Mantenimiento y reparación"].map((t) => (
          <motion.li key={t} variants={fadeUp} className="flex items-center gap-3 font-body">
            <Sparkles className="w-5 h-5 text-gold flex-shrink-0" /> {t}
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-10">
        <CTAButton />
      </div>
    </div>
  </section>
);

/* ─── 6. PRUEBA VISUAL ─── */
const galeria = [
  { img: galeria1, copy: "Bolso elegante en tonos púrpura con acabados dorados, perfecto para un look sofisticado." },
  { img: galeria2, copy: "Diseño turquesa con detalles en cristal, moderno y versátil para cualquier ocasión." },
  { img: galeria3, copy: "Bolso transparente de cuentas cristalinas, un diseño delicado que parece de boutique." },
  { img: galeriaNew1, copy: "Bolso de cristal con detalles turquesa y cadena dorada, elegancia artesanal en cada detalle." },
  { img: galeriaNew2, copy: "Diseño tipo red con cuentas negras y rosa, un bolso único que combina estilo y creatividad." },
  { img: galeriaNew3, copy: "Clutch rojo vibrante con cierre dorado, una pieza llamativa perfecta para ocasiones especiales." },
  { img: galeria4, copy: "Bolso multicolor vibrante con patrón de flores, una pieza única que enamora a primera vista." },
  { img: galeria5, copy: "Elegante combinación de negro y cristal, perfecto para eventos y ocasiones especiales." },
  { img: galeria6, copy: "Bolso negro con asa de cristal y correa, sofisticado y listo para vender desde el primer día." },
];

const PruebaVisual = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        Esto es lo que puedes crear con este curso
      </motion.h2>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-muted-foreground mb-10 font-body">
        Estos son algunos de los diseños que aprenderás a crear paso a paso 👇
      </motion.p>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galeria.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className="card-elegant">
            <img src={item.img} alt={`Bolso de cuentas diseño ${i + 1}`} loading="lazy" width={800} height={800} className="rounded-xl w-full aspect-square object-cover mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed font-body">{item.copy}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10">
        <CTAButton />
      </div>
    </div>
  </section>
);

/* ─── 7. BONOS ─── */
const bonos = [
  "Plantillas y diagramas descargables",
  "Guía de mantenimiento",
  "Guía de reparación",
  "Guía Canva para crear tu marca",
  "Guía de fotografía de producto",
  "Guía de redes sociales",
  "Guía de empaque profesional",
];

const Bonos = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline text-center">
        Recibes estos bonos incluidos
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
          {bonos.map((b) => (
            <motion.li key={b} variants={fadeUp} className="flex items-center gap-3 font-body">
              <Gift className="w-5 h-5 text-gold flex-shrink-0" /> {b}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src={bonosImg} alt="Modelo con bolso de cuentas negro" loading="lazy" width={800} height={1200} className="rounded-2xl shadow-lg w-full max-w-sm mx-auto" />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── 8. BENEFICIOS ─── */
const Beneficios = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        Lo que vas a lograr
      </motion.h2>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {[
          { icon: Star, text: "Crear bolsos desde cero" },
          { icon: Award, text: "Tener diseños vendibles" },
          { icon: Sparkles, text: "Desarrollar una habilidad rentable" },
          { icon: Heart, text: "Sentirte segura creando" },
        ].map(({ icon: Icon, text }) => (
          <motion.div key={text} variants={fadeUp} className="card-elegant text-center">
            <Icon className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="font-semibold font-body text-sm">{text}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8">
        <CTAButton />
      </div>
    </div>
  </section>
);

/* ─── 9. CREADORA ─── */
const Creadora = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline text-center">
        Conoce a Isabella Tascón
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-shrink-0">
          <img src={creatorImg} alt="Isabella Tascón, creadora del curso" loading="lazy" width={800} height={800} className="rounded-2xl w-64 h-64 object-cover shadow-lg" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-muted-foreground font-body leading-relaxed space-y-4">
          <p>Soy Isabella Tascón, tengo 22 años y desde hace 5 años me dedico a crear bolsos con cuentas. Durante este tiempo, esta pasión se ha convertido en una parte muy importante de mi vida, permitiéndome aprender, perfeccionar técnicas y desarrollar diseños llenos de detalle, estilo y dedicación.</p>
          <p>Hoy quiero compartir contigo todo lo que he aprendido de una manera sencilla, cercana y práctica, para que tú también puedas aprender a crear bolsos hermosos, incluso si estás empezando desde cero. Creé este curso pensando en mujeres que desean desarrollar una nueva habilidad, disfrutar del proceso creativo y sentirse capaces de lograrlo con sus propias manos.</p>
          <p>Mi mayor propósito es acompañarte paso a paso, transmitirte confianza y demostrarte que, con la guía correcta, tú también puedes crear piezas únicas y especiales.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── 10. OFERTA ─── */
const Oferta = () => (
  <section id="oferta" className="section-padding bg-gradient-to-br from-rosa/20 via-background to-gold/20 relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-rosa/15 rounded-full blur-3xl" />
    </div>

    <div className="container-narrow text-center relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center justify-center gap-2 mb-3">
        <Crown className="w-6 h-6 text-gold" />
        <span className="text-sm uppercase tracking-widest text-gold font-body font-semibold">Oferta por tiempo limitado</span>
        <Crown className="w-6 h-6 text-gold" />
      </motion.div>

      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        🎉 Empieza hoy con un precio especial
      </motion.h2>

      <OfferCountdown />

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="max-w-md mx-auto relative"
      >
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-gold via-rosa-dark to-gold rounded-3xl blur-sm opacity-60 animate-pulse" />

        <div className="relative bg-background rounded-3xl p-8 shadow-2xl border border-gold/30">
          {/* Badge */}
          <motion.div
            className="absolute -top-4 left-1/2 -translate-x-1/2"
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="bg-rosa-dark text-background text-sm font-bold px-6 py-2 rounded-full font-body uppercase tracking-wider shadow-lg flex items-center gap-1">
              <Zap className="w-4 h-4" /> 50% OFF <Zap className="w-4 h-4" />
            </span>
          </motion.div>

          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-body mt-4">Acceso completo al curso + todos los bonos</p>

          {/* What's included mini-list */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["+23 módulos", "7 bonos", "Acceso de por vida"].map((t) => (
              <span key={t} className="bg-verde/20 text-verde-dark text-xs font-semibold px-3 py-1 rounded-full font-body">
                ✓ {t}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="mb-2">
            <span className="text-2xl text-muted-foreground line-through font-body">$59.99 USD</span>
          </div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.3 }}
            className="mb-1"
          >
            <span className="text-7xl font-bold font-heading bg-gradient-to-r from-gold via-[hsl(43,76%,55%)] to-gold bg-clip-text text-transparent">
              $29.99
            </span>
            <span className="text-2xl font-bold text-gold font-heading ml-1">USD</span>
          </motion.div>

          <motion.p
            className="text-verde-dark font-bold font-body mb-8 text-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ¡Ahorras $30.00! 🔥
          </motion.p>

          {/* CTA */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <CTAButton text="👉 QUIERO ACCESO AHORA" microcopy="Pago seguro + acceso inmediato" />
          </motion.div>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-5 mt-6 text-xs text-muted-foreground font-body">
            <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-verde-dark" /> Pago 100% seguro</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-verde-dark" /> Garantía 7 días</span>
          </div>

          {/* Urgency */}
          <p className="mt-4 text-xs text-rosa-dark font-semibold font-body animate-pulse">
            ⏰ Este precio puede subir en cualquier momento
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── 11. GARANTÍA ─── */
const Garantia = () => (
  <section className="section-padding bg-verde/20">
    <div className="container-narrow text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <Shield className="w-12 h-12 text-verde-dark mx-auto mb-4" />
        <h2 className="section-headline">Pruébalo sin riesgo</h2>
        <p className="text-lg text-muted-foreground font-body">
          Tienes 7 días para probarlo. Si no es para ti, te devolvemos tu dinero sin preguntas.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ─── 12. PARA QUIÉN ─── */
const ParaQuien = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        ¿Es para ti?
      </motion.h2>
      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3 max-w-md mx-auto text-left">
        {["Mujeres que quieren aprender desde cero", "Interesadas en manualidades y artesanías", "Quieren generar ingresos desde casa"].map((t) => (
          <motion.li key={t} variants={fadeUp} className="flex items-center gap-3 text-lg font-body">
            <Check className="w-5 h-5 text-verde-dark flex-shrink-0" /> {t}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

/* ─── 13. FAQ ─── */
const faqs = [
  { q: "¿Necesito experiencia?", a: "No, el curso está diseñado para principiantes completas." },
  { q: "¿Cuándo recibo acceso?", a: "Inmediatamente después de tu compra." },
  { q: "¿Los materiales son accesibles?", a: "Sí, son materiales fáciles de conseguir y económicos." },
];

const FAQ = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline text-center">
        Preguntas frecuentes
      </motion.h2>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4 max-w-xl mx-auto">
        {faqs.map(({ q, a }) => (
          <motion.details key={q} variants={fadeUp} className="card-elegant group cursor-pointer">
            <summary className="flex items-center justify-between font-semibold font-body list-none">
              {q}
              <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gold" />
            </summary>
            <p className="mt-3 text-muted-foreground font-body">{a}</p>
          </motion.details>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─── 14. CTA FINAL ─── */
const CTAFinal = () => (
  <section className="section-padding bg-gold/10">
    <div className="container-narrow">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
            Tu primer bolso puede ser el inicio de algo más grande
          </motion.h2>
          <CTAButton text="👉 EMPEZAR AHORA" microcopy="Acceso inmediato + garantía incluida" />
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:w-1/2 flex-shrink-0">
          <img src={ctaFinalImg} alt="Modelo con bolso de cuentas colorido" loading="lazy" width={800} height={1000} className="rounded-2xl shadow-lg w-full max-w-sm mx-auto" />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── PAGE ─── */
const Index = () => (
  <main className="overflow-hidden">
    <CountdownTimer />
    <SocialProofPopup />
    <Hero />
    <Problema />
    <Deseo />
    <Mecanismo />
    <Producto />
    <PruebaVisual />
    <SocialProofSection />
    <Bonos />
    <Beneficios />
    <Creadora />
    <Oferta />
    <Garantia />
    <ParaQuien />
    <FAQ />
    <CTAFinal />
  </main>
);

export default Index;
