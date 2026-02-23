import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// V6: Hybrid of V1 + V4 - V4's type layout overlaid on V1's image approach
export function CaseIntroV6() {
  return (
    <section className="min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[85vh] md:h-[90vh]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758467700669-fe9cc3d76bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwcHJvZHVjdCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzE4ODQ5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Project showcase"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient - only bottom third */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent z-10" />
        
        {/* Content Overlaid on Image - Bottom positioned */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pb-6 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="mb-4 md:mb-8">
                <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold text-white leading-[0.95] mb-2 md:mb-4">
                  Designing for Global<br />Commerce at Scale
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 lg:gap-16">
                {/* Left: Description */}
                <div>
                  <p className="text-zinc-200 text-xs md:text-base lg:text-lg leading-relaxed mb-4 md:mb-8">
                    Built a checkout experience that processes $12M in daily transactions 
                    across 40 countries, reducing cart abandonment by 35% and increasing 
                    mobile conversion by 52%.
                  </p>

                  {/* Stats */}
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-end gap-2 md:gap-4">
                      <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">$12M</p>
                      <p className="text-zinc-300 text-xs md:text-sm pb-0.5 md:pb-2">Daily Transaction Volume</p>
                    </div>
                    <div className="flex items-end gap-2 md:gap-4">
                      <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">40</p>
                      <p className="text-zinc-300 text-xs md:text-sm pb-0.5 md:pb-2">Countries Supported</p>
                    </div>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="space-y-3 md:space-y-6">
                  <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6">
                    <div>
                      <p className="text-zinc-400 text-xs tracking-wider mb-1">ROLE</p>
                      <p className="text-white text-xs md:text-base">Lead Designer</p>
                    </div>
                    <div>
                      <p className="text-zinc-400 text-xs tracking-wider mb-1">COMPANY</p>
                      <p className="text-white text-xs md:text-base">Shopstream</p>
                    </div>
                    <div>
                      <p className="text-zinc-400 text-xs tracking-wider mb-1">TIMELINE</p>
                      <p className="text-white text-xs md:text-base">9 months</p>
                    </div>
                    <div>
                      <p className="text-zinc-400 text-xs tracking-wider mb-1">YEAR</p>
                      <p className="text-white text-xs md:text-base">2024</p>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-2 md:pt-4">
                    <p className="text-zinc-400 text-xs tracking-wider mb-2">DISCIPLINES</p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {['UX Design', 'A/B Testing', 'Localization', 'Payment Flows'].map((tag) => (
                        <span key={tag} className="px-2 md:px-3 py-0.5 md:py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
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
      </div>

      <div className="h-32" />
    </section>
  );
}