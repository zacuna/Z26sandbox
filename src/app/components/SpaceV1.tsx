import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Camera, MapPin } from 'lucide-react';

// V1: Featured Astronomy Picture - Hero-style display with NASA imagery
// API: NASA APOD (Astronomy Picture of the Day)
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

export function SpaceV1() {
  // Mock data representing NASA APOD API response
  const apodData = {
    title: "The Horsehead Nebula in Orion",
    date: "2024-02-15",
    explanation: "One of the most identifiable nebulas in the sky, the Horsehead Nebula in Orion, is part of a large, dark, molecular cloud. The unusual shape was first discovered on a photographic plate in the late 1800s. The red glow originates from hydrogen gas predominantly behind the nebula, ionized by the nearby bright star Sigma Orionis.",
    url: "https://images.unsplash.com/photo-1504812333783-63b845853c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMGdhbGF4eSUyMHN0YXJzfGVufDF8fHx8MTc3MTg5Mjk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    copyright: "NASA, ESA, Hubble Heritage Team",
    media_type: "image"
  };

  return (
    <section className="min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={apodData.url}
          alt={apodData.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6 md:mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-200 text-xs md:text-sm tracking-wide">ASTRONOMY PICTURE OF THE DAY</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6 md:mb-8 max-w-4xl">
              {apodData.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 md:mb-12 text-zinc-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{apodData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span>{apodData.copyright}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Orion Constellation</span>
              </div>
            </div>

            {/* Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl">
              <div>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                  {apodData.explanation}
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <p className="text-zinc-500 text-xs tracking-wider mb-2">DISTANCE FROM EARTH</p>
                  <p className="text-white text-2xl md:text-3xl font-bold">1,500 light-years</p>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <p className="text-zinc-500 text-xs tracking-wider mb-2">SIZE</p>
                  <p className="text-white text-2xl md:text-3xl font-bold">3.5 light-years across</p>
                </div>
              </div>
            </div>

            {/* API Note */}
            <div className="mt-12 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg max-w-3xl">
              <p className="text-zinc-500 text-xs">
                <span className="text-zinc-400 font-semibold">API Integration: </span>
                Connect to NASA's APOD API at api.nasa.gov/planetary/apod
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
