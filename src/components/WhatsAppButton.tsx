import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34677200013"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-white rounded-xl shadow-lg text-sage-700 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
        ¿En qué podemos ayudarte?
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45" />
      </div>

      {/* Button */}
      <div className="relative p-4 rounded-full bg-emerald-500 text-white shadow-lg hover:shadow-xl hover:bg-emerald-600 transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-7 h-7" />

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
      </div>
    </a>
  );
}
