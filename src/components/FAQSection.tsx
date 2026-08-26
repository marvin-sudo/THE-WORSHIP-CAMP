/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#002366] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base">
            Everything you need to know about accommodations, transport, and preparing for camp.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-[#f8faff] rounded-2xl border border-blue-50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#002366] text-lg hover:text-[#0a3d91]"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#d4af37] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#d4af37] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 text-base leading-relaxed pl-14 border-t border-blue-100/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
