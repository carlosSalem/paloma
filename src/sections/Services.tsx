import { useEffect, useRef } from 'react';
import { Activity, ClipboardCheck, Sparkles, ArrowRight, TreePine, Leaf } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Activity,
    title: 'Técnicas Miotensivas y Funcionales',
    description:
      'Se basan en la contracción y relajación muscular a través de la movilidad articular global, regional o local. La musculatura avanza en su proceso de restauración y liberación de tensiones mediante intercambios rítmicos y liberación fascial.',
    image: '/service-osteopathy.jpg',
    features: ['Liberación fascial', 'Movilidad articular', 'Intercambios rítmicos'],
  },
  {
    icon: ClipboardCheck,
    title: 'Evaluación Personalizada',
    description:
      'Cada tratamiento comienza con una evaluación completa que incluye análisis estructural, visceral y craneal. Actuamos desde un mapa de lesiones que analiza tus disfunciones mediante hipótesis valoradas por nuestra especialista.',
    image: '/service-massage.jpg',
    features: ['Análisis estructural', 'Mapa de lesiones', 'Hipótesis clínica'],
  },
  {
    icon: Sparkles,
    title: 'Abordaje Integral',
    description:
      'Aplicamos técnicas especializadas para disfunciones musculo-esqueléticas, abordaje neuromuscular, masaje deportivo de tejido profundo, drenaje linfático y acupuntura. Tratamos al cuerpo como un todo interconectado.',
    image: '/service-wellness.jpg',
    features: ['Masaje deportivo', 'Drenaje linfático', 'Acupuntura'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-header',
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
        '.service-card-item',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.services-nature',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
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
    <section
      id="servicios"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream-100/50 relative overflow-hidden"
    >
      {/* Nature decorations */}
      <div className="services-nature absolute -left-6 top-1/3 w-28 md:w-44 pointer-events-none">
        <img
          src="/eucalyptus-branch.png"
          alt=""
          className="w-full h-auto rotate-[60deg] opacity-50"
        />
      </div>
      <div className="services-nature absolute -right-4 bottom-1/4 w-24 md:w-36 pointer-events-none">
        <img
          src="/olive-branch.png"
          alt=""
          className="w-full h-auto -rotate-[35deg] opacity-45"
        />
      </div>

      {/* Floating leaf icons */}
      <div className="absolute top-16 left-16 text-sage-300/25">
        <TreePine className="w-12 h-12" />
      </div>
      <div className="absolute bottom-20 right-16 text-sage-300/20">
        <Leaf className="w-10 h-10 rotate-[30deg]" />
      </div>
      <div className="absolute top-1/2 right-8 text-warm-gold/15">
        <Leaf className="w-8 h-8 -rotate-[45deg]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="services-header text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Nuestras especialidades
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-sage-800 mb-4">
            Técnicas Especializadas
          </h2>
          <div className="w-16 h-1 bg-warm-gold mx-auto rounded-full mb-6" />
          <p className="text-lg text-sage-600/70">
            Cada tratamiento está diseñado para abordar tus necesidades específicas
            con técnicas probadas y personalizadas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card-item group relative bg-white rounded-3xl overflow-hidden border border-sage-100 hover:border-sage-200 hover:shadow-soft transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 via-sage-900/20 to-transparent" />

                {/* Floating icon */}
                <div className="absolute top-4 right-4 p-3 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg">
                  <service.icon className="w-6 h-6 text-sage-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-display text-xl text-sage-800 mb-3 group-hover:text-sage-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sage-600/70 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 rounded-full bg-sage-50 text-sage-600 text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sage-600 text-sm font-medium hover:text-sage-800 transition-colors group/link"
                >
                  Más información
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
