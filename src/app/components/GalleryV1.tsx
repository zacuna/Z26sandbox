import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Lightbox } from './Lightbox';

// V1: 3D Carousel with tilted cards
export function GalleryV1() {
  const images = [
    'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE3OTAzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760716478137-d861d5b354e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwb2JqZWN0fGVufDF8fHx8MTc3MTg3MDk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1768212561364-bedf52776510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NzE4NzA5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1703355685626-57abd3bfbd95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxODcwOTU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzE4NzA5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const isScrolling = useRef(false);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    // Prevent rapid scrolling
    if (isScrolling.current) return;
    
    // Use horizontal scroll (deltaX) or vertical scroll (deltaY)
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    
    // Only trigger if scroll is significant enough
    if (Math.abs(delta) < 10) return;
    
    isScrolling.current = true;
    
    if (delta > 0) {
      handleNext();
    } else if (delta < 0) {
      handlePrevious();
    }
    
    // Reset scrolling flag after animation duration
    setTimeout(() => {
      isScrolling.current = false;
    }, 700);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const position = ((diff + images.length) % images.length);
    
    if (position === 0) {
      // Active card - center, larger, sharp
      return {
        x: '0%',
        scale: 1.15,
        scaleM: 1.0, // Mobile scale
        rotateY: 0,
        z: 0,
        opacity: 1,
        zIndex: 3,
        filter: 'blur(0px)',
      };
    } else if (position === 1) {
      // Right card - smaller, dimmer, more angled, blurred
      return {
        x: '70%',
        xM: '45%', // Mobile x position
        scale: 0.75,
        scaleM: 0.65, // Mobile scale
        rotateY: -35,
        rotateYM: -25, // Mobile rotation
        z: -200,
        opacity: 0.4,
        zIndex: 2,
        filter: 'blur(2px)',
      };
    } else if (position === images.length - 1) {
      // Left card - smaller, dimmer, more angled, blurred
      return {
        x: '-70%',
        xM: '-45%', // Mobile x position
        scale: 0.75,
        scaleM: 0.65, // Mobile scale
        rotateY: 35,
        rotateYM: 25, // Mobile rotation
        z: -200,
        opacity: 0.4,
        zIndex: 2,
        filter: 'blur(2px)',
      };
    } else {
      // Hidden cards
      return {
        x: position < images.length / 2 ? '100%' : '-100%',
        xM: position < images.length / 2 ? '100%' : '-100%',
        scale: 0.6,
        scaleM: 0.5,
        rotateY: 0,
        rotateYM: 0,
        z: -400,
        opacity: 0,
        zIndex: 1,
        filter: 'blur(4px)',
      };
    }
  };

  return (
    <section className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 md:px-8 py-12 md:py-24">
      <div className="w-full max-w-6xl">
        {/* Carousel container */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[700px] perspective-[1200px] md:perspective-[2000px]">
          <AnimatePresence initial={false}>
            {images.map((image, index) => {
              const style = getCardStyle(index);
              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 w-[280px] h-[200px] md:w-[500px] md:h-[350px] lg:w-[700px] lg:h-[500px] cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    x: '-50%',
                  }}
                  initial={false}
                  animate={{
                    translateX: window.innerWidth < 768 ? style.xM || style.x : style.x,
                    y: '-50%',
                    scale: window.innerWidth < 768 ? style.scaleM || style.scale : style.scale,
                    rotateY: window.innerWidth < 768 ? style.rotateYM || style.rotateY : style.rotateY,
                    z: style.z,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    filter: style.filter,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  onClick={() => {
                    if (index === currentIndex) {
                      setLightboxIndex(index);
                      setLightboxOpen(true);
                    } else {
                      setCurrentIndex(index);
                    }
                  }}
                  onWheel={handleWheel}
                >
                  <div className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-zinc-900">
                    <ImageWithFallback
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12">
          <button
            onClick={handlePrevious}
            className="p-2 md:p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-6 md:w-8'
                    : 'bg-zinc-600 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 md:p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}