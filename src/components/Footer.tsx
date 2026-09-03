/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Cross, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  BookOpen,
  Bell,
  ShieldCheck,
  ExternalLink,
  MessageCircle,
  Hash,
  Users
} from 'lucide-react';
import { EVENT_INFO, FOOTER_LOGO_URL } from '../constants';

interface FooterProps {
  onRegisterClick: () => void;
}

export default function Footer({ onRegisterClick }: FooterProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Event Updates',
    'Spiritual Devotionals',
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      if (selectedInterests.length > 1) {
        setSelectedInterests(selectedInterests.filter((i) => i !== interest));
      }
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate quick network registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      
      // Store in localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('worship_camp_subscribers') || '[]');
        existing.push({
          email,
          name: firstName || 'Friend',
          interests: selectedInterests,
          date: new Date().toISOString(),
        });
        localStorage.setItem('worship_camp_subscribers', JSON.stringify(existing));
      } catch (err) {
        // Safe fallback
      }
    }, 800);
  };

  return (
    <footer className="bg-white pt-16 sm:pt-20 pb-12 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Subscription Banner Card */}
        <div className="mb-16 sm:mb-20 bg-gradient-to-br from-[#00133a] via-[#002366] to-[#00173d] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl border border-blue-900 text-white">
          {/* Subtle Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#d4af37]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-block bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 mb-4 shadow-sm">
                <span 
                  className="text-[#f3e5ab] text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  STAY CONNECTED & INSPIRED
                </span>
              </div>

              <h3 
                className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Subscribe for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e5ab] to-[#d4af37]">Updates & Devotionals</span>
              </h3>

              <p className="text-sm sm:text-base text-blue-100/80 mb-6 leading-relaxed">
                Join over 2,500+ worshippers. Receive event notifications, gate access updates, prophetic devotionals, and free acoustic chords directly in your inbox.
              </p>

              {/* Resource Value Badges */}
              <div className="flex flex-wrap gap-4 text-xs text-[#f3e5ab] font-medium">
                <div className="flex items-center gap-1.5">
                  <Bell className="w-4 h-4 text-[#d4af37]" />
                  <span>December Edition Alerts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#d4af37]" />
                  <span>Monthly Ministry Letters</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>Zero Spam Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6">
              {isSubscribed ? (
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center animate-fade-in shadow-xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#d4af37]/30">
                    <CheckCircle2 className="w-8 h-8 font-bold" />
                  </div>
                  <h4 
                    className="text-xl sm:text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Welcome to the Fellowship!
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-100/90 max-w-md mx-auto leading-relaxed mb-4">
                    Thank you for subscribing with <strong className="text-white font-semibold">{email}</strong>. We've sent a welcome prayer and devotional guide to your inbox.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubscribed(false);
                      setEmail('');
                      setFirstName('');
                    }}
                    className="text-xs text-[#f3e5ab] hover:underline font-semibold cursor-pointer"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubscribe} 
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xl space-y-4"
                >
                  {/* Topic / Interest Selection Pills */}
                  <div>
                    <label 
                      className="block text-[11px] font-bold text-[#f3e5ab] uppercase tracking-wider mb-2"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      What would you like to receive?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Event Updates',
                        'Spiritual Devotionals',
                        'Worship Chords & Tracks',
                        'Youth Ministry Tips'
                      ].map((topic) => {
                        const active = selectedInterests.includes(topic);
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => toggleInterest(topic)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                              active
                                ? 'bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] shadow-sm font-bold'
                                : 'bg-black/20 hover:bg-black/30 text-white/80 border border-white/15'
                            }`}
                          >
                            {topic}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-5">
                      <input
                        type="text"
                        placeholder="Your Name (Optional)"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 focus:border-[#d4af37] focus:bg-white/15 text-white placeholder-blue-100/50 rounded-xl px-3.5 py-3 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>
                    <div className="sm:col-span-7">
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-blue-200/70" />
                        <input
                          type="email"
                          required
                          placeholder="Enter your email address *"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white/10 border border-white/20 focus:border-[#d4af37] focus:bg-white/15 text-white placeholder-blue-100/50 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-sm outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {errorMsg && (
                    <p className="text-rose-300 text-xs text-left">{errorMsg}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-extrabold py-3.5 rounded-xl font-display text-xs sm:text-sm flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#d4af37]/25 cursor-pointer disabled:opacity-75"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {isSubmitting ? (
                      <span>Subscribing...</span>
                    ) : (
                      <>
                        <span>Join Newsletter & Get Devotionals</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] sm:text-[11px] text-blue-100/60 text-center">
                    We honor your inbox. Unsubscribe anytime with a single click.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Social Media Follow Section */}
        <div className="mb-16 sm:mb-20 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
          {/* Subtle Accent Highlights */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#d4af37]/15 px-3 py-1 rounded-full border border-[#d4af37]/30 mb-3">
                <Users className="w-3.5 h-3.5 text-[#002366]" />
                <span 
                  className="text-[#002366] text-xs font-bold uppercase tracking-widest"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  JOIN OUR ONLINE COMMUNITY
                </span>
              </div>
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002366] tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Connect & Follow <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002366] via-[#0a3d91] to-[#d4af37]">Worship Camp</span>
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1.5 max-w-xl">
                Be part of our vibrant online fellowship. Follow us for live acoustic reels, rehearsal stories, gate announcements, and prayer ministry.
              </p>
            </div>

            {/* Official Hashtag Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {[
                '#WorshipCamp2026',
                '#DecemberEdition',
                '#MaishaGardens',
                '#HolyFire'
              ].map((tag) => (
                <span 
                  key={tag} 
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#002366] bg-[#f8faff] hover:bg-blue-50 px-2.5 sm:px-3 py-1 rounded-lg border border-blue-100 transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <Hash className="w-3 h-3 text-[#d4af37]" />
                  {tag.replace('#', '')}
                </span>
              ))}
            </div>
          </div>

          {/* Social Platforms Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* 1. Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-gradient-to-b from-white to-[#fdfafb] border border-pink-100/80 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
                    15.8K
                  </span>
                </div>
                <h4 
                  className="font-bold text-gray-900 group-hover:text-[#dc2743] text-sm flex items-center gap-1 transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Instagram
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-[11px] text-gray-400 font-mono">@worshipcampug</p>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                  Reels, behind-the-scenes stories & live photo updates.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#dc2743]">
                <span>Follow</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* 2. Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-gradient-to-b from-white to-[#f8faff] border border-blue-100 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                    24K
                  </span>
                </div>
                <h4 
                  className="font-bold text-gray-900 group-hover:text-[#1877F2] text-sm flex items-center gap-1 transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Facebook
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-[11px] text-gray-400 font-mono">Worship Camp Africa</p>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                  Community prayer circles, livestream links & updates.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#1877F2]">
                <span>Join Community</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* 3. X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-gradient-to-b from-white to-[#fafafa] border border-gray-200/80 hover:border-gray-400 hover:shadow-lg hover:shadow-black/5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                    9.4K
                  </span>
                </div>
                <h4 
                  className="font-bold text-gray-900 group-hover:text-black text-sm flex items-center gap-1 transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  X (Twitter)
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-[11px] text-gray-400 font-mono">@worship_camp</p>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                  Real-time schedule notices, gate alerts & quotes.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-black">
                <span>Follow</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* 4. YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-gradient-to-b from-white to-[#fdf8f8] border border-red-100 hover:border-red-300 hover:shadow-lg hover:shadow-red-500/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Youtube className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                    32K
                  </span>
                </div>
                <h4 
                  className="font-bold text-gray-900 group-hover:text-[#FF0000] text-sm flex items-center gap-1 transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  YouTube
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-[11px] text-gray-400 font-mono">Worship Camp Live</p>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                  Full ministrations, acoustic nights & sermon replays.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#FF0000]">
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* 5. WhatsApp Channel */}
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-gradient-to-b from-white to-[#f6fcf8] border border-emerald-100 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    6.5K
                  </span>
                </div>
                <h4 
                  className="font-bold text-gray-900 group-hover:text-[#25D366] text-sm flex items-center gap-1 transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  WhatsApp
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-[11px] text-gray-400 font-mono">Official Channel</p>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                  Instant gate passes, parking routes & prayer desk.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#25D366]">
                <span>Join Channel</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

          </div>
        </div>

        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6 group" aria-label="Worship Camp Home">
              <img 
                src={FOOTER_LOGO_URL} 
                alt="Worship Camp Logo" 
                referrerPolicy="no-referrer"
                className="h-20 sm:h-24 md:h-28 w-auto max-w-[300px] object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
              />
            </Link>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A Christian gathering committed to authentic worship, holy fire, biblical truth, and kingdom community for the next generation at Maisha Gardens.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-gray-50 hover:bg-[#002366] hover:text-[#f3e5ab] text-gray-600 rounded-xl flex items-center justify-center transition-all shadow-sm border border-gray-100"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-gray-50 hover:bg-[#002366] hover:text-[#f3e5ab] text-gray-600 rounded-xl flex items-center justify-center transition-all shadow-sm border border-gray-100"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-gray-50 hover:bg-[#002366] hover:text-[#f3e5ab] text-gray-600 rounded-xl flex items-center justify-center transition-all shadow-sm border border-gray-100"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-gray-50 hover:bg-[#002366] hover:text-[#f3e5ab] text-gray-600 rounded-xl flex items-center justify-center transition-all shadow-sm border border-gray-100"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 
              className="font-bold text-[#002366] uppercase tracking-widest text-xs mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Explore Pages
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-[#d4af37] transition-colors">Home Experience</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-[#d4af37] transition-colors">About the Movement</Link></li>
              <li><Link to="/schedule" className="text-gray-600 hover:text-[#d4af37] transition-colors">Event Schedule & Flow</Link></li>
              <li><Link to="/venue" className="text-gray-600 hover:text-[#d4af37] transition-colors">Maisha Gardens Venue</Link></li>
              <li><Link to="/ministers" className="text-gray-600 hover:text-[#d4af37] transition-colors">Guest Ministers & Speakers</Link></li>
              <li><Link to="/gallery" className="text-gray-600 hover:text-[#d4af37] transition-colors">Atmosphere Gallery</Link></li>
              <li><Link to="/register" className="text-gray-600 hover:text-[#d4af37] transition-colors">Registration & Passes</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-[#d4af37] transition-colors">Contact & FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <h4 
              className="font-bold text-[#002366] uppercase tracking-widest text-xs mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Event Inquiries & Venue
            </h4>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-gray-600">{EVENT_INFO.locationAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span className="text-gray-600">register@worshipcamp.org</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span className="text-gray-600">+256 700 000 000 / +1 (800) WORSHIP-26</span>
              </li>
            </ul>

            <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-[#002366]">Have a group or church choir?</p>
                <p className="text-[11px] text-gray-500">Reserved seating block and express gate access.</p>
              </div>
              <Link 
                to="/register"
                className="bg-[#002366] hover:bg-[#0a3d91] text-white text-xs font-bold px-4 py-2 rounded-full transition-all shrink-0 cursor-pointer"
              >
                Group Pass
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Worship Camp: December Edition. All rights reserved. Built for the Kingdom.</p>
          <div className="flex gap-6 font-medium">
            <Link to="/about" className="hover:text-[#002366] transition-colors">Our Beliefs</Link>
            <Link to="/venue" className="hover:text-[#002366] transition-colors">Directions</Link>
            <Link to="/contact" className="hover:text-[#002366] transition-colors">Support & FAQs</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
