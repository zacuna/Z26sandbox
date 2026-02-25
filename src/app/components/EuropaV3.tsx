import { Signal, SignalZero, Clock, User, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';

// V3: Transmission Log - Clean data table with timeline
export function EuropaV3() {
  const [selectedLog, setSelectedLog] = useState<number | null>(null);

  const transmissions = [
    {
      id: 'TRX-001',
      timestamp: 'SOL 112 14:23:07',
      crew: 'Dr. Katya Petrovna',
      role: 'Marine Biologist',
      status: 'received',
      priority: 'high',
      message: 'Bioluminescence detected at 40km depth. Organisms responding to our lights in coordinated patterns.',
      metrics: { signalStrength: 87, dataIntegrity: 94, latency: 42 },
      anomaly: 'Unidentified movement',
    },
    {
      id: 'TRX-002',
      timestamp: 'SOL 113 08:15:33',
      crew: 'Dr. Daniel Luxembourg',
      role: 'Microbiologist',
      status: 'received',
      priority: 'high',
      message: 'Collected samples show single-celled organisms with complex protein structures. Behavior suggests collective intelligence.',
      metrics: { signalStrength: 92, dataIntegrity: 98, latency: 39 },
      anomaly: 'Unusual cell behavior',
    },
    {
      id: 'TRX-003',
      timestamp: 'SOL 115 03:41:19',
      crew: 'Mission Control',
      role: 'Ground Operations',
      status: 'received',
      priority: 'critical',
      message: 'Abort mission immediately. Seismic activity detected. Return to surface protocol initiated.',
      metrics: { signalStrength: 76, dataIntegrity: 100, latency: 721 },
      anomaly: 'Hull breach risk',
    },
    {
      id: 'TRX-004',
      timestamp: 'SOL 116 09:15:33',
      crew: 'Dr. Daniel Luxembourg',
      role: 'Microbiologist',
      status: 'corrupted',
      priority: 'critical',
      message: '[PARTIAL] Single-celled organisms... intelligent behavior... they know we\'re here... [SIGNAL LOST]',
      metrics: { signalStrength: 23, dataIntegrity: 34, latency: 156 },
      anomaly: 'Signal interference',
    },
    {
      id: 'TRX-005',
      timestamp: 'SOL 116 11:42:08',
      crew: 'James Corrigan',
      role: 'Pilot/Engineer',
      status: 'failed',
      priority: 'critical',
      message: '[NO SIGNAL]',
      metrics: { signalStrength: 0, dataIntegrity: 0, latency: 0 },
      anomaly: 'Total signal loss',
    },
  ];

  const observations = [
    { category: 'Temperature', value: '-2°C at ocean interface', status: 'nominal' },
    { category: 'Pressure', value: '280 MPa', status: 'high' },
    { category: 'Radiation', value: '35 Sv/day (decreasing)', status: 'nominal' },
    { category: 'Bio Signatures', value: 'Confirmed positive', status: 'critical' },
  ];

  return (
    <section className="min-h-screen bg-black px-4 py-8 md:px-8 md:py-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-cyan-400 rounded-full" />
            <h1 className="text-2xl font-semibold text-white">Transmission Log</h1>
          </div>
          <p className="text-sm text-zinc-500">Communication records from Europa mission crew</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-3 h-3 text-green-400" />
              <span className="text-xs text-zinc-500">Received</span>
            </div>
            <p className="text-xl font-semibold text-white">3</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="w-3 h-3 text-yellow-400" />
              <span className="text-xs text-zinc-500">Corrupted</span>
            </div>
            <p className="text-xl font-semibold text-white">1</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-3 h-3 text-red-400" />
              <span className="text-xs text-zinc-500">Failed</span>
            </div>
            <p className="text-xl font-semibold text-white">1</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Signal className="w-3 h-3 text-cyan-400" />
              <span className="text-xs text-zinc-500">Avg Signal</span>
            </div>
            <p className="text-xl font-semibold text-white">56%</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Transmission Table */}
          <div className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900/80">
                    <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider">ID</th>
                    <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider">Timestamp</th>
                    <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider">From</th>
                    <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider">Status</th>
                    <th className="text-right p-3 text-zinc-400 font-medium uppercase tracking-wider">Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {transmissions.map((log, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors cursor-pointer"
                      onClick={() => setSelectedLog(index)}
                    >
                      <td className="p-3 text-white font-mono">{log.id}</td>
                      <td className="p-3 text-zinc-400 font-mono">{log.timestamp}</td>
                      <td className="p-3">
                        <div className="text-white">{log.crew}</div>
                        <div className="text-zinc-600 text-[10px]">{log.role}</div>
                      </td>
                      <td className="p-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] ${
                          log.status === 'received' ? 'bg-green-500/20 text-green-400' :
                          log.status === 'corrupted' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {log.status === 'received' && <CheckCircle2 className="w-2.5 h-2.5" />}
                          {log.status === 'corrupted' && <AlertCircle className="w-2.5 h-2.5" />}
                          {log.status === 'failed' && <XCircle className="w-2.5 h-2.5" />}
                          {log.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {log.status === 'received' && <Signal className="w-3 h-3 text-green-400" />}
                          {log.status === 'corrupted' && <Signal className="w-3 h-3 text-yellow-400" />}
                          {log.status === 'failed' && <SignalZero className="w-3 h-3 text-red-400" />}
                          <span className="text-white font-mono">{log.metrics.signalStrength}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Scientific Observations */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4">Scientific Observations</h3>
            <div className="space-y-3">
              {observations.map((obs, index) => (
                <div key={index} className="pb-3 border-b border-zinc-800 last:border-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-zinc-500">{obs.category}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      obs.status === 'nominal' ? 'bg-green-500/20 text-green-400' :
                      obs.status === 'high' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {obs.status}
                    </span>
                  </div>
                  <p className="text-sm text-white font-medium">{obs.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Detail */}
        {selectedLog !== null && (
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 mb-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-cyan-400" />
                <div>
                  <p className="text-sm font-medium text-white">{transmissions[selectedLog].crew}</p>
                  <p className="text-xs text-zinc-500">{transmissions[selectedLog].role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Clock className="w-3 h-3" />
                <span className="font-mono">{transmissions[selectedLog].timestamp}</span>
              </div>
            </div>
            
            <div className="bg-zinc-950/50 border border-zinc-800 rounded p-3 mb-3">
              <p className="text-sm text-zinc-300 leading-relaxed">
                {transmissions[selectedLog].message}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <p className="text-xs text-zinc-500 mb-1">Signal Strength</p>
                <p className="text-base font-semibold text-white">{transmissions[selectedLog].metrics.signalStrength}%</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-zinc-500 mb-1">Data Integrity</p>
                <p className="text-base font-semibold text-white">{transmissions[selectedLog].metrics.dataIntegrity}%</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-zinc-500 mb-1">Latency</p>
                <p className="text-base font-semibold text-white">{transmissions[selectedLog].metrics.latency}ms</p>
              </div>
            </div>

            {transmissions[selectedLog].anomaly && (
              <div className="mt-3 pt-3 border-t border-zinc-800">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                  <p className="text-xs text-yellow-400">Anomaly: {transmissions[selectedLog].anomaly}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-zinc-800/50">
          <p className="text-[10px] text-zinc-600">
            TMDB API (movie dialogue) • NASA Deep Space Network communication protocols
          </p>
        </div>
      </div>
    </section>
  );
}
