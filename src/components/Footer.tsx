/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Cross, Heart, ArrowRight } from 'lucide-react';
import { EVENT_INFO, FOOTER_LOGO_URL } from '../constants';

interface FooterProps {
  onRegisterClick: () => void;
}

export default function Footer({ onRegisterClick }: FooterProps) {
  return (
    <footer className="bg-white pt-20 pb-12 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        
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
            <h4 className="font-display font-bold text-[#002366] uppercase tracking-widest text-xs mb-6">
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
            <h4 className="font-display font-bold text-[#002366] uppercase tracking-widest text-xs mb-6">
              Event Inquiries & Venue
            </h4>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-gray-600">{EVENT_INFO.locationAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="text-gray-600">register@worshipcamp.org</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="text-gray-600">+254 700 000 000 / +1 (800) WORSHIP-26</span>
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
          <p>© 2026 Worship Camp: September Edition. All rights reserved. Built for the Kingdom.</p>
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
