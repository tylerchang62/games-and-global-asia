import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Mail, Users } from 'lucide-react';

export default function CfpSection() {
  return (
    <section id="cfp-section" className="py-16 bg-[#0d0d0d] border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold block mb-2">Scholarly Contributions</span>
          <h2 className="text-3xl font-serif font-semibold text-white mb-4">
            Call for Papers (CFP)
          </h2>
        </div>

        {/* Call for Papers Text */}
        <div className="max-w-4xl mx-auto mb-14 space-y-5 text-sm md:text-base text-white/60 leading-relaxed font-light text-left">
          <p>
            As Asia becomes increasingly central to global cultural production, especially of games and digital media, it is vital to turn scholarly and artistic attention toward understanding this phenomenon and its social impacts. This lecture series will speak to the geopolitical dimensions of games and play, both in the context of nationalism and for the thriving Asian diaspora of scholars, students, and broader publics.
          </p>
          <p>
          We invite scholars, artists, and designers at all career stages to submit proposals that explore the transformative potential of Asian and Asian diasporic traditions in reimagining gaming technologies and challenging dominant Eurocentric paradigms. We intend to focus on how to learn from the often-overlooked histories of games and play in Asia, how the histories of science and technology in Asia inform current approaches to gaming technologies, how can we critically engage with the hegemonies and repressive forces embedded in modern gaming technologies through the insights of Asian history and knowledge, and what methodologies can be used to engage with the intersection of Asian history and gaming technologies research. We also ask participants to reflect on the rapid growth and evolution of game industries and cultures across, within, and beyond Asia, entangled with real-time geopolitics and sociocultural practices, from transnational conglomerates and AAA studios to indie developers, digital media artists mobile gamers, hackers, modders, and bootleggers. How local Asian player communities use gameplay for community building, cultural exchange, subversion, resistance, healing, and more. Rather than seeing Asia as monolithic, we emphasize the transnational and transcultural nature of regional game studies to interrogate the dynamic relationships between global and local, universalism and particularism, and center and periphery. 
          </p>
          <p>
            There is an emerging body of scholarship that engages with non-Eurocentric paradigms by challenging Western-centric assumptions about technology (Williams, 2014; Hui, 2016, 2021), employing worldbuilding and worlding as decolonial interventions (Cheah, 2016; Escobar, 2018; Kondo, 2018), and adopting research methods such as co-creation and participatory approaches to engage with local lived experiences (Cizek &amp; Uricchio, 2022). Inspired by Kuan-Hsing Chen’s <em className="italic text-white/75">Asia as Method</em> (2010), which proposes using Asia as an imaginary anchoring point to challenge and destabilize dominant paradigms, this lecture series explores the transformative potential of Asian traditions in reimagining gaming technologies. We approach gaming technology broadly—not limited to video games but inclusive of both digital and analog games, conceived as assemblages of software, hardware, and community. Our scope also extends to related infrastructures and systems, including game engines, artificial intelligence, computer graphics, cloud computing, platforms, and communication protocols. This symposium invites scholars and artists to collectively reimagine gaming technologies through the lens of Asian cosmologies, shared knowledge systems, ancient technologies, and religious and spiritual practices.
          </p>
          <p>
          Rather than viewing East Asia as a stable geographical location, we emphasize the transnational and transcultural nature of people’s knowledge, memories, experiences, stories, and cultures. This orientation allows us to interrogate the dynamic relationships between global and local, universalism and particularism, and center and periphery in the effort to decenter Eurocentric paradigms. This series seeks to revisit the past, confront the present, and speculate on the future of gaming technologies by centering Asian knowledge and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Important Dates */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 bg-[#0a0a0a] rounded-none p-6 shadow-2xl border border-white/10 min-h-full"
          >
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
              <Calendar className="w-5 h-5 text-gold-500" />
              <h3 className="text-base font-serif font-bold text-white/90">Important Dates</h3>
            </div>

            <div className="space-y-5">
              <div className="relative pl-6 pb-2 border-l border-white/10">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-gold-500 rounded-none shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                <p className="text-xs font-semibold text-white/90">CFP Submission Opens</p>
                <p className="text-[10px] text-gold-500 font-semibold font-mono uppercase tracking-wider mt-0.5">Date: [To Be Announced]</p>
              </div>
              <div className="relative pl-6 pb-2 border-l border-white/10">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-white/20 rounded-none" />
                <p className="text-xs font-semibold text-white/40">Abstract Deadline</p>
                <p className="text-[10px] text-white/30 font-mono mt-0.5">Date: [TBA]</p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-white/20 rounded-none" />
                <p className="text-xs font-semibold text-white/40">Notification of Acceptance</p>
                <p className="text-[10px] text-white/30 font-mono mt-0.5">Date: [TBA]</p>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Submission Guideline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0a0a0a] rounded-none p-6 shadow-2xl border border-white/10 min-h-full"
          >
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
              <Mail className="w-5 h-5 text-gold-500" />
              <h3 className="text-base font-serif font-bold text-white/90">Submission Guideline</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2 text-xs text-white/70 leading-relaxed font-light">
                <p>
                  <strong className="text-gold-400 font-semibold">For full (35-45 min) lectures</strong>, please submit an abstract of 200-250 words explaining your research scope and findings.
                </p>
                <p className="pt-1.5">
                  <strong className="text-gold-400 font-semibold">For works-in-progress talks (10-15 min)</strong>, please submit a brief summary of your ongoing work in 50-100 words.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <h4 className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-2">For all submissions, please include:</h4>
                <ol className="list-decimal list-inside space-y-1 text-xs text-white/70 font-light">
                  <li>Title</li>
                  <li>Presenter name / pronouns and any institutional affiliation</li>
                  <li>Desired month(s) of presentation</li>
                </ol>
              </div>

              <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-none">
                <p className="text-[11px] text-white/80 leading-normal font-light">
                  Please submit materials to <a href="mailto:email@address.com" className="text-gold-400 hover:underline font-medium">email@address.com</a> with the subject line:
                </p>
                <p className="text-[10px] text-gold-500 font-mono mt-1.5 bg-[#050505] p-2 border border-white/5 select-all">
                  “Games in Global Asia Submission: &lt;Presentation Title&gt;”
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Organizers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 bg-[#0a0a0a] rounded-none p-6 shadow-2xl border border-white/10"
        >
          <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
            <Users className="w-5 h-5 text-gold-500" />
            <h3 className="text-base font-serif font-bold text-white/90">Organizers</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-serif font-bold text-white">Samuel Pizelo</p>
              <p className="text-xs text-white/40 font-light mt-0.5">University of Toronto Mississauga</p>
            </div>
            <div>
              <p className="text-sm font-serif font-bold text-white">Haoran Chang</p>
              <p className="text-xs text-white/40 font-light mt-0.5">York University</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
