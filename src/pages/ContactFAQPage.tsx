/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { FAQS, EVENT_INFO } from '../constants';
import { ChevronDown, Mail, Phone, MapPin, Send, MessageSquare, HelpCircle, CheckCircle2, HeartHandshake } from 'lucide-react';

const EXPANDED_FAQS = [
  ...FAQS,
  {
    question: "What time should I arrive at Maisha Gardens?",
    answer: "Gates open at 3:00 PM EAT. The acoustic praise prelude begins at 3:30 PM, and the grand opening spiritual session kicks off promptly at 4:00 PM. Arriving early gives you the best lawn seating and stress-free badge scanning."
  },
  {
    question: "Is there parking available at Maisha Gardens?",
    answer: "Yes, free secure parking with 24/7 security guards and traffic marshals is available inside Maisha Gardens for cars, vans, and buses."
  },
  {
    question: "Are food and refreshments available on site?",
    answer: "Yes! There will be hot tea, coffee, bottled water, snacks, and wholesome meals available at our fellowship refreshment garden during intermissions."
  },
  {
    question: "Can I volunteer as an usher, prayer partner, or choir member?",
    answer: "Absolutely! We welcome consecrated servants of God. Use the contact form on this page and select 'Volunteer / Ministry Team' to join the serving team."
  }
];

export default function ContactFAQPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const filteredFaqs = EXPANDED_FAQS.filter((faq) => {
    return (
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.message) {
      alert("Please complete all required fields.");
      return;
    }
    setContactSubmitted(true);
  };

  return (
    <div className="bg-[#f8faff] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader 
        badge="Help & Inquiries"
        title="Contact & Frequently Asked Questions"
        subtitle="Find answers to common gathering questions, reach our ministry secretariat, or submit a prayer inquiry."
        breadcrumb="Contact & FAQ"
      />

      {/* 2. Quick Contact Cards */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#002366] text-[#f3e5ab] flex items-center justify-center shrink-0 shadow-md">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-[#002366]">Email Secretariat</h4>
              <p className="text-xs text-gray-500 mt-1 mb-2">For registration, press & general questions.</p>
              <a href="mailto:register@worshipcamp.org" className="text-xs font-bold text-[#d4af37] hover:underline">
                register@worshipcamp.org
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d4af37] via-[#f7e49e] to-[#c59b27] text-[#00133a] flex items-center justify-center shrink-0 shadow-md">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-[#002366]">Helpline & WhatsApp</h4>
              <p className="text-xs text-gray-500 mt-1 mb-2">Live attendee support on event day.</p>
              <a href="tel:+256700000000" className="text-xs font-bold text-[#002366] hover:underline">
                +256 700 000 000
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#002366] text-[#f3e5ab] flex items-center justify-center shrink-0 shadow-md">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-[#002366]">Event Grounds</h4>
              <p className="text-xs text-gray-500 mt-1 mb-2">{EVENT_INFO.locationAddress}</p>
              <span className="text-[11px] font-bold text-gray-400">1st December 2026 @ 4PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Grid: FAQ Accordion + Contact Form */}
      <section className="py-10 max-w-7xl mx-auto px-6 mb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Searchable FAQ */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-xs block mb-1">
                Common Inquiries
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#002366]">
                Frequently Asked Questions
              </h3>
            </div>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions (e.g. gates, parking, group pass, bring)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 focus:border-[#002366] rounded-2xl px-4 py-3.5 text-sm text-gray-800 shadow-sm outline-none transition-all"
              />
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-[#002366] hover:text-[#0a3d91] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-[#d4af37] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-xs block mb-1">
                Direct Contact
              </span>
              <h3 className="text-xl font-display font-bold text-[#002366]">
                Send a Message to Team
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                We typically respond within 24 hours.
              </p>
            </div>

            {!contactSubmitted ? (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input 
                    type="text"
                    required
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    placeholder="e.g. Esther Wanjiku"
                    className="w-full bg-[#f8faff] border border-gray-200 focus:border-[#002366] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    required
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    placeholder="esther@example.com"
                    className="w-full bg-[#f8faff] border border-gray-200 focus:border-[#002366] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={contactData.topic}
                    onChange={(e) => setContactData({ ...contactData, topic: e.target.value })}
                    className="w-full bg-[#f8faff] border border-gray-200 focus:border-[#002366] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none transition-all"
                  >
                    <option value="General Inquiry">General Event Inquiry</option>
                    <option value="Church Delegation">Church / Youth Group Coordination</option>
                    <option value="Volunteer / Ministry Team">Volunteer / Choir Team Application</option>
                    <option value="Prayer Support">Prayer & Pastoral Needs</option>
                    <option value="Sponsorship">Sponsorship & Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    placeholder="Type your message, delegation details, or prayer request..."
                    className="w-full bg-[#f8faff] border border-gray-200 focus:border-[#002366] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#002366] hover:bg-[#0a3d91] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4 text-[#d4af37]" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-[#002366]">Message Received!</h4>
                <p className="text-xs text-gray-600">
                  Thank you, <strong>{contactData.name}</strong>. A member of the Worship Camp team will respond to <strong>{contactData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setContactSubmitted(false);
                    setContactData({ name: '', email: '', topic: 'General Inquiry', message: '' });
                  }}
                  className="text-xs font-bold text-[#002366] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
