import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Lightbox } from './Lightbox';

// V3: Horizontal scroll with parallax
export function GalleryV3() {
  const images = [
    'https://images.unsplash.com/photo-1703355685626-57abd3bfbd95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxODcwOTU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzE4NzA5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760716478137-d861d5b354e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwb2JqZWN0fGVufDF8fHx8MTc3MTg3MDk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1638786245283-98cb5933c49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzE4NzA5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE3OTAzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1696401680571-f6e9986026d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGV0YWlsfGVufDF8fHx8MTc3MTg3MDk1OXww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="min-h-screen bg-zinc-900 py-24 overflow-hidden">
      <div className="mb-12 px-12">
        <h2 className="text-4xl font-bold text-white">Selected Work</h2>
        <p className="text-zinc-400 mt-2">Scroll to explore →</p>
      </div>

      <div className="relative">
        <div className="flex gap-8 px-12 overflow-x-auto scrollbar-hide pb-8" style={{ scrollBehavior: 'smooth' }}>
          {images.map((image, index) => {
            const start = index / images.length;
            const end = (index + 1) / images.length;
            
            const y = useTransform(
              scrollYProgress,
              [start, end],
              [100, -100]
            );

            const scale = useTransform(
              scrollYProgress,
              [start, end],
              [0.9, 1]
            );

            return (
              <motion.div
                key={index}
                style={{ y, scale }}
                className="flex-shrink-0 w-[600px] h-[400px] group cursor-pointer"
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <motion.div
                  className="relative w-full h-full rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="absolute bottom-6 left-6">
                      <p className="text-white text-lg font-semibold">Project {index + 1}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
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

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
