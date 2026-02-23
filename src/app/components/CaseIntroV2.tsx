import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

// V2: Split screen - Bold asymmetric layout
export function CaseIntroV2() {
  return (
    <section className="min-h-screen bg-black">
      <div className="grid grid-cols-2 min-h-screen">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzE4Nzk5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Project showcase"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center px-16 py-24 bg-zinc-950">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-zinc-500 text-xs tracking-widest mb-6">FINTECH / B2B SaaS</p>
            
            <h1 className="text-6xl font-bold text-white leading-tight mb-8">
              Building Trust Through Transparency
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              How we redesigned the invoice management system to reduce payment 
              disputes by 78% and saved finance teams 12 hours per week.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-12">
              <div>
                <p className="text-zinc-600 text-xs tracking-wider mb-2">MY ROLE</p>
                <p className="text-white text-sm">Product Design Lead</p>
              </div>
              <div>
                <p className="text-zinc-600 text-xs tracking-wider mb-2">DURATION</p>
                <p className="text-white text-sm">6 months</p>
              </div>
              <div>
                <p className="text-zinc-600 text-xs tracking-wider mb-2">OUTCOME</p>
                <p className="text-white text-sm">Shipped to 5,000+ users</p>
              </div>
              <div>
                <p className="text-zinc-600 text-xs tracking-wider mb-2">IMPACT</p>
                <p className="text-white text-sm">$2.4M ARR increase</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3 text-white group cursor-pointer">
              <span className="text-sm">View full case study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
