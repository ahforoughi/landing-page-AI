"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-6">
        {/* Logo on the left */}
        <div className="flex items-center gap-2 min-w-[80px]">
          <span className="text-2xl font-bold tracking-tight">scale</span>
        </div>
        {/* Centered navigation links */}
        <ul className="flex-1 flex justify-center gap-8 text-sm font-medium">
          <li><a href="#product" className="hover:underline">Product</a></li>
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#contact" className="hover:underline">Contact Us</a></li>
        </ul>
        {/* CTA button on the right */}
        <div className="flex items-center min-w-[120px] justify-end">
          <button className="bg-white text-black rounded-full px-4 py-2 font-semibold text-sm hover:bg-gray-200 transition">Book a Demo →</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-4 relative overflow-hidden min-h-[60vh]">
        {/* Animated Gradient/3D Disc Placeholders */}
        <motion.div
          className="absolute left-[-80px] top-24 w-72 h-72 bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 opacity-40 rounded-full blur-3xl z-0"
          animate={{
            y: [0, 30, 0, -30, 0],
            x: [0, 20, 0, -20, 0],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-[-80px] top-32 w-72 h-72 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-400 opacity-40 rounded-full blur-3xl z-0"
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, -20, 0, 20, 0],
            rotate: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <h1 className="text-4xl md:text-6xl font-bold leading-tight z-10 mb-4">
          Privacy-first Data Infrastructure for Enterprises
        </h1>
        <p className="mt-2 text-lg md:text-2xl max-w-2xl mx-auto z-10 text-gray-200">
          We help traditional businesses migrate to digital solutions and prepare their data securely for LLMs and GenAI.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center z-10">
          <button className="bg-white text-black rounded-full px-6 py-3 font-semibold text-base hover:bg-gray-200 transition">Book a Demo →</button>
          <button className="bg-transparent border border-white rounded-full px-6 py-3 font-semibold text-base hover:bg-white hover:text-black transition">Build AI →</button>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-24 px-4 md:px-0 flex flex-col items-center bg-black border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Your Data, Ready for AI</h2>
        <p className="max-w-2xl text-lg text-gray-300 mb-10 text-center">
          Enterprises want the power of LLMs and generative AI — but their data isn't ready.<br />
          We provide a privacy-focused data layer that helps businesses migrate from legacy systems, digitize their data, and securely prepare it for AI use.<br />
          Whether you're adopting AI tools or building your own, we make sure your data is structured, compliant, and safe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
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
      <section id="features" className="py-24 px-4 md:px-0 flex flex-col items-center bg-black border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
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
      <section id="contact" className="py-24 px-4 md:px-0 flex flex-col items-center bg-black border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Us</h2>
        <p className="max-w-2xl text-lg text-gray-300 mb-8 text-center">Ready to get started or have questions? Reach out to us using the form below or via email. Our team will get back to you within 24 hours.</p>
        <form className="w-full max-w-md flex flex-col gap-4 bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg">
          <input type="text" placeholder="Your Name" className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none" />
          <input type="email" placeholder="Your Email" className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none" />
          <textarea placeholder="Your Message" rows={4} className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none" />
          <button type="submit" className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-white rounded-full px-6 py-3 font-semibold text-base hover:opacity-90 transition">Send Message</button>
        </form>
      </section>
    </div>
  );
}
