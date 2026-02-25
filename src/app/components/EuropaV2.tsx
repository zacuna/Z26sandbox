import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingDown, Droplets, Snowflake, Activity } from 'lucide-react';

// V2: Descent Data Visualization - Charts and metrics showing the journey
export function EuropaV2() {
  // Depth progression data
  const descentData = [
    { depth: 0, temp: -160, pressure: 0, radiation: 540, layer: 'Surface' },
    { depth: 5, temp: -145, pressure: 45, radiation: 480, layer: 'Upper Ice' },
    { depth: 10, temp: -120, pressure: 95, radiation: 320, layer: 'Ice Shell' },
    { depth: 15, temp: -85, pressure: 150, radiation: 180, layer: 'Ice Shell' },
    { depth: 20, temp: -40, pressure: 210, radiation: 85, layer: 'Lower Ice' },
    { depth: 25, temp: -2, pressure: 280, radiation: 35, layer: 'Ocean Contact' },
    { depth: 30, temp: 2, pressure: 340, radiation: 15, layer: 'Ocean' },
  ];

  // Ice composition
  const iceComposition = [
    { compound: 'Water Ice (H₂O)', percentage: 87, color: 'bg-cyan-500' },
    { compound: 'Salts (MgSO₄)', percentage: 8, color: 'bg-orange-500' },
    { compound: 'Sulfuric Acid', percentage: 3, color: 'bg-yellow-500' },
    { compound: 'Unknown Organics', percentage: 2, color: 'bg-purple-500' },
  ];

  const depthLayers = [
    { name: 'Jupiter Orbit', depth: '671,000 km', status: 'Extreme Radiation', severity: 'critical' },
    { name: 'Ice Surface', depth: '0 km', status: 'Cryogenic', severity: 'high' },
    { name: 'Ice Interior', depth: '10 km', status: 'Structural Instability', severity: 'high' },
    { name: 'Ocean Interface', depth: '25 km', status: 'Unknown Lifeforms', severity: 'medium' },
  ];

  return (
    <section className="min-h-screen bg-black px-4 py-8 md:px-8 md:py-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-cyan-400 rounded-full" />
            <h1 className="text-2xl font-semibold text-white">Descent Profile Analysis</h1>
          </div>
          <p className="text-sm text-zinc-500">Environmental conditions from surface to subsurface ocean</p>
        </div>

        {/* Depth Layers Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {depthLayers.map((layer, index) => (
            <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  layer.severity === 'critical' ? 'bg-red-400' :
                  layer.severity === 'high' ? 'bg-orange-400' :
                  'bg-yellow-400'
                }`} />
                <span className="text-xs text-zinc-500 font-mono">{layer.depth}</span>
              </div>
              <h3 className="text-sm font-medium text-white mb-1">{layer.name}</h3>
              <p className="text-xs text-zinc-500">{layer.status}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Temperature vs Depth */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Temperature Gradient</h3>
              <div className="flex items-center gap-1.5">
                <Snowflake className="w-3 h-3 text-cyan-400" />
                <span className="text-xs text-zinc-500">°C by depth</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={descentData}>
                <defs>
                  <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis 
                  dataKey="depth" 
                  stroke="#71717a" 
                  fontSize={10}
                  tickFormatter={(value) => `${value}km`}
                />
                <YAxis stroke="#71717a" fontSize={10} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#18181b', 
                    border: '1px solid #27272a',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#06b6d4" 
                  fill="url(#tempGradient)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Pressure vs Depth */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Pressure Increase</h3>
              <div className="flex items-center gap-1.5">
                <Droplets className="w-3 h-3 text-blue-400" />
                <span className="text-xs text-zinc-500">MPa by depth</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={descentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis 
                  dataKey="depth" 
                  stroke="#71717a" 
                  fontSize={10}
                  tickFormatter={(value) => `${value}km`}
                />
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
                  dataKey="pressure" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Radiation Decay */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Radiation Levels</h3>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-red-400" />
                <span className="text-xs text-zinc-500">Sv/day</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={descentData}>
                <defs>
                  <linearGradient id="radiationGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis 
                  dataKey="depth" 
                  stroke="#71717a" 
                  fontSize={10}
                  tickFormatter={(value) => `${value}km`}
                />
                <YAxis stroke="#71717a" fontSize={10} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#18181b', 
                    border: '1px solid #27272a',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="radiation" 
                  stroke="#ef4444" 
                  fill="url(#radiationGradient)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Ice Composition */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Ice Shell Composition</h3>
              <TrendingDown className="w-3 h-3 text-zinc-500" />
            </div>
            <div className="space-y-3">
              {iceComposition.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-zinc-300">{item.compound}</span>
                    <span className="text-xs font-mono text-zinc-500">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800">
              <p className="text-xs text-zinc-500">
                Unknown organics detected at surface suggest potential chemical exchange with ocean below.
              </p>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider">Depth (km)</th>
                  <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider">Layer</th>
                  <th className="text-right p-3 text-zinc-400 font-medium uppercase tracking-wider">Temp (°C)</th>
                  <th className="text-right p-3 text-zinc-400 font-medium uppercase tracking-wider">Pressure (MPa)</th>
                  <th className="text-right p-3 text-zinc-400 font-medium uppercase tracking-wider">Radiation (Sv/day)</th>
                </tr>
              </thead>
              <tbody>
                {descentData.map((row, index) => (
                  <tr key={index} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                    <td className="p-3 text-white font-mono">{row.depth}</td>
                    <td className="p-3 text-zinc-300">{row.layer}</td>
                    <td className="p-3 text-right text-cyan-400 font-mono">{row.temp}</td>
                    <td className="p-3 text-right text-blue-400 font-mono">{row.pressure}</td>
                    <td className="p-3 text-right text-red-400 font-mono">{row.radiation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-800/50">
          <p className="text-[10px] text-zinc-600">
            Simulation based on Europa Clipper mission models • Temperature and pressure extrapolated from ice shell thickness estimates
          </p>
        </div>
      </div>
    </section>
  );
}
