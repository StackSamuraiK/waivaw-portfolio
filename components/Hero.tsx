
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-10 gap-12 text-center md:text-left">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-64 h-64 md:w-96 md:h-96 relative shrink-0"
      >
        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-600 via-slate-400 to-blue-400 animate-pulse blur-2xl opacity-30"></div>
        <img 
          src="hero-image.png" 
          alt="Athlete Profile" 
          loading="lazy"
          className="w-full h-full object-cover rounded-full border-8 border-white dark:border-slate-800 shadow-2xl relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-blue-500 font-bold tracking-[0.3em] text-xs uppercase">Natural Athlete (Bodybuilding) • Fitness Model</h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            WAIVAW <br />
            <span className="text-slate-300 dark:text-slate-700 italic">SRIVASTAV.</span>
          </h1>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
          A 31-year-old Sports Administrator and Manager, standing 6 ft tall, based in Kolkata, West Bengal. With over a decade of experience in the sports ecosystem and a background as a former amateur athlete, fitness and performance have been an integral part of my journey.

I bring together on-field understanding, managerial insight, and a strong fitness-driven lifestyle, making me open to meaningful opportunities, collaborations, and photoshoots across sports, fitness, and lifestyle domains.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#work">
            <button className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-xl">
            My Work
          </button>
          </a>
          <a href="#location">
            <button className="px-10 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
            Collaborate
          </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
