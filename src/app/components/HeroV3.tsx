import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// V3: Asymmetric layout that breaks the grid
export function HeroV3() {
  return (
    <section className="min-h-screen bg-zinc-900 relative overflow-hidden">
      <div className="min-h-screen grid grid-cols-12 gap-0">
        {/* Left column - Text */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="col-span-7 flex flex-col justify-center px-16 py-24"
        >
          <div className="max-w-2xl">
            <h1 className="text-8xl font-bold text-white mb-8 leading-[0.95]">
              Where form meets function
            </h1>
            <div className="h-1 w-32 bg-white mb-8" />
            <p className="text-zinc-400 text-xl mb-6">
              Zach Acuña
            </p>
            <p className="text-zinc-500 text-base max-w-md">
              Product designer obsessed with the details that make experiences feel effortless. 
              If it's not intentional, it's not in the design.
            </p>
          </div>
        </motion.div>

        {/* Right column - Image and accent */}
        <div className="col-span-5 relative">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[140%] h-[70%]"
          >
            <div className="relative w-full h-full">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697981027675-3770d1b8ee6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZ2VvbWV0cmljJTIwc2hhcGVzfGVufDF8fHx8MTc3MTg2NjU4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Geometric shapes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-900" />
            </div>
          </motion.div>
          
          {/* Accent element */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-24 -left-12 w-48 h-48 bg-white rounded-full opacity-5"
          />
        </div>
      </div>
    </section>
  );
}
