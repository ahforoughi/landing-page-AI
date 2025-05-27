"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/fonts.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  useEffect(() => setMounted(true), []);

  // Animated title switching
  const phrases = ["Bussiness AI", "Enterprise AI", "Generative AI"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  // Smooth scroll helper
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Also close mobile menu if open
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col scroll-smooth">
      {/* Announcement Banner */}
      <AnimatePresence>
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
          className="w-full bg-gradient-to-r from-purple-500 via-blue-400 to-pink-400 overflow-hidden"
        >
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.2,
              duration: 0.5,
              ease: "easeOut"
            }}
            className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-center"
          >
            <p className="text-sm font-medium text-white">
              🎉 Announcing Agrivanna - AI-powered solutions for farmers and veterinarians. 
              <a 
                href="https://agrivanna.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-2 underline hover:text-gray-100 transition-colors"
              >
                Learn more →
              </a>
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Bar */}
      <nav className="w-full max-w-4xl mx-auto px-4 flex items-center py-6 relative">
        {/* Logo on the left */}
        <div className="flex items-center gap-2 min-w-[80px] z-10">
          <span className="text-2xl font-bold tracking-tight brand-title">Vanna AI</span>
        </div>

        {/* Centered navigation menu (desktop only, absolutely centered) */}
        <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex gap-8 text-sm font-medium">
            <li><a href="#product" onClick={e => handleSmoothScroll(e, 'product')} className="hover:underline">Product</a></li>
            <li><a href="#features" onClick={e => handleSmoothScroll(e, 'features')} className="hover:underline">Features</a></li>
            <li><a href="https://form.typeform.com/to/P3lo12vT" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* CTA Button - Right aligned (desktop only) */}
        <div className="hidden sm:flex items-center min-w-[120px] justify-end ml-auto z-10">
          <a
            href="https://calendly.com/ah-foroughi98/meeting-with-vanna-team"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-lg px-4 py-2 font-semibold text-sm hover:bg-gray-200 transition inline-flex items-center justify-center"
          >
            Book a Demo →
          </a>
        </div>

        {/* Hamburger Menu Button - Only visible on mobile */}
        <button 
          className="sm:hidden p-2 ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-50 sm:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                <button 
                  className="absolute top-6 right-4 p-2 hover:opacity-80 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </button>
                <ul className="flex flex-col items-center gap-8 text-lg font-medium">
                  <li><a href="#product" onClick={e => handleSmoothScroll(e, 'product')} className="hover:underline">Product</a></li>
                  <li><a href="#features" onClick={e => handleSmoothScroll(e, 'features')} className="hover:underline">Features</a></li>
                  <li><a href="https://form.typeform.com/to/P3lo12vT" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact Us</a></li>
                </ul>
                <a
                  href="https://calendly.com/ah-foroughi98/meeting-with-vanna-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black rounded-lg px-6 py-3 font-semibold text-base hover:bg-gray-200 transition inline-flex items-center justify-center"
                >
                  Book a Demo →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-4 relative overflow-hidden min-h-[60vh] py-1 sm:py-0">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          {/* Animated Gradient/3D Disc Placeholders */}
          {mounted && (
            <>
              <motion.div
                initial={{
                  left: '50%',
                  top: '38%',
                  x: 0,
                  y: '-50%',
                  scale: 0.2,
                  rotate: 0,
                }}
                animate={isFloating ? {
                  left: ['20%', '30%', '20%'],
                  top: ['38%', '45%', '38%'],
                  x: 0,
                  y: ['-50%', '-45%', '-50%'],
                  scale: 1,
                  rotate: [0, 10, 0, -10, 0],
                } : {
                  left: '20%',
                  top: '38%',
                  x: 0,
                  y: '-50%',
                  scale: 1,
                  rotate: 0,
                }}
                transition={isFloating ? {
                  left: { duration: 4, ease: 'linear', repeat: Infinity },
                  top: { duration: 4, ease: 'linear', repeat: Infinity },
                  y: { duration: 2, ease: 'linear', repeat: Infinity },
                  rotate: { duration: 2, ease: 'linear', repeat: Infinity },
                  scale: { duration: 0 },
                } : {
                  left: { duration: 1.2, ease: 'easeInOut' },
                  top: { duration: 1.2, ease: 'easeInOut' },
                  x: { duration: 1.2, ease: 'easeInOut' },
                  y: { duration: 1.2, ease: 'easeInOut' },
                  scale: { duration: 1.2, ease: 'easeInOut' },
                  rotate: { duration: 1.2, ease: 'easeInOut' },
                }}
                style={{ left: '20%', top: '38%' }}
                className="absolute w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 opacity-40 rounded-full blur-3xl z-0 pointer-events-none"
                onAnimationComplete={() => setIsFloating(true)}
              />
              <motion.div
                initial={{
                  right: '50%',
                  top: '38%',
                  x: 0,
                  y: '-50%',
                  scale: 0.2,
                  rotate: 0,
                }}
                animate={isFloating ? {
                  right: ['20%', '30%', '20%'],
                  top: ['38%', '45%', '38%'],
                  x: 0,
                  y: ['-50%', '-45%', '-50%'],
                  scale: 1,
                  rotate: [0, -10, 0, 10, 0],
                } : {
                  right: '20%',
                  top: '38%',
                  x: 0,
                  y: '-50%',
                  scale: 1,
                  rotate: 0,
                }}
                transition={isFloating ? {
                  right: { duration: 4, ease: 'linear', repeat: Infinity },
                  top: { duration: 4, ease: 'linear', repeat: Infinity },
                  y: { duration: 2, ease: 'linear', repeat: Infinity },
                  rotate: { duration: 2, ease: 'linear', repeat: Infinity },
                  scale: { duration: 0 },
                } : {
                  right: { duration: 1.2, ease: 'easeInOut' },
                  top: { duration: 1.2, ease: 'easeInOut' },
                  x: { duration: 1.2, ease: 'easeInOut' },
                  y: { duration: 1.2, ease: 'easeInOut' },
                  scale: { duration: 1.2, ease: 'easeInOut' },
                  rotate: { duration: 1.2, ease: 'easeInOut' },
                }}
                style={{ right: '20%', top: '38%' }}
                className="absolute w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-400 opacity-40 rounded-full blur-3xl z-0 pointer-events-none"
              />
            </>
          )}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight z-10 mb-4 px-2 brand-title">
            <span className="flex flex-row justify-center items-center flex-wrap gap-0">
              <span>Power</span>
              <span className="inline-block min-w-[10ch]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phrases[phraseIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="animate-gradient bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent"
                  >
                    {phrases[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            <span className="block">With Your Data</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto z-10 text-gray-200 px-4 font-body">
          We help traditional businesses migrate to digital solutions and prepare their data securely for LLMs and GenAI..
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center z-10 px-4">
            <a
              href="https://calendly.com/ah-foroughi98/meeting-with-vanna-team"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gray-1000 text-white border border-gray-800 rounded-lg px-8 py-3 font-semibold text-lg shadow hover:border-purple-500 transition inline-flex items-center justify-center"
            >
              Ship AI, NOW →
            </a>
          </div>
        </div>
      </section>

      {/* Feature Marquee Section */}
      <div className="relative w-full max-w-7xl mx-auto overflow-x-hidden py-0 mt-0 mb-10 bg-black">
        {/* Gradient overlays */}
        <div className="marquee-fade marquee-fade-left" />
        <div className="marquee-fade marquee-fade-right" />
        {/* Row 1: left to right, seamless loop */}
        <div className="animate-marquee flex gap-4 w-max mb-4">
          {["Legacy-to-Digital", "Policy-Aware Coding", "Private Data Layer",
            "Data Anonymization & Redaction", "Compliance-First Architecture", "Enterprise Access Controls", "Secure API & Integrations"
          ].concat([
            "Legacy-to-Digital", "Policy-Aware Coding", "Private Data Layer",
            "Data Anonymization & Redaction", "Compliance-First Architecture", "Enterprise Access Controls", "Secure API & Integrations"
          ]).map((feature, idx) => (
            <div
              key={idx}
              className="px-6 py-3 rounded-full bg-gray-800 text-white font-semibold shadow text-base whitespace-nowrap"
            >
              {feature}
            </div>
          ))}
        </div>
        {/* Row 2: right to left, seamless loop */}
        <div className="animate-marquee-reverse flex gap-4 w-max">
          {["Legacy-to-Digital", "Policy-Aware Coding", "Private Data Layer", 
            "Data Anonymization & Redaction", "Compliance-First Architecture", "Enterprise Access Controls", "Secure API & Integrations"
          ].concat([
            "Legacy-to-Digital", "Policy-Aware Coding", "Private Data Layer", 
            "Data Anonymization & Redaction", "Compliance-First Architecture", "Enterprise Access Controls", "Secure API & Integrations"
          ]).map((feature, idx) => (
            <div
              key={idx}
              className="px-6 py-3 rounded-full bg-gray-800 text-white font-semibold shadow text-base whitespace-nowrap"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Section */}
      <motion.section
        id="features"
        className="w-full max-w-7xl mx-auto px-4 py-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="mb-8" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 brand-title text-center">Key Features</h2>
          <p className="text-lg text-gray-300 text-center">Unlock the power of your data and AI with Vanna&apos;s suite of enterprise-ready solutions.</p>
        </motion.div>
        <div className="bg-[#18141c] rounded-2xl shadow-xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-800 overflow-hidden text-left">
          <motion.div
            className="flex-1 p-8 flex flex-col items-start"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 text-white font-bold text-lg mb-4">1</div>
            <h3 className="text-xl font-semibold text-white mb-2 brand-title">Vanna Data Engine</h3>
            <p className="text-gray-400 text-left">Prepare, structure, and label your data for the best AI results.</p>
          </motion.div>
          <motion.div
            className="flex-1 p-8 flex flex-col items-start"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 text-white font-bold text-lg mb-4">2</div>
            <h3 className="text-xl font-semibold text-white mb-2 brand-title">Privacy Layer</h3>
            <p className="text-gray-400 text-left">Protect sensitive information with built-in anonymization, redaction, and access controls.</p>
          </motion.div>
          <motion.div
            className="flex-1 p-8 flex flex-col items-start"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 text-white font-bold text-lg mb-4">3</div>
            <h3 className="text-xl font-semibold text-white mb-2 brand-title">Legacy Migration Suite</h3>
            <p className="text-gray-400 text-left">Easily transition from legacy systems to modern, AI-ready data infrastructure.</p>
          </motion.div>
          <motion.div
            className="flex-1 p-8 flex flex-col items-start"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 text-white font-bold text-lg mb-4">4</div>
            <h3 className="text-xl font-semibold text-white mb-2 brand-title">AI Readiness Toolkit</h3>
            <p className="text-gray-400 text-left">Assess, validate, and optimize your data to ensure it&apos;s ready for LLMs and GenAI.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Product Section */}
      <motion.section
        id="product"
        className="py-12 sm:py-16   px-4 md:px-0 flex flex-col items-center bg-black"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="w-full max-w-7xl mx-auto px-4" variants={fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0 text-center brand-title">Products</h2>
          <p className="text-lg text-gray-300 text-center mt-2 mb-0">Privacy-first data infrastructure for enterprises adopting generative AI.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl mt-8 px-4">
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="url(#feat1)" />
                <defs>
                  <linearGradient id="feat1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M16 24l6 6 10-10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-2 brand-title">Agriculture</h3>
            <p className="text-gray-400 text-center">Farmers can easily migrate to digital solutions and unlock AI-powered insights from their data.</p>
          </motion.div>
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="url(#feat1)" />
                <defs>
                  <linearGradient id="feat1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M16 24l6 6 10-10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-2 brand-title">Enterprise Operations</h3>
            <p className="text-gray-400 text-center">Teams can build internal AI agents and manage data securely across departments.</p>
          </motion.div>
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="url(#feat1)" />
                <defs>
                  <linearGradient id="feat1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M16 24l6 6 10-10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-2 brand-title">Manufacturing</h3>
            <p className="text-gray-400 text-center">Legacy factory systems can be modernized to enable predictive maintenance with LLMs.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section - Inspired by provided image */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-24 bg-black overflow-hidden">
        {/* Floating Discs */}
        <div className="absolute left-0 bottom-0 w-40 h-40 sm:w-56 sm:h-56 z-0" style={{transform: 'translate(-30%, 30%)'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-purple-500 via-blue-400 to-pink-400 opacity-60 blur-2xl" />
        </div>
        <div className="absolute right-0 top-0 w-32 h-32 sm:w-44 sm:h-44 z-0" style={{transform: 'translate(30%, -30%)'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-pink-400 via-purple-500 to-blue-400 opacity-60 blur-2xl" />
        </div>
        {/* Headline */}
        <h2 className="relative z-10 text-white font-title font-bold text-4xl sm:text-6xl md:text-7xl leading-tight mb-8">
          <span className="block">Start the future of your</span>
          <span className="block">industry with<span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent"> Vanna</span></span>
        </h2>
        {/* CTA Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/ah-foroughi98/meeting-with-vanna-team"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-lg px-8 py-3 font-semibold text-lg shadow hover:bg-gray-200 transition inline-flex items-center justify-center"
          >
            Book a Demo →
          </a>
        </div>
      </section>

      <footer className="w-full bg-black text-gray-400 py-6 flex flex-col items-center border-t border-gray-800">
        <div className="text-lg font-bold text-white mb-1 brand-title">Vanna</div>
        <div className="text-sm">&copy; {new Date().getFullYear()} Vanna. All rights reserved.</div>
      </footer>
    </div>
  );
}

