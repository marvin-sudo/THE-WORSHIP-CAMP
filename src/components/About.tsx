/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Cross, Flame, Hand, Users, Sparkles, Heart, ArrowRight } from 'lucide-react';

interface AboutProps {
  onRegisterClick: () => void;
}

export default function About({ onRegisterClick }: AboutProps) {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="text-[#002366] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" /> About Worship Camp
            </span>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#002366] mb-8 leading-[1.15] tracking-tight">
              A Sacred Space for Awakening & Transformation
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
              Worship Camp is more than an annual gathering—it is a spiritual catalyst designed to awaken personal devotion, ignite holy fire in youth, and cultivate an authentic community grounded in the Word of God.
            </p>
            
            <p className="text-gray-600 text-base sm:text-lg mb-10 leading-relaxed">
              Whether you are an aspiring worship leader, a seeker craving God’s presence, or a youth leader desiring fresh vision, Worship Camp provides the setting to disconnect from distractions and connect intimately with God.
            </p>

            {/* Three Pillar Icons in Gold Accents */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
              
              <div className="flex flex-col gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-[#002366] flex items-center justify-center text-[#f3e5ab] shadow-md shadow-[#002366]/10">
                  <Flame className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#d4af37] block uppercase tracking-wider">01 — Pillar</span>
                  <h4 className="font-bold text-[#002366] text-base font-display">Personal Revival</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">Awakening hearts, spiritual hunger & fresh holy fire.</p>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-[#002366] flex items-center justify-center text-[#f3e5ab] shadow-md shadow-[#002366]/10">
                  <Hand className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#d4af37] block uppercase tracking-wider">02 — Pillar</span>
                  <h4 className="font-bold text-[#002366] text-base font-display">Intimacy</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">Knowing Him deeply through surrender, prayer & the Word.</p>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-[#002366] flex items-center justify-center text-[#f3e5ab] shadow-md shadow-[#002366]/10">
                  <Cross className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#d4af37] block uppercase tracking-wider">03 — Pillar</span>
                  <h4 className="font-bold text-[#002366] text-base font-display">Opening Realms</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">Living under an open heaven of revelation & power.</p>
              </div>

            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onRegisterClick}
                className="bg-[#002366] hover:bg-[#0a3d91] text-white px-8 py-4 rounded-full font-bold text-sm inline-flex items-center gap-2.5 transition-all shadow-md group cursor-pointer"
              >
                <span>Join the 2026 Experience</span>
                <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/about"
                className="border border-[#002366]/20 hover:bg-blue-50 text-[#002366] px-6 py-4 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-colors"
              >
                <span>Our Story & Pillars</span>
                <ArrowRight className="w-4 h-4 text-[#d4af37]" />
              </Link>
            </div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Primary Featured Image */}
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1544427928-c49cdfebf494?auto=format&fit=crop&q=80&w=1000"
                alt="Worship Camp Atmosphere"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-[#f3e5ab] block mb-1">
                  Camp Motto
                </span>
                <p className="text-xl font-display font-bold">
                  “Set your hearts on things above, where Christ is seated.”
                </p>
              </div>
            </div>
            
            {/* Floating Gold Border Card */}
            <div className="absolute -bottom-8 -left-6 md:-left-10 bg-white p-6 rounded-3xl shadow-xl z-20 max-w-[260px] border border-gray-100 hidden sm:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#002366] text-[#d4af37] flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-[#002366] text-sm">1,200+ Youth</h5>
                  <p className="text-[11px] text-gray-500">Anticipated for 2026</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-snug">
                Uniting from over 40+ church communities nationwide.
              </p>
            </div>

            {/* Decorative background blurs */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#d4af37]/15 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#002366]/10 rounded-full blur-3xl -z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
