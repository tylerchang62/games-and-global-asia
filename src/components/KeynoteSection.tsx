import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, MapPin, Search, BookOpen, Sparkles } from 'lucide-react';

interface KeynoteSpeaker {
  id: string;
  role?: string;
  name: string;
  title: string;
  institution: string;
  location: string;
  topic: string;
  abstract: string;
  subthemes: string[];
  avatarSeed: string;
}

const keynotesPlaceholder: KeynoteSpeaker[] = [
  {
    id: 'keynote-1',
    name: 'Jacob Schmidt-Madsen',
    title: 'Postdoctoral Researcher',
    institution: 'Max Planck Institute for the History of Science',
    location: 'Berlin/ Online',
    topic: 'TBD',
    abstract: 'TBD',
    subthemes: ['TBD'],
    avatarSeed: 'weiqi'
  }
];

export default function KeynoteSection() {
  const [activeSpeaker, setActiveSpeaker] = useState<string>('keynote-1');

  const selectedSpeaker = keynotesPlaceholder.find(k => k.id === activeSpeaker) || keynotesPlaceholder[0];

  return (
    <section id="keynotes-section" className="py-16 px-6 max-w-6xl mx-auto">
      
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold">Featured Scholars</span>
          <h2 className="text-3xl font-serif font-semibold text-white mt-2">
            Keynote Highlights
          </h2>
        </div>
        <p className="text-white/40 text-xs md:text-sm max-w-md mt-4 md:mt-0 font-light">
          
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
          {keynotesPlaceholder.map((speaker) => {
            const isActive = speaker.id === activeSpeaker;
            return (
              <button
                key={speaker.id}
                onClick={() => setActiveSpeaker(speaker.id)}
                className={`text-left p-4 rounded-none border transition-all duration-300 shrink-0 lg:shrink-1 flex-1 lg:w-full ${
                  isActive 
                    ? 'bg-gold-500/10 border-gold-500 text-gold-400 shadow-lg shadow-gold-500/5' 
                    : 'bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white'
                }`}
                id={`btn-${speaker.id}`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-none ${isActive ? 'bg-gold-500 text-black' : 'bg-white/5 text-white/30'}`}>
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-wider text-gold-500">{speaker.role}</p>
                    <p className="text-sm font-serif font-bold text-white mt-0.5">{speaker.name}</p>
                  </div>
                </div>
              </button>
            );
          })}

          <div className="hidden lg:block bg-white/5 rounded-none p-4 border border-dashed border-white/10 mt-4">
            <h4 className="text-xs font-bold text-white mb-1.5 flex items-center gap-1.5 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-gold-500" />
              <span>Full Roster Upcoming</span>
            </h4>
            <p className="text-[11px] text-white/40 leading-relaxed font-light">
              Additional panelists, roundtable hosts, and respondents will be announced sequentially on a rolling basis. Interested in presenting? See the Call for Papers above.
            </p>
          </div>
        </div>

        {/* Detailed Profile View */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSpeaker.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0a0a0a] rounded-none p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              {/* Corner Watermark */}
              <div className="absolute right-[-40px] top-[-40px] w-32 h-32 bg-gold-500/5 rounded-full blur-2xl" />

              <div className="flex flex-col md:flex-row gap-6 md:items-start">
                
                {/* Abstract Stylized Avatar to look super professional */}
                <div className="w-16 h-16 rounded-none shrink-0 flex items-center justify-center border border-gold-500/20 bg-gold-500/5 relative group select-none overflow-hidden">
                  {selectedSpeaker.avatarSeed === 'weiqi' ? (
                    // Weiqi board styled abstract motif
                    <div className="grid grid-cols-3 gap-1.5 p-2 w-full h-full bg-[#0d0d0d]">
                      <div className="bg-white rounded-full w-2 h-2 mx-auto" />
                      <div className="bg-white/20 border border-white/30 rounded-full w-2 h-2 mx-auto" />
                      <div className="bg-white rounded-full w-2 h-2 mx-auto" />
                      <div className="bg-white/20 border border-white/30 rounded-full w-2 h-2 mx-auto" />
                      <div className="bg-gold-500 rounded-full w-2 h-2 mx-auto" />
                      <div className="bg-white rounded-full w-2 h-2 mx-auto" />
                      <div className="bg-white rounded-full w-2 h-2 mx-auto" />
                      <div className="bg-white/20 border border-white/30 rounded-full w-2 h-2 mx-auto" />
                      <div className="bg-white/20 border border-white/30 rounded-full w-2 h-2 mx-auto" />
                    </div>
                  ) : (
                    // Digital Pixel styled abstract motif
                    <div className="relative w-full h-full flex items-center justify-center bg-[#0d0d0d]">
                      <div className="absolute w-8 h-8 bg-gold-500/10" />
                      <div className="absolute w-5 h-5 bg-gold-500/30" />
                      <div className="absolute w-2 h-2 bg-gold-500 shadow-[0_0_8px_#d4af37]" />
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 bg-gold-500 text-black p-0.5">
                    <Sparkles className="w-2.5 h-2.5" />
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-widest text-gold-500">{selectedSpeaker.role}</p>
                    <h3 className="text-2xl font-serif font-semibold text-white mt-1">
                      {selectedSpeaker.name}
                    </h3>
                    <p className="text-sm font-medium text-white/70 mt-1 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-white/40" />
                      <span>{selectedSpeaker.title}</span>
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/40 mt-1">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-white/30" />
                        {selectedSpeaker.institution}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-white/30" />
                        {selectedSpeaker.location}
                      </span>
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/10" />

                  {/* Research Paper / Lecture Title */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] uppercase tracking-wider text-white/30 font-semibold">Research Theme Placeholder</h4>
                    <h5 className="text-base md:text-lg font-serif font-medium text-gold-400 italic">
                      "{selectedSpeaker.topic}"
                    </h5>
                    
                    <div className="relative bg-white/5 rounded-none p-4 border border-white/10 mt-3">
                      <p className="text-xs text-white/60 leading-relaxed font-light">
                        [Placeholder Abstract] {selectedSpeaker.abstract}
                      </p>
                    </div>
                  </div>

                  {/* Research subthemes tags */}
                  <div className="pt-2">
                    <p className="text-[10px] uppercase tracking-wider text-white/30 font-semibold mb-2">Subject Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedSpeaker.subthemes.map((theme, i) => (
                        <span 
                          key={i} 
                          className="bg-white/5 text-white/60 text-[10px] px-2.5 py-1 rounded-none font-medium border border-white/10"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
