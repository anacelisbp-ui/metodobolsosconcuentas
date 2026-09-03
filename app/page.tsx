import type { Metadata } from "next";
import Image from "next/image";

const CHECKOUT = "https://go.hotmart.com/G105098149D?ap=9ede";

export const metadata: Metadata = {
  title: "Método Bolsos con Cuentas | Tu primer bolso, paso a paso",
  description: "Aprende a crear bolsos con cuentas firmes y elegantes desde cero con el método visual de Isabella Tascón.",
};

const gallery = [
  ["crea-corazon-CdmtzL1n.webp", "Bolso corazón verde menta tejido con cuentas"],
  ["crea-redondo-DVWxBp-Y.webp", "Bolso redondo en cuentas color chocolate"],
  ["crea-rosado-vspnvey3.webp", "Bolso rosa brillante con asa de cuentas"],
  ["crea-turquesa-BAGPtBB7.webp", "Bolso turquesa de cuentas con asa corta"],
  ["crea-transparente-BlyEYYZG.webp", "Bolso transparente de cuentas cristalinas"],
  ["crea-clutch-rojo-C4W0GPxF.webp", "Clutch rojo de cuentas con cierre dorado"],
];

const bonuses = [
  ["01", "Plantillas", "Guías para construir tus modelos con una base clara."],
  ["02", "Mantenimiento", "Cuidados para conservar el brillo y la forma."],
  ["03", "Reparación", "Soluciones para corregir piezas y uniones."],
  ["04", "Malla plástica", "Una técnica adicional para ampliar tus posibilidades."],
  ["05", "Fotografía", "Claves para presentar mejor cada bolso terminado."],
  ["06", "Redes sociales", "Ideas para mostrar tus creaciones con claridad."],
  ["07", "Empaque", "Detalles que elevan la entrega de cada pieza."],
  ["08", "Telegram", "Acceso al bono de comunidad indicado en el programa."],
];

function CTA({ label = "Quiero crear mi primer bolso", dark = false }: { label?: string; dark?: boolean }) {
  return <a className={`cta ${dark ? "cta-light" : ""}`} href={CHECKOUT} target="_blank" rel="noreferrer">{label}<span aria-hidden="true">↗</span></a>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Método Bolsos con Cuentas, inicio"><span className="brand-mark" aria-hidden="true">✦</span><span>Método <strong>Bolsos con Cuentas</strong></span></a>
        <nav aria-label="Navegación principal"><a href="#metodo">El método</a><a href="#programa">Qué incluye</a><a href="#preguntas">Preguntas</a></nav>
        <a className="header-cta" href={CHECKOUT} target="_blank" rel="noreferrer">Inscribirme</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> Curso online para principiantes</p>
          <h1>Crea bolsos con cuentas que se vean <em>tan bien como los imaginaste.</em></h1>
          <p className="hero-lead">Aprende a elegir los materiales correctos, dominar la trama y la tensión, dar estructura y cuidar cada acabado con un método visual, claro y paso a paso.</p>
          <ul className="checks" aria-label="Beneficios principales"><li>Sin experiencia previa</li><li>10 modelos paso a paso</li><li>23+ lecciones en video</li><li>Acceso inmediato</li></ul>
          <div className="hero-actions"><CTA /></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-frame"><Image src="/assets/hero-pearl-bag-DZVQ83lF.jpeg" alt="Bolso de cuentas color perla sostenido por una mujer" width="736" height="981" fetchPriority="high" /></div>
          <div className="hero-note note-top"><span>01</span> De piezas sueltas<br /><strong>a una forma firme</strong></div>
          <div className="hero-note note-bottom"><span>✦</span> Acabado elegante<br /><strong>hecho por ti</strong></div>
        </div>
      </section>

      <div className="trust-strip" aria-label="Características de confianza">
        <p><strong>Guía visual</strong><span>Ve cada paso</span></p><p><strong>Principiantes</strong><span>Empieza desde cero</span></p><p><strong>8 bonos</strong><span>Para crear y presentar</span></p><p><strong>Compra protegida</strong><span>7 días de garantía</span></p>
      </div>

      <section className="problem section">
        <div className="section-heading left"><p className="eyebrow"><span></span> Si ya lo intentaste</p><h2>El problema no es tu creatividad. Es aprender sin entender la estructura.</h2></div>
        <div className="problem-grid">
          <div className="problem-image"><Image src="/assets/deseo-purple-clutch-BGiXPUSL.jpeg" alt="Mujer mostrando un clutch morado tejido con cuentas" width="736" height="981" loading="lazy" /><span className="vertical-label">Precisión · detalle · confianza</span></div>
          <div className="problem-copy">
            <p className="lead">Los tutoriales sueltos pueden enseñarte a unir cuentas, pero no siempre explican por qué el bolso se deforma, queda flojo o pierde elegancia.</p>
            <div className="pain-list"><p><span>01</span><strong>Materiales que no corresponden</strong>La cuenta, el hilo y los herrajes cambian por completo el resultado.</p><p><span>02</span><strong>Tensión irregular</strong>Un pequeño error repetido termina alterando toda la silueta.</p><p><span>03</span><strong>Acabados improvisados</strong>Sin refuerzo y cierre correctos, incluso un diseño bonito se ve incompleto.</p></div>
            <p className="callout">Por eso este programa no empieza por copiar un modelo: empieza por darte el criterio para construirlo bien.</p>
          </div>
        </div>
      </section>

      <section className="method section dark-section" id="metodo">
        <div className="section-heading"><p className="eyebrow light"><span></span> El método en 4 pasos</p><h2>De la primera cuenta a un bolso con presencia.</h2><p>Un orden concreto para que cada decisión sostenga la siguiente.</p></div>
        <div className="method-layout">
          <div className="method-image"><Image src="/assets/mecanismo-orange-bag-BRwavkf2.jpeg" alt="Bolso naranja de cuentas con forma firme y acabado brillante" width="736" height="981" loading="lazy" /></div>
          <ol className="steps"><li><span>01</span><div><h3>Materiales correctos</h3><p>Reconoce qué cuentas, hilo y accesorios necesitas antes de empezar.</p></div></li><li><span>02</span><div><h3>Trama y tensión</h3><p>Aprende a unir cada pieza con ritmo uniforme para que el tejido se vea limpio.</p></div></li><li><span>03</span><div><h3>Estructura y refuerzo</h3><p>Construye una forma estable que se sostenga y conserve su silueta.</p></div></li><li><span>04</span><div><h3>Acabados elegantes</h3><p>Integra cierres, asas y detalles finales sin que parezcan improvisados.</p></div></li></ol>
        </div>
      </section>

      <section className="gallery-section section" aria-labelledby="gallery-title">
        <div className="section-heading"><p className="eyebrow"><span></span> 10 modelos incluidos</p><h2 id="gallery-title">Aprende 10 modelos y descubre tu propio estilo.</h2><p>Aquí puedes ver 6 de los diseños que aprenderás: del cristal transparente a los colores intensos, cada uno te ayuda a practicar nuevas formas y acabados.</p></div>
        <div className="gallery">{gallery.map(([src, alt], index) => <figure key={src} className={index === 0 || index === 5 ? "tall" : ""}><Image src={`/assets/${src}`} alt={alt} width="1122" height="1402" loading="lazy" /><figcaption><span>Diseño {String(index + 1).padStart(2, "0")}</span><span aria-hidden="true">↗</span></figcaption></figure>)}</div>
      </section>

      <section className="social section" aria-labelledby="social-title">
        <div className="section-heading"><p className="eyebrow"><span></span> Creaciones compartidas por alumnas</p><h2 id="social-title">Progreso real, cuenta por cuenta.</h2><p>Capturas de la comunidad existente donde las alumnas muestran sus avances y piezas terminadas.</p></div>
        <div className="proof-grid">{[["social-proof-1-Cu8ewfx3.webp", "Captura real de una alumna mostrando su bolso terminado"],["social-proof-4-DwD1MEvF.webp", "Captura real con creaciones de bolsos de cuentas"],["social-proof-5-n2QxvI4z.webp", "Resultado compartido por una alumna del curso"]].map(([src, alt]) => <Image key={src} src={`/assets/${src}`} alt={alt} width="1439" height="1920" loading="lazy" />)}</div>
        <p className="proof-note">Los resultados dependen de la práctica y dedicación de cada persona.</p>
      </section>

      <section className="program section" id="programa">
        <div className="section-heading left"><p className="eyebrow"><span></span> Lo que recibes</p><h2>Una ruta completa para crear con más claridad y menos ensayo y error.</h2></div>
        <div className="curriculum"><article><span>Fundamentos</span><h3>Empieza con una base segura</h3><p>Materiales, herramientas, tipos de cuentas y preparación antes del tejido.</p></article><article><span>Técnica</span><h3>Comprende la construcción</h3><p>Trama, tensión, uniones y lectura visual del proceso.</p></article><article><span>Estructura</span><h3>Dale forma al diseño</h3><p>Refuerzos, armado, asas, cierres y soluciones para un bolso firme.</p></article><article><span>Terminación</span><h3>Cuida lo que sí se nota</h3><p>Acabados, revisión final y presentación de tu pieza.</p></article></div>
        <div className="included-bar"><p><strong>10</strong> modelos</p><p><strong>23+</strong> lecciones</p><p><strong>Videos</strong> de práctica</p><p><strong>Diagramas</strong> visuales</p></div>
        <div className="bonus-heading"><p className="eyebrow"><span></span> Además</p><h2>8 bonos para cuidar y mostrar mejor tu trabajo.</h2></div>
        <div className="bonus-grid">{bonuses.map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="teacher section dark-section">
        <div className="teacher-photo"><Image src="/assets/isabella-purple-model-CxG3bHJY.png" alt="Isabella Tascón, instructora del Método Bolsos con Cuentas" width="1254" height="1254" loading="lazy" /></div>
        <div className="teacher-copy"><p className="eyebrow light"><span></span> Tu instructora</p><h2>Isabella Tascón</h2><p className="teacher-role">Artesana y creadora del Método Bolsos con Cuentas</p><p>Durante más de 5 años, Isabella ha perfeccionado la forma de convertir cuentas y materiales simples en piezas firmes, elegantes y llenas de detalle.</p><p>Su enfoque en este programa es muy concreto: explicar visualmente lo que suele quedar fuera de los tutoriales rápidos para que una principiante entienda el porqué de cada paso.</p><blockquote>“No se trata de tener manos expertas. Se trata de aprender el orden correcto.”</blockquote></div>
      </section>

      <section className="offer section" id="oferta">
        <div className="offer-intro"><p className="eyebrow"><span></span> Empieza desde cero</p><h2>Todo el método. Una sola inversión.</h2><p>Aprende por placer, para crear regalos especiales o como primer paso si más adelante decides ofrecer tus piezas.</p><div className="offer-image-crop"><Image src="/assets/cta-final-modelo-BAyQkRNs.webp" alt="Bolso multicolor tejido con cuentas" width="1439" height="1920" loading="lazy" /></div></div>
        <div className="offer-card"><p className="offer-label">Método Bolsos con Cuentas</p><div className="price"><span>Valor total USD 197</span><strong><small>USD</small> 29.99</strong><em>pago único</em></div><ul><li>10 modelos guiados en 23+ lecciones</li><li>PDF, diagramas y videos de práctica</li><li>8 bonos complementarios</li><li>Acceso inmediato después de comprar</li><li>Garantía de 7 días</li></ul><CTA label="Sí, quiero aprender el método" /><p className="secure">Pago procesado de forma segura por Hotmart</p></div>
      </section>

      <section className="guarantee section"><div className="seal" aria-hidden="true"><span>7</span>DÍAS</div><div><p className="eyebrow"><span></span> Compra protegida</p><h2>Tienes 7 días para conocer el programa.</h2><p>Si después de entrar y revisar el contenido consideras que no es para ti, puedes solicitar el reembolso dentro del periodo de garantía indicado.</p></div></section>

      <section className="faq section" id="preguntas">
        <div className="section-heading"><p className="eyebrow"><span></span> Antes de empezar</p><h2>Preguntas frecuentes</h2></div>
        <div className="faq-list"><details><summary>¿Cuántos modelos aprenderé?<span>+</span></summary><p>Aprenderás a crear 10 modelos de bolsos con cuentas a través de 23+ lecciones paso a paso.</p></details><details><summary>¿Necesito experiencia previa?<span>+</span></summary><p>No. El programa está pensado para principiantes y comienza por los fundamentos: materiales, trama, tensión, estructura y acabados.</p></details><details><summary>¿Qué incluye mi compra?<span>+</span></summary><p>Incluye 23+ lecciones, PDF de apoyo, videos de práctica, diagramas visuales y 8 bonos sobre plantillas, mantenimiento, reparación, malla plástica, fotografía, redes, empaque y Telegram.</p></details><details><summary>¿Cuándo recibo acceso?<span>+</span></summary><p>El acceso es inmediato después de completar la compra en Hotmart.</p></details><details><summary>¿Los materiales están incluidos?<span>+</span></summary><p>La compra corresponde al programa digital. Dentro aprenderás a identificar los materiales que necesitas para realizar tus proyectos.</p></details><details><summary>¿Puedo aprender desde el celular?<span>+</span></summary><p>El contenido digital de Hotmart puede consultarse desde dispositivos compatibles con su plataforma. Para practicar, te recomendamos usar una pantalla donde veas los detalles con comodidad.</p></details><details><summary>¿El curso garantiza que podré vender?<span>+</span></summary><p>No se prometen ingresos. El objetivo principal es enseñarte a crear piezas con mejor estructura y acabado. Fotografía, redes y empaque se incluyen como recursos complementarios si decides mostrar u ofrecer tu trabajo.</p></details><details><summary>¿Cómo funciona la garantía?<span>+</span></summary><p>Tienes 7 días desde la compra para revisar el programa y, si no es para ti, solicitar el reembolso conforme al proceso de Hotmart.</p></details></div>
      </section>

      <section className="final-cta dark-section"><p className="eyebrow light"><span></span> Tu primera pieza empieza aquí</p><h2>Haz que tu próximo bolso no solo se vea bonito: que se vea bien hecho.</h2><p>Accede ahora al método completo por USD 29.99, pago único.</p><CTA label="Quiero empezar ahora" dark /><small>Acceso inmediato · 7 días de garantía</small></section>

      <footer><div className="footer-brand"><span className="brand-mark">✦</span><p>Método<br /><strong>Bolsos con Cuentas</strong></p></div><p>Formación digital para aprender una técnica artesanal paso a paso.</p><div className="footer-links"><a href="#privacidad">Privacidad</a><a href="#terminos">Términos</a><a href="#preguntas">Preguntas frecuentes</a></div><div className="legal-copy" id="privacidad">Tus datos de compra son procesados por Hotmart conforme a sus políticas.</div><div className="legal-copy" id="terminos">Producto digital sujeto a las condiciones informadas en la página de pago y a la garantía indicada.</div><small>© {new Date().getFullYear()} Método Bolsos con Cuentas.</small></footer>
      <div className="mobile-buy"><a href={CHECKOUT} target="_blank" rel="noreferrer"><span>Acceso por <strong>USD 29.99</strong></span><b>Quiero empezar ↗</b></a></div>
      <script
        data-manychat-source-forwarder="true"
        dangerouslySetInnerHTML={{
          __html: `(() => {
            const sourceId = new URLSearchParams(window.location.search).get("src");

            if (!sourceId || !/^\\d{1,30}$/.test(sourceId)) return;

            document.querySelectorAll('a[href^="https://go.hotmart.com/"]').forEach((link) => {
              const checkoutUrl = new URL(link.href);
              checkoutUrl.searchParams.set("src", sourceId);
              link.href = checkoutUrl.toString();
            });
          })();`,
        }}
      />
    </main>
  );
}
