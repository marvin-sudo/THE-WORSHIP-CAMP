/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { EVENT_INFO } from '../constants';
import { Clock, Calendar, MapPin, Sparkles, Filter, Download, ArrowRight, Music, Flame, BookOpen, Users, CheckCircle } from 'lucide-react';

const DETAILED_SESSIONS = [
  {
    phase: "Phase 1",
    phaseTitle: "Gates Open & Worship Atmosphere",
    time: "03:00 PM - 04:00 PM",
    title: "Gates Open, Pass Verification & Acoustic Praise Prelude",
    type: "Arrival & Atmosphere",
    category: "Arrival",
    location: "Main Gate & Welcome Lawn",
    speaker: "Worship Camp Welcome Collective",
    description: "Digital badge check-in, registration validation, seat allocation in the garden sanctuary, and quiet acoustic strings setting the atmosphere.",
    highlights: ["Express QR Badge Scanning", "Acoustic prelude & prayer walk", "Free program guide distribution"]
  },
  {
    phase: "Phase 1",
    phaseTitle: "Gates Open & Worship Atmosphere",
    time: "04:00 PM - 05:15 PM",
    title: "Grand Opening: Praise Explosion & Holy Spirit Invocation",
    type: "Praise & Worship",
    category: "Worship",
    location: "Main Garden Stage",
    speaker: "Minister Hannah Grace & Zion Sound",
    description: "Unbridled high-energy praise, corporate thanksgiving, and ushering in the Holy Spirit across the Maisha Gardens grounds.",
    highlights: ["Spontaneous prophetic praise", "Corporate declaration of faith", "Atmosphere shift"]
  },
  {
    phase: "Phase 1",
    phaseTitle: "Gates Open & Worship Atmosphere",
    time: "05:15 PM - 06:30 PM",
    title: "Keynote Teaching: 'Awakening the Altar of Devotion'",
    type: "Biblical Exhortation",
    category: "Word",
    location: "Main Garden Stage",
    speaker: "Pastor David Adeleke",
    description: "A foundational apostolic teaching unpacking Romans 12:1-2 and calling young believers into authentic consecration and purity.",
    highlights: ["Deep scriptural revelation", "Q&A insights", "Actionable spiritual disciplines"]
  },
  {
    phase: "Phase 2",
    phaseTitle: "Deep Encounters & Prophetic Ministry",
    time: "06:30 PM - 07:45 PM",
    title: "Extended Altar Ministry, Healing & Personal Breakthrough",
    type: "Revival & Prayer",
    category: "Ministry",
    location: "Central Prayer Lawn & Altars",
    speaker: "Pastor David Adeleke, Dr. Sarah Jenkins & Elders",
    description: "Dedicated ministry time with laying on of hands, personal deliverance, breaking of generational bondages, and prophetic words.",
    highlights: ["Laying on of hands", "Personal intercession altars", "Healing & emotional restoration"]
  },
  {
    phase: "Phase 2",
    phaseTitle: "Deep Encounters & Prophetic Ministry",
    time: "07:45 PM - 08:30 PM",
    title: "Kingdom Fellowship & Refreshment Intermission",
    type: "Community & Breakouts",
    category: "Fellowship",
    location: "Garden Dining & Lounge Zone",
    speaker: "All Attendees & Fellowship Leads",
    description: "Connect with worshippers from different campuses and ministries. Enjoy hot beverages, snacks, and collaborative network discussions.",
    highlights: ["Warm tea & refreshments", "Choir & youth team networking", "Testimony sharing station"]
  },
  {
    phase: "Phase 2",
    phaseTitle: "Deep Encounters & Prophetic Ministry",
    time: "08:30 PM - 10:15 PM",
    title: "Night of Unrestrained Garden Worship Under Open Skies",
    type: "Continuous Worship",
    category: "Worship",
    location: "Main Garden Stage & Fire Pit",
    speaker: "Minister Hannah Grace & Guest Psalmodists",
    description: "Extended intimate worship under the starlit sky. Acoustic hymns, spontaneous spiritual songs, and deep communion with Jesus.",
    highlights: ["Open-sky acoustic worship", "Communion service", "Celestial choir harmony"]
  },
  {
    phase: "Phase 2",
    phaseTitle: "Deep Encounters & Prophetic Ministry",
    time: "10:15 PM - 10:45 PM",
    title: "Anointing Impartation, Benediction & Commissioning",
    type: "Commissioning",
    category: "Ministry",
    location: "Main Garden Stage",
    speaker: "Rev. Michael Thorne & All Ministers",
    description: "Final blessing, anointing oil impartation, and commissioning delegates to carry the fire of revival back to their schools, churches, and workplaces.",
    highlights: ["Anointing with oil", "Commissioning declarations", "Group commemorative photo"]
  }
];

export default function SchedulePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePhaseFilter, setActivePhaseFilter] = useState<string>("All");

  const categories = ["All", "Worship", "Word", "Ministry", "Fellowship", "Arrival"];

  const filteredSessions = DETAILED_SESSIONS.filter((session) => {
    const matchesCategory = selectedCategory === "All" || session.category === selectedCategory;
    const matchesPhase = activePhaseFilter === "All" || session.phase === activePhaseFilter;
    return matchesCategory && matchesPhase;
  });

  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Worship Camp: December Edition");
    const details = encodeURIComponent("Join us for Worship Camp December Edition at Maisha Gardens starting 4:00 PM EAT. Bring your Bible, journal, and warm attire.");
    const location = encodeURIComponent(EVENT_INFO.locationAddress);
    const dates = "20261201T130000Z/20261201T200000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const handleDownloadProgram = () => {
    alert("Worship Camp 2026: December Edition Schedule (PDF format) will download to your device.");
  };

  return (
    <div className="bg-[#f8faff] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader 
        badge="December Edition Flow"
        title="Event Program & Schedule"
        subtitle="Tuesday, 1st December 2026 • Maisha Gardens • Gates Open 3:00 PM • Main Session Starts 4:00 PM EAT"
        breadcrumb="Schedule"
      />

      {/* 2. Top Summary & Calendar Action Bar */}
      <section className="py-8 bg-white border-b border-gray-100 shadow-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          
          {/* Quick Date Pill */}
          <div className="flex items-center gap-3 text-xs font-bold text-[#002366]">
            <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-[#d4af37]">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="font-extrabold text-sm">{EVENT_INFO.dateDetail}</p>
              <p className="text-gray-500 text-[11px]">7+ Hours of Non-Stop Impartation</p>
            </div>
          </div>

          {/* Action Export Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href={generateGoogleCalendarUrl()}
              target="_blank"
              rel="noreferrer"
              className="bg-[#002366] hover:bg-[#0a3d91] text-white text-xs font-bold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Add to Google Calendar</span>
            </a>

            <button 
              onClick={handleDownloadProgram}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Schedule</span>
            </button>
          </div>

        </div>
      </section>

      {/* 3. Filters & Phase Selector */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-6 border-b border-gray-200">
          
          {/* Phase Filter Tabs */}
          <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-2xl">
            <button
              onClick={() => setActivePhaseFilter("All")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activePhaseFilter === "All"
                  ? "bg-[#002366] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              All Phases
            </button>
            <button
              onClick={() => setActivePhaseFilter("Phase 1")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activePhaseFilter === "Phase 1"
                  ? "bg-[#002366] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Phase 1 (3PM - 6:30PM)
            </button>
            <button
              onClick={() => setActivePhaseFilter("Phase 2")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activePhaseFilter === "Phase 2"
                  ? "bg-[#002366] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Phase 2 (6:30PM - 10:45PM)
            </button>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Track:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] shadow-sm font-black"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* 4. Timeline Cards List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredSessions.map((session, idx) => (
              <motion.div
                key={session.title}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Time & Phase Badge Column */}
                  <div className="lg:col-span-3 space-y-2">
                    <div className="inline-flex items-center gap-1.5 bg-[#002366]/5 text-[#002366] text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                      <Sparkles className="w-3 h-3 text-[#d4af37]" />
                      {session.phase}
                    </div>
                    
                    <div className="flex items-center gap-2 text-lg sm:text-xl font-mono font-black text-[#002366]">
                      <Clock className="w-4 h-4 text-[#d4af37]" />
                      <span>{session.time}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{session.location}</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-6 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 text-[#002366]">
                        {session.type}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#002366] leading-snug group-hover:text-[#0a3d91] transition-colors">
                      {session.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {session.description}
                    </p>

                    {/* Highlights bullet tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {session.highlights.map((hl) => (
                        <span key={hl} className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-600 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                          <CheckCircle className="w-3 h-3 text-[#d4af37]" />
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Minister / Speaker Column */}
                  <div className="lg:col-span-3 bg-blue-50/50 p-4 rounded-2xl border border-blue-100/60 flex flex-col justify-between h-full">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-1">
                        Facilitator / Minister
                      </p>
                      <p className="text-sm font-bold text-[#002366]">
                        {session.speaker}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-blue-100">
                      <Link 
                        to="/register" 
                        className="text-xs font-bold text-[#002366] hover:text-[#d4af37] flex items-center gap-1 transition-colors"
                      >
                        <span>Free Event Registration</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </section>

      {/* 5. What to Bring & Prepare Strip */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-display font-bold text-[#002366] mb-3">
            Preparing for the Full Experience
          </h3>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            Gates open at 3:00 PM for acoustic prelude & free check-in. Please arrive on time to secure optimal lawn seating.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/register" 
              className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-black px-8 py-3.5 rounded-full text-sm inline-flex items-center gap-2 shadow-lg shadow-[#d4af37]/20 transition-transform hover:scale-105"
            >
              <span>Register Free Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/venue" 
              className="bg-[#002366] hover:bg-[#0a3d91] text-white font-bold px-8 py-3.5 rounded-full text-sm inline-flex items-center gap-2 shadow-md transition-all"
            >
              <span>View Venue Directions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
