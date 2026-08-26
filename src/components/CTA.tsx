/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Users } from 'lucide-react';

interface CTAProps {
  onRegisterClick: () => void;
}

export default function CTA({ onRegisterClick }: CTAProps) {
  return (
    <section className="py-24 bg-white px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-[#002366] rounded-[2.5rem] md:rounded-[3.5rem] p-10 sm:p-16 md:p-24 text-center relative overflow-hidden shadow-2xl border border-blue-900"
      >
        {/* Radiant Background Aura Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#d4af37] rounded-full blur-[160px] opacity-20 pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400 rounded-full blur-[160px] opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#f3e5ab] text-xs font-bold uppercase tracking-widest mb-6 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" /> SEPTEMBER EDITION REGISTRATION IS OPEN
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-white mb-6 leading-tight tracking-tight">
            Don’t Miss This <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e5ab] to-[#d4af37]">
              Divine Encounter
            </span>
          </h2>

          <p className="text-base sm:text-xl md:text-2xl text-blue-100/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Join hundreds of worshippers gathering at <strong>Maisha Gardens</strong> on <strong>1st September 2026 at 4:00 PM EAT</strong>. Entry badges are strictly limited—register early!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button 
              onClick={onRegisterClick}
              className="w-full sm:w-auto bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-black px-10 py-5 rounded-full font-display text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-[#d4af37]/30 cursor-pointer"
            >
              <span>Register Now for September Edition</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a 
              href="#schedule"
              className="w-full sm:w-auto border-2 border-white/30 hover:border-white text-white px-8 py-5 rounded-full font-bold text-base transition-all hover:bg-white/10 text-center"
            >
              View Schedule & Phases
            </a>
          </div>
          
          {/* Trust Highlights */}
          <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-xs font-bold text-white/70 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span>Maisha Gardens • Open Air Grounds</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span>Tuesday 1st Sept 2026 @ 4PM EAT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span>Life-Changing Impartation & Revival</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
