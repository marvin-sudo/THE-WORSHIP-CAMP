/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Mic, ArrowRight } from 'lucide-react';
import { SPEAKERS } from '../constants';

export default function SpeakersSection() {
  return (
    <section className="py-24 bg-[#f8faff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
            Guest Ministers & Psalmites
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#002366] mb-6">
            Voices of Awakening
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Led by anointed leaders who carry a passion for revival, pure worship, and equipping young leaders for kingdom impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPEAKERS.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="aspect-square relative overflow-hidden bg-blue-950">
                <img 
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002366] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] text-[10px] uppercase font-black tracking-widest px-3 py-0.5 rounded-full shadow-sm">
                    {speaker.role}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#002366] mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    {speaker.ministry}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Mic className="w-3.5 h-3.5 text-[#d4af37]" /> Keynote & Workshops
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/ministers"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-[#002366] font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            <span>View Full Minister Biographies & Session Topics</span>
            <ArrowRight className="w-4 h-4 text-[#d4af37]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
