/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowRight, Bell, Share2, Check } from 'lucide-react';
import { EVENT_INFO } from '../constants';

interface CountdownTimerProps {
  onRegisterClick?: () => void;
  className?: string;
  variant?: 'full' | 'compact' | 'card';
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isComplete: boolean;
}

export default function CountdownTimer({ 
  onRegisterClick, 
  className = "", 
  variant = 'full' 
}: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalMs: 0,
    isComplete: false,
  });

  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    // Target: December 1st, 2026 at 4:00 PM EAT
    const targetTime = new Date(EVENT_INFO.targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalMs: 0,
          isComplete: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
        totalMs: difference,
        isComplete: false,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Google Calendar Link generator
  const handleAddToGoogleCalendar = () => {
    const title = encodeURIComponent("Worship Camp: December Edition 2026");
    const details = encodeURIComponent("Join us for an unforgettable evening of praise, deep worship, and fellowship at Maisha Gardens, Nakuwadde. Free Event Admission.");
    const location = encodeURIComponent("Maisha Gardens, Nakuwadde, Uganda");
    // 20261201T130000Z to 20261201T190000Z (4:00 PM EAT = 1:00 PM UTC)
    const dates = "20261201T130000Z/20261201T190000Z";
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShare = async () => {
    const shareData = {
      title: "Worship Camp 2026 - December Edition",
      text: "Join us for Worship Camp: December Edition on 1st December 2026 at Maisha Gardens! Free Admission.",
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Fallback to clipboard
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const units = [
    { label: 'Days', value: timeRemaining.days, short: 'D' },
    { label: 'Hours', value: timeRemaining.hours, short: 'H' },
    { label: 'Minutes', value: timeRemaining.minutes, short: 'M' },
    { label: 'Seconds', value: timeRemaining.seconds, short: 'S' },
  ];

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 sm:gap-3 bg-[#00173d]/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15 shadow-lg ${className}`}>
        {units.map((unit) => (
          <div key={unit.label} className="flex items-baseline gap-1">
            <span 
              className="text-white font-black text-base sm:text-lg tabular-nums tracking-tight font-display"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[#f3e5ab] text-[10px] font-bold uppercase">
              {unit.short}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section 
      id="countdown" 
      className={`relative overflow-hidden py-12 sm:py-16 bg-gradient-to-b from-[#00173d] via-[#002366] to-[#00173d] text-white border-y border-white/10 ${className}`}
    >
      {/* Radiant Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 mb-4 shadow-sm">
            <span className="text-[#f3e5ab] text-xs font-extrabold uppercase tracking-[0.2em]">
              COUNTDOWN TO THE GATHERING
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-3">
            December 1st, 2026
          </h2>
          
          <p className="text-sm sm:text-base text-blue-100/80 max-w-lg mx-auto leading-relaxed">
            Time remaining until our life-changing encounter at <strong>Maisha Gardens</strong>. Gates open at 3:00 PM EAT.
          </p>
        </div>

        {/* 4 Large Countdown Digits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-8 sm:mb-10">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 hover:border-[#d4af37]/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center transition-all duration-300 shadow-xl overflow-hidden">
                
                {/* Subtle top golden accent shimmer */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Big Number using 'Outfit' Font */}
                <div className="relative mb-2 flex items-center justify-center">
                  <span 
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#f3e5ab] tabular-nums tracking-tighter drop-shadow-md select-none"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>

                {/* Unit Label */}
                <div className="inline-block bg-[#00133a]/80 px-3 py-1 rounded-full border border-white/10">
                  <span className="text-[#f3e5ab] text-[10px] sm:text-xs md:text-sm uppercase font-bold tracking-widest">
                    {unit.label}
                  </span>
                </div>

                {/* Pulse dot on Seconds */}
                {unit.label === 'Seconds' && (
                  <div className="absolute top-3 right-3 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action & Calendar Bar */}
        <div className="max-w-3xl mx-auto bg-black/25 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Quick Date & Venue Info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-blue-100/90 font-medium">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#d4af37]" />
              <span>Tuesday, Dec 1, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              <span>4:00 PM EAT</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>Maisha Gardens, Nakuwadde</span>
            </div>
          </div>

          {/* Right: Quick Action Buttons */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center">
            <button
              onClick={handleAddToGoogleCalendar}
              title="Add to Google Calendar"
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-[#f3e5ab] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Bell className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Remind Me</span>
            </button>

            <button
              onClick={handleShare}
              title="Share with friends"
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white/90 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>

            {onRegisterClick && (
              <button
                onClick={onRegisterClick}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] text-xs font-extrabold transition-all transform hover:scale-105 shadow-md flex items-center gap-1 cursor-pointer"
              >
                <span>Register</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
