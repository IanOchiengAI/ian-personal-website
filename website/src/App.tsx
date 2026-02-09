import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Trajectory from './components/Trajectory';
import Products from './components/Products';
import ContactDock from './components/ContactDock';
import PortfolioFolder from './components/PortfolioFolder';
import ContactModal from './components/ContactModal';

function App() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative">
      <Header />

      <main>
        <Hero />
        {/* Ecosystem no longer triggers portfolio directly (moved to Products), 
            but kept the prop just in case we add it back or for other links */}
        <Ecosystem />
        <Trajectory />
        <Products onOpenPortfolio={() => setIsPortfolioOpen(true)} />
      </main>

      <ContactDock onOpenContact={() => setIsContactOpen(true)} />
      <PortfolioFolder isOpen={isPortfolioOpen} onClose={() => setIsPortfolioOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 bg-slate-50 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-60" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-60" />
    </div>
  );
}

export default App;
