import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Osteopatía', href: '#osteopatia' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream-50/90 backdrop-blur-xl shadow-soft py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center group">
            <img
              src="/logo-paloma.png"
              alt="Paloma Molina Osteopatía"
              className={`transition-all duration-500 ${
                isScrolled ? 'h-12' : 'h-14'
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-sage-700 hover:text-sage-900 hover:bg-sage-100'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className={`ml-3 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-sage-600 text-white hover:bg-sage-700 shadow-md hover:shadow-lg'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
              }`}
            >
              Solicitar Cita
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled ? 'text-sage-700 hover:bg-sage-100' : 'text-white hover:bg-white/15'
            }`}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            isMobileOpen ? 'max-h-80 mt-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 p-2 rounded-2xl bg-white/95 backdrop-blur-xl shadow-soft">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sage-700 hover:text-sage-900 hover:bg-sage-50 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMobileOpen(false)}
              className="mt-1 px-4 py-3 rounded-xl bg-sage-600 text-white text-center text-sm font-semibold hover:bg-sage-700 transition-colors"
            >
              Solicitar Cita
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
