/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { EVENT_INFO, VENUE_CHECKLIST } from '../constants';
import { MapPin, Navigation, Car, Bus, Plane, Clock, ShieldCheck, Sun, Moon, CheckCircle2, XCircle, ExternalLink, ArrowRight, Sparkles, Phone, Mail } from 'lucide-react';

export default function VenuePage() {
  const [activeTransportTab, setActiveTransportTab] = useState<'car' | 'transit' | 'group'>('car');

  return (
    <div className="bg-[#f8faff] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader 
        badge="Venue & Map Guide"
        title="Maisha Gardens"
        subtitle="The sacred garden setting for Worship Camp September Edition. Discover parking, grounds layout, and travel directions."
        breadcrumb="Venue & Map"
      />

      {/* 2. Venue Overview & Live Map Section */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual Map Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-video flex items-center justify-center text-center p-8 group">
              {/* Simulated Map / Venue Graphic */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1544427928-c49cdfebf494?auto=format&fit=crop&q=80&w=1200')` 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00173d] via-[#00173d]/60 to-transparent" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] flex items-center justify-center shadow-2xl animate-bounce mb-3">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white mb-1">
                  {EVENT_INFO.locationName}
                </h3>
                <p className="text-blue-100/90 text-sm max-w-md mb-6">
                  {EVENT_INFO.locationAddress}
                </p>

                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EVENT_INFO.locationAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white hover:bg-gray-100 text-[#002366] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-[#d4af37]" />
                </a>
              </div>
            </div>

            {/* Quick Venue Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {EVENT_INFO.venueHighlights.map((hl) => (
                <div key={hl} className="p-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-gray-700 leading-tight">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Event Logistics */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest block">Edition Details</span>
                <h4 className="text-xl font-display font-bold text-[#002366]">Gathering Specs</h4>
              </div>
              <span className="bg-[#002366] text-[#f3e5ab] text-xs font-extrabold px-3 py-1 rounded-full">
                1st Sept 2026
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block">Gate Access & Time</strong>
                  <p className="text-gray-600 text-xs">Gates open at 3:00 PM EAT. Acoustic praise begins at 3:30 PM. Main opening starts at 4:00 PM.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block">Security & Gate Protocol</strong>
                  <p className="text-gray-600 text-xs">Digital QR badges are scanned upon arrival. Dedicated security stewards on site throughout the gathering.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block">Open-Air Atmosphere</strong>
                  <p className="text-gray-600 text-xs">Warm afternoon sun leading into a cool, clear evening under the stars. Bring a warm cardigan or shawl.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <Link 
                to="/register" 
                className="w-full bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-black py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Register to Secure Entrance</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Transportation & Arrival Directions Guide */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-xs mb-2 block">
              Directions & Transport
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#002366]">
              Getting to Maisha Gardens
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Centrally accessible with ample secure on-site parking and dedicated group drop-off bays.
            </p>
          </div>

          {/* Transport Tabs */}
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveTransportTab('car')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTransportTab === 'car'
                  ? 'bg-[#002366] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>By Car / Rideshare (Uber / Bolt)</span>
            </button>
            <button
              onClick={() => setActiveTransportTab('group')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTransportTab === 'group'
                  ? 'bg-[#002366] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Bus className="w-4 h-4" />
              <span>Church Vans & Buses</span>
            </button>
            <button
              onClick={() => setActiveTransportTab('transit')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTransportTab === 'transit'
                  ? 'bg-[#002366] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>Regional & Airport Arrivals</span>
            </button>
          </div>

          {/* Transport Tab Content */}
          <div className="max-w-4xl mx-auto bg-[#f8faff] rounded-3xl p-8 border border-blue-100/60 shadow-md">
            {activeTransportTab === 'car' && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#002366] flex items-center gap-2">
                  <Car className="w-5 h-5 text-[#d4af37]" /> Personal Vehicles & Rideshare
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Search for <strong>"Maisha Gardens"</strong> on Google Maps or Uber/Bolt. The main entrance has a dedicated drop-off loop for swift arrivals. Free, 24/7 guarded parking is available inside the premises for all registered attendees.
                </p>
                <div className="p-4 bg-white rounded-2xl border border-gray-200 text-xs text-gray-700">
                  💡 <strong>Tip:</strong> We recommend arriving between 3:00 PM and 3:30 PM to avoid evening rush-hour traffic and enjoy the acoustic prelude.
                </div>
              </div>
            )}

            {activeTransportTab === 'group' && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#002366] flex items-center gap-2">
                  <Bus className="w-5 h-5 text-[#d4af37]" /> Church Delegations & Youth Group Buses
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Buses and church vans will be marshaled to dedicated coach parking lanes. Group leaders should present their Church Group Pass at Gate B for expedited group wristband allocation.
                </p>
                <div className="p-4 bg-white rounded-2xl border border-gray-200 text-xs text-gray-700">
                  📞 Group coordinators can notify the transport team ahead of time at <strong className="text-[#002366]">register@worshipcamp.org</strong> for reserved bus slots.
                </div>
              </div>
            )}

            {activeTransportTab === 'transit' && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#002366] flex items-center gap-2">
                  <Plane className="w-5 h-5 text-[#d4af37]" /> Out-of-Town & International Attendees
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Worshippers flying into Jomo Kenyatta International Airport (JKIA) or Wilson Airport can easily book an authorized airport taxi or Uber straight to Maisha Gardens (approx. 30–45 mins depending on flight arrival).
                </p>
                <div className="p-4 bg-white rounded-2xl border border-gray-200 text-xs text-gray-700">
                  🏨 Nearby guest houses and partner hotels with special attendee rates are available upon request.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Attendee Checklist: What to Bring */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
            <h3 className="text-xl font-display font-bold text-[#002366] mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> What to Bring to Maisha Gardens
            </h3>
            
            <div className="space-y-3">
              {VENUE_CHECKLIST.map((item) => (
                <div key={item.item} className="flex items-start gap-3 p-3 rounded-2xl bg-[#f8faff] border border-blue-50">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-sm text-gray-900">{item.item}</strong>
                      {item.required && (
                        <span className="text-[10px] uppercase font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
            <h3 className="text-xl font-display font-bold text-[#002366] mb-6 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-rose-600" /> What to Leave at Home
            </h3>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-2">
                <strong className="text-rose-900 block font-bold text-xs uppercase tracking-wider">Restricted Items</strong>
                <ul className="space-y-2 text-xs text-rose-950">
                  <li>• Bulky personal sound amplification or megaphones</li>
                  <li>• Alcoholic beverages, tobacco, or vape devices</li>
                  <li>• Glass bottles or breakable containers</li>
                  <li>• Laser pointers or disruptive flash devices</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                <strong className="text-[#002366] block font-bold text-xs uppercase tracking-wider mb-1">Our Atmosphere Code</strong>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We strive to cultivate an atmosphere of deep honor, reverence, and spiritual focus for every delegate. We kindly ask all attendees to silence mobile phones during the prayer and teaching sessions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
