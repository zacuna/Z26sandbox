import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Lightbox } from './Lightbox';

// V5: Staggered offset grid with scroll reveal
export function GalleryV5() {
  const images = [
    'https://images.unsplash.com/photo-1703355685626-57abd3bfbd95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxODcwOTU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760716478137-d861d5b354e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwb2JqZWN0fGVufDF8fHx8MTc3MTg3MDk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzE4NzA5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE3OTAzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1719150006656-958724675d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzcxODM1MzU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1768212561364-bedf52776510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NzE4NzA5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section className="min-h-screen bg-zinc-950 px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-32">
          {images.map((image, index) => (
            <GalleryItem
              key={index}
              image={image}
              index={index}
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            />
          ))}
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

interface GalleryItemProps {
  image: string;
  index: number;
  onClick: () => void;
}

function GalleryItem({ image, index, onClick }: GalleryItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      className={`flex items-center gap-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Image */}
      <motion.div
        className="flex-1 cursor-pointer group relative overflow-hidden rounded-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        onClick={onClick}
        style={{
          marginLeft: isEven ? '0' : '8rem',
          marginRight: isEven ? '8rem' : '0',
        }}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
          <ImageWithFallback
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-64"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-zinc-700" />
          <span className="text-zinc-600 text-sm">0{index + 1}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Project {index + 1}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          A showcase of thoughtful design and attention to detail.
        </p>
      </motion.div>
    </motion.div>
  );
}
