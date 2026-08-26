/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Tag, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';

interface GalleryModalProps {
  activePhotoId: number | null;
  onClose: () => void;
  onSelectPhoto: (id: number) => void;
}

export default function GalleryModal({ activePhotoId, onClose, onSelectPhoto }: GalleryModalProps) {
  if (activePhotoId === null) return null;

  const currentIdx = GALLERY_ITEMS.findIndex(item => item.id === activePhotoId);
  const currentItem = GALLERY_ITEMS[currentIdx] || GALLERY_ITEMS[0];

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    onSelectPhoto(GALLERY_ITEMS[prevIdx].id);
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIdx + 1) % GALLERY_ITEMS.length;
    onSelectPhoto(GALLERY_ITEMS[nextIdx].id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
      />

      <div className="relative z-10 max-w-5xl w-full bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row">
        {/* Main Image Container */}
        <div className="relative md:w-2/3 h-80 md:h-[500px] bg-black flex items-center justify-center">
          <img 
            src={currentItem.url} 
            alt={currentItem.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Info */}
        <div className="md:w-1/3 p-6 md:p-8 flex flex-col justify-between text-white bg-[#00133a] border-l border-white/10">
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                {currentItem.category}
              </span>
              <button 
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-display font-bold text-2xl mb-3 text-white">
              {currentItem.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {currentItem.description}
            </p>
          </div>

          <div>
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-[#d4af37]" /> Worship Camp Archive
              </span>
              <span>{currentIdx + 1} of {GALLERY_ITEMS.length}</span>
            </div>

            {/* Thumbnail strips */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {GALLERY_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelectPhoto(item.id)}
                  className={`w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    item.id === activePhotoId ? 'border-[#d4af37] scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
