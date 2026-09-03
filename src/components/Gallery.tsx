/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2, Tag } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';

interface GalleryProps {
  onPhotoClick: (id: number) => void;
}

export default function Gallery({ onPhotoClick }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Worship', 'Revival', 'Fellowship', 'Teachings', 'Outdoors'];

  const filteredItems = selectedCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="experience" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#002366] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 inline-block">
              Visual Atmosphere
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#002366] leading-tight">
              The Worship Camp Experience
            </h2>
            <p className="text-gray-600 text-base mt-4">
              Glimpses of prayer breakthroughs, starlit worship, and deep fellowship from past encounters.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#002366] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredItems.map((item, idx) => {
            // First item large feature, others balanced
            const isLarge = idx === 0 && selectedCategory === 'All';
            const colSpanClass = isLarge ? 'md:col-span-8' : (idx === 1 ? 'md:col-span-4' : 'md:col-span-4');
            const heightClass = isLarge ? 'h-96 md:h-[480px]' : 'h-72 md:h-80';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onPhotoClick(item.id)}
                className={`${colSpanClass} ${heightClass} relative rounded-[2rem] overflow-hidden group shadow-md cursor-pointer border border-gray-100 bg-slate-900`}
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Royal Blue Consistent Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00133a]/90 via-[#002366]/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-between p-6 sm:p-8" />
                
                {/* Top Badge */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full shadow-sm">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 text-white">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 group-hover:text-[#f3e5ab] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-blue-100/80 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
