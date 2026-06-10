import { motion } from "framer-motion";
import { Shield, Check, Star, Gift, ChevronDown, Heart, Sparkles, Award, Zap, Crown, X } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import CountdownTimer, { OfferCountdown } from "@/components/CountdownTimer";
import SocialProofPopup from "@/components/SocialProofPopup";
import SocialProofSection from "@/components/SocialProofSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";

import heroImg from "@/assets/hero-pearl-bag.jpeg";
import deseoImg from "@/assets/deseo-purple-clutch.jpeg";
import mecanismoImg from "@/assets/mecanismo-orange-bag.jpeg";
import creatorImg from "@/assets/isabella-purple-model.png";
import ctaFinalImg from "@/assets/cta-final-modelo.webp";
import creaCorazon from "@/assets/crea-corazon.webp";
import creaRedondo from "@/assets/crea-redondo.webp";
import creaRosado from "@/assets/crea-rosado.webp";
import creaRojoLila from "@/assets/crea-rojo-lila.webp";
import creaTurquesa from "@/assets/crea-turquesa.webp";
import creaTransparente from "@/assets/crea-transparente.webp";
import creaLila from "@/assets/crea-lila.webp";
import creaBlanco from "@/assets/crea-blanco.webp";
import creaNegroRosa from "@/assets/crea-negro-rosa.webp";
import creaClutchRojo from "@/assets/crea-clutch-rojo.webp";
import bonoPlantillas from "@/assets/bono-plantillas.jpg";
import bonoMantenimiento from "@/assets/bono-mantenimiento.jpg";
import bonoReparacion from "@/assets/bono-reparacion.jpg";
import bonoMallaPlastica from "@/assets/bono-malla-plastica.jpg";
import bonoFotografia from "@/assets/bono-fotografia.jpg";
import bonoRedes from "@/assets/bono-redes.jpg";
import bonoEmpaque from "@/assets/bono-empaque.jpg";
import bonoTelegram from "@/assets/bono-telegram.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
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
        Aprende a Crear Hermosos Bolsos con Cuentas Desde Cero Aunque Nunca Hayas Hecho Manualidades Antes
      </motion.h1>

      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="text-lg text-muted-foreground mb-8 font-body">
        Descubre el método paso a paso que te enseña exactamente qué materiales usar, cómo ensamblar cada pieza y cómo lograr acabados hermosos sin sentirte perdida, confundida o gastando dinero en errores innecesarios.
      </motion.p>

      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        className="grid sm:grid-cols-2 gap-x-6 gap-y-2 max-w-xl mx-auto mb-8 text-foreground font-body text-left">
        {[
          "No necesitas experiencia previa",
          "Aprende desde casa y a tu ritmo",
          "Diseños modernos y elegantes",
          "Ideal para uso personal o venta",
          "Acceso inmediato después de comprar",
          "Soporte dentro de comunidad privada",
        ].map((t) => (
          <motion.li key={t} variants={fadeUp} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-verde-dark flex-shrink-0 mt-0.5" /> <span>{t}</span>
          </motion.li>
        ))}
      </motion.ul>

      <CTAButton text="👉 QUIERO APRENDER AHORA" microcopy="🔒 Pago seguro · ⚡ Acceso inmediato · 🛡 Garantía de 7 días" />

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
        ¿Por qué la mayoría nunca logra crear bolsos realmente bonitos?
      </motion.h2>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center text-muted-foreground mb-10 font-body text-lg">
        La realidad es que el problema no es la falta de talento.
      </motion.p>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {[
          "Aprenden con videos sueltos.",
          "Compran materiales equivocados.",
          "Nadie les explica el proceso completo.",
          "Saltan pasos importantes.",
          "Intentan copiar diseños sin entender la técnica.",
          "Se frustran y abandonan.",
        ].map((t) => (
          <motion.div key={t} variants={fadeUp} className="card-elegant flex items-start gap-3 font-body">
            <X className="w-5 h-5 text-rosa-dark flex-shrink-0 mt-0.5" />
            <span>{t}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-10 max-w-xl mx-auto space-y-2 font-body">
        <p className="text-lg"><strong>El problema no eres tú.</strong></p>
        <p className="text-muted-foreground">El problema es intentar aprender sin una guía clara paso a paso.</p>
        <p className="text-muted-foreground">Y justamente eso es lo que resuelve este curso.</p>
      </motion.div>

      <div className="mt-8 text-center">
        <CTAButton text="👉 QUIERO APRENDER EL MÉTODO" />
      </div>
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
            Imagina lo que podrías lograr dentro de unas semanas...
          </motion.h2>
          <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3 max-w-md">
            {[
              "Terminar tu primer bolso completamente hecho por ti.",
              "Recibir elogios de amigas y familiares.",
              "Crear regalos únicos y especiales.",
              "Sentirte orgullosa de tus propias creaciones.",
              "Tener una actividad creativa que realmente disfrutes.",
              "Incluso comenzar a vender tus bolsos si así lo deseas.",
            ].map((t) => (
              <motion.li key={t} variants={fadeUp} className="flex items-start gap-3 text-base font-body">
                <Sparkles className="w-5 h-5 text-rosa-dark flex-shrink-0 mt-0.5" /> <span>{t}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-6 font-body space-y-1">
            <p><strong>No necesitas ser experta.</strong></p>
            <p className="text-muted-foreground">Solo necesitas seguir un método que te guíe paso a paso.</p>
          </motion.div>
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
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="my-8">
        <img src={mecanismoImg} alt="Bolso de cuentas blanco con detalles dorados" loading="lazy" width={800} height={1000} className="rounded-2xl shadow-lg w-full max-w-sm mx-auto" />
      </motion.div>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-lg text-muted-foreground max-w-xl mx-auto font-body">
        Este curso te lleva desde lo básico hasta diseños listos para vender, sin confusión. Cada módulo está pensado para que avances con confianza.
      </motion.p>
    </div>
  </section>
);

/* ─── 5. PRODUCTO (removed by request) ─── */



/* ─── 6. PRUEBA VISUAL ─── */
const galeria = [
  { img: creaCorazon, copy: "Bolso corazón en verde menta con perlas, diseño romántico y delicado." },
  { img: creaRedondo, copy: "Bolso redondo en tonos chocolate con cadena dorada, sofisticado y llamativo." },
  { img: creaRosado, copy: "Bolso rosado en cristal facetado, femenino y brillante para ocasiones especiales." },
  { img: creaRojoLila, copy: "Diseño rojo con detalle lila que demuestra cómo combinar colores únicos." },
  { img: creaTurquesa, copy: "Bolso turquesa con detalle decorativo y accesorio a juego, moderno y creativo." },
  { img: creaTransparente, copy: "Bolso transparente de cuentas cristalinas con estructura firme y acabado limpio." },
  { img: creaLila, copy: "Bolso lila con herrajes dorados, elegante y con acabado visual de alta calidad." },
  { img: creaBlanco, copy: "Bolso blanco cristal con silueta clásica, perfecto para un look refinado." },
  { img: creaNegroRosa, copy: "Diseño bicolor negro y rosa con interior crema, versátil y con estilo." },
  { img: creaClutchRojo, copy: "Clutch rojo brillante con cadena metálica y acabado elegante, ideal para ocasiones especiales." },
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
  { text: "Plantillas y diagramas descargables", img: bonoPlantillas },
  { text: "Guía de mantenimiento", img: bonoMantenimiento },
  { text: "Guía de reparación", img: bonoReparacion },
  { text: "Guía para aprender a hacer bolsos con malla plástica (Plastic Canvas)", img: bonoMallaPlastica },
  { text: "Guía de fotografía de producto", img: bonoFotografia },
  { text: "Guía de redes sociales", img: bonoRedes },
  { text: "Guía de empaque profesional", img: bonoEmpaque },
  { text: "Grupo privado de Telegram con la maestra", img: bonoTelegram },
];

const Bonos = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline text-center">
        Recibes estos bonos incluidos
      </motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {bonos.map((b) => (
          <motion.div key={b.text} variants={fadeUp} className="card-elegant flex flex-col">
            <img src={b.img} alt={b.text} loading="lazy" width={512} height={512} className="rounded-xl w-full aspect-square object-cover mb-4" />
            <div className="flex items-start gap-3 font-body">
              <Gift className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <span>{b.text}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <CTAButton />
      </div>
    </div>
  </section>
);

/* ─── 8. BENEFICIOS ─── */
const Beneficios = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        Esto es lo que podrás conseguir cuando completes el curso
      </motion.h2>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {[
          { icon: Star, text: "Crear bolsos hermosos para ti." },
          { icon: Gift, text: "Diseñar regalos únicos para familiares y amigas." },
          { icon: Award, text: "Desarrollar una habilidad artesanal real." },
          { icon: Sparkles, text: "Ahorrar dinero creando tus propios diseños." },
          { icon: Heart, text: "Tener una actividad relajante y creativa." },
          { icon: Crown, text: "Crear productos que podrías vender." },
          { icon: Check, text: "Sentirte orgullosa de algo hecho por tus propias manos." },
          { icon: Zap, text: "Aprender una habilidad que conservarás para siempre." },
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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-shrink-0 text-center">
          <div className="mb-3 font-body">
            <p className="font-bold text-gold">+5 años creando bolsos con cuentas</p>
            <p className="text-sm text-muted-foreground">Acompañando mujeres a aprender desde cero</p>
          </div>
          <img src={creatorImg} alt="Isabella Tascón, creadora del curso" loading="lazy" width={800} height={1422} className="rounded-2xl w-64 h-auto object-contain shadow-lg bg-secondary mx-auto" />
          <p className="mt-3 italic text-sm text-muted-foreground font-body max-w-xs mx-auto">
            "No necesitas talento especial. Solo necesitas una guía clara y comenzar."
          </p>
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

/* ─── TODO LO QUE RECIBES ─── */
const TodoLoQueRecibes = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        Todo lo que recibirás hoy
      </motion.h2>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-muted-foreground mb-10 font-body text-lg">
        Acceso inmediato a todo este contenido.
      </motion.p>

      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto text-left font-body">
        {[
          "Curso Completo Bolsos con Cuentas",
          "Más de 23 lecciones paso a paso",
          "PDF complementario",
          "Videos de práctica",
          "Diagramas descargables",
          "Guía de mantenimiento",
          "Guía de reparación",
          "Guía de bolsos con malla plástica",
          "Guía de fotografía de producto",
          "Guía de redes sociales",
          "Guía de empaque profesional",
          "Grupo privado de Telegram",
        ].map((t) => (
          <motion.li key={t} variants={fadeUp} className="card-elegant flex items-start gap-3">
            <Check className="w-5 h-5 text-verde-dark flex-shrink-0 mt-0.5" /> <span>{t}</span>
          </motion.li>
        ))}
      </motion.ul>


      <div className="mt-10">
        <CTAButton />
      </div>
    </div>
  </section>
);

/* ─── 10. OFERTA ─── */
const Oferta = () => (
  <section id="oferta" className="section-padding bg-gradient-to-br from-rosa/20 via-background to-gold/20 relative overflow-hidden">
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

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-md mx-auto relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-gold via-rosa-dark to-gold rounded-3xl blur-sm opacity-60 animate-pulse" />

        <div className="relative bg-background rounded-3xl p-8 shadow-2xl border border-gold/30">
          <motion.div className="absolute -top-4 left-1/2 -translate-x-1/2" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <span className="bg-rosa-dark text-background text-sm font-bold px-6 py-2 rounded-full font-body uppercase tracking-wider shadow-lg flex items-center gap-1">
              <Zap className="w-4 h-4" /> OFERTA <Zap className="w-4 h-4" />
            </span>
          </motion.div>

          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-body mt-4">Valor total del contenido</p>

          <div className="space-y-2 mb-6 text-left font-body max-w-xs mx-auto">
            <div className="flex justify-between"><span>Curso Completo</span><span className="font-semibold">$79 USD</span></div>
            <div className="flex justify-between"><span>Bonos Incluidos</span><span className="font-semibold">$118 USD</span></div>
            <div className="flex justify-between border-t border-border pt-2 text-lg"><span className="font-bold">Valor Total</span><span className="font-bold line-through text-muted-foreground">$197 USD</span></div>
          </div>

          <p className="text-sm uppercase tracking-widest text-rosa-dark font-body font-bold mb-1">Hoy:</p>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.3 }}
            className="mb-2"
          >
            <span className="text-7xl font-bold font-heading bg-gradient-to-r from-gold via-[hsl(43,76%,55%)] to-gold bg-clip-text text-transparent">
              $19
            </span>
            <span className="text-2xl font-bold text-gold font-heading ml-1">USD</span>
          </motion.div>

          <ul className="text-sm text-muted-foreground font-body mb-6 space-y-1">
            <li>✓ Pago único</li>
            <li>✓ Sin mensualidades</li>
            <li>✓ Sin pagos ocultos</li>
            <li>✓ Acceso inmediato</li>
          </ul>

          <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ repeat: Infinity, duration: 2.5 }}>
            <CTAButton text="👉 QUIERO ACCEDER AHORA" microcopy="🔒 Compra protegida por Hotmart" />
          </motion.div>

          <div className="flex items-center justify-center gap-5 mt-6 text-xs text-muted-foreground font-body">
            <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-verde-dark" /> Pago 100% seguro</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-verde-dark" /> Garantía 7 días</span>
          </div>

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

/* ─── 12. PARA QUIÉN ES ─── */
const ParaQuien = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline text-center">
        Este curso es para ti si...
      </motion.h2>
      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3 max-w-md mx-auto text-left mb-12">
        {[
          "Quieres aprender desde cero.",
          "Te gustan las manualidades.",
          "Buscas una actividad creativa.",
          "Te gustaría crear algo propio.",
          "Quieres desarrollar una nueva habilidad.",
          "Te interesa vender tus creaciones en el futuro.",
          "Quieres aprender a tu ritmo.",
        ].map((t) => (
          <motion.li key={t} variants={fadeUp} className="flex items-start gap-3 text-base font-body">
            <Check className="w-5 h-5 text-verde-dark flex-shrink-0 mt-0.5" /> <span>{t}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-xl md:text-2xl font-bold text-center font-heading mb-6">
        Este curso NO es para ti si...
      </motion.h3>
      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3 max-w-md mx-auto text-left">
        {[
          "No te gusta practicar.",
          "Buscas resultados sin aplicar lo aprendido.",
          "No tienes interés en las manualidades.",
        ].map((t) => (
          <motion.li key={t} variants={fadeUp} className="flex items-start gap-3 text-base font-body">
            <X className="w-5 h-5 text-rosa-dark flex-shrink-0 mt-0.5" /> <span>{t}</span>
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

/* ─── DECISIÓN FINAL ─── */
const DecisionFinal = () => (
  <section className="section-padding bg-gradient-to-br from-rosa/10 via-background to-gold/10">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        Dentro de unos días podrías seguir viendo tutoriales gratuitos sin avanzar...
      </motion.h2>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-lg text-muted-foreground mb-4 font-body max-w-2xl mx-auto">
        O podrías estar terminando tu primer bolso con una guía clara paso a paso.
      </motion.p>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-base mb-8 font-body max-w-xl mx-auto">
        La diferencia entre ambas opciones es la decisión que tomes hoy.
      </motion.p>
      <CTAButton text="👉 QUIERO EMPEZAR HOY" />
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
  <main className="overflow-hidden pb-20 md:pb-0">
    <CountdownTimer />
    <SocialProofPopup />
    <Hero />
    <Problema />
    <Deseo />
    <Mecanismo />
    
    <PruebaVisual />
    <SocialProofSection />
    <Bonos />
    <Beneficios />
    <Creadora />
    <TodoLoQueRecibes />
    <Oferta />
    <Garantia />
    <ParaQuien />
    <FAQ />
    <DecisionFinal />
    <CTAFinal />
    <StickyMobileCTA />
  </main>
);

export default Index;
