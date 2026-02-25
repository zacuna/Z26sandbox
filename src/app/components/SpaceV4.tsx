import { motion } from 'motion/react';
import { Globe, Gauge, Thermometer, Wind } from 'lucide-react';

// V4: Planetary Data Visualization using Horizons API
// API: JPL Horizons System
// https://ssd.jpl.nasa.gov/horizons.cgi

export function SpaceV4() {
  // Mock data representing Horizons API ephemeris data
  const planetData = [
    {
      name: 'Mercury',
      diameter: '4,879 km',
      mass: '3.30 × 10²³ kg',
      orbitalPeriod: '88 days',
      surfaceTemp: '430°C (day) / -180°C (night)',
      distanceFromSun: '57.9 million km',
      moons: 0,
      color: 'from-gray-400 to-gray-600',
      icon: Globe,
    },
    {
      name: 'Venus',
      diameter: '12,104 km',
      mass: '4.87 × 10²⁴ kg',
      orbitalPeriod: '225 days',
      surfaceTemp: '462°C',
      distanceFromSun: '108.2 million km',
      moons: 0,
      color: 'from-orange-400 to-yellow-600',
      icon: Thermometer,
    },
    {
      name: 'Mars',
      diameter: '6,779 km',
      mass: '6.42 × 10²³ kg',
      orbitalPeriod: '687 days',
      surfaceTemp: '-63°C (average)',
      distanceFromSun: '227.9 million km',
      moons: 2,
      color: 'from-red-500 to-orange-700',
      icon: Wind,
    },
    {
      name: 'Jupiter',
      diameter: '139,820 km',
      mass: '1.90 × 10²⁷ kg',
      orbitalPeriod: '12 years',
      surfaceTemp: '-108°C',
      distanceFromSun: '778.5 million km',
      moons: 95,
      color: 'from-orange-300 to-amber-600',
      icon: Gauge,
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
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Solar System Explorer
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-3xl">
              Real-time planetary data from JPL's Horizons System. Explore precise ephemeris 
              data, orbital mechanics, and physical characteristics of celestial bodies.
            </p>
          </div>

          {/* Planet Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {planetData.map((planet, index) => {
              const Icon = planet.icon;
              return (
                <motion.div
                  key={planet.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-700 transition-all overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${planet.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity rounded-full`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {planet.name}
                        </h3>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                          <Icon className="w-4 h-4" />
                          <span>Terrestrial Planet</span>
                        </div>
                      </div>
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${planet.color} shadow-lg`} />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-zinc-800/50 rounded-xl">
                        <p className="text-zinc-500 text-xs tracking-wider mb-1">DIAMETER</p>
                        <p className="text-white text-sm md:text-base font-semibold">{planet.diameter}</p>
                      </div>
                      <div className="p-4 bg-zinc-800/50 rounded-xl">
                        <p className="text-zinc-500 text-xs tracking-wider mb-1">MASS</p>
                        <p className="text-white text-sm md:text-base font-semibold">{planet.mass}</p>
                      </div>
                      <div className="p-4 bg-zinc-800/50 rounded-xl">
                        <p className="text-zinc-500 text-xs tracking-wider mb-1">ORBITAL PERIOD</p>
                        <p className="text-white text-sm md:text-base font-semibold">{planet.orbitalPeriod}</p>
                      </div>
                      <div className="p-4 bg-zinc-800/50 rounded-xl">
                        <p className="text-zinc-500 text-xs tracking-wider mb-1">MOONS</p>
                        <p className="text-white text-sm md:text-base font-semibold">{planet.moons}</p>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-t border-zinc-800">
                        <span className="text-zinc-500 text-sm">Surface Temperature</span>
                        <span className="text-white text-sm font-medium">{planet.surfaceTemp}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-t border-zinc-800">
                        <span className="text-zinc-500 text-sm">Distance from Sun</span>
                        <span className="text-white text-sm font-medium">{planet.distanceFromSun}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* API Note */}
          <div className="mt-12 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <p className="text-zinc-500 text-xs">
              <span className="text-zinc-400 font-semibold">API Integration: </span>
              Connect to JPL's Horizons System at ssd.jpl.nasa.gov/horizons_batch.cgi for real-time ephemeris data
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
