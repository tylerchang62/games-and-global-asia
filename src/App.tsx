import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Calendar, 
  FileText, 
  Award, 
  Dribbble, 
  BookOpen, 
  MapPin, 
  CornerRightDown,
  Globe
} from 'lucide-react';
import CfpSection from './components/CfpSection';
import KeynoteSection from './components/KeynoteSection';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] transition-colors duration-300 selection:bg-gold-500/20 selection:text-white">
      
      {/* Top Banner & Navigation */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/95 border-b border-white/10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo & Identity */}
          <div className="flex items-center space-x-2">
            <div className="bg-gold-500 text-black p-1.5 rounded-none shadow-[0_0_10px_rgba(212,175,55,0.4)]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-sm md:text-base tracking-tight block text-white">
                Games & Global Asia
              </span>
            </div>
          </div>

          {/* Nav Links & Controls */}
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6 text-[10px] font-bold uppercase tracking-widest text-white/60">
              <button 
                onClick={() => scrollToSection('cfp-section')} 
                className="hover:text-gold-500 transition"
              >
                CFP
              </button>
              <button 
                onClick={() => scrollToSection('keynotes-section')} 
                className="hover:text-gold-500 transition"
              >
                Keynotes
              </button>
            </nav>
          </div>

        </div>
      </header>

      {/* Hero Showcase Block */}
      <section className="relative overflow-hidden pt-12 pb-16 md:py-24 border-b border-white/10 bg-[#0a0a0a]">
        
        {/* Subtle Decorative Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]"
          >
            Games & <span className="text-gold-500 italic font-serif font-medium">Global Asia</span>
          </motion.h1>



          {/* Quick scroll down hint */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <button 
              onClick={() => scrollToSection('cfp-section')}
              className="text-white/40 hover:text-gold-500 transition duration-150 flex flex-col items-center space-y-1"
              id="scroll-explore-btn"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold">Explore CFP</span>
              <CornerRightDown className="w-4 h-4 animate-bounce" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Main Content Modules */}
      <main>
        
        {/* Module 1: Call for Papers */}
        <CfpSection />

        {/* Module 2: Keynote Highlights */}
        <KeynoteSection />

      </main>

      {/* Footer Design */}
      <footer className="bg-[#0d0d0d] text-white/40 py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-5">
            {/* Organization Logo Placeholder */}
            <div className="flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2.5 select-none" id="org-logo-placeholder">
              <div className="w-8 h-8 border border-gold-500/40 flex items-center justify-center text-[10px] text-gold-500 font-mono font-bold tracking-tighter">
                GGA
              </div>
              <div className="text-left">
                <span className="text-[9px] tracking-widest text-white/80 block uppercase font-bold">
                  Global Asia Research
                </span>
                <span className="text-[8px] tracking-[0.15em] text-white/40 block uppercase">
                  Consortium
                </span>
              </div>
            </div>

            <div className="space-y-1.5 text-center md:text-left">
              <h4 className="font-serif font-bold text-white text-base">Games & Global Asia</h4>
              <p className="text-xs text-white/30">
                © 2026 Organizing Committee.
              </p>
            </div>
          </div>
          <div className="flex gap-4 text-[10px] uppercase tracking-widest font-bold">
            <button onClick={() => scrollToSection('cfp-section')} className="hover:text-gold-500 transition">CFP</button>
            <span className="text-white/10">•</span>
            <button onClick={() => scrollToSection('keynotes-section')} className="hover:text-gold-500 transition">Keynotes</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
