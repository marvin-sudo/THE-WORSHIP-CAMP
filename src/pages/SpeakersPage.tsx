/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { SPEAKERS } from '../constants';
import { BookOpen, Users, Music, Flame, ArrowRight, Instagram, Twitter, Cross, Heart, CheckCircle2 } from 'lucide-react';

export default function SpeakersPage() {
  const [selectedRole, setSelectedRole] = useState<string>("All");

  const roles = ["All", "Worship Leader", "Revivalist", "Bible Teacher", "Keynote"];

  const filteredSpeakers = SPEAKERS.filter((s) => {
    if (selectedRole === "All") return true;
    return s.role.toLowerCase().includes(selectedRole.toLowerCase());
  });

  return (
    <div className="bg-[#f8faff] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader 
        badge="December Edition Ministers"
        title="Guest Speakers & Worship Leaders"
        subtitle="Anointed ministers, psalmodists, and biblical teachers gathering to release God's fire at Maisha Gardens."
        breadcrumb="Ministers & Speakers"
      />

      {/* 2. Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-100 shadow-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">Filter by Ministry:</span>
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRole(r)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedRole === r
                    ? "bg-[#002366] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <Link
            to="/schedule"
            className="text-xs font-bold text-[#002366] hover:text-[#d4af37] flex items-center gap-1.5 transition-colors"
          >
            <span>View Full Program Flow</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 3. Speaker Profiles Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {filteredSpeakers.map((speaker, idx) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all group flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-6">
                
                {/* Header: Photo & Quick Meta */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-[#d4af37]/30">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d4af37] block mb-1">
                      {speaker.ministry}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-[#002366]">
                      {speaker.name}
                    </h3>
                    <p className="text-xs font-bold text-gray-500 mt-0.5">
                      {speaker.role}
                    </p>
                  </div>
                </div>

                {/* Session & Scripture Spotlight */}
                <div className="p-4 bg-[#f8faff] rounded-2xl border border-blue-50 space-y-2">
                  <div className="text-xs font-bold text-[#002366]">
                    <span>Session Topic:</span>
                  </div>
                  <p className="text-sm font-bold text-[#002366] leading-snug">
                    "{speaker.topic}"
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Key Text: {speaker.scripture}</span>
                  </div>
                </div>

                {/* Bio Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {speaker.bio}
                </p>

              </div>

              {/* Footer: Social & Pass Link */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="text-[#002366] font-semibold">{speaker.social?.twitter}</span>
                </div>
                <Link
                  to="/register"
                  className="text-xs font-bold text-[#002366] hover:text-[#d4af37] flex items-center gap-1 transition-colors"
                >
                  <span>Attend this session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Choirs & Worship Collectives */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-xs mb-2 block">
              Musical Ministry
            </span>
            <h3 className="text-3xl font-display font-bold text-[#002366]">
              Participating Choirs & Bands
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Over 20 youth choirs and worship collectives are uniting their sound for the December Edition at Maisha Gardens.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#f8faff] border border-blue-50 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#002366] text-[#f3e5ab] flex items-center justify-center mx-auto shadow-md">
                <Music className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-[#002366]">Zion Sound Collective</h4>
              <p className="text-xs text-gray-500">Leading the grand opening praise and spontaneous acoustic devotionals.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f8faff] border border-blue-50 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] flex items-center justify-center mx-auto shadow-md">
                <Flame className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-[#002366]">Awakening Voices Choir</h4>
              <p className="text-xs text-gray-500">Multilingual choral harmonies uplifting the Name of Jesus under open skies.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f8faff] border border-blue-50 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#002366] text-[#f3e5ab] flex items-center justify-center mx-auto shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-[#002366]">Campus Revival Musicians</h4>
              <p className="text-xs text-gray-500">Anointed student strings, brass, and percussionists across university teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-16 max-w-7xl mx-auto px-6 text-center">
        <div className="bg-[#00173d] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3">
            Want to Join the Ministry Choir or Volunteer?
          </h3>
          <p className="text-blue-100/80 text-sm max-w-xl mx-auto mb-6">
            We welcome worship leaders, vocalists, acoustic instrumentalists, and prayer stewards to serve at Worship Camp.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-black px-8 py-3.5 rounded-full text-sm inline-flex items-center gap-2 shadow-lg shadow-[#d4af37]/20 transition-transform hover:scale-105"
          >
            <span>Apply as Volunteer / Musician</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
