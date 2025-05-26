"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  useEffect(() => setMounted(true), []);

  // Animated title switching
  const phrases = ["Enterprise AI", "Generative AI", "AI-Ready Data"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll helper
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Also close mobile menu if open
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans scroll-smooth">
      {/* Navigation Bar */}
      <nav className="w-full max-w-4xl mx-auto px-4 flex items-center py-6 relative">
        {/* Logo on the left */}
        <div className="flex items-center gap-2 min-w-[80px] z-10">
          <span className="text-2xl font-bold tracking-tight">Vanna</span>
        </div>

        {/* Centered navigation menu (desktop only, absolutely centered) */}
        <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex gap-8 text-sm font-medium">
            <li><a href="#product" onClick={e => handleSmoothScroll(e, 'product')} className="hover:underline">Product</a></li>
            <li><a href="#features" onClick={e => handleSmoothScroll(e, 'features')} className="hover:underline">Features</a></li>
            <li><a href="#contact" onClick={e => handleSmoothScroll(e, 'contact')} className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* CTA Button - Right aligned (desktop only) */}
        <div className="hidden sm:flex items-center min-w-[120px] justify-end ml-auto z-10">
          <button className="bg-white text-black rounded-full px-4 py-2 font-semibold text-sm hover:bg-gray-200 transition">Book a Demo →</button>
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
                  <li><a href="#contact" onClick={e => handleSmoothScroll(e, 'contact')} className="hover:underline">Contact Us</a></li>
                </ul>
                <button className="bg-white text-black rounded-full px-6 py-3 font-semibold text-base hover:bg-gray-200 transition">Book a Demo →</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-4 relative overflow-hidden min-h-[60vh] py-12 sm:py-0">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          {/* Animated Gradient/3D Disc Placeholders */}
          {mounted && (
            <>
              <motion.div
                initial={{
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                  scale: 0.2,
                  rotate: 0,
                }}
                animate={isFloating ? {
                  left: '38%',
                  top: '38%',
                  x: ['-50%', '-50%', '-50%', '-50%', '-50%'],
                  y: ['-50%', '-45%', '-40%', '-45%', '-50%'],
                  scale: 1,
                  rotate: [0, 0, 10, -10, 0],
                } : {
                  left: '38%',
                  top: '38%',
                  x: '-50%',
                  y: '-50%',
                  scale: 1,
                  rotate: 0,
                }}
                transition={isFloating ? {
                  x: { times: [0, 0.2, 0.4, 0.8, 1], duration: 4, ease: 'easeInOut', repeat: Infinity },
                  y: { times: [0, 0.2, 0.4, 0.8, 1], duration: 4, ease: 'easeInOut', repeat: Infinity },
                  scale: { duration: 0 },
                  rotate: { times: [0, 0.2, 0.4, 0.8, 1], duration: 4, ease: 'easeInOut', repeat: Infinity },
                } : {
                  left: { duration: 1.2, ease: 'easeInOut' },
                  top: { duration: 1.2, ease: 'easeInOut' },
                  x: { duration: 1.2, ease: 'easeInOut' },
                  y: { duration: 1.2, ease: 'easeInOut' },
                  scale: { duration: 1.2, ease: 'easeInOut' },
                  rotate: { duration: 1.2, ease: 'easeInOut' },
                }}
                style={{ left: '38%', top: '38%' }}
                className="absolute w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 opacity-40 rounded-full blur-3xl z-0 pointer-events-none"
                onAnimationComplete={() => setIsFloating(true)}
              />
              <motion.div
                initial={{
                  right: '50%',
                  top: '50%',
                  x: '50%',
                  y: '-50%',
                  scale: 0.2,
                  rotate: 0,
                }}
                animate={isFloating ? {
                  right: '38%',
                  top: '38%',
                  x: ['50%', '50%', '50%', '50%', '50%'],
                  y: ['-50%', '-45%', '-40%', '-45%', '-50%'],
                  scale: 1,
                  rotate: [0, 0, -10, 10, 0],
                } : {
                  right: '38%',
                  top: '38%',
                  x: '50%',
                  y: '-50%',
                  scale: 1,
                  rotate: 0,
                }}
                transition={isFloating ? {
                  x: { times: [0, 0.2, 0.4, 0.8, 1], duration: 4, ease: 'easeInOut', repeat: Infinity },
                  y: { times: [0, 0.2, 0.4, 0.8, 1], duration: 4, ease: 'easeInOut', repeat: Infinity },
                  scale: { duration: 0 },
                  rotate: { times: [0, 0.2, 0.4, 0.8, 1], duration: 4, ease: 'easeInOut', repeat: Infinity },
                } : {
                  right: { duration: 1.2, ease: 'easeInOut' },
                  top: { duration: 1.2, ease: 'easeInOut' },
                  x: { duration: 1.2, ease: 'easeInOut' },
                  y: { duration: 1.2, ease: 'easeInOut' },
                  scale: { duration: 1.2, ease: 'easeInOut' },
                  rotate: { duration: 1.2, ease: 'easeInOut' },
                }}
                style={{ right: '38%', top: '38%' }}
                className="absolute w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-400 opacity-40 rounded-full blur-3xl z-0 pointer-events-none"
              />
            </>
          )}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight z-10 mb-4 px-2">
            <span className="flex flex-row justify-center items-center flex-wrap gap-2">
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
          <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto z-10 text-gray-200 px-4 font-normal">
            Make the best models with the best data. Scale Data Engine powers nearly every major foundation model, and with Scale GenAI Platform, leverages your enterprise data to unlock the value of AI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center z-10 px-4">
            <button className="w-full sm:w-auto bg-white text-black rounded-full px-8 py-3 font-semibold text-lg shadow hover:bg-gray-200 transition">Book a Demo →</button>
            <button className="w-full sm:w-auto bg-transparent border border-white rounded-full px-8 py-3 font-semibold text-lg hover:bg-white hover:text-black transition">Build AI →</button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-4 sm:py-6 px-4 md:px-0 flex flex-col items-center bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Products</h2>
          <p className="max-w-2xl text-base sm:text-lg text-gray-300 mb-8 mx-auto">
            Unlock the power of your data and AI with Vanna's suite of enterprise-ready solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl mt-4 px-4">
          <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-start shadow-lg border border-gray-800 hover:border-purple-500 transition">
            <div className="text-xl font-semibold mb-2 text-white">Vanna Data Engine</div>
            <div className="text-gray-400 text-sm">Prepare, structure, and label your data for the best AI results.</div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-start shadow-lg border border-gray-800 hover:border-pink-500 transition">
            <div className="text-xl font-semibold mb-2 text-white">Vanna GenAI Platform</div>
            <div className="text-gray-400 text-sm">Build, fine-tune, and deploy generative AI models tailored to your business.</div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-start shadow-lg border border-gray-800 hover:border-blue-400 transition">
            <div className="text-xl font-semibold mb-2 text-white">Vanna Donovan</div>
            <div className="text-gray-400 text-sm">AI-powered decision-making and analytics for mission-critical operations.</div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-start shadow-lg border border-gray-800 hover:border-cyan-400 transition">
            <div className="text-xl font-semibold mb-2 text-white">Vanna Evaluation</div>
            <div className="text-gray-400 text-sm">Evaluate and monitor your AI models for safety, compliance, and performance.</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16   px-4 md:px-0 flex flex-col items-center bg-black">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Key Features</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl mt-8 px-4">
          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="url(#feat1)" />
                <defs>
                  <linearGradient id="feat1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#a855f7" />
                    <stop offset="1" stop-color="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M16 24l6 6 10-10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-2">Secure Data Migration</h3>
            <p className="text-gray-400 text-center">Move your data from legacy systems to modern infrastructure with end-to-end encryption.</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="8" width="32" height="32" rx="8" fill="url(#feat2)" />
                <defs>
                  <linearGradient id="feat2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#ec4899" />
                    <stop offset="1" stop-color="#a855f7" />
                  </linearGradient>
                </defs>
                <path d="M16 24h16M24 16v16" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-2">Compliance & Privacy</h3>
            <p className="text-gray-400 text-center">Stay compliant with GDPR, HIPAA, and other regulations while preparing your data for AI.</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <ellipse cx="24" cy="24" rx="20" ry="12" fill="url(#feat3)" />
                <defs>
                  <linearGradient id="feat3" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#38bdf8" />
                    <stop offset="1" stop-color="#ec4899" />
                  </linearGradient>
                </defs>
                <path d="M16 28c2-4 14-4 16 0" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-2">AI-Ready Formatting</h3>
            <p className="text-gray-400 text-center">We clean, structure, and format your data for optimal use with LLMs and generative AI tools.</p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">How it Works</h2>
          <p className="text-lg text-gray-300">Automate your entire workflow so you get more, with less effort.</p>
        </div>
        <div className="bg-[#18141c] rounded-2xl shadow-xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-800 overflow-hidden">
          {/* Step 1 */}
          <div className="flex-1 p-8 flex flex-col items-start">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 text-white font-bold text-lg mb-4">1</div>
            <h3 className="text-xl font-semibold text-white mb-2">Spot Denied Claims in Your Dashboard</h3>
            <p className="text-gray-400">Your dashboard shows every denied claim across your organization, with smart filters and recommendations prioritized by urgency and value.</p>
          </div>
          {/* Step 2 */}
          <div className="flex-1 p-8 flex flex-col items-start">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-400 via-purple-500 to-blue-400 text-white font-bold text-lg mb-4">2</div>
            <h3 className="text-xl font-semibold text-white mb-2">Generate Appeal Letters Automatically</h3>
            <p className="text-gray-400">Pulls data from files and your system to generate precise, policy-specific letters automatically.</p>
          </div>
          {/* Step 3 */}
          <div className="flex-1 p-8 flex flex-col items-start">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-400 text-white font-bold text-lg mb-4">3</div>
            <h3 className="text-xl font-semibold text-white mb-2">Submit and Track Results</h3>
            <p className="text-gray-400">Submit directly and monitor every step's progress. See what's working, and what's still pending—no more spreadsheets.</p>
          </div>
        </div>
      </section>

      {/* Feature Marquee Section */}
      <div className="relative w-full overflow-x-hidden py-8 bg-black">
        {/* Gradient overlays */}
        <div className="marquee-fade marquee-fade-left" />
        <div className="marquee-fade marquee-fade-right" />
        {/* Row 1: left to right, seamless loop */}
        <div className="animate-marquee flex gap-4 w-max mb-4">
          {[
            "Real-Time Metrics", "Policy-Aware Coding", "Team Workflows", "Smart Denial Triage",
            "EHR Integration", "Revenue Insights", "Insurance Sync", "AI-Generated Appeals"
          ].concat([
            "Real-Time Metrics", "Policy-Aware Coding", "Team Workflows", "Smart Denial Triage",
            "EHR Integration", "Revenue Insights", "Insurance Sync", "AI-Generated Appeals"
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
          {[
            "Smart Denial Triage", "Team Workflows", "Policy-Aware Coding", "Real-Time Metrics",
            "AI-Generated Appeals", "Insurance Sync", "Revenue Insights", "EHR Integration"
          ].concat([
            "Smart Denial Triage", "Team Workflows", "Policy-Aware Coding", "Real-Time Metrics",
            "AI-Generated Appeals", "Insurance Sync", "Revenue Insights", "EHR Integration"
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

      <footer className="w-full bg-black text-gray-400 py-6 flex flex-col items-center border-t border-gray-800 mt-8">
        <div className="text-lg font-bold text-white mb-1">Vanna</div>
        <div className="text-sm">&copy; {new Date().getFullYear()} Vanna. All rights reserved.</div>
      </footer>
    </div>
  );
}
