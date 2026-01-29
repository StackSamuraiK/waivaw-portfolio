import React from 'react';
import { Navigation, Mail } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" id="location">
      {/* Map Illustration */}
      <div className="relative group order-2 md:order-1">
        <div className="absolute inset-0 rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-12 overflow-hidden shadow-2xl">
          {/* Image of India Map */}
          <img 
            src="/map.png" 
            alt="Map of India"
            loading="lazy" 
            className="w-full h-auto object-contain"
          />
          
          <div className="absolute bottom-10 left-10">
            <div className="text-2xl font-black uppercase tracking-tighter">Kolkata, WB</div>
          </div>
        </div>
      </div>

      {/* Info Content */}
      <div className="space-y-8 order-1 md:order-2">
        <div className="space-y-4">
          <h2 className="text-5xl font-black leading-[0.9] uppercase tracking-tighter">Born & Trained in <br /><span className="text-blue-500 italic">The City of Joy.</span></h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            From the local gyms of Kolkata to international platforms, my journey is rooted in the discipline of my hometown. I offer brand collaborations and professional modeling globally from this base.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-all">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Navigation size={20} />
            </div>
            <div>
              <div className="font-bold uppercase text-xs tracking-widest">Available</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Campaigns & Contests</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-all">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Mail size={20} />
            </div>
            <div className="min-w-0">
              <div className="font-bold uppercase text-xs tracking-widest">Connect</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 wrap-break-words overflow-hidden">waivawsrivastav@gmail.com</div>
            </div>
          </div>
        </div>

        <a href="https://www.instagram.com/vai05" target='_blank' className="block mt-8">
          <button className="w-full sm:w-auto px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:shadow-2xl hover:-translate-y-1 transition-all">
            Get In Touch
          </button>
        </a>
      </div>
    </section>
  );
};

export default LocationSection;