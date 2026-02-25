import { AlertTriangle, Radio, Thermometer, Waves, Globe, Calendar, Ruler } from 'lucide-react';

// V1: Mission Dashboard - Clean SaaS overview with key metrics
export function EuropaV1() {
  const metrics = [
    { label: 'Distance from Earth', value: '628.3M', unit: 'km', icon: Globe, trend: 'Variable orbit' },
    { label: 'Diameter', value: '3,121.6', unit: 'km', icon: Ruler, trend: '90% of Moon' },
    { label: 'Orbital Period', value: '3.55', unit: 'days', icon: Calendar, trend: 'Around Jupiter' },
    { label: 'Surface Temp', value: '-160', unit: '°C', icon: Thermometer, trend: 'Cryogenic' },
    { label: 'Ice Thickness', value: '15-25', unit: 'km', icon: Waves, trend: 'Variable depth' },
    { label: 'Radiation', value: '5.4', unit: 'Sv/day', icon: Radio, trend: 'Lethal levels' },
  ];

  const missionData = {
    title: 'Europa Report',
    year: 2013,
    objective: 'Search for single-celled life forms in subsurface ocean',
    status: 'Classified',
    director: 'Sebastián Cordero',
  };

  const threats = [
    { level: 'Critical', name: 'Radiation Exposure', severity: 95 },
    { level: 'High', name: 'Extreme Cold', severity: 78 },
    { level: 'High', name: 'Ice Instability', severity: 72 },
    { level: 'Medium', name: 'Communication Delay', severity: 45 },
  ];

  return (
    <section className="min-h-screen bg-black px-4 py-8 md:px-8 md:py-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-cyan-400 rounded-full" />
            <h1 className="text-2xl font-semibold text-white">Europa Mission Overview</h1>
          </div>
          <p className="text-sm text-zinc-500">Real-time monitoring and mission data synthesis</p>
        </div>

        {/* Alert Banner */}
        <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-red-300 font-medium">Mission Status: {missionData.status}</p>
            <p className="text-xs text-red-400/70 mt-0.5">{missionData.objective}</p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 hover:border-zinc-700 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="text-[10px] text-zinc-600 uppercase tracking-wider">{metric.trend}</span>
                </div>
                <div className="mb-1">
                  <span className="text-xl font-semibold text-white">{metric.value}</span>
                  <span className="text-xs text-zinc-500 ml-1">{metric.unit}</span>
                </div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{metric.label}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Threat Assessment */}
          <div className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4">Environmental Hazards</h3>
            <div className="space-y-3">
              {threats.map((threat, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        threat.level === 'Critical' ? 'bg-red-500/20 text-red-400' :
                        threat.level === 'High' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {threat.level}
                      </span>
                      <span className="text-sm text-white">{threat.name}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">{threat.severity}%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        threat.level === 'Critical' ? 'bg-red-500' :
                        threat.level === 'High' ? 'bg-orange-500' :
                        'bg-yellow-500'
                      }`}
                      style={{ width: `${threat.severity}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Info */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4">Mission Reference</h3>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Film Designation</p>
                <p className="text-sm text-white font-medium">{missionData.title}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Release Year</p>
                <p className="text-sm text-white">{missionData.year}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Director</p>
                <p className="text-sm text-white">{missionData.director}</p>
              </div>
              <div className="pt-3 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Tagline: "Fear. Sacrifice. Contact."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Anomaly Detection */}
        <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-medium text-yellow-400 uppercase tracking-wider mb-1">Anomaly Detected</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Europa emits strange electromagnetic pulses. Scientists have recorded what sounds like "ice songs" - 
                eerie crackling and groaning as the moon's ice shell flexes under Jupiter's gravitational pull.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-800/50">
          <p className="text-[10px] text-zinc-600">
            Data Sources: NASA Horizons API • TMDB API • Europa Clipper Mission Data
          </p>
        </div>
      </div>
    </section>
  );
}
