/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CountdownTimer from '../components/CountdownTimer';
import About from '../components/About';
import Expectations from '../components/Expectations';
import ScheduleSection from '../components/ScheduleSection';
import EventDetails from '../components/EventDetails';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import FAQSection from '../components/FAQSection';
import { ArrowRight, MapPin, Calendar, Clock } from 'lucide-react';
import { EVENT_INFO } from '../constants';

interface HomePageProps {
  onRegisterClick: () => void;
  onOpenMap: () => void;
  onPhotoClick: (id: number) => void;
}

export default function HomePage({ onRegisterClick, onOpenMap, onPhotoClick }: HomePageProps) {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero onRegisterClick={onRegisterClick} />

      {/* Quick Info & Navigation Strip */}
      <section className="bg-[#00173d] text-white py-6 border-y border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-blue-100/90">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="font-extrabold text-[#f3e5ab] uppercase tracking-wider">December Edition:</span>
                <span>{EVENT_INFO.dateDetail}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#d4af37]" />
                <span>{EVENT_INFO.time}</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>{EVENT_INFO.locationName}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link 
                to="/register" 
                className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-black text-xs px-4 py-2 rounded-full transition-transform hover:scale-105 shadow-md shadow-[#d4af37]/20 inline-flex items-center gap-1.5"
              >
                <span>Register Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link 
                to="/venue" 
                className="text-xs font-bold text-white/80 hover:text-white border border-white/20 px-3.5 py-1.5 rounded-full hover:bg-white/5 transition-colors"
              >
                Venue Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Live Countdown Timer until December 1st, 2026 */}
      <CountdownTimer onRegisterClick={onRegisterClick} />

      {/* 3. About Section */}
      <About onRegisterClick={onRegisterClick} />

      {/* 3. Expectations / Features */}
      <Expectations onRegisterClick={onRegisterClick} />

      {/* 4. Schedule & Flow */}
      <ScheduleSection onRegisterClick={onRegisterClick} />

      {/* 5. Event Details & Live Countdown */}
      <EventDetails 
        onOpenMap={onOpenMap} 
        onRegisterClick={onRegisterClick} 
      />

      {/* 7. Gallery / Experience */}
      <Gallery onPhotoClick={onPhotoClick} />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Final Call to Action */}
      <CTA onRegisterClick={onRegisterClick} />

      {/* 10. FAQ Section */}
      <FAQSection />
    </div>
  );
}
