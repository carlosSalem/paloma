import { MapPin, Phone, Mail, Clock, Instagram, Heart, Leaf } from 'lucide-react';

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Osteopatía', href: '#osteopatia' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-sage-900 text-sage-300 relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-12 fill-cream-50"
        >
          <path d="M0,0 C300,60 900,60 1200,0 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Nature decorations */}
      <div className="absolute -left-8 top-16 w-32 pointer-events-none opacity-20">
        <img
          src="/eucalyptus-branch.png"
          alt=""
          className="w-full h-auto rotate-[45deg]"
        />
      </div>
      <div className="absolute -right-6 top-24 w-28 pointer-events-none opacity-15">
        <img
          src="/olive-branch.png"
          alt=""
          className="w-full h-auto -rotate-[30deg]"
        />
      </div>

      {/* Floating leaf icons */}
      <div className="absolute top-32 right-20 text-sage-700/40">
        <Leaf className="w-10 h-10 rotate-[25deg]" />
      </div>
      <div className="absolute bottom-32 left-16 text-sage-700/30">
        <Leaf className="w-8 h-8 -rotate-[20deg]" />
      </div>

      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#inicio" className="flex items-center mb-6">
                <img
                  src="/logo-paloma.png"
                  alt="Paloma Molina Osteopatía"
                  className="h-16 brightness-0 invert opacity-90"
                />
              </a>
              <p className="text-sage-400 text-sm leading-relaxed mb-6">
                Especialistas en osteopatía y masaje terapéutico. Enfoque integral
                para tu bienestar físico y emocional en Granada.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/osteopatia_paloma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-sage-800 text-sage-400 hover:bg-sage-700 hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-white text-lg mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-sage-800 group-hover:bg-sage-700 transition-colors">
                    <Phone className="w-4 h-4 text-warm-gold" />
                  </div>
                  <div>
                    <span className="block text-white text-sm">+34 677 200 013</span>
                    <span className="text-xs text-sage-500">WhatsApp disponible</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-sage-800 group-hover:bg-sage-700 transition-colors">
                    <Mail className="w-4 h-4 text-warm-gold" />
                  </div>
                  <span className="text-sm">info@osteopatiapalomamolina.com</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-sage-800 group-hover:bg-sage-700 transition-colors">
                    <MapPin className="w-4 h-4 text-warm-gold" />
                  </div>
                  <span className="text-sm">Granada, España</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-sage-800 group-hover:bg-sage-700 transition-colors">
                    <Clock className="w-4 h-4 text-warm-gold" />
                  </div>
                  <span className="text-sm">Solo con cita previa</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-white text-lg mb-6">Enlaces</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sage-400 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-600 group-hover:bg-warm-gold transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h4 className="font-display text-white text-lg mb-6">
                ¿Listo para empezar?
              </h4>
              <p className="text-sage-400 text-sm mb-6">
                Agenda tu primera consulta y descubre los beneficios de la
                osteopatía integral.
              </p>
              <a
                href="https://wa.me/34677200013"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sage-700 text-white rounded-full text-sm font-medium hover:bg-sage-600 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-sage-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sage-500 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} Centro Integral Paloma Molina.
                Todos los derechos reservados.
              </p>
              <p className="text-sage-600 text-xs flex items-center gap-1">
                Hecho con <Heart className="w-3 h-3 text-warm-gold" /> en Granada
              </p>
            </div>
            <p className="text-sage-600 text-xs text-center mt-3 max-w-2xl mx-auto">
              La información en este sitio web tiene fines informativos y no
              sustituye la consulta con un profesional de la salud.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
