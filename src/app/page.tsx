"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  useEffect(() => setMounted(true), []);

  // Animated title switching
  const phrases = ["Enterprise AI", "Generative AI"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
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
      <section id="product" className="py-16 sm:py-24 px-4 md:px-0 flex flex-col items-center bg-black">
        <div className="w-full max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Your Data, Ready for AI</h2>
          <p className="max-w-2xl text-base sm:text-lg text-gray-300 mb-10 text-center mx-auto">
            Enterprises want the power of LLMs and generative AI — but their data isn&apos;t ready.<br className="hidden sm:block" />
            We provide a privacy-focused data layer that helps businesses migrate from legacy systems, digitize their data, and securely prepare it for AI use.<br className="hidden sm:block" />
            Whether you&apos;re adopting AI tools or building your own, we make sure your data is structured, compliant, and safe.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl mt-8 px-4">
          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <div className="bg-gradient-to-tr from-purple-400 to-blue-400 p-3 rounded-full mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            </div>
            <h3 className="font-semibold text-xl mb-2">Privacy-First</h3>
            <p className="text-gray-400 text-center">Your data is always protected and compliant with the latest privacy standards.</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <div className="bg-gradient-to-tr from-pink-400 to-purple-400 p-3 rounded-full mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a8 8 0 100 16 8 8 0 000-16zm1 11h-2v-2h2v2zm0-4h-2V7h2v4z"/></svg>
            </div>
            <h3 className="font-semibold text-xl mb-2">Legacy to Digital</h3>
            <p className="text-gray-400 text-center">We help you migrate from legacy systems and digitize your data for the future.</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <div className="bg-gradient-to-tr from-blue-400 to-pink-400 p-3 rounded-full mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            </div>
            <h3 className="font-semibold text-xl mb-2">AI-Ready Structure</h3>
            <p className="text-gray-400 text-center">We structure and prepare your data for seamless integration with LLMs and GenAI tools.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 px-4 md:px-0 flex flex-col items-center bg-black">
        <div className="w-full max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Key Features</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl mt-8 px-4">
          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <div className="bg-gradient-to-tr from-purple-400 to-blue-400 p-3 rounded-full mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9V7a5 5 0 00-10 0v2a5 5 0 00-2 4v5a2 2 0 002 2h10a2 2 0 002-2v-5a5 5 0 00-2-4zm-8-2a3 3 0 016 0v2H9V7zm8 11a1 1 0 01-1 1H8a1 1 0 01-1-1v-5a3 3 0 013-3h2a3 3 0 013 3v5z"/></svg>
            </div>
            <h3 className="font-semibold text-xl mb-2">Secure Data Migration</h3>
            <p className="text-gray-400 text-center">Move your data from legacy systems to modern infrastructure with end-to-end encryption.</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <div className="bg-gradient-to-tr from-pink-400 to-purple-400 p-3 rounded-full mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            </div>
            <h3 className="font-semibold text-xl mb-2">Compliance & Privacy</h3>
            <p className="text-gray-400 text-center">Stay compliant with GDPR, HIPAA, and other regulations while preparing your data for AI.</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-800">
            <div className="bg-gradient-to-tr from-blue-400 to-pink-400 p-3 rounded-full mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11H5a1 1 0 000 2h14a1 1 0 000-2z"/></svg>
            </div>
            <h3 className="font-semibold text-xl mb-2">AI-Ready Formatting</h3>
            <p className="text-gray-400 text-center">We clean, structure, and format your data for optimal use with LLMs and generative AI tools.</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 md:px-0 flex flex-col items-center bg-black">
        <div className="w-full max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="max-w-2xl text-base sm:text-lg text-gray-300 mb-8 text-center mx-auto">Ready to get started or have questions? Reach out to us using the form below or via email. Our team will get back to you within 24 hours.</p>
        </div>
        <form className="w-full max-w-md flex flex-col gap-4 bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-lg mx-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none" />
          <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none" />
          <button type="submit" className="w-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-white rounded-full px-6 py-3 font-semibold text-base hover:opacity-90 transition">Send Message</button>
        </form>
      </section>
    </div>
  );
}
