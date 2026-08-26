/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Cross, Calendar, MapPin } from 'lucide-react';
import { NAV_LINKS, EVENT_INFO, LOGO_URL } from '../constants';

interface NavbarProps {
  onRegisterClick: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const showDarkHeader = isScrolled || !isHomePage;

  const leftNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Venue & Map', path: '/venue' },
  ];

  const rightNavLinks = [
    { name: 'Ministers', path: '/ministers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ & Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        showDarkHeader 
          ? 'bg-[#00173d]/95 backdrop-blur-md shadow-lg py-2 sm:py-2.5 border-b border-white/10' 
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Desktop 3-Column Navigation with Logo in the Middle */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] items-center w-full gap-4 xl:gap-8">
          
          {/* Left Nav Links */}
          <div className="flex items-center justify-start gap-4 xl:gap-6">
            {leftNavLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => 
                  `text-xs font-bold uppercase tracking-wider transition-all px-2.5 py-1 rounded-full whitespace-nowrap ${
                    isActive 
                      ? 'text-[#d4af37] bg-white/10 shadow-inner' 
                      : 'text-blue-100/80 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Centered Desktop Logo */}
          <div className="flex items-center justify-center px-4">
            <Link to="/" className="flex items-center justify-center group py-0.5" aria-label="Worship Camp Home">
              <img 
                src={LOGO_URL} 
                alt="Worship Camp Logo" 
                referrerPolicy="no-referrer"
                className="h-16 sm:h-20 md:h-22 w-auto max-w-[260px] object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Right Nav Links & Pass CTA */}
          <div className="flex items-center justify-end gap-4 xl:gap-6">
            {rightNavLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => 
                  `text-xs font-bold uppercase tracking-wider transition-all px-2.5 py-1 rounded-full whitespace-nowrap ${
                    isActive 
                      ? 'text-[#d4af37] bg-white/10 shadow-inner' 
                      : 'text-blue-100/80 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <button 
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] hover:from-[#e5c158] hover:via-[#fcf0b8] hover:to-[#d4af37] text-[#00133a] font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-md shadow-[#d4af37]/30 cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Register Free</span>
            </button>
          </div>

        </div>

        {/* Mobile Header (Shown on screens < lg) */}
        <div className="flex lg:hidden justify-between items-center w-full">
          <Link to="/" className="flex items-center group py-0.5" aria-label="Worship Camp Home">
            <img 
              src={LOGO_URL} 
              alt="Worship Camp Logo" 
              referrerPolicy="no-referrer"
              className="h-14 w-auto max-w-[200px] object-contain drop-shadow-md"
            />
          </Link>

          <div className="flex items-center gap-3">
            <button 
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] font-black text-xs px-3.5 py-2 rounded-full shadow-md shadow-[#d4af37]/20 cursor-pointer"
            >
              Register
            </button>

            <button 
              className="p-2 rounded-xl transition-colors text-white bg-white/10 hover:bg-white/20 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#001333] shadow-2xl border-t border-white/10 px-6 py-6 flex flex-col gap-2"
          >
            {/* Drawer Brand Header */}
            <div className="flex items-center pb-3 border-b border-white/10">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block"
              >
                <img 
                  src={LOGO_URL} 
                  alt="Worship Camp Logo" 
                  referrerPolicy="no-referrer"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>

            <div className="py-2 flex items-center justify-between text-xs text-blue-200/70 border-b border-white/10">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#d4af37]" /> 1st Sept 2026 • 4PM EAT</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#d4af37]" /> Maisha Gardens</span>
            </div>

            {NAV_LINKS.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => 
                  `font-bold text-sm py-2.5 px-3 rounded-xl flex items-center justify-between transition-colors ${
                    isActive 
                      ? 'bg-[#d4af37]/20 text-[#f3e5ab] font-extrabold border border-[#d4af37]/30' 
                      : 'text-white/90 hover:bg-white/5'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-gray-400 text-xs">→</span>
              </NavLink>
            ))}

            <div className="pt-3">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRegisterClick();
                }}
                className="w-full bg-gradient-to-r from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] py-3.5 rounded-xl font-black text-sm shadow-lg shadow-[#d4af37]/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Register for September Edition</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
