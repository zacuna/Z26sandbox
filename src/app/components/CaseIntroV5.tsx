import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

// V5: Card-based magazine layout - Editorial with data visualization
export function CaseIntroV5() {
  const stats = [
    { icon: TrendingUp, value: '340%', label: 'Revenue Growth' },
    { icon: Users, value: '2.1M', label: 'Active Users' },
    { icon: Clock, value: '18min', label: 'Avg. Session Time' },
    { icon: Award, value: '#1', label: 'Category Ranking' },
  ];

  return (
    <section className="min-h-screen bg-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-zinc-500 text-xs tracking-widest mb-3">E-COMMERCE PLATFORM</p>
              <h1 className="text-6xl font-bold text-white leading-tight">
                Scaling a Marketplace<br />from 0 to 2M Users
              </h1>
            </div>
            <div className="text-right">
              <p className="text-zinc-500 text-xs tracking-wider mb-1">PROJECT YEAR</p>
              <p className="text-white text-2xl font-bold">2024</p>
            </div>
          </div>
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
            Led the end-to-end design of a peer-to-peer marketplace that disrupted 
            the vintage fashion industry, generating $45M in GMV within the first year.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {/* Large Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="col-span-2 row-span-2 relative overflow-hidden rounded-lg"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1657812159055-7bae416f386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2ViJTIwZGVzaWduJTIwbGF5b3V0fGVufDF8fHx8MTc3MTg3OTk5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Project showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/80 text-sm mb-2">Primary Challenge</p>
              <p className="text-white text-xl font-semibold">
                Building trust in a two-sided marketplace with zero transaction history
              </p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="bg-zinc-950 rounded-lg p-6 border border-zinc-800"
            >
              <stat.icon className="w-5 h-5 text-zinc-500 mb-4" />
              <p className="text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-zinc-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Details Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-5 gap-8 bg-zinc-950 rounded-lg p-8 border border-zinc-800"
        >
          <div>
            <p className="text-zinc-600 text-xs tracking-wider mb-2">MY ROLE</p>
            <p className="text-white text-sm">Product Design Lead</p>
          </div>
          <div>
            <p className="text-zinc-600 text-xs tracking-wider mb-2">TEAM SIZE</p>
            <p className="text-white text-sm">12 people</p>
          </div>
          <div>
            <p className="text-zinc-600 text-xs tracking-wider mb-2">DURATION</p>
            <p className="text-white text-sm">12 months</p>
          </div>
          <div>
            <p className="text-zinc-600 text-xs tracking-wider mb-2">PLATFORM</p>
            <p className="text-white text-sm">Web + Mobile</p>
          </div>
          <div>
            <p className="text-zinc-600 text-xs tracking-wider mb-2">SCOPE</p>
            <p className="text-white text-sm">0→1 Product Launch</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
