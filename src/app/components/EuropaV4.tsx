import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Activity, TrendingUp, Zap, Droplet, AlertTriangle } from 'lucide-react';

// V4: Biological Analysis - Data-dense organism tracking
export function EuropaV4() {
  // Organism detection over time
  const bioActivityData = [
    { time: '00:00', count: 12, size: 0.2, energy: 15 },
    { time: '02:00', count: 45, size: 0.3, energy: 28 },
    { time: '04:00', count: 78, size: 0.4, energy: 45 },
    { time: '06:00', count: 156, size: 0.4, energy: 67 },
    { time: '08:00', count: 312, size: 0.5, energy: 92 },
    { time: '10:00', count: 624, size: 0.5, energy: 124 },
  ];

  const vitalSigns = [
    { label: 'Oxygen', value: 18, unit: '%', max: 21, status: 'critical', icon: Activity },
    { label: 'Hull Integrity', value: 43, unit: '%', max: 100, status: 'critical', icon: AlertTriangle },
    { label: 'Water Pressure', value: 92, unit: 'MPa', max: 100, status: 'warning', icon: Droplet },
    { label: 'Power', value: 31, unit: '%', max: 100, status: 'critical', icon: Zap },
  ];

  const organismData = [
    { property: 'Classification', value: 'Unknown extremophile', category: 'taxonomy' },
    { property: 'Cell Size', value: '0.2-0.5 μm', category: 'morphology' },
    { property: 'Behavior', value: 'Collective intelligence', category: 'behavior' },
    { property: 'Composition', value: '76% unknown proteins', category: 'biochemistry' },
    { property: 'Energy Source', value: 'Chemosynthesis (sulfur)', category: 'metabolism' },
    { property: 'Hostility', value: 'Undetermined', category: 'threat' },
  ];

  const proteinComposition = [
    { name: 'Unknown Protein A', percentage: 34, color: '#06b6d4' },
    { name: 'Unknown Protein B', percentage: 22, color: '#3b82f6' },
    { name: 'Unknown Protein C', percentage: 20, color: '#8b5cf6' },
    { name: 'Amino Acids', percentage: 15, color: '#10b981' },
    { name: 'Other', percentage: 9, color: '#71717a' },
  ];

  return (
    <section className="min-h-screen bg-black px-4 py-8 md:px-8 md:py-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-cyan-400 rounded-full" />
              <h1 className="text-2xl font-semibold text-white">Biological Analysis</h1>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs text-red-400 uppercase tracking-wider">Contact Confirmed</span>
            </div>
          </div>
          <p className="text-sm text-zinc-500">Real-time organism detection and behavioral analysis</p>
        </div>

        {/* Vital Signs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {vitalSigns.map((vital, index) => {
            const Icon = vital.icon;
            const percentage = (vital.value / vital.max) * 100;
            return (
              <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-3.5 h-3.5 ${
                    vital.status === 'critical' ? 'text-red-400' : 'text-yellow-400'
                  }`} />
                  <span className={`text-[10px] uppercase tracking-wider ${
                    vital.status === 'critical' ? 'text-red-400' : 'text-yellow-400'
                  }`}>
                    {vital.status}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-xl font-semibold text-white">{vital.value}</span>
                  <span className="text-xs text-zinc-500 ml-1">{vital.unit}</span>
                </div>
                <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      vital.status === 'critical' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">{vital.label}</p>
              </div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Organism Count Growth */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Organism Detection Rate</h3>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-3 h-3 text-red-400" />
                <span className="text-xs text-red-400">+5100% in 10h</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={bioActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="time" stroke="#71717a" fontSize={10} />
                <YAxis stroke="#71717a" fontSize={10} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#18181b', 
                    border: '1px solid #27272a',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {bioActivityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index < 3 ? '#06b6d4' : '#ef4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-zinc-500 mt-2">Exponential growth pattern detected</p>
          </div>

          {/* Energy Output */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Collective Energy Output</h3>
              <span className="text-xs text-zinc-500">Relative units</span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={bioActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="time" stroke="#71717a" fontSize={10} />
                <YAxis stroke="#71717a" fontSize={10} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#18181b', 
                    border: '1px solid #27272a',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="energy" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  dot={{ fill: '#8b5cf6', r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-xs text-zinc-500 mt-2">Organisms appear attracted to vessel</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Organism Properties */}
          <div className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-zinc-800 bg-zinc-900/80">
              <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Organism Profile</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider">Property</th>
                    <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider">Value</th>
                    <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {organismData.map((item, index) => (
                    <tr key={index} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                      <td className="p-3 text-zinc-300">{item.property}</td>
                      <td className={`p-3 font-medium ${
                        item.property === 'Hostility' ? 'text-red-400' : 'text-white'
                      }`}>
                        {item.value}
                      </td>
                      <td className="p-3">
                        <span className="inline-block px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded text-[10px]">
                          {item.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Protein Composition */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4">Protein Analysis</h3>
            <div className="space-y-3 mb-4">
              {proteinComposition.map((protein, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: protein.color }} />
                      <span className="text-xs text-zinc-300">{protein.name}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">{protein.percentage}%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full"
                      style={{ 
                        width: `${protein.percentage}%`,
                        backgroundColor: protein.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-zinc-800">
              <p className="text-xs text-zinc-500 leading-relaxed">
                76% of detected proteins do not match any known terrestrial biochemistry.
              </p>
            </div>
          </div>
        </div>

        {/* Final Observation */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-500/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-medium text-yellow-400 uppercase tracking-wider mb-2">Final Transmission — Dr. Luxembourg</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                "They're not attacking us. They're trying to communicate. The bioluminescent patterns... 
                they're replicating our sonar signals. Europa's ocean has been alive for millions of years. 
                Alone. In the dark. And now they've finally found someone to talk to."
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-800/50">
          <p className="text-[10px] text-zinc-600">
            NASA Astrobiology research models • Europa Report (TMDB) • Biochemistry data extrapolated from extremophile studies
          </p>
        </div>
      </div>
    </section>
  );
}
