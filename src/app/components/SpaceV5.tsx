import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';
import { Calendar, Eye } from 'lucide-react';

// V5: Cosmic Timeline - Scrolling journey through space imagery
// API: NASA Image and Video Library + EPIC (Earth Polychromatic Imaging Camera)
// https://api.nasa.gov/EPIC/api/natural/images

export function SpaceV5() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Mock data representing various NASA missions and observations
  const timelineData = [
    {
      id: 1,
      date: '2024-02-01',
      mission: 'Hubble Space Telescope',
      title: 'The Eagle Nebula',
      description: 'Also known as Messier 16, this star-forming region in the constellation Serpens features the famous "Pillars of Creation".',
      imageUrl: 'https://images.unsplash.com/photo-1504812333783-63b845853c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMGdhbGF4eSUyMHN0YXJzfGVufDF8fHx8MTc3MTg5Mjk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      views: '2.4M',
    },
    {
      id: 2,
      date: '2024-01-28',
      mission: 'James Webb Space Telescope',
      title: 'Deep Field Galaxy Cluster',
      description: 'Webb\'s infrared capabilities reveal galaxies that existed just hundreds of millions of years after the Big Bang.',
      imageUrl: 'https://images.unsplash.com/photo-1729176515850-c6cc55ab48da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBhc3Ryb25vbXklMjBjb3NtaWN8ZW58MXx8fHwxNzcxODkyOTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      views: '3.8M',
    },
    {
      id: 3,
      date: '2024-01-15',
      mission: 'Earth Observatory',
      title: 'Milky Way Over Earth',
      description: 'Our home galaxy stretches across the night sky in this composite image, showing the vastness of our cosmic neighborhood.',
      imageUrl: 'https://images.unsplash.com/photo-1691561411811-f096dd57da10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxreSUyMHdheSUyMG5pZ2h0JTIwc2t5JTIwc3RhcnN8ZW58MXx8fHwxNzcxODQxOTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      views: '1.9M',
    },
    {
      id: 4,
      date: '2024-01-05',
      mission: 'International Space Station',
      title: 'Aurora Borealis',
      description: 'Astronauts aboard the ISS captured this stunning view of the northern lights dancing over Earth\'s atmosphere.',
      imageUrl: 'https://images.unsplash.com/photo-1666003400042-a9e68d6bff0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXJvcmElMjBib3JlYWxpcyUyMG5vcnRoZXJuJTIwbGlnaHRzfGVufDF8fHx8MTc3MTg5MDQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      views: '4.2M',
    },
    {
      id: 5,
      date: '2023-12-20',
      mission: 'DSCOVR EPIC',
      title: 'Earth from Deep Space',
      description: 'The EPIC camera aboard DSCOVR provides daily full-disk images of Earth from one million miles away.',
      imageUrl: 'https://images.unsplash.com/photo-1770370419338-f9a813302baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMGZyb20lMjBzcGFjZSUyMHNhdGVsbGl0ZXxlbnwxfHx8fDE3NzE4OTI5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      views: '5.1M',
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-zinc-950">
      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <div className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Cosmic Timeline
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-2">
            A journey through recent space observations
          </p>
        </div>
      </div>

      {/* Timeline Items */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="space-y-16 md:space-y-24">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Timeline Connector */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />
                <div className={`absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-zinc-950 transform md:-translate-x-1/2 hidden md:block`} />

                {/* Content */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  {/* Image */}
                  <motion.div
                    className={`${isEven ? 'md:pr-12' : 'md:pl-12 md:col-start-2'} relative group`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                      <ImageWithFallback
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Floating Stats */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg">
                      <Eye className="w-4 h-4 text-zinc-400" />
                      <span className="text-white text-sm font-semibold">{item.views}</span>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div className={`${isEven ? 'md:pl-12' : 'md:pr-12 md:col-start-1 md:row-start-1'} flex flex-col justify-center`}>
                    <div className="flex items-center gap-2 mb-3 text-zinc-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    
                    <div className="inline-block mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs rounded-full">
                        {item.mission}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* API Note */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
          <p className="text-zinc-500 text-xs">
            <span className="text-zinc-400 font-semibold">API Integration: </span>
            Connect to NASA's EPIC API at api.nasa.gov/EPIC and Image Library at images-api.nasa.gov
          </p>
        </div>
      </div>
    </section>
  );
}