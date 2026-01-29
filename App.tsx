

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import AnalyticsSection from './components/AnalyticsSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-slate-100 overflow-x-hidden">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        <Hero />
        <ImageSection />
        <AnalyticsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
