/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, Sparkles, ChevronRight, Music, Flame, Cross, BookOpen, ArrowRight } from 'lucide-react';
import { SCHEDULE_DAYS } from '../constants';

export default function ScheduleSection({ onRegisterClick }: { onRegisterClick: () => void }) {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const activeDay = SCHEDULE_DAYS[activeDayIdx];

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'worship':
      case 'worship & word':
        return <Music className="w-4 h-4 text-[#d4af37]" />;
      case 'prayer':
      case 'revival':
        return <Flame className="w-4 h-4 text-[#d4af37]" />;
      case 'word':
      case 'equipping':
        return <BookOpen className="w-4 h-4 text-[#002366]" />;
      default:
        return <Cross className="w-4 h-4 text-[#d4af37]" />;
    }
  };

  return (
    <section id="schedule" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
            September Edition Program • 1st Sept 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#002366] mb-6">
            Event Schedule & Flow
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Starting promptly at <strong>4:00 PM EAT</strong> at Maisha Gardens (Gates open 3:00 PM). Every phase is intentionally structured for worship, revelation, prayer, and authentic fellowship.
          </p>
        </div>

        {/* Day Selector Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SCHEDULE_DAYS.map((day, idx) => {
            const isActive = activeDayIdx === idx;
            return (
              <button
                key={day.day}
                onClick={() => setActiveDayIdx(idx)}
                className={`px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#002366] text-white shadow-lg shadow-[#002366]/20 scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#d4af37]' : 'bg-gray-400'}`} />
                <span>{day.day}:</span>
                <span className={isActive ? 'text-[#f3e5ab]' : 'text-gray-500 font-normal'}>{day.date}</span>
              </button>
            );
          })}
        </div>

        {/* Schedule Content Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay.day}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f8faff] rounded-[2.5rem] p-8 md:p-12 border border-blue-50 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-gray-200/80 gap-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#d4af37] block mb-1">
                    {activeDay.day} Theme
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-[#002366]">
                    {activeDay.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#002366] bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 shrink-0">
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  <span>{activeDay.date}</span>
                </div>
              </div>

              {/* Timeline list */}
              <div className="space-y-6">
                {activeDay.sessions.map((session, sIdx) => (
                  <div 
                    key={sIdx}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blue-200 transition-all hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                        {getTypeIcon(session.type)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#002366] border border-blue-100">
                            {session.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">{session.title}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-50 px-3.5 py-2 rounded-xl shrink-0 self-start md:self-auto">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{session.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Card Action */}
              <div className="mt-10 pt-8 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  to="/schedule"
                  className="text-xs font-bold text-[#002366] hover:text-[#d4af37] flex items-center gap-1.5 transition-colors"
                >
                  <span>View Complete 4-Day Syllabus & Tracks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={onRegisterClick}
                  className="bg-[#002366] hover:bg-[#0a3d91] text-white px-6 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 transition-all shadow-sm"
                >
                  Reserve Your Spot for this Day <ChevronRight className="w-4 h-4 text-[#d4af37]" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
