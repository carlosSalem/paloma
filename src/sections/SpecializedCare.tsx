import { useEffect, useRef } from 'react';
import { Globe, UserCheck, ArrowRight, Flower2, Leaf, TreeDeciduous } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  'Análisis estructural completo',
  'Evaluación visceral y craneal',
  'Técnicas miotensivas y funcionales',
  'Medición de arcos de movilidad',
  'Mapa de lesiones personalizado',
  'Seguimiento continuo',
];

export default function SpecializedCare() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.care-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.care-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.care-body',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.care-highlight-item',
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.care-highlights',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.care-nature-deco',
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-sage-800 relative overflow-hidden">
      {/* Nature decorations */}
      <div className="care-nature-deco absolute -right-6 top-12 w-32 md:w-48 pointer-events-none">
        <img
          src="/eucalyptus-branch.png"
          alt=""
          className="w-full h-auto -rotate-[55deg] opacity-40"
        />
      </div>
      <div className="care-nature-deco absolute -left-4 bottom-16 w-28 md:w-40 pointer-events-none">
        <img
          src="/olive-branch.png"
          alt=""
          className="w-full h-auto rotate-[40deg] opacity-35"
        />
      </div>

      {/* Nature icons */}
      <div className="absolute top-20 left-16 text-sage-600/30">
        <TreeDeciduous className="w-10 h-10" />
      </div>
      <div className="absolute bottom-24 right-12 text-sage-600/25">
        <Flower2 className="w-8 h-8" />
      </div>
      <div className="absolute top-1/3 right-24 text-warm-gold/20">
        <Leaf className="w-6 h-6 rotate-[20deg]" />
      </div>
      <div className="absolute bottom-1/3 left-24 text-sage-600/20">
        <Leaf className="w-7 h-7 -rotate-[15deg]" />
      </div>

      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sage-700/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-warm-gold/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="care-header text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-700 text-sage-300 text-sm font-medium mb-6 border border-sage-600">
            <Globe className="w-4 h-4" />
            Enfoque global
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Atención Especializada
          </h2>
          <div className="w-16 h-1 bg-warm-gold mx-auto rounded-full" />
        </div>

        {/* Body */}
        <div className="care-body grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <h3 className="care-content font-display text-2xl md:text-3xl text-cream-200 mb-6">
              Atendemos desde una{' '}
              <span className="text-warm-gold">perspectiva global</span>
            </h3>
            <p className="care-content text-sage-200/80 leading-relaxed mb-6">
              A través de una evaluación exhaustiva realizamos un tratamiento más
              óptimo. En cada sesión actuaremos desde un mapa de lesiones en el
              que analizaremos tus disfunciones mediante hipótesis valoradas por
              nuestra especialista.
            </p>
            <p className="care-content text-lg text-cream-100/90 leading-relaxed mb-8 italic">
              La osteopatía conoce la anatomía y fisiología humana y sabe que el
              funcionamiento y la estructura corporal implica a todos los sistemas
              orgánicos.
            </p>

            <a
              href="#contacto"
              className="care-content group inline-flex items-center gap-2 px-7 py-3.5 bg-warm-gold text-sage-900 rounded-full font-semibold hover:bg-warm-gold/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <UserCheck className="w-5 h-5" />
              Conoce a la Especialista
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Highlights list */}
          <div className="care-highlights bg-sage-700/50 backdrop-blur-sm rounded-3xl p-8 border border-sage-600/50">
            <h4 className="font-display text-xl text-white mb-6">
              Nuestra evaluación incluye:
            </h4>
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className="care-highlight-item flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage-600/60 flex items-center justify-center group-hover:bg-warm-gold/20 transition-colors duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-warm-gold group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <span className="text-sage-200 group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
