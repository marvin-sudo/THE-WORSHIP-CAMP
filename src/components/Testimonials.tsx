/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#f8faff] border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#d4af37] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#d4af37]" /> Attendee Testimonies
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#002366] mb-4">
            Voices of the Encounter
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Hear from young worshippers whose lives, ministries, and spiritual walks were transformed at Worship Camp.
          </p>
        </div>

        {/* Testimonials 4-Card / 3-Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 relative border border-gray-100/90 flex flex-col justify-between"
            >
              <div>
                {/* Top Quote Icon in Gold */}
                <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37]/20 via-[#f7e49e]/30 to-[#c59b27]/10 rounded-2xl flex items-center justify-center text-[#d4af37] mb-6 shadow-sm">
                  <Quote className="w-5 h-5" fill="#d4af37" />
                </div>

                {/* 5 Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 text-[#d4af37]" fill="#d4af37" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#002366] text-[#f3e5ab] font-bold text-xs flex items-center justify-center">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#002366] text-sm">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
