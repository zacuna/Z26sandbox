import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// V2: Strong immersive image with parallax-ready design
export function HeroV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  // Image opacity: starts at 1 when in view, fades to 0 as you scroll away
  const imageOpacity = useTransform(
    scrollYProgress, 
    [0, 0.7, 1], 
    [1, 0.5, 0]
  );
  
  // Blur: clear when in view, blurry when scrolled away
  const blur = useTransform(
    scrollYProgress, 
    [0, 0.7, 1], 
    [0, 10, 20]
  );
  
  // Smooth spring animation for scroll values
  const smoothBlur = useSpring(blur, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(imageOpacity, { stiffness: 100, damping: 30 });
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.3, 0]);

  return (
    <section ref={containerRef} className="h-[80vh] relative overflow-hidden">
      {/* Background image with parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            opacity: smoothOpacity,
            filter: smoothBlur,
          }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1755593574938-6d66d28f8e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwZGFya3xlbnwxfHx8fDE3NzE4NjY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Abstract gradient background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ opacity: textOpacity }}
        className="h-full flex flex-col justify-end px-12 pb-24 relative z-10"
      >
        <div className="max-w-4xl">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-300 text-sm tracking-widest mb-4"
          >
            ZACH ACUÑA
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-7xl md:text-8xl font-bold text-white leading-tight mb-6"
          >
            Design that speaks louder than words
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-zinc-300 text-lg max-w-xl"
          >
            Building products that feel inevitable—where craft meets clarity.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}