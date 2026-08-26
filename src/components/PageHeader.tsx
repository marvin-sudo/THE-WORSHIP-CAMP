/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageHeader({ badge, title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#001333] via-[#002366] to-[#00173d] text-white overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#d4af37] rounded-full blur-[140px]" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-200/80 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
          <Link to="/" className="hover:text-[#f3e5ab] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#f3e5ab]">{breadcrumb}</span>
        </div>

        {/* Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-extrabold uppercase tracking-[0.2em] px-4 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            {badge}
          </span>
        </div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mb-6 tracking-tight leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-blue-100/85 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
