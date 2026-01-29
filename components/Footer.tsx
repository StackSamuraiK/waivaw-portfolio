
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-20 px-6 mt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-2xl font-black tracking-tighter uppercase italic">
            WAIVAW<span className="text-blue-500">.SRIVASTAV</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-xs font-medium">
            Redefining the standards of natural aesthetics through relentless discipline.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <span className="text-slate-400 dark:text-slate-600">The Athlete</span>
            <a href="https://www.instagram.com/vai05" target='_blank' className="hover:text-blue-500 transition-colors">Instagram</a>
          </div>
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <span className="text-slate-400 dark:text-slate-600">Represent</span>
            <a href="#" className="hover:text-blue-500 transition-colors">Brands</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Sponsorships</a>
          </div>
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <span className="text-slate-400 dark:text-slate-600">Navigation</span>
            <a href="#work" className="hover:text-blue-500 transition-colors">Gallery</a>
            <a href="#stats" className="hover:text-blue-500 transition-colors">Impact</a>
            <a href="#location" className="hover:text-blue-500 transition-colors">Find Me</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-100 dark:border-slate-900 text-center text-[10px] text-slate-400 uppercase tracking-[0.4em] font-bold">
        &copy; {new Date().getFullYear()} Waivaw Srivastav. Natural • Aesthetic • Disciplined.
      </div>
    </footer>
  );
};

export default Footer;
