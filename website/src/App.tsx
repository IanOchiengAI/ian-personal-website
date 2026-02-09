import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Trajectory from './components/Trajectory';
import Products from './components/Products';
import ContactDock from './components/ContactDock';
import PortfolioFolder from './components/PortfolioFolder';

function App() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

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

      <ContactDock />
      <PortfolioFolder isOpen={isPortfolioOpen} onClose={() => setIsPortfolioOpen(false)} />

      {/* Footer spacer for dock */}
      <div className="h-32" />
    </div>
  );
}

export default App;
