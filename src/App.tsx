import { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import QuoteSection from './sections/QuoteSection';
import Welcome from './sections/Welcome';
import Services from './sections/Services';
import SpecializedCare from './sections/SpecializedCare';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import NatureDivider from './components/NatureDivider';

function App() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <NatureDivider variant="light" />
        <QuoteSection />
        <NatureDivider variant="sage" />
        <Welcome />
        <NatureDivider variant="light" />
        <Services />
        <NatureDivider variant="light" />
        <SpecializedCare />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
