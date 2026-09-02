/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Quote, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  CheckCircle2, 
  MessageSquarePlus, 
  X, 
  Send, 
  Heart,
  MapPin,
  Calendar
} from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeTestimonialModal, setActiveTestimonialModal] = useState<typeof TESTIMONIALS[0] | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  
  // Custom submission form state
  const [customTestimony, setCustomTestimony] = useState({
    author: '',
    role: '',
    quote: '',
    location: '',
  });
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Filter testimonials
  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Youth & Students') return t.role.toLowerCase().includes('student') || t.role.toLowerCase().includes('campus') || t.role.toLowerCase().includes('youth');
    if (selectedFilter === 'Worship & Music') return t.role.toLowerCase().includes('worship') || t.role.toLowerCase().includes('music') || t.role.toLowerCase().includes('vocalist');
    if (selectedFilter === 'Spiritual Renewal') return t.highlight.toLowerCase().includes('encounter') || t.highlight.toLowerCase().includes('spiritual') || t.highlight.toLowerCase().includes('presence');
    return true;
  });

  const totalSlides = filteredTestimonials.length;

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying || isHovered || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, totalSlides]);

  // Adjust index if filter changed
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedFilter]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTestimony.author || !customTestimony.quote) return;
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsSubmitModalOpen(false);
      setCustomTestimony({ author: '', role: '', quote: '', location: '' });
    }, 2500);
  };

  const currentItem = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  return (
    <section 
      id="testimonials" 
      className="py-20 sm:py-28 md:py-36 bg-[#f8faff] border-t border-gray-100 relative overflow-hidden"
    >
      {/* Background Decorative Rings & Ambient Highlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with 'Outfit' Font */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/15 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#d4af37]/30 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span 
              className="text-[#002366] font-bold tracking-[0.2em] uppercase text-xs"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              VOICES OF THE ENCOUNTER
            </span>
          </div>
          
          <h2 
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#002366] mb-4 tracking-tight leading-[1.15]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Past Attendee <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002366] via-[#0a3d91] to-[#d4af37]">Testimonies</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Real encounters, renewed spirits, and transformed lives. Hear how God moved powerfully among past worshippers at Worship Camp.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {['All', 'Youth & Students', 'Worship & Music', 'Spiritual Renewal'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-[#002366] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Main Testimonial Carousel Card */}
          <div className="relative min-h-[380px] sm:min-h-[340px] md:min-h-[320px] flex items-center">
            <AnimatePresence mode="wait">
              {currentItem && (
                <motion.div
                  key={`${currentItem.id}-${selectedFilter}`}
                  initial={{ opacity: 0, x: 30, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="w-full bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-xl shadow-blue-900/5 border border-blue-50 relative overflow-hidden"
                >
                  {/* Subtle Top Golden Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#002366] via-[#d4af37] to-[#002366]" />
                  
                  {/* Background Watermark Quote */}
                  <div className="absolute right-6 -bottom-6 text-gray-100 pointer-events-none select-none">
                    <Quote className="w-36 h-36 sm:w-48 sm:h-48 text-[#f0f4fc]" />
                  </div>

                  <div className="relative z-10 grid md:grid-cols-12 gap-6 sm:gap-8 items-center">
                    
                    {/* Left Quote Content */}
                    <div className="md:col-span-8 flex flex-col justify-between">
                      <div>
                        {/* Top Meta: Quote Icon, Tag & Stars */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6">
                          <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-2xl bg-[#002366] text-[#f3e5ab] flex items-center justify-center shadow-md">
                              <Quote className="w-5 h-5" fill="#f3e5ab" />
                            </div>
                            <span 
                              className="px-3 py-1 rounded-full bg-[#f8faff] border border-blue-100 text-[#002366] text-xs font-bold uppercase tracking-wider"
                              style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                              {currentItem.highlight}
                            </span>
                          </div>

                          {/* 5 Stars Rating */}
                          <div className="flex gap-1 items-center bg-[#fdfaf0] px-3 py-1 rounded-full border border-[#f3e5ab]">
                            {[...Array(currentItem.rating)].map((_, starIdx) => (
                              <Star key={starIdx} className="w-3.5 h-3.5 text-[#d4af37]" fill="#d4af37" />
                            ))}
                            <span 
                              className="text-[11px] font-bold text-[#b89628] ml-1"
                              style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                              5.0
                            </span>
                          </div>
                        </div>

                        {/* Attendee Quote */}
                        <blockquote className="text-gray-800 text-base sm:text-lg md:text-xl font-normal leading-relaxed italic mb-6">
                          "{currentItem.quote}"
                        </blockquote>
                      </div>

                      {/* Author Details */}
                      <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#002366] to-[#0a3d91] text-white flex items-center justify-center font-bold text-base shadow-md border border-white">
                            <span style={{ fontFamily: "'Outfit', sans-serif" }}>
                              {currentItem.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 
                              className="text-base sm:text-lg font-bold text-[#002366] leading-tight flex items-center gap-1.5"
                              style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                              {currentItem.author}
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 inline" />
                            </h4>
                            <p className="text-xs text-gray-500 font-medium">
                              {currentItem.role} • {currentItem.location}
                            </p>
                          </div>
                        </div>

                        {/* Edition Badge */}
                        <div className="inline-flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                          <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span style={{ fontFamily: "'Outfit', sans-serif" }}>
                            {currentItem.edition}
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Right Mini Summary Card / Highlight */}
                    <div className="md:col-span-4 bg-gradient-to-br from-[#00173d] to-[#002366] text-white p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/15 rounded-full blur-2xl pointer-events-none" />
                      
                      <div>
                        <span 
                          className="text-[#f3e5ab] text-[10px] sm:text-xs uppercase font-extrabold tracking-widest block mb-2"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          VERIFIED EXPERIENCE
                        </span>
                        <h3 
                          className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          Maisha Gardens Sanctuary
                        </h3>
                        <p className="text-xs text-blue-100/80 leading-relaxed mb-4">
                          Where sincere worship meets an open heaven under the trees and night sky.
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-blue-100">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span>Nakuwadde, Uganda</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#f3e5ab] font-bold">
                          <Heart className="w-3.5 h-3.5 fill-[#d4af37]" />
                          <span>Free Entry</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Carousel Controls (Nav Arrows & Dot Indicators) */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left: Slide Number & Status */}
            <div className="flex items-center gap-3">
              <span 
                className="text-xs font-bold text-[#002366] uppercase tracking-wider"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Quote {currentIndex + 1} of {totalSlides}
              </span>
              
              {/* Play / Pause Toggle Button */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                title={isAutoPlaying ? "Pause Carousel" : "Play Carousel"}
                className="w-7 h-7 rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-600 transition-colors shadow-sm cursor-pointer"
              >
                {isAutoPlaying ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5 ml-0.5" />
                )}
              </button>
            </div>

            {/* Center: Interactive Dots */}
            <div className="flex items-center gap-2">
              {filteredTestimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-8 h-2.5 bg-gradient-to-r from-[#002366] to-[#d4af37]'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Right: Prev & Next Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#002366] text-gray-700 hover:text-white border border-gray-200 hover:border-[#002366] flex items-center justify-center shadow-sm transition-all transform active:scale-95 cursor-pointer group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#002366] text-gray-700 hover:text-white border border-gray-200 hover:border-[#002366] flex items-center justify-center shadow-sm transition-all transform active:scale-95 cursor-pointer group"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Bottom Bar: Prompt to Submit Own Testimony */}
          <div className="mt-10 pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 
                className="text-sm font-bold text-[#002366]"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Attended a previous Worship Camp?
              </h4>
              <p className="text-xs text-gray-500">
                Share what God did in your life and encourage incoming worshippers for the December Edition.
              </p>
            </div>

            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#002366] text-[#002366] hover:text-white border border-[#002366]/30 font-bold text-xs transition-all shadow-sm cursor-pointer"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <MessageSquarePlus className="w-4 h-4 text-[#d4af37]" />
              <span>Submit Your Testimony</span>
            </button>
          </div>

        </div>

      </div>

      {/* Share Testimony Modal */}
      <AnimatePresence>
        {isSubmitModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {submittedSuccess ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 
                    className="text-xl font-bold text-[#002366] mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Testimony Submitted!
                  </h3>
                  <p className="text-sm text-gray-600">
                    Thank you for sharing your praise report. May God continue to bless your walk!
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span 
                      className="text-xs uppercase font-bold tracking-widest text-[#d4af37] block mb-1"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      SHARE YOUR STORY
                    </span>
                    <h3 
                      className="text-xl sm:text-2xl font-bold text-[#002366]"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      How did God touch you?
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Your story can ignite faith in someone coming to the December Edition.
                    </p>
                  </div>

                  <form onSubmit={handleCustomSubmit} className="space-y-4">
                    <div>
                      <label 
                        className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Namubiru"
                        value={customTestimony.author}
                        onChange={(e) => setCustomTestimony({ ...customTestimony, author: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10 outline-none text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label 
                          className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          Your Role / Ministry
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Youth Leader"
                          value={customTestimony.role}
                          onChange={(e) => setCustomTestimony({ ...customTestimony, role: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10 outline-none text-sm"
                        />
                      </div>
                      <div>
                        <label 
                          className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          City / District
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Kampala"
                          value={customTestimony.location}
                          onChange={(e) => setCustomTestimony({ ...customTestimony, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10 outline-none text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label 
                        className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Your Testimony / Experience *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe what you experienced at Worship Camp..."
                        value={customTestimony.quote}
                        onChange={(e) => setCustomTestimony({ ...customTestimony, quote: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10 outline-none text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#002366] to-[#0a3d91] hover:from-[#0a3d91] hover:to-[#002366] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      <Send className="w-4 h-4 text-[#f3e5ab]" />
                      <span>Submit Testimony</span>
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
