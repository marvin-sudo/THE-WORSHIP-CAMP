/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Sparkles, ArrowRight, ShieldCheck, Download, Calendar, MapPin, User, Mail, Phone, Church, ExternalLink, FileText, QrCode } from 'lucide-react';
import { GOOGLE_FORM_URL, GOOGLE_FORM_EMBED_URL, EVENT_INFO, LOGO_URL } from '../constants';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [activeMode, setActiveMode] = useState<'instant' | 'google-form'>('instant');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [badgeId, setBadgeId] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    churchOrCity: '',
    attendeeType: 'Individual Attendee',
    specialNotes: ''
  });

  const handleRegisterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    const generatedId = `WC26-FREE-${Math.floor(100000 + Math.random() * 900000)}`;
    setBadgeId(generatedId);
    setIsConfirmed(true);
  };

  const handleResetAndClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-[#00133a]/80 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative z-10 w-full max-w-3xl bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 my-8"
      >
        {/* Modal Header */}
        <div className="bg-[#002366] text-white p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#d4af37]/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex justify-between items-start relative z-10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] mb-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> 100% FREE ADMISSION
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                {isConfirmed ? 'Registration Confirmed!' : 'September Edition Registration'}
              </h3>
              <p className="text-blue-100/80 text-sm mt-1">
                {isConfirmed 
                  ? 'Your digital badge for Maisha Gardens is ready. We look forward to worshipping with you!' 
                  : '1st September 2026 @ Maisha Gardens • Gates Open 3:00 PM • Starts 4:00 PM EAT'}
              </p>
            </div>
            <button 
              onClick={handleResetAndClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isConfirmed && (
            <div className="flex items-center gap-2 mt-6 relative z-10">
              <div className="bg-white/10 p-1 rounded-2xl flex items-center gap-1 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveMode('instant')}
                  className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeMode === 'instant'
                      ? 'bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] shadow-sm font-black'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instant Badge</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMode('google-form')}
                  className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeMode === 'google-form'
                      ? 'bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] shadow-sm font-black'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Google Form View</span>
                </button>
              </div>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#f3e5ab] hover:underline ml-auto"
              >
                <span>Open Google Form ↗</span>
              </a>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
          {!isConfirmed ? (
            activeMode === 'instant' ? (
              <form onSubmit={handleRegisterSubmit} className="space-y-5">
                <div className="bg-gradient-to-r from-amber-500/10 via-yellow-400/10 to-amber-500/5 border border-amber-300/40 rounded-2xl p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-[#d4af37] shrink-0" />
                    <div>
                      <p className="text-xs text-amber-950 font-bold">100% Free Event Admission</p>
                      <p className="text-[11px] text-amber-900/80">No ticket charges. Open garden sanctuary seating at Maisha Gardens.</p>
                    </div>
                  </div>
                  <a 
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#002366] hover:underline flex items-center gap-1 shrink-0 bg-white/80 px-2.5 py-1 rounded-lg border border-amber-200"
                  >
                    <span>Google Forms</span>
                    <ExternalLink className="w-3 h-3 text-[#d4af37]" />
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
                      <input 
                        type="text"
                        required
                        placeholder="e.g. David King"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
                      <input 
                        type="email"
                        required
                        placeholder="e.g. david@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10 outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
                      <input 
                        type="tel"
                        placeholder="e.g. +254 700 123 456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Home Church / Campus Ministry
                    </label>
                    <div className="relative">
                      <Church className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
                      <input 
                        type="text"
                        placeholder="e.g. Nairobi Chapel"
                        value={formData.churchOrCity}
                        onChange={(e) => setFormData({ ...formData, churchOrCity: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10 outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Attendance Category
                  </label>
                  <select 
                    value={formData.attendeeType}
                    onChange={(e) => setFormData({ ...formData, attendeeType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10 outline-none text-sm bg-white"
                  >
                    <option value="Individual Attendee">Individual Attendee (Free Entry)</option>
                    <option value="Church Youth Delegation">Church Youth Delegation</option>
                    <option value="Worship Choir / Band Member">Worship Choir / Band Member</option>
                    <option value="Campus Fellowship Group">Campus Fellowship Group</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Prayer Requests (Optional)
                  </label>
                  <textarea 
                    rows={2}
                    placeholder="Share what you are believing God for during this September Edition..."
                    value={formData.specialNotes}
                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10 outline-none text-sm resize-none"
                  />
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 rounded-full font-medium text-gray-600 hover:bg-gray-100 transition-colors text-sm cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] px-8 py-3 rounded-full font-black text-sm flex items-center gap-2 transition-all shadow-lg shadow-[#d4af37]/20 cursor-pointer"
                  >
                    Complete Free Registration <Check className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              /* Embedded Google Form Option in Modal */
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-blue-50 p-3.5 rounded-2xl border border-blue-100">
                  <span className="text-xs font-bold text-[#002366]">Fill out Google Form below:</span>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 shadow-sm"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="h-[460px] rounded-2xl border border-gray-200 overflow-hidden bg-gray-50">
                  <iframe
                    src={GOOGLE_FORM_EMBED_URL}
                    title="Google Form Registration"
                    className="w-full h-full border-0"
                  >
                    Loading form…
                  </iframe>
                </div>
              </div>
            )
          ) : (
            /* Confirmation Step */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-display font-bold text-[#002366]">You're Registered for Free!</h4>
                <p className="text-gray-600 text-sm max-w-md mx-auto mt-1">
                  Your spot for Worship Camp: September Edition at Maisha Gardens is confirmed.
                </p>
              </div>

              {/* Free Digital Badge */}
              <div className="max-w-md mx-auto bg-gradient-to-br from-[#002366] to-[#00133a] rounded-3xl p-6 text-white text-left shadow-xl relative overflow-hidden border border-[#d4af37]/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-2xl" />
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={LOGO_URL} 
                      alt="Worship Camp Logo" 
                      referrerPolicy="no-referrer"
                      className="h-9 w-auto object-contain drop-shadow"
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37]">September Edition</span>
                      <h5 className="font-display font-bold text-base text-white">Worship Camp 2026</h5>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] px-2.5 py-0.5 rounded-full font-black shadow-sm">
                      FREE ENTRY
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                  <div>
                    <span className="text-white/60 block">ATTENDEE</span>
                    <strong className="text-white text-sm">{formData.fullName || 'Worship Leader'}</strong>
                  </div>
                  <div>
                    <span className="text-white/60 block">BADGE ID</span>
                    <strong className="text-[#f3e5ab] font-mono text-sm">{badgeId}</strong>
                  </div>
                  <div>
                    <span className="text-white/60 block">DATE & TIME</span>
                    <strong className="text-white">1st Sept 2026 @ 4:00 PM EAT</strong>
                  </div>
                  <div>
                    <span className="text-white/60 block">VENUE</span>
                    <strong className="text-white">Maisha Gardens</strong>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Gates Open: 3:00 PM EAT</span>
                  </div>
                  <span className="text-[#f3e5ab] font-semibold flex items-center gap-1">
                    <QrCode className="w-3.5 h-3.5 text-[#d4af37]" /> Gate Ready
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => alert(`Digital badge downloaded for ${formData.fullName}! See you at Maisha Gardens on 1st September 2026 at 4:00 PM EAT.`)}
                  className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] px-6 py-2.5 rounded-full font-black text-sm flex items-center gap-2 shadow-md shadow-[#d4af37]/20 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Download Free Badge
                </button>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2.5 rounded-full font-medium text-sm transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
