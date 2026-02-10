import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Trajectory from './components/Trajectory';
import Products from './components/Products';
import ContactDock from './components/ContactDock';
import PortfolioFolder from './components/PortfolioFolder';
import ContactModal from './components/ContactModal';

import PricingModal from './components/PricingModal';

function App() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative">
      <Header onOpenContact={() => setIsContactOpen(true)} />

      <main>
        <Hero />
        <Ecosystem onOpenPricing={() => setIsPricingOpen(true)} />
        <Trajectory />
        <Products onOpenPortfolio={() => setIsPortfolioOpen(true)} />
      </main>

      <ContactDock onOpenContact={() => setIsContactOpen(true)} />
      <PortfolioFolder isOpen={isPortfolioOpen} onClose={() => setIsPortfolioOpen(false)} />
      <PricingModal isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 bg-slate-50 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-60" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-60" />
    </div>
  );
}

export default App;
