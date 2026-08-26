/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight, ShieldCheck, Sparkles, Navigation } from 'lucide-react';
import { EVENT_INFO } from '../constants';

interface EventDetailsProps {
  onOpenMap: () => void;
  onRegisterClick: () => void;
}

export default function EventDetails({ onOpenMap, onRegisterClick }: EventDetailsProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Upcoming event target date
    const targetDate = new Date(EVENT_INFO.targetDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="details" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Wrapper */}
        <div className="bg-[#002366] rounded-[2.5rem] md:rounded-[3.5rem] p-8 sm:p-12 lg:p-20 relative overflow-hidden shadow-2xl border border-blue-900">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/15 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Event Specs */}
            <div className="lg:col-span-7">
              <span className="text-[#f3e5ab] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d4af37]" /> SEPTEMBER EDITION • SAVE THE DATE
              </span>
              
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Event <span className="text-[#d4af37]">Information</span> & Venue
              </h2>
              
              {/* Event Items with Gold Dividers */}
              <div className="space-y-6">
                
                {/* Date Card */}
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#f3e5ab] shrink-0 border border-white/15 shadow-inner">
                    <Calendar className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[#f3e5ab] text-xs uppercase tracking-widest font-bold mb-1">Date & Edition</p>
                    <p className="text-white text-xl sm:text-2xl font-bold font-display">{EVENT_INFO.dateDetail}</p>
                    <p className="text-blue-100/70 text-xs mt-0.5">Worship Camp: September Edition</p>
                  </div>
                </div>

                {/* Gold Accent Divider */}
                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 via-[#d4af37]/60 to-transparent" />

                {/* Location Card */}
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#f3e5ab] shrink-0 border border-white/15 shadow-inner">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#f3e5ab] text-xs uppercase tracking-widest font-bold mb-1">Venue & Location</p>
                    <p className="text-white text-xl sm:text-2xl font-bold font-display">{EVENT_INFO.locationName}</p>
                    <p className="text-blue-100/70 text-xs mt-0.5">{EVENT_INFO.locationAddress}</p>
                    
                    <button 
                      onClick={onOpenMap}
                      className="text-[#f3e5ab] hover:text-white text-xs mt-3 font-bold inline-flex items-center gap-2 transition-all bg-white/10 px-4 py-1.5 rounded-full border border-white/10 hover:border-white/30 cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#d4af37]" /> VIEW ON MAP & DIRECTIONS <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Gold Accent Divider */}
                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 via-[#d4af37]/60 to-transparent" />

                {/* Time Schedule Card */}
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#f3e5ab] shrink-0 border border-white/15 shadow-inner">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[#f3e5ab] text-xs uppercase tracking-widest font-bold mb-1">Schedule & Time</p>
                    <p className="text-white text-xl sm:text-2xl font-bold font-display">{EVENT_INFO.time}</p>
                    <p className="text-blue-100/70 text-xs mt-0.5">{EVENT_INFO.timeDetail}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Live Countdown Box */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-10 border border-white/20 text-center shadow-xl">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#f3e5ab] block mb-2">
                September Edition Countdown
              </span>
              <h3 className="text-white font-display font-bold text-2xl mb-8">
                Countdown to 1st Sept 2026
              </h3>

              {/* 4 Clock Blocks */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Mins', value: timeLeft.minutes },
                  { label: 'Secs', value: timeLeft.seconds }
                ].map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <div className="bg-white rounded-2xl py-4 px-2 shadow-lg mb-2 border border-gray-100 flex items-center justify-center">
                      <span className="text-[#002366] text-2xl sm:text-4xl font-display font-extrabold tabular-nums">
                        {String(item.value).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-[#f3e5ab] text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Scripture Quote Badge */}
              <div className="mt-8 bg-black/20 p-5 rounded-2xl border border-white/10 text-left">
                <p className="text-blue-100/90 text-xs italic leading-relaxed">
                  "Behold, I do a new thing; now it shall spring forth; shall ye not know it? I will even make a way in the wilderness..."
                </p>
                <span className="text-[#f3e5ab] font-bold text-[10px] uppercase tracking-wider block mt-2">
                  — Isaiah 43:19
                </span>
              </div>

              <div className="mt-6">
                <button
                  onClick={onRegisterClick}
                  className="w-full bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-black py-3.5 rounded-full text-sm font-display transition-all transform hover:scale-[1.02] shadow-lg shadow-[#d4af37]/20 cursor-pointer"
                >
                  Reserve Your Spot Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
