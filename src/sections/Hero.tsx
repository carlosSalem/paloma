import { useEffect, useRef } from 'react';
import { ArrowDown, Calendar, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: 'power2.out' }
      )
        .fromTo(
          '.hero-title-line',
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          '.hero-subtitle',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-cta',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.2'
        )
        .fromTo(
          '.nature-deco',
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: 'power2.out' },
          '-=0.8'
        );

      // Animate floating nature elements continuously
      gsap.to('.nature-float-1', {
        y: -15,
        rotation: 5,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
      gsap.to('.nature-float-2', {
        y: 12,
        rotation: -3,
        duration: 5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
      gsap.to('.nature-float-3', {
        y: -10,
        rotation: 8,
        duration: 3.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-wellness.jpg"
          alt="Centro de bienestar"
          className="w-full h-full object-cover scale-105"
          style={{ animation: 'breathe 20s ease-in-out infinite' }}
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-sage-900/60 via-sage-800/40 to-cream-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/50 via-transparent to-transparent" />
      </div>

      {/* Floating nature decorative elements */}
      {/* Eucalyptus branch - left side */}
      <div className="nature-deco nature-float-1 absolute left-4 md:left-12 top-1/4 w-24 md:w-40 opacity-0 pointer-events-none z-10">
        <img
          src="/eucalyptus-branch.png"
          alt=""
          className="w-full h-auto rotate-[-25deg] drop-shadow-lg"
        />
      </div>

      {/* Olive branch - right side */}
      <div className="nature-deco nature-float-2 absolute right-4 md:right-16 top-1/3 w-20 md:w-36 opacity-0 pointer-events-none z-10">
        <img
          src="/olive-branch.png"
          alt=""
          className="w-full h-auto rotate-[15deg] drop-shadow-lg"
        />
      </div>

      {/* Small scattered leaves - bottom right */}
      <div className="nature-deco nature-float-3 absolute right-8 md:right-24 bottom-32 w-28 md:w-44 opacity-0 pointer-events-none z-10">
        <img
          src="/leaves-scattered.png"
          alt=""
          className="w-full h-auto rotate-[10deg] drop-shadow-lg opacity-70"
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="hero-cta inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 mb-8">
          <Sparkles className="w-4 h-4 text-warm-gold" />
          <span className="text-white/90 text-sm font-medium tracking-wide">
            Centro de Osteopatía en Granada
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-white mb-6">
          <span className="hero-title-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
            Osteopatía y Masaje
          </span>
          <span className="hero-title-line block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic mt-2 text-cream-200">
            Centro Integral
          </span>
          <span className="hero-title-line block text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 text-warm-gold">
            Paloma Molina
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle max-w-2xl mx-auto text-lg md:text-xl text-white/85 leading-relaxed font-light">
          Un espacio donde cuidamos de tu salud y bienestar con tratamientos
          personalizados y un enfoque integral del cuerpo humano.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#contacto"
            className="hero-cta group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-sage-800 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:bg-cream-50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            Solicitar Cita
          </a>
          <a
            href="#servicios"
            className="hero-cta group inline-flex items-center gap-2.5 px-8 py-4 bg-white/15 backdrop-blur-md text-white border border-white/30 rounded-full font-medium text-base hover:bg-white/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Conocer Servicios
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs uppercase tracking-widest">Descubre más</span>
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <ArrowDown className="w-4 h-4 text-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
