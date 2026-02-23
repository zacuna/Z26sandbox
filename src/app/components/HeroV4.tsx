import { motion } from 'motion/react';

// V4: Minimal with whitespace and type contrast (light variant)
export function HeroV4() {
  return (
    <section className="min-h-screen bg-zinc-50 flex items-center justify-center px-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Small introduction */}
          <div className="mb-32">
            <p className="text-zinc-400 text-xs tracking-[0.3em] uppercase">
              Portfolio 2026
            </p>
          </div>

          {/* Main content */}
          <div className="space-y-16">
            <h1 className="text-[clamp(3rem,8vw,9rem)] leading-[0.85] tracking-tight">
              <span className="block font-light text-zinc-900">Zach Acuña</span>
              <span className="block font-bold text-zinc-900">designs with</span>
              <span className="block font-light italic text-zinc-400">conviction</span>
            </h1>

            <div className="flex justify-end">
              <p className="text-zinc-600 text-lg max-w-md text-right leading-relaxed">
                Every decision is deliberate. Every interface is purposeful. 
                No decoration without reason.
              </p>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="mt-32 flex justify-between items-end">
            <div className="w-2 h-32 bg-zinc-900" />
            <p className="text-zinc-400 text-sm">Product Designer</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
