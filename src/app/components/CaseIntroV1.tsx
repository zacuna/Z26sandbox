import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// V1: Full-width image with overlay text - Classic editorial layout
export function CaseIntroV1() {
  const metrics = [
    { label: 'User Engagement', value: '+127%' },
    { label: 'Task Completion', value: '+85%' },
    { label: 'Time to Value', value: '-43%' },
  ];

  return (
    <section className="min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[65vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759505017950-25e0733b9e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcm9kdWN0JTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MTgyMzE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Project showcase"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-12 -mt-32 relative z-20">
        <div className="grid grid-cols-12 gap-8">
          {/* Main content */}
          <div className="col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-zinc-400 text-sm tracking-widest mb-4">CASE STUDY 2024</p>
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
                Reimagining the Enterprise Dashboard Experience
              </h1>
              <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
                A complete redesign of the analytics platform that powers decision-making 
                for over 50,000 enterprise users across 12 countries.
              </p>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-16"
            >
              {metrics.map((metric, index) => (
                <div key={index}>
                  <p className="text-4xl font-bold text-white mb-2">{metric.value}</p>
                  <p className="text-zinc-400 text-sm">{metric.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Metadata sidebar */}
          <div className="col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <p className="text-zinc-500 text-xs tracking-wider mb-2">ROLE</p>
                <p className="text-white">Lead Product Designer</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs tracking-wider mb-2">TIMELINE</p>
                <p className="text-white">8 months (Jan–Aug 2024)</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs tracking-wider mb-2">TEAM</p>
                <p className="text-white">2 Designers, 4 Engineers, 1 PM</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs tracking-wider mb-2">PLATFORM</p>
                <p className="text-white">Web Application (Desktop)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-32" />
    </section>
  );
}
