/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Volume2, VolumeX, Cross, Shield, Calendar, MapPin } from 'lucide-react';
import { IMAGES, TYPING_PHRASES, EVENT_INFO, HERO_VIDEO_URL } from '../constants';
import { worshipAudio } from '../utils/audioPad';

interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Typing effect loop across phrases
  useEffect(() => {
    const currentFullPhrase = TYPING_PHRASES[phraseIdx];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentFullPhrase.length) {
      timer = setTimeout(() => {
        setDisplayText(currentFullPhrase.slice(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentFullPhrase.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentFullPhrase.slice(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % TYPING_PHRASES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIdx]);

  const toggleWorshipSound = () => {
    const newState = worshipAudio.toggle();
    setIsAudioPlaying(newState);
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#00133a]">
      {/* Background Video & Fallback Image with Royal Blue Gradient Mask */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={IMAGES.hero}
          className="w-full h-full object-cover object-center opacity-50 scale-105 transform"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
          <img 
            src={IMAGES.hero} 
            alt="Worship Camp Atmosphere" 
            className="w-full h-full object-cover object-center opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
        </video>
        {/* Deep Royal Blue Spiritual Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00133a] via-[#002366]/85 to-[#00133a]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-[#00133a]/90" />
      </div>

      {/* Floating Radiant Glow & Light Rays */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {/* Soft rotating celestial light beam */}
        <div className="absolute -top-40 sm:-top-72 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] md:w-[800px] h-[350px] sm:h-[600px] md:h-[800px] bg-gradient-to-b from-[#d4af37]/20 via-blue-500/10 to-transparent rounded-full blur-[100px] sm:blur-[140px] animate-soft-pulse pointer-events-none" />

        {/* Ambient Light Ray Beams - Hidden on small mobile to avoid layout shifts */}
        <div className="hidden sm:block">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.08, rotate: -20 + i * 10 }}
              animate={{ 
                opacity: [0.08, 0.2, 0.08],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6 + i * 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-40 left-1/2 w-4 md:w-8 h-[1000px] origin-top bg-gradient-to-b from-white/20 via-blue-300/10 to-transparent blur-xl"
              style={{ transform: `translateX(${(i - 2) * 150}px) rotate(${-15 + i * 7}deg)` }}
            />
          ))}
        </div>

        {/* Ambient floating luminous particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            initial={{ 
              x: `${(i * 12) + 6}%`, 
              y: `${70 + (i % 4) * 6}%`, 
              opacity: 0.2 
            }}
            animate={{ 
              y: [`${70 + (i % 4) * 6}%`, `${15 + (i % 3) * 12}%`],
              opacity: [0.2, 0.7, 0],
              scale: [0.8, 1.3, 0.8]
            }}
            transition={{
              duration: 8 + (i % 4) * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            className="absolute w-2 h-2 rounded-full bg-[#f3e5ab] blur-[1px]"
          />
        ))}
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 max-w-3xl text-left"
          >
            {/* Top Brand & Edition Tag */}
            <div className="mb-4 sm:mb-6 inline-flex flex-wrap items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/15">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f7e49e] animate-ping" />
              <span className="text-[#f3e5ab] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-extrabold text-[10px] sm:text-xs">
                <span className="sm:hidden">DECEMBER EDITION</span>
                <span className="hidden sm:inline">DECEMBER EDITION • 1ST DEC 2026 • 4PM EAT</span>
              </span>
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] text-[9px] sm:text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                Maisha Gardens
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-4 sm:mb-6 tracking-tight">
              Experience God <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e5ab] to-[#d4af37]">
                Like Never Before
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-6 sm:mb-8 leading-relaxed font-light">
              Join Worship Camp for a life-changing encounter of praise, word, and fellowship at <strong>Maisha Gardens</strong>. Step out of the noise and into the secret place.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button 
                onClick={onRegisterClick}
                className="w-full sm:w-auto bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-black px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-display text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all transform hover:scale-105 shadow-xl shadow-[#d4af37]/30 group cursor-pointer"
              >
                <span>Register Free Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link 
                to="/venue"
                className="w-full sm:w-auto border-2 border-white/40 hover:border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all backdrop-blur-md inline-flex items-center justify-center text-center"
              >
                Venue & Map Guide
              </Link>

              {/* Worship Pad Audio Atmosphere Toggle */}
              <button
                onClick={toggleWorshipSound}
                className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full border text-xs font-semibold backdrop-blur-md transition-all cursor-pointer ${
                  isAudioPlaying
                    ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#f3e5ab]'
                    : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10'
                }`}
                title="Toggle ambient background praise chords"
              >
                {isAudioPlaying ? (
                  <>
                    <Volume2 className="w-4 h-4 text-[#d4af37] animate-pulse" />
                    <span>Pad Audio Active</span>
                    <span className="flex gap-0.5 items-end h-3">
                      <span className="w-0.5 bg-[#d4af37] h-full animate-bounce" />
                      <span className="w-0.5 bg-[#d4af37] h-2/3 animate-bounce delay-75" />
                      <span className="w-0.5 bg-[#d4af37] h-full animate-bounce delay-150" />
                    </span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4 text-gray-400" />
                    <span>Atmosphere Sound</span>
                  </>
                )}
              </button>
            </div>

            {/* Dynamic Typing Text Banner */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-2.5 sm:gap-3">
              <div className="min-h-[26px] flex items-center">
                <span className="text-[#f3e5ab] font-mono text-xs sm:text-sm md:text-base tracking-wider font-medium">
                  {displayText}
                  <span className="inline-block w-1.5 h-3.5 bg-[#d4af37] ml-1 animate-pulse" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Badge / Glowing Cross Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center relative"
          >
            {/* Glowing Cross Card */}
            <div className="relative w-full max-w-sm bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl text-center">
              
              {/* Outer Golden Cross Aura */}
              <div className="relative w-28 h-28 mx-auto mb-5 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#d4af37] rounded-full blur-2xl opacity-40 animate-soft-pulse" />
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#002366] to-[#00133a] border-2 border-[#d4af37] flex items-center justify-center shadow-2xl relative z-10">
                  <Cross className="w-10 h-10 text-[#f3e5ab]" />
                </div>
              </div>

              <div className="inline-block bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] text-[10px] font-black uppercase px-3.5 py-1 rounded-full mb-3 tracking-wider shadow-md">
                December Edition
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-2">
                Divine Encounters
              </h3>
              <p className="text-xs text-blue-100/70 leading-relaxed mb-5">
                “Where two or three are gathered in My name, there am I among them.”
              </p>

              {/* Event Mini Meta */}
              <div className="space-y-2 text-left bg-black/20 p-3.5 rounded-2xl border border-white/10 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span className="font-semibold">{EVENT_INFO.dateDetail || EVENT_INFO.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span className="truncate">{EVENT_INFO.locationName} • 4:00 PM EAT</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
