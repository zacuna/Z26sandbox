import { motion } from 'motion/react';

// V1: Oversized display typography as primary visual element
export function HeroV1() {
  return (
    <section className="min-h-screen bg-zinc-950 flex items-center justify-center px-8 relative overflow-hidden">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-zinc-500 text-sm tracking-wider mb-6">PRODUCT DESIGNER</p>
          <h1 className="text-[clamp(4rem,12vw,14rem)] leading-[0.9] font-bold tracking-tighter">
            <span className="block text-white">Zach</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
              Acuña
            </span>
          </h1>
          <p className="text-zinc-400 text-xl mt-8 max-w-2xl">
            Crafting digital experiences with precision and intentionality. 
            Every pixel serves a purpose.
          </p>
        </motion.div>
      </div>
      
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
    </section>
  );
}
