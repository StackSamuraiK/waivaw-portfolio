
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Eye, Users, Flame, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const mockData = [
  { name: 'September', views: 4400 },
  { name: 'October', views: 7700 },
  { name: 'November', views: 23000 },
  { name: 'December', views: 65000 },
  { name: 'January', views: 80000 },
];

const stats = [
  { label: 'Total Impressions', value: '46K+', icon: <Users size={20} className="text-blue-500" /> },
  { label: 'Total Views', value: '117K+', icon: <Eye size={20} className="text-purple-500" /> },
  { label: 'Daily Activity', value: 'High', icon: <Flame size={20} className="text-orange-500" /> },
  { label: 'Followers increased', value: '900+', icon: <Zap size={20} className="text-yellow-500" /> },
];

const carouselImages = [
  { src: '/c1.png', views: '29K+ Views' },
  { src: '/c2.png', views: '18K+ Views' },
  { src: '/c3.png', views: '34K+ Views' },
  { src: '/c4.png', views: '11K+ Views' },
  { src: '/c5.png', views: '14K+ Views' },
  { src: '/c6.png', views: '11K+ Views' },
  { src: '/c7.png', views: '9K+ Views' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#0f172a', padding: '8px 12px', borderRadius: '8px', border: 'none' }}>
        <p style={{ color: '#ffffff', margin: 0, fontSize: '12px', fontWeight: 'bold' }}>
          {payload[0].value.toLocaleString()} views
        </p>
      </div>
    );
  }
  return null;
};

const AnalyticsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="space-y-16" id="stats">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black tracking-tighter uppercase">Impact & <span className="text-blue-500">Reach</span></h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
          Motivating a generation of natural athletes. My data reflects a growing community committed to aesthetic perfection and healthy living.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Statistics Grid */}
        <div className="lg:col-span-1 grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm space-y-3"
            >
              <div className="p-3 w-fit bg-slate-50 dark:bg-slate-800 rounded-xl">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-black tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Views Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="font-black text-xl uppercase tracking-tight">Viral Performance</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Monthly Content Impressions</p>
            </div>
            <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full font-bold">+1300+% Growth</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  content={<CustomTooltip />}
                />
                <Bar dataKey="views" radius={[4, 4, 4, 4]} barSize={40}>
                   {mockData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={index === 4 ? '#3b82f6' : '#94a3b830'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative group">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-black text-2xl uppercase tracking-tighter italic">The Journey In Reels</h3>
          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="p-3 rounded-full border-2 border-slate-100 dark:border-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full border-2 border-slate-100 dark:border-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {carouselImages.map((item, i) => (
            <div key={i} className="shrink-0 w-72 aspect-square rounded-2xl overflow-hidden snap-center relative group/item shadow-lg">
              <img src={item.src} alt="Fitness Reel" loading="lazy" className="w-full h-full object-cover grayscale-[0.5] group-hover/item:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity flex items-end p-8">
                <div className="text-white">
                  <p className="text-lg font-black italic uppercase">{item.views}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
