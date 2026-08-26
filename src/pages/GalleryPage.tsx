/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { GALLERY_ITEMS } from '../constants';
import { Sparkles, Maximize2, ArrowRight, Volume2, VolumeX, Heart, Camera } from 'lucide-react';

interface GalleryPageProps {
  onPhotoClick: (id: number) => void;
}

export default function GalleryPage({ onPhotoClick }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const categories = ["All", "Worship", "Revival", "Fellowship", "Teachings", "Outdoors"];

  const filteredPhotos = GALLERY_ITEMS.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  const toggleAtmosphereAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <div className="bg-[#f8faff] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader 
        badge="Moments in His Presence"
        title="Atmosphere & Experience Gallery"
        subtitle="Step into the sacred moments of praise, holy reverence, breakthroughs, and kingdom brotherhood captured across Worship Camp."
        breadcrumb="Gallery"
      />

      {/* 2. Top Filter & Atmosphere Audio Bar */}
      <section className="py-8 bg-white border-b border-gray-100 shadow-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2 flex items-center gap-1">
              <Camera className="w-3.5 h-3.5 text-[#d4af37]" /> Filter Album:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#002366] text-white shadow-md font-extrabold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Audio Atmosphere Player */}
          <button
            onClick={toggleAtmosphereAudio}
            className={`text-xs font-bold px-4 py-2 rounded-full border transition-all flex items-center gap-2 cursor-pointer ${
              isPlayingAudio
                ? "bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] border-[#d4af37] shadow-md animate-pulse font-extrabold"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
            <span>{isPlayingAudio ? "Worship Pad Sound Playing" : "Listen to Atmosphere Sound"}</span>
          </button>

        </div>
      </section>

      {/* 3. Photo Masonry Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => onPhotoClick(photo.id)}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer bg-slate-900 aspect-4/3"
              >
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#00173d]/80 backdrop-blur-md text-[#f3e5ab] text-[10px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full border border-white/20">
                    {photo.category}
                  </span>
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white transform group-hover:-translate-y-1 transition-transform">
                  <h4 className="font-display font-bold text-lg text-white mb-1 leading-snug">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-blue-100/75 line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Experience Quote Highlight */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/20 text-[#002366] flex items-center justify-center mx-auto">
            <Heart className="w-6 h-6 fill-current text-[#d4af37]" />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#002366] leading-tight">
            "Photos can only capture a fraction of what happens when hearts yield completely to God."
          </h3>

          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Experience the reality firsthand on <strong>1st September 2026 at Maisha Gardens</strong>.
          </p>

          <div className="pt-4">
            <Link
              to="/register"
              className="bg-[#002366] hover:bg-[#0a3d91] text-white font-bold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2 shadow-xl transition-all"
            >
              <span>Register for September Edition</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
