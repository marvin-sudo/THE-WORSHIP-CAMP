/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cross, Flame, Hand, Users, Music, MapPin, Calendar, Clock, Heart, Shield, Award } from 'lucide-react';

export const LOGO_URL = "https://www.image2url.com/r2/default/images/1787509985137-5e184dc6-06b6-46f1-a451-5348e3eeac10.png";
export const FOOTER_LOGO_URL = "https://www.image2url.com/r2/default/images/1787510163564-c708282a-9e66-48c4-b7e8-ea3961e4995b.png";
export const HERO_VIDEO_URL = "https://www.image2url.com/r2/default/videos/1788330674826-050e07e4-0091-4725-91b9-bdc09704b01b.mp4";

// Connect official Google Form for attendee registration
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScz7tqM5Z8eW3yN4xR9vP1kJ0oB6sX8uY2aC-worshipcamp2026/viewform";
export const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLScz7tqM5Z8eW3yN4xR9vP1kJ0oB6sX8uY2aC-worshipcamp2026/viewform?embedded=true";

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Venue & Map', path: '/venue' },
  { name: 'Ministers', path: '/ministers' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Register', path: '/register' },
  { name: 'FAQ & Contact', path: '/contact' },
];

export const TYPING_PHRASES = [
  "December Edition • 1st December 2026 @ Maisha Gardens",
  "Starts at 4:00 PM EAT • Register Early to Secure Your Spot!",
  "We Worship. We Encounter. We Transform.",
  "Igniting a Generation of Holy Fire & Divine Presence."
];

export const FEATURES = [
  {
    title: 'Worship Sessions',
    description: 'Immersive encounters of deep praise and intimate worship led by anointed ministers and acoustic ensembles.',
    Icon: Music,
    tag: 'Continuous Praise',
  },
  {
    title: 'Powerful Teachings',
    description: 'Practical, biblically grounded teachings focused on purpose, spiritual authority, and Kingdom identity.',
    Icon: Flame,
    tag: 'Kingdom Wisdom',
  },
  {
    title: 'Prayer & Revival Moments',
    description: 'Dedicated altars of intercession, laying on of hands, and personal spiritual breakthrough.',
    Icon: Cross,
    tag: 'Spiritual Fire',
  },
  {
    title: 'Community & Networking',
    description: 'Forge lifelong kingdom friendships through team breakouts, campfires, and small group circles.',
    Icon: Users,
    tag: 'Kingdom Fellowship',
  },
  {
    title: 'Garden Retreat Experience',
    description: 'Experience spiritual renewal amidst the lush greenery and open skies of Maisha Gardens.',
    Icon: Hand,
    tag: 'Open Sky Sanctuary',
  },
  {
    title: 'Youth Empowerment',
    description: 'Hands-on creative and leadership workshops tailored to activate your God-given calling in society.',
    Icon: Award,
    tag: 'Leadership',
  },
];

export const EDITIONS = [
  {
    id: "edition-1",
    editionNumber: 1,
    name: "September Edition",
    title: "Edition 1: The Awakening",
    date: "September 2026",
    status: "Completed",
    badge: "1st Edition • September",
    theme: "Altar of Awakening & First Fire",
    description: "The pioneering inaugural Worship Camp gathering that united hundreds of young worshippers and set a spiritual benchmark for radical praise and consecration.",
    highlights: [
      "Inaugural gathering in September 2026",
      "Over 800+ passionate worshippers united",
      "5 hours of non-stop prayer & acoustic praise",
      "Spiritual groundwork established for the movement"
    ]
  },
  {
    id: "edition-2",
    editionNumber: 2,
    name: "December Edition",
    title: "Edition 2: Open Sky Encounter",
    date: "1st December 2026",
    status: "Upcoming",
    badge: "Edition 2 • 1st Dec 2026",
    theme: "Under Open Skies • Maisha Gardens",
    description: "The second edition of Worship Camp hosted at Maisha Gardens. An immersive open-air atmosphere with extended acoustic praise, healing altars, and impartation.",
    highlights: [
      "Tuesday, 1st December 2026 @ 4:00 PM EAT",
      "Maisha Gardens lush open-air grounds",
      "100% Free Entry Registration with Digital Badges",
      "Extended night of open-sky prayer & worship"
    ]
  }
];

export const SCHEDULE_DAYS = [
  {
    day: "Session 1",
    label: "Afternoon Flow",
    title: "Gates Open & Worship Atmosphere",
    date: "1st December 2026",
    timeSpan: "03:00 PM - 06:30 PM",
    sessions: [
      { time: "03:00 PM - 04:00 PM", title: "Gates Open, Free Check-in & Acoustic Praise Prelude", type: "Arrival" },
      { time: "04:00 PM - 05:15 PM", title: "Grand Opening: Praise Explosion & Holy Spirit Invocation", type: "Worship" },
      { time: "05:15 PM - 06:30 PM", title: "Keynote Teaching: 'Awakening the Altar of Devotion'", type: "Word" },
    ]
  },
  {
    day: "Session 2",
    label: "Evening Encounter",
    title: "Deep Encounters & Prophetic Ministry",
    date: "1st December 2026",
    timeSpan: "06:30 PM - 10:45 PM",
    sessions: [
      { time: "06:30 PM - 07:45 PM", title: "Extended Altar Ministry, Healing & Personal Breakthrough", type: "Revival" },
      { time: "07:45 PM - 08:30 PM", title: "Kingdom Fellowship & Refreshment Intermission", type: "Community" },
      { time: "08:30 PM - 10:15 PM", title: "Night of Unrestrained Garden Worship Under Open Skies", type: "Worship & Word" },
      { time: "10:15 PM - 10:45 PM", title: "Anointing Impartation, Benediction & Commissioning", type: "Equipping" },
    ]
  }
];

export const SPEAKERS = [
  {
    id: "david-adeleke",
    name: "Pastor David Adeleke",
    role: "Lead Speaker & Revivalist",
    ministry: "Grace & Truth Global",
    topic: "Awakening the Altar of Devotion",
    scripture: "Romans 12:1-2",
    bio: "Pastor David is an apostolic revivalist and church planter with over 15 years of dedicated ministry raising a generation of prayer warriors and consecrated worshippers across the nations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    social: { twitter: "@davidadeleke", instagram: "@pastordavid_ag" }
  },
  {
    id: "hannah-grace",
    name: "Minister Hannah Grace",
    role: "Worship Leader & Psalmist",
    ministry: "Sound of Zion Collective",
    topic: "Unrestrained Garden Praise & Prophetic Sound",
    scripture: "Psalm 100 & John 4:23-24",
    bio: "Hannah Grace is an internationally acclaimed psalmodist whose spontaneous songs of worship have stirred hearts toward deep intimacy with Jesus and holy breakthrough.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    social: { twitter: "@hannahgraceworship", instagram: "@hannah.zion" }
  },
  {
    id: "michael-thorne",
    name: "Rev. Michael Thorne",
    role: "Bible Teacher & Youth Mentor",
    ministry: "Kingdom Impact Network",
    topic: "Consecration & Supernatural Walking in 2026",
    scripture: "1 Timothy 4:12",
    bio: "Rev. Thorne empowers thousands of college students and young professionals through sharp, revelatory biblical exposition and practical spiritual discipleship.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    social: { twitter: "@revthorne", instagram: "@michaelthorne.min" }
  },
  {
    id: "sarah-jenkins",
    name: "Dr. Sarah Jenkins",
    role: "Keynote Speaker & Author",
    ministry: "Awakening Generations",
    topic: "Igniting the Secret Place & Overcoming Distraction",
    scripture: "Matthew 6:6",
    bio: "Author of 3 best-selling books on Christian contemplative prayer and spiritual warfare, Dr. Sarah has been a catalytic voice for campus revivals.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    social: { twitter: "@drsarahjenkins", instagram: "@sarahjenkins.awake" }
  }
];

export const CORE_PILLARS = [
  {
    number: "01",
    title: "PERSONAL REVIVAL",
    subtitle: "To Bring Personal Revival in a People",
    desc: "Worship Camp exists to awaken hearts, restore spiritual hunger, and ignite a fresh fire for God in every individual. We believe revival begins personally before it transforms a people.",
    scriptureText: "Will You not revive us again, that Your people may rejoice in You?",
    verse: "Psalm 85:6"
  },
  {
    number: "02",
    title: "INTIMACY",
    subtitle: "Knowing Him, Not Just Knowing About Him",
    desc: "We pursue a deeper relationship with God through worship, prayer, the Word, surrender, and genuine fellowship with His presence. Our desire is not simply to experience a moment, but to grow in intimacy with Him.",
    scriptureText: "Draw near to God and He will draw near to you.",
    verse: "James 4:8"
  },
  {
    number: "03",
    title: "OPENING REALMS",
    subtitle: "Under an Open Heaven",
    desc: "We believe worship positions us to encounter God beyond the ordinary—to experience revelation, divine encounters, spiritual awakening, transformation, and commissioning. We desire to press deeper into His presence and live under an open heaven.",
    scriptureText: "I saw heaven opened, and behold, a throne stood in heaven.",
    verse: "Revelation 4:1"
  }
];

export const VENUE_CHECKLIST = [
  { item: "Physical Bible & Journal", note: "For deep revelations and personal notes", required: true },
  { item: "Digital or Printed QR Badge", note: "Sent upon instant free registration", required: true },
  { item: "Warm Evening Jacket / Cardigan", note: "Maisha Gardens is open-air and evenings get cool", required: true },
  { item: "Comfortable Walking Shoes", note: "Lush grass lawns and prayer garden trails", required: false },
  { item: "Personal Water Flask", note: "Refill stations available throughout the grounds", required: false },
  { item: "Heart of Expectation", note: "Ready for life-transforming impartation", required: true },
];

export const FREE_EVENT_HIGHLIGHTS = [
  {
    title: "100% Free Admission",
    desc: "No ticket fees or pass charges. The gospel and presence of God are open freely to all.",
    badge: "Free Entry",
  },
  {
    title: "Official Google Form Registration",
    desc: "Quick, hassle-free registration connected directly to Google Forms for smooth entry check-in.",
    badge: "Seamless Check-In",
  },
  {
    title: "Reserved Garden Seating",
    desc: "Open sanctuary seating amidst the natural lawns and open-air atmosphere of Maisha Gardens.",
    badge: "Open Skies",
  },
  {
    title: "Individual & Group Delegations",
    desc: "Coming with friends, youth ministries, choir teams, or fellowship groups? Register easily in one go.",
    badge: "Youth & Choirs",
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "My life was never the same after Worship Camp. The atmosphere of unbroken praise in the gardens broke spiritual burdens I had carried for years. Walking away with a clean heart and a burning fire for prayer.",
    author: "Sarah Namubiru",
    role: "Youth Fellowship Coordinator",
    edition: "Attended 2025 Edition",
    location: "Kampala",
    rating: 5,
    highlight: "Life-Transforming Encounter",
  },
  {
    id: 2,
    quote: "The acoustic worship under open skies at Maisha Gardens is completely unmatched. You aren't just in a concert — you are genuinely sitting at the feet of Jesus. Every youth should experience this.",
    author: "David Mukisa",
    role: "University Student & Musician",
    edition: "Attended 2024 & 2025",
    location: "Wakiso",
    rating: 5,
    highlight: "Unmatched Atmosphere",
  },
  {
    id: 3,
    quote: "I found a rekindled devotion for the secret place and scripture. The ministering was deep, grounded, and intensely anointed. You leave spiritually refreshed and ready to impact your generation.",
    author: "Grace Atuhaire",
    role: "Worship Leader & Vocalist",
    edition: "Attended 2025 Edition",
    location: "Entebbe",
    rating: 5,
    highlight: "Renewed Spiritual Hunger",
  },
  {
    id: 4,
    quote: "Our choir and ministry team attended together. We arrived tired from routine ministry and left unified, overflowing with prophetic songs and fresh clarity for God's calling upon our lives.",
    author: "Joshua Kigozi",
    role: "Music & Creative Arts Director",
    edition: "Attended 2024 Edition",
    location: "Mukono",
    rating: 5,
    highlight: "Ministry Alignment",
  },
  {
    id: 5,
    quote: "From the moment the opening sound began at 4 PM until the starlit prayer close, the presence of the Holy Spirit was tangible. The organization, sound quality, and warm hospitality were top tier.",
    author: "Emmanuel Byaruhanga",
    role: "Young Professional & Attendee",
    edition: "Attended 2025 Edition",
    location: "Nansana",
    rating: 5,
    highlight: "Tangible Presence & Peace",
  },
  {
    id: 6,
    quote: "No distractions, no sales pitches — just pure, passionate, Christ-centered worship. I invited three of my unchurched campus friends and all of them surrendered their hearts that evening.",
    author: "Priscilla Kyomugisha",
    role: "Campus Evangelism Lead",
    edition: "Attended 2024 & 2025",
    location: "Makerere",
    rating: 5,
    highlight: "Salvation & Fellowship",
  }
];

export const EVENT_INFO = {
  edition: "DECEMBER EDITION",
  name: "Worship Camp: December Edition",
  logoUrl: LOGO_URL,
  date: "1st December 2026",
  dateDetail: "Tuesday, 1st December 2026",
  targetDate: "2026-12-01T16:00:00+03:00",
  locationName: "Maisha Gardens",
  locationAddress: "Maisha Gardens, Nakuwadde",
  time: "Starting at 4:00 PM EAT",
  timeDetail: "Gates Open 3:00 PM • Main Session Starts 4:00 PM EAT",
  timezone: "EAT (UTC+3)",
  coordinates: { lat: 0.3542, lng: 32.4831 },
  venueHighlights: [
    "Lush Natural Garden Sanctuary with Open-Air Skies",
    "State-of-the-Art Acoustic Worship Sound & Lighting",
    "Dedicated Prayer Altars & Outdoor Reflection Lawns",
    "Secure Free Parking & Easy Transit Access",
    "On-Site Refreshments & Fellowship Dining Zones",
    "Express Check-in & Digital Badge Scanning",
  ]
};

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Unrestrained Worship Night",
    category: "Worship",
    url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=1200",
    description: "Hundreds of young believers lifting hands in one accord under celestial blue lighting."
  },
  {
    id: 2,
    title: "Altar of Prayer & Breakthrough",
    category: "Revival",
    url: "https://images.unsplash.com/photo-1544427928-c49cdfebf494?auto=format&fit=crop&q=80&w=800",
    description: "Deep intercession and heartfelt encounters at the foot of the cross."
  },
  {
    id: 3,
    title: "Acoustic Campfire Fellowship",
    category: "Fellowship",
    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
    description: "Stripped-back guitar praise under the open mountain sky."
  },
  {
    id: 4,
    title: "Transformational Keynote Word",
    category: "Teachings",
    url: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800",
    description: "Equipping minds and spirits with revelatory scriptures."
  },
  {
    id: 5,
    title: "Outdoor Morning Devotions",
    category: "Outdoors",
    url: "https://images.unsplash.com/photo-1508997449629-303059a039c0?auto=format&fit=crop&q=80&w=800",
    description: "Communing with God at sunrise surrounded by towering redwoods."
  },
  {
    id: 6,
    title: "Joyous Community & Lifelong Bonds",
    category: "Fellowship",
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    description: "Youth from across nations sharing smiles, prayers, and stories."
  }
];

export const IMAGES = {
  logo: LOGO_URL,
  hero: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=1920",
  atmosphere: "https://images.unsplash.com/photo-1544427928-c49cdfebf494?auto=format&fit=crop&q=80&w=1000",
};

export const FAQS = [
  {
    question: "Is Worship Camp free to attend?",
    answer: "Yes! Worship Camp: December Edition is 100% FREE to attend. All worship sessions, prayer altars, and keynote teachings at Maisha Gardens are completely free of charge. Simply register via our connected Google Form or instant form to secure your free digital entry badge."
  },
  {
    question: "When and where is the December Edition happening?",
    answer: "Worship Camp: December Edition takes place on Tuesday, 1st December 2026 at Maisha Gardens. Gates open at 3:00 PM and the main spiritual encounter starts promptly at 4:00 PM EAT."
  },
  {
    question: "Why do I need to register if it's a free event?",
    answer: "Due to the intimate open-air garden setting at Maisha Gardens and limited seating capacity, pre-registration via Google Forms helps our ushering and ministry team prepare seating, free welcome materials, and streamline check-in at the gates."
  },
  {
    question: "What should I bring to Maisha Gardens?",
    answer: "Bring your Bible, notebook or journal, a warm jacket or sweater for open-air evening worship under the stars, your digital entry QR badge on your phone, and an expectant heart!"
  },
  {
    question: "Can church groups and choir teams register together?",
    answer: "Yes! You can register as an individual or bring a church delegation, youth ministry group, or choir team using the group option on the registration form."
  }
];
