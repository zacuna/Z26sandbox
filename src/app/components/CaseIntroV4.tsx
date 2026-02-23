import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// V4: Parallax storytelling - Image behind text with depth
export function CaseIntroV4() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <section ref={containerRef} className="min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1770048532712-4fde5ef7eb90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBkaWdpdGFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTg3OTk5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Project showcase"
          className="w-full h-[130vh] object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="mb-12">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs tracking-wider mb-6">
                HEALTH TECH
              </span>
              <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight mb-6">
                Connecting Patients<br />to Better Care
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-16">
              {/* Left: Description */}
              <div>
                <p className="text-zinc-300 text-lg leading-relaxed mb-12">
                  Designed a telemedicine platform that reduced wait times by 60% 
                  and increased patient satisfaction scores from 3.2 to 4.7 stars.
                </p>

                {/* Stats */}
                <div className="space-y-6">
                  <div className="flex items-end gap-4">
                    <p className="text-5xl font-bold text-white">250K</p>
                    <p className="text-zinc-400 text-sm pb-2">Active Patients</p>
                  </div>
                  <div className="flex items-end gap-4">
                    <p className="text-5xl font-bold text-white">15M</p>
                    <p className="text-zinc-400 text-sm pb-2">Consultations Completed</p>
                  </div>
                </div>
              </div>

              {/* Right: Details */}
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-zinc-500 text-xs tracking-wider mb-2">ROLE</p>
                    <p className="text-white">Lead Designer</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs tracking-wider mb-2">COMPANY</p>
                    <p className="text-white">HealthConnect</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs tracking-wider mb-2">TIMELINE</p>
                    <p className="text-white">10 months</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs tracking-wider mb-2">YEAR</p>
                    <p className="text-white">2023–2024</p>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-6">
                  <p className="text-zinc-500 text-xs tracking-wider mb-3">DISCIPLINES</p>
                  <div className="flex flex-wrap gap-2">
                    {['User Research', 'Prototyping', 'Design Systems', 'Usability Testing'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zinc-900 text-zinc-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
