/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { FEATURES } from '../constants';

interface ExpectationsProps {
  onRegisterClick: () => void;
}

export default function Expectations({ onRegisterClick }: ExpectationsProps) {
  return (
    <section id="expectations" className="py-24 md:py-32 bg-[#f8faff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d4af37] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 block"
          >
            What to Expect
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-[#002366] mb-6 tracking-tight"
          >
            Moments That Will Define Your Journey
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            Every element of Worship Camp is crafted to facilitate divine encounters, authentic community, and lasting spiritual growth.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.Icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/80 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-center text-[#002366] group-hover:bg-[#002366] group-hover:text-white group-hover:border-[#002366] transition-all duration-300 shadow-sm">
                      <Icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#002366] border border-blue-100/60">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#002366] mb-4 group-hover:text-[#0a3d91] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#d4af37]">
                  <span className="tracking-widest uppercase">Spiritual Experience</span>
                  <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#002366] text-[#d4af37] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-[#002366] text-lg">Ready to experience the 3 pillars?</h4>
              <p className="text-xs text-gray-500">Spots are filled on a first-come, first-served basis.</p>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] px-8 py-3.5 rounded-full font-black text-sm transition-all shadow-md shadow-[#d4af37]/20 shrink-0 cursor-pointer"
          >
            Register for Worship Camp
          </button>
        </div>

      </div>
    </section>
  );
}
