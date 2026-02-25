import { motion } from 'motion/react';
import { Rocket, TrendingUp, AlertTriangle } from 'lucide-react';

// V2: Near-Earth Objects Tracker
// API: NASA NEO (Near Earth Object) Web Service
// https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY

export function SpaceV2() {
  // Mock data representing NASA NEO API response
  const neoData = [
    {
      id: '54509448',
      name: '(2024 BX1)',
      estimatedDiameter: { min: 0.087, max: 0.195 }, // km
      closeApproachDate: '2024-02-28',
      relativeVelocity: '24,567', // km/h
      missDistance: '4,824,920', // km
      isPotentiallyHazardous: false,
    },
    {
      id: '3726710',
      name: 'Apophis',
      estimatedDiameter: { min: 0.310, max: 0.690 },
      closeApproachDate: '2029-04-13',
      relativeVelocity: '30,731',
      missDistance: '31,860',
      isPotentiallyHazardous: true,
    },
    {
      id: '2465633',
      name: 'Bennu',
      estimatedDiameter: { min: 0.492, max: 1.100 },
      closeApproachDate: '2060-09-23',
      relativeVelocity: '28,000',
      missDistance: '750,000',
      isPotentiallyHazardous: true,
    },
  ];

  return (
    <section className="min-h-screen bg-zinc-950 py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-orange-400" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Near-Earth Objects
              </h2>
            </div>
            <p className="text-zinc-400 text-base md:text-lg max-w-3xl">
              Real-time tracking of asteroids and comets approaching Earth's orbit. 
              Data from NASA's Center for Near-Earth Object Studies (CNEOS).
            </p>
          </div>

          {/* NEO Cards */}
          <div className="space-y-4 md:space-y-6">
            {neoData.map((neo, index) => (
              <motion.div
                key={neo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-700 transition-all overflow-hidden"
              >
                {/* Hazard Indicator */}
                {neo.isPotentiallyHazardous && (
                  <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <div className="flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span className="text-red-300 text-xs">Potentially Hazardous</span>
                    </div>
                  </div>
                )}

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                  {/* Name & Basic Info */}
                  <div className="lg:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {neo.name}
                    </h3>
                    <p className="text-zinc-500 text-sm">ID: {neo.id}</p>
                  </div>

                  {/* Stats */}
                  <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <div>
                      <p className="text-zinc-500 text-xs tracking-wider mb-1">CLOSE APPROACH</p>
                      <p className="text-white text-base md:text-lg font-semibold">{neo.closeApproachDate}</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs tracking-wider mb-1">VELOCITY</p>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <p className="text-white text-base md:text-lg font-semibold">{neo.relativeVelocity} km/h</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs tracking-wider mb-1">MISS DISTANCE</p>
                      <p className="text-white text-base md:text-lg font-semibold">{neo.missDistance} km</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs tracking-wider mb-1">DIAMETER (EST.)</p>
                      <p className="text-white text-base md:text-lg font-semibold">
                        {neo.estimatedDiameter.min.toFixed(2)} - {neo.estimatedDiameter.max.toFixed(2)} km
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar - Visual representation of approach */}
                <div className="mt-6 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((1000000 / parseInt(neo.missDistance.replace(/,/g, ''))) * 100, 95)}%` }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    className={`h-full rounded-full ${neo.isPotentiallyHazardous ? 'bg-red-500' : 'bg-blue-500'}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* API Note */}
          <div className="mt-12 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <p className="text-zinc-500 text-xs">
              <span className="text-zinc-400 font-semibold">API Integration: </span>
              Connect to NASA's NEO Web Service at api.nasa.gov/neo/rest/v1
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
