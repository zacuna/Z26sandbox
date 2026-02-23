import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// V3: Centered minimal - Maximum whitespace and type contrast
export function CaseIntroV3() {
  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-12 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-zinc-400 text-xs tracking-[0.3em] mb-8">2024</p>
          <h1 className="text-8xl font-bold text-black leading-none mb-12">
            Wellness<br />Redefined
          </h1>
          <p className="text-zinc-600 text-base max-w-lg mx-auto leading-relaxed">
            A mobile-first meditation app that helped 100K+ users develop 
            sustainable mindfulness practices in just 90 days.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-20"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759505017950-25e0733b9e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbW9iaWxlJTIwYXBwJTIwc2NyZWVufGVufDF8fHx8MTc3MTg3OTk5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Project showcase"
            className="w-full h-[60vh] object-cover rounded-lg"
          />
        </motion.div>

        {/* Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-4 gap-12 text-center pb-24"
        >
          <div>
            <p className="text-zinc-400 text-xs tracking-wider mb-3">ROLE</p>
            <p className="text-black font-medium">Senior Product Designer</p>
          </div>
          <div>
            <p className="text-zinc-400 text-xs tracking-wider mb-3">TIMELINE</p>
            <p className="text-black font-medium">4 months</p>
          </div>
          <div>
            <p className="text-zinc-400 text-xs tracking-wider mb-3">PLATFORM</p>
            <p className="text-black font-medium">iOS & Android</p>
          </div>
          <div>
            <p className="text-zinc-400 text-xs tracking-wider mb-3">USERS</p>
            <p className="text-black font-medium">100K+</p>
          </div>
        </motion.div>

        {/* Key Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="border-t border-zinc-200 pt-12"
        >
          <p className="text-zinc-400 text-xs tracking-wider mb-8 text-center">KEY OUTCOMES</p>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-black mb-2">4.8★</p>
              <p className="text-zinc-600 text-sm">App Store Rating</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-black mb-2">67%</p>
              <p className="text-zinc-600 text-sm">30-Day Retention</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-black mb-2">92%</p>
              <p className="text-zinc-600 text-sm">Feature Adoption</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
