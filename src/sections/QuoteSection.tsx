import { useEffect, useRef } from 'react';
import { BookOpen, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.quote-icon-anim',
        { scale: 0, rotation: -30, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        quoteRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.quote-highlight',
        { width: '0%' },
        {
          width: '100%',
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Floating nature elements
      gsap.fromTo(
        '.quote-nature-left',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 0.6,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
      gsap.fromTo(
        '.quote-nature-right',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 0.5,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="osteopatia"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-sage-700 overflow-hidden"
    >
      {/* Nature decorations */}
      <div className="quote-nature-left absolute -left-8 top-1/4 w-32 md:w-48 pointer-events-none">
        <img
          src="/eucalyptus-branch.png"
          alt=""
          className="w-full h-auto rotate-[35deg] opacity-60"
        />
      </div>
      <div className="quote-nature-right absolute -right-4 bottom-1/4 w-28 md:w-40 pointer-events-none">
        <img
          src="/olive-branch.png"
          alt=""
          className="w-full h-auto -rotate-[20deg] opacity-50"
        />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage-600/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-sage-600/50 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="quote-icon-anim p-3 rounded-2xl bg-warm-gold/20">
            <BookOpen className="w-6 h-6 text-warm-gold" />
          </div>
          <span className="text-sage-300 text-sm font-medium uppercase tracking-[0.2em]">
            Definición OMS
          </span>
        </div>

        <div ref={quoteRef} className="relative">
          {/* Quote mark */}
          <Quote className="quote-icon-anim absolute -top-6 -left-4 w-16 h-16 text-warm-gold/20" />

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white text-center mb-10 leading-tight">
            ¿Qué es la{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Osteopatía?</span>
              <span className="quote-highlight absolute bottom-2 left-0 h-3 bg-warm-gold/30 -rotate-1" />
            </span>
          </h2>

          <blockquote className="relative">
            <p className="text-xl md:text-2xl text-cream-200/90 text-center leading-relaxed font-light italic">
              "La osteopatía, también denominada medicina osteopática, tiene su
              enfoque en el contacto manual para llevar a cabo un diagnóstico y el
              tratamiento, respetando la relación entre el cuerpo, la mente y el
              espíritu en salud y enfermedad, enfatizando en la estructura y
              función integral del cuerpo y su predisposición interior a la
              autocuración."
            </p>
            <footer className="mt-8 text-center">
              <cite className="inline-flex items-center gap-2 text-warm-gold font-medium not-italic">
                <span className="w-8 h-px bg-warm-gold/50" />
                Organización Mundial de la Salud
                <span className="w-8 h-px bg-warm-gold/50" />
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
