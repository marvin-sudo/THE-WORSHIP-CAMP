/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { X, MapPin, Navigation, Car, Bus, Plane, ExternalLink, CheckCircle } from 'lucide-react';
import { EVENT_INFO } from '../constants';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LocationModal({ isOpen, onClose }: LocationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#00133a]/80 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative z-10 w-full max-w-3xl bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 my-8"
      >
        <div className="bg-[#002366] text-white p-6 md:p-8 flex justify-between items-start relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#d4af37] block mb-1">
              Camp Ground & Travel Guide
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              {EVENT_INFO.locationName}
            </h3>
            <p className="text-blue-100/80 text-sm mt-1 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#d4af37]" /> {EVENT_INFO.locationAddress}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Stylized Mountain Retreat Map Visual */}
          <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shadow-inner flex items-center justify-center text-center p-6 group">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
            
            {/* Stylized Pin Marker */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] via-[#f7e49e] to-[#c59b27] flex items-center justify-center text-[#00133a] shadow-xl shadow-[#d4af37]/40 animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="bg-white/95 text-[#002366] px-4 py-2 rounded-xl shadow-lg mt-3 text-xs font-bold border border-[#d4af37]/30">
                <p className="font-display font-bold">{EVENT_INFO.locationName}</p>
                <p className="text-[10px] text-gray-500 font-mono">Maisha Gardens • Nairobi, East Africa</p>
              </div>
            </div>

            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EVENT_INFO.locationAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#002366] px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
            >
              Open in Google Maps <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
            </a>
          </div>

          {/* Venue Highlights */}
          <div>
            <h4 className="font-bold text-[#002366] text-sm uppercase tracking-wider mb-3">
              Maisha Gardens Venue Features
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {EVENT_INFO.venueHighlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-700 bg-blue-50/50 px-3.5 py-2.5 rounded-xl border border-blue-100/60">
                  <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Getting there options */}
          <div className="grid md:grid-cols-3 gap-4 pt-2">
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#002366] flex items-center justify-center mb-3">
                <Car className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-[#002366] text-sm mb-1">By Car / Rideshare</h5>
              <p className="text-xs text-gray-600">Ample free secure parking available on-site at Maisha Gardens. Drop-off zone at main gates.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#002366] flex items-center justify-center mb-3">
                <Bus className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-[#002366] text-sm mb-1">Public Transit & Vans</h5>
              <p className="text-xs text-gray-600">Easily accessible via local transit routes. Church delegations and group vans have dedicated parking bays.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#002366] flex items-center justify-center mb-3">
                <Plane className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-[#002366] text-sm mb-1">Regional Arrivals</h5>
              <p className="text-xs text-gray-600">For out-of-town worshippers, Maisha Gardens is centrally reachable from major Nairobi transport hubs.</p>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-100">
            <button
              onClick={onClose}
              className="bg-[#002366] text-white px-8 py-2.5 rounded-full font-bold text-sm hover:bg-[#0a3d91] transition-all"
            >
              Got It
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
