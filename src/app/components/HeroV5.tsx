import { motion } from 'motion/react';
import { ArrowDown, MousePointerClick } from 'lucide-react';
import { useState } from 'react';

// V5: Subtle motion cues and interaction hints
export function HeroV5() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen bg-zinc-950 flex items-center justify-center px-8 relative">
      <div className="max-w-6xl w-full">
        {/* Main content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-zinc-600 text-sm tracking-widest mb-8">SCROLL TO EXPLORE</p>
            
            <motion.h1 
              className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span className="inline-block hover:text-zinc-300 transition-colors cursor-default">
                Design
              </span>
              {' '}
              <span className="inline-block hover:text-zinc-300 transition-colors cursor-default">
                with
              </span>
              <br />
              <motion.span 
                className="inline-block bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: isHovered ? ['0% 50%', '100% 50%'] : '0% 50%',
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                style={{ backgroundSize: '200% 200%' }}
              >
                precision
              </motion.span>
            </motion.h1>

            <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
              Zach Acuña — Product designer turning complexity into clarity
            </p>

            {/* Interactive CTA */}
            <motion.button
              className="group relative px-8 py-4 bg-white text-zinc-950 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <MousePointerClick className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-zinc-800"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-zinc-600" />
          <div className="w-px h-16 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800 rounded-full blur-3xl opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-700 rounded-full blur-3xl opacity-20"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
}
