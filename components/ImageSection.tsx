
import React from 'react';
import { motion } from 'framer-motion';

const ImageSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const SubSection = ({ title, count, startSeed, category, images }: { title: string, count: number, startSeed: number, category: string, images: string[] }) => (
    <div className="space-y-6" id="work">
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{title}</h3>
        <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800"></div>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">({category})</span>
      </div>
      <div className={`grid gap-4 ${count === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
        {Array.from({ length: count }).map((_, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-3/4"
          >
            <img 
              src={images[i] || `https://picsum.photos/seed/${startSeed + i}/800/1067`} 
              alt={`${title} shot ${i}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-white text-xs font-bold uppercase tracking-widest">View Gallery</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="space-y-32"
    >
      <SubSection title="Collaborations and Commercial Photoshoots" count={3} startSeed={550} category="Natural Bodybuilding" images={['/s-1-1.png', '/s-1-2.png', '/s-1-3.png']} />
      <SubSection title="Sponsorships and Brand Endorsements" count={4} startSeed={660} category="Fitness Modeling" images={['/s-2-1.png', '/s-2-2.png', '/s-2-3.png', '/s-2-4.png']} />
      <SubSection title="Fitness and Lifestyle" count={4} startSeed={770} category="Raw Discipline" images={['/s-3-1.png', '/s-3-2.png', '/s-3-3.png', '/s-3-4.png']} />
    </motion.section>
  );
};

export default ImageSection;
