import { useEffect, useRef } from 'react';
import { Heart, ArrowRight, Shield, Eye, HandHeart, Leaf, Flower2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    title: 'Tratamiento Seguro',
    desc: 'Técnicas avaladas con resultados probados',
  },
  {
    icon: Eye,
    title: 'Evaluación Global',
    desc: 'Análisis completo de tu estructura corporal',
  },
  {
    icon: HandHeart,
    title: 'Atención Personalizada',
    desc: 'Cada sesión adaptada a tus necesidades',
  },
];

export default function Welcome() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.welcome-title',
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
        '.welcome-text',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.feature-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.welcome-nature-deco',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      {/* Nature decorative elements */}
      <div className="welcome-nature-deco absolute top-12 right-8 w-24 md:w-36 pointer-events-none opacity-0">
        <img
          src="/olive-branch.png"
          alt=""
          className="w-full h-auto rotate-[45deg]"
        />
      </div>
      <div className="welcome-nature-deco absolute bottom-24 left-4 w-28 md:w-40 pointer-events-none opacity-0">
        <img
          src="/eucalyptus-branch.png"
          alt=""
          className="w-full h-auto -rotate-[35deg]"
        />
      </div>

      {/* Small leaf icon decorations */}
      <div className="absolute top-32 left-16 text-sage-200/40">
        <Leaf className="w-8 h-8 rotate-45" />
      </div>
      <div className="absolute bottom-40 right-20 text-sage-200/30">
        <Flower2 className="w-10 h-10 -rotate-12" />
      </div>
      <div className="absolute top-1/2 right-8 text-warm-gold/20">
        <Leaf className="w-6 h-6 -rotate-[30deg]" />
      </div>

      {/* Subtle decorative shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-sage-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-warm-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="welcome-title inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Bienvenidos a nuestro centro
          </div>
          <h2 className="welcome-title font-display text-4xl md:text-5xl text-sage-800 mb-4">
            Centro Integral
          </h2>
          <div className="welcome-title w-16 h-1 bg-warm-gold mx-auto rounded-full mb-8" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="welcome-text text-xl md:text-2xl text-sage-700 font-light mb-6 leading-relaxed">
            ¿Necesitas resolver alguna disfunción en tu cuerpo que te está
            afectando en tu vida diaria?
          </p>
          <p className="welcome-text text-lg text-sage-600/80 leading-relaxed mb-8">
            No solo damos masajes, creamos experiencias para la gente. Nuestro
            centro de osteopatía se ha creado basándose en la creencia de que un
            cuerpo equilibrado te asegura mayor calidad de vida.
          </p>
          <a
            href="#servicios"
            className="welcome-text group inline-flex items-center gap-2 px-7 py-3.5 bg-sage-600 text-white rounded-full font-medium hover:bg-sage-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Nuestros Servicios
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Feature cards */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card group relative p-8 rounded-3xl bg-white border border-sage-100 hover:border-sage-200 hover:shadow-soft transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex p-4 rounded-2xl bg-sage-50 group-hover:bg-sage-100 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-sage-600 group-hover:text-sage-700 transition-colors" />
              </div>
              <h3 className="font-display text-xl text-sage-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sage-600/70 leading-relaxed">{feature.desc}</p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-warm-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
