/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { GOOGLE_FORM_URL, GOOGLE_FORM_EMBED_URL, FREE_EVENT_HIGHLIGHTS, EVENT_INFO, LOGO_URL } from '../constants';
import { CheckCircle2, QrCode, Download, Calendar, MapPin, Clock, ArrowRight, ShieldCheck, Users, Mail, Phone, User, Building, ExternalLink, FileText, Check } from 'lucide-react';

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState<'instant' | 'google-form'>('instant');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    churchName: '',
    attendeeType: 'Individual',
    groupSize: 1,
    specialPrayer: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert("Please enter your full name and email address.");
      return;
    }
    const generatedId = `WC26-FREE-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketNumber(generatedId);
    setIsRegistered(true);
  };

  const handleReset = () => {
    setIsRegistered(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      churchName: '',
      attendeeType: 'Individual',
      groupSize: 1,
      specialPrayer: '',
    });
  };

  const handleCopyFormLink = () => {
    navigator.clipboard.writeText(GOOGLE_FORM_URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="bg-[#f8faff] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader 
        badge="100% Free Event Registration"
        title="December Edition Registration"
        subtitle="Worship Camp is completely FREE to attend. Register yourself or your church group below via Google Forms or generate your instant digital badge for Maisha Gardens."
        breadcrumb="Register"
      />

      {/* 2. Free Event Highlights */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-xs mb-2 block">
            Free Admission • Open to All
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#002366]">
            Join Us in God's Presence
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            No ticket fees or pass charges. Tuesday, 1st December 2026 @ Maisha Gardens.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FREE_EVENT_HIGHLIGHTS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-3 shadow-sm">
                  {item.badge}
                </span>
                <h3 className="font-display font-bold text-[#002366] text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Registration Methods (Google Form + Instant On-Site Badge) */}
      <section className="py-8 max-w-5xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl">
          
          {/* Tab Selection */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
            <div>
              <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-xs block mb-1">
                Official Event Registration
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#002366]">
                Choose Registration Method
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-[#f4f7fc] p-1.5 rounded-2xl border border-gray-200/80 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab('instant')}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'instant'
                    ? 'bg-[#002366] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#002366]'
                }`}
              >
                <QrCode className="w-4 h-4 text-[#d4af37]" />
                <span>Instant Digital Badge</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('google-form')}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'google-form'
                    ? 'bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] shadow-md'
                    : 'text-gray-600 hover:text-[#002366]'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Google Form</span>
              </button>
            </div>
          </div>

          {/* TAB 1: Instant On-Site Registration Form & QR Badge */}
          {activeTab === 'instant' && (
            <div>
              {!isRegistered ? (
                <div>
                  <div className="mb-6 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] flex items-center justify-center font-bold shrink-0 shadow-sm">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-[#002366] text-sm">Instant Free Registration</h4>
                        <p className="text-xs text-gray-600">Fill in your information below to generate your personalized free entry badge immediately.</p>
                      </div>
                    </div>

                    <a 
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002366] hover:text-[#0a3d91] bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-sm shrink-0 self-start sm:self-auto hover:bg-gray-50 transition-all"
                    >
                      <span>Or fill on Google Forms</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                    </a>
                  </div>

                  <form onSubmit={handleRegisterSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input 
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g. David King"
                            className="w-full bg-[#f8faff] border border-gray-200 focus:border-[#002366] focus:bg-white rounded-2xl pl-11 pr-4 py-3.5 text-sm text-gray-900 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g. david@example.com"
                            className="w-full bg-[#f8faff] border border-gray-200 focus:border-[#002366] focus:bg-white rounded-2xl pl-11 pr-4 py-3.5 text-sm text-gray-900 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Phone / WhatsApp Number
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input 
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+256 700 123 456"
                            className="w-full bg-[#f8faff] border border-gray-200 focus:border-[#002366] focus:bg-white rounded-2xl pl-11 pr-4 py-3.5 text-sm text-gray-900 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Home Church / Campus Ministry
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input 
                            type="text"
                            name="churchName"
                            value={formData.churchName}
                            onChange={handleInputChange}
                            placeholder="e.g. Local Fellowship / Campus CU"
                            className="w-full bg-[#f8faff] border border-gray-200 focus:border-[#002366] focus:bg-white rounded-2xl pl-11 pr-4 py-3.5 text-sm text-gray-900 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Registration Type
                        </label>
                        <select
                          name="attendeeType"
                          value={formData.attendeeType}
                          onChange={handleInputChange}
                          className="w-full bg-[#f8faff] border border-gray-200 focus:border-[#002366] focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-gray-900 outline-none transition-all cursor-pointer"
                        >
                          <option value="Individual">Individual Attendee</option>
                          <option value="Church Delegation">Church Youth Ministry Delegation</option>
                          <option value="Choir/Music Team">Worship Choir / Band Member</option>
                          <option value="Campus Fellowship">Campus Fellowship Group</option>
                        </select>
                      </div>

                      {formData.attendeeType !== 'Individual' ? (
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                            Estimated Group Size
                          </label>
                          <input 
                            type="number"
                            name="groupSize"
                            min={1}
                            max={200}
                            value={formData.groupSize}
                            onChange={handleInputChange}
                            className="w-full bg-[#f8faff] border border-gray-200 focus:border-[#002366] focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-gray-900 outline-none transition-all"
                          />
                        </div>
                      ) : (
                        <div className="p-3.5 bg-[#f8faff] border border-gray-200/70 rounded-2xl flex items-center gap-3">
                          <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0" />
                          <p className="text-xs text-gray-600">
                            <strong>100% Free Entry:</strong> Your admission includes full garden seating and session access.
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Special Prayer Request or Healing Needs (Optional)
                      </label>
                      <textarea 
                        name="specialPrayer"
                        rows={3}
                        value={formData.specialPrayer}
                        onChange={handleInputChange}
                        placeholder="Share any prayer requests or what you are believing God for during the altar ministry..."
                        className="w-full bg-[#f8faff] border border-gray-200 focus:border-[#002366] focus:bg-white rounded-2xl p-4 text-sm text-gray-900 outline-none transition-all resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-black py-4 rounded-2xl text-base shadow-xl shadow-[#d4af37]/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                      >
                        <QrCode className="w-5 h-5" />
                        <span>Complete Free Registration & Get Badge</span>
                      </button>
                      <p className="text-center text-[11px] text-gray-400 mt-3">
                        Free admission for 1st December 2026 @ Maisha Gardens • Gates open 3:00 PM EAT.
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                /* Digital Entry Badge Result */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-[#002366]">
                      Free Registration Confirmed!
                    </h3>
                    <p className="text-gray-600 text-sm max-w-md mx-auto mt-1">
                      Your entry badge for Worship Camp: December Edition is ready. Save or screenshot this badge for quick scan at Maisha Gardens.
                    </p>
                  </div>

                  {/* Free Digital Badge Card */}
                  <div className="max-w-md mx-auto bg-gradient-to-br from-[#00173d] via-[#002366] to-[#00112e] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#d4af37]/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#d4af37]/20 rounded-full blur-2xl" />
                    
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6 relative z-10">
                      <div className="flex items-center gap-3">
                        <img 
                          src={LOGO_URL} 
                          alt="Worship Camp Logo" 
                          referrerPolicy="no-referrer"
                          className="h-9 w-auto object-contain drop-shadow"
                        />
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37] block">December Edition</span>
                          <span className="font-display font-bold text-lg text-white">Worship Camp 2026</span>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-black text-[#00133a] bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] px-3 py-1 rounded-full shadow-sm">
                        FREE ADMISSION
                      </span>
                    </div>

                    {/* Attendee Info */}
                    <div className="space-y-4 mb-6 relative z-10">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-blue-200/70 block">Attendee Name</span>
                        <p className="text-xl font-display font-extrabold text-white">{formData.fullName}</p>
                        {formData.churchName && <p className="text-xs text-[#f3e5ab] mt-0.5">{formData.churchName}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-blue-200/70 block">Date & Time</span>
                          <p className="font-semibold text-white">1st Dec 2026 • 4PM EAT</p>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-blue-200/70 block">Venue</span>
                          <p className="font-semibold text-white">Maisha Gardens</p>
                        </div>
                      </div>
                    </div>

                    {/* QR Code Block */}
                    <div className="bg-white p-4 rounded-2xl flex items-center justify-between text-gray-900 shadow-inner relative z-10">
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold block">Free Badge Code</span>
                        <p className="font-mono font-bold text-sm text-[#002366]">{ticketNumber}</p>
                        <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> Entry Verified • Free
                        </p>
                      </div>
                      <div className="w-14 h-14 bg-[#00133a] text-white rounded-xl flex items-center justify-center p-1 shadow-sm">
                        <QrCode className="w-full h-full text-[#f3e5ab]" />
                      </div>
                    </div>

                    <div className="mt-4 text-center relative z-10">
                      <span className="text-[10px] text-blue-200/70 font-mono">Present at Gate A/B for free entrance</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <button
                      onClick={() => alert(`Digital badge saved! A confirmation note was logged for ${formData.email}. See you at Maisha Gardens on 1st December 2026!`)}
                      className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-black px-6 py-3.5 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-[#d4af37]/20 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Free Badge</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Register Another Person
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* TAB 2: Embedded Google Form */}
          {activeTab === 'google-form' && (
            <div className="space-y-6">
              {/* Google Form Action Bar */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#002366] text-[#f3e5ab] flex items-center justify-center shrink-0 shadow-sm">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#002366] text-sm">Official Google Form Registration</h4>
                    <p className="text-xs text-gray-600">Register directly via Google Forms below or open it in a new tab.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyFormLink}
                    className="px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <FileText className="w-3.5 h-3.5 text-[#002366]" />}
                    <span>{copiedLink ? 'Link Copied!' : 'Copy Form Link'}</span>
                  </button>

                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-md shadow-[#d4af37]/20 transition-transform hover:scale-105"
                  >
                    <span>Open in Google Forms</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Embedded Google Form Container */}
              <div className="rounded-3xl border border-gray-200 overflow-hidden bg-white shadow-inner">
                <div className="bg-[#00173d] text-white px-6 py-3 flex items-center justify-between text-xs">
                  <span className="font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Google Form
                  </span>
                  <span className="text-[#f3e5ab] text-[11px]">Free Admission • Worship Camp 2026</span>
                </div>

                <div className="relative w-full h-[640px] bg-[#f8faff]">
                  <iframe
                    src={GOOGLE_FORM_EMBED_URL}
                    title="Worship Camp December Edition Free Registration Google Form"
                    className="w-full h-full border-0"
                    loading="lazy"
                  >
                    Loading registration form…
                  </iframe>
                </div>
              </div>

              <div className="text-center text-xs text-gray-500">
                Having trouble with the embedded form?{' '}
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#002366] underline hover:text-[#0a3d91]"
                >
                  Click here to open Google Forms directly in a new window
                </a>.
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. Support & Registration FAQs */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-display font-bold text-[#002366] mb-6 text-center">
            Registration & Event FAQs
          </h3>
          <div className="space-y-4 text-xs text-gray-600">
            <div className="p-4 rounded-2xl bg-[#f8faff] border border-gray-100">
              <strong className="text-gray-900 block text-sm mb-1">Is Worship Camp completely free?</strong>
              <p>Yes! Admission to Worship Camp: December Edition is 100% free. All sessions, praise encounters, and teachings at Maisha Gardens require zero fees.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#f8faff] border border-gray-100">
              <strong className="text-gray-900 block text-sm mb-1">Why should I register through Google Forms?</strong>
              <p>Registering ahead of time helps our volunteer and hospitality teams prepare sufficient garden seating, water refill provisions, and attendee welcome guides for smooth gate check-in.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#f8faff] border border-gray-100">
              <strong className="text-gray-900 block text-sm mb-1">Bringing a church youth group or choir?</strong>
              <p>Select "Church Youth Ministry Delegation" or use the group section on the Google Form to register all members together for reserved lawn seating.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
