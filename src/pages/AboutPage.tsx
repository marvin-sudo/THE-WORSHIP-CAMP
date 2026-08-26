/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { CORE_PILLARS, EVENT_INFO } from '../constants';
import { Flame, Cross, Sparkles, Heart, Shield, Award, Users, BookOpen, ArrowRight, CheckCircle2, MapPin, Calendar } from 'lucide-react';

interface AboutPageProps {
  onRegisterClick: () => void;
}

export default function AboutPage({ onRegisterClick }: AboutPageProps) {
  return (
    <div className="bg-[#f8faff] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader 
        badge="Our Heart & Vision"
        title="About Worship Camp"
        subtitle="Raising a consecrated generation that worships in Spirit and in Truth, united under the banner of Christ."
        breadcrumb="About"
      />

      {/* 2. Vision & Mission Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision Story */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block">
              The Genesis & Mandate
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#002366] leading-tight">
              A Holy Gathering Born Out of a Hunger for His Real Presence
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Worship Camp was birthed as a sacred altar where young worshippers, student leaders, musicians, and believers can step away from worldly noise and enter an unhurried, consecrated environment of divine encounter.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              In a culture marked by digital distractions and spiritual fatigue, we believe God is stirring an authentic remnant — a generation who will not settle for surface-level religion, but desires raw intimacy, deep biblical conviction, and revival fire that transforms communities.
            </p>

            {/* Key Scripture Quote Card */}
            <div className="p-6 bg-blue-50/70 border-l-4 border-[#002366] rounded-2xl">
              <p className="text-[#002366] font-display italic text-lg sm:text-xl font-medium">
                "Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship."
              </p>
              <span className="block mt-3 text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                — Romans 12:1 (NIV)
              </span>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link 
                to="/register" 
                className="bg-[#002366] hover:bg-[#0a3d91] text-white font-bold px-7 py-3.5 rounded-full text-sm inline-flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Register for September Edition</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/schedule" 
                className="border border-[#002366]/20 text-[#002366] hover:bg-blue-50 font-bold px-7 py-3.5 rounded-full text-sm inline-flex items-center gap-2 transition-colors"
              >
                <span>View Program Flow</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Feature Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800" 
                alt="Worship Camp atmosphere"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-[#00173d] text-white">
                <div className="flex items-center gap-2 text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-2">
                  <Sparkles className="w-4 h-4" /> September Edition @ Maisha Gardens
                </div>
                <h3 className="font-display font-bold text-xl mb-2">
                  Open-Air Garden Sanctuary
                </h3>
                <p className="text-blue-100/70 text-xs leading-relaxed">
                  Surrounded by lush greenery and the open East African sky, Maisha Gardens provides the ultimate setting for acoustic intimacy and extended evening praise under the stars.
                </p>
              </div>
            </div>

            {/* Quick Stat Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 text-[#002366] flex items-center justify-center font-display font-black text-xl">
                100%
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Christ-Centered</p>
                <p className="text-[11px] text-gray-500">Unfiltered praise & prayer</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Pillars of the Movement */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 block">
              Foundational Values
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#002366] mb-4">
              The 4 Pillars of Worship Camp
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Every detail of our gathering is anchored on enduring biblical principles that ignite spiritual longevity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_PILLARS.map((pillar, idx) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#f8faff] rounded-3xl p-8 border border-blue-50 hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#002366] text-[#f3e5ab] flex items-center justify-center font-display font-bold text-lg mb-6 group-hover:scale-110 transition-transform shadow-md">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#002366] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#d4af37]">{pillar.verse}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#002366]/40" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why September Edition at Maisha Gardens */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#00173d] to-[#002b7a] rounded-[2.5rem] p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[#f3e5ab] text-xs uppercase font-extrabold tracking-[0.2em] block mb-3">
                September 2026 Edition
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold mb-4 leading-tight">
                Why We Chose Maisha Gardens
              </h3>
              <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed mb-6">
                Maisha Gardens offers a calm, expansive garden atmosphere designed for authentic reflection. Away from indoor amphitheater walls, the natural open skies amplify our voices in raw acoustic harmony, allowing unhurried prayer walks and campfire-style devotionals.
              </p>
              
              <div className="flex flex-wrap gap-4 text-xs font-bold text-white/90">
                <div className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl border border-white/10">
                  <MapPin className="w-4 h-4 text-[#d4af37]" /> Maisha Gardens Grounds
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl border border-white/10">
                  <Calendar className="w-4 h-4 text-[#d4af37]" /> Tuesday, 1st September 2026 @ 4:00 PM EAT
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <Link 
                to="/venue" 
                className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-black px-8 py-4 rounded-full font-display text-sm inline-flex items-center gap-2 shadow-xl shadow-[#d4af37]/20 hover:scale-105 transition-all"
              >
                <span>Explore Venue & Directions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ministry Impact Highlights */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-5xl font-display font-black text-[#002366] mb-1">1,200+</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Worshippers Expected</p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl font-display font-black text-[#d4af37] mb-1">7+ Hours</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Continuous Worship & Word</p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl font-display font-black text-[#002366] mb-1">20+ Choirs</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Ministries Represented</p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl font-display font-black text-[#d4af37] mb-1">100%</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Life-Changing Fire</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
