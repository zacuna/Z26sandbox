import { Film, Database, CheckCircle, XCircle, AlertCircle, TrendingUp } from 'lucide-react';

// V5: Fiction vs Reality Comparison - Data table comparison
export function EuropaV5() {
  const comparisons = [
    {
      category: 'Mission Duration',
      fiction: { value: '22 months', detail: 'Crewed mission to Europa', accuracy: 45 },
      reality: { value: '6 years (travel)', detail: 'Europa Clipper unmanned mission', status: 'In Development' },
      verdict: 'Optimistic timeline',
    },
    {
      category: 'Mission Type',
      fiction: { value: 'Crewed landing', detail: '6 astronauts land on surface', accuracy: 15 },
      reality: { value: 'Orbital reconnaissance', detail: '49 flybys, no landing', status: 'Planned 2030' },
      verdict: 'Major difference',
    },
    {
      category: 'Ice Shell Depth',
      fiction: { value: '15-25 km', detail: 'Crew descends through ice to ocean', accuracy: 95 },
      reality: { value: '15-25 km', detail: 'Confirmed via gravitational measurements', status: 'Confirmed' },
      verdict: 'Scientifically accurate',
    },
    {
      category: 'Subsurface Ocean',
      fiction: { value: 'Liquid water', detail: 'Twice Earth\'s ocean volume', accuracy: 100 },
      reality: { value: '60-150 km deep', detail: 'More water than all Earth\'s oceans', status: 'Confirmed' },
      verdict: 'Accurate',
    },
    {
      category: 'Surface Features',
      fiction: { value: 'Chaos terrain', detail: 'Dramatic ice geysers and crevasses', accuracy: 90 },
      reality: { value: 'Water plumes', detail: '200km high plumes detected by Hubble', status: 'Confirmed' },
      verdict: 'Mostly accurate',
    },
    {
      category: 'Life Detection',
      fiction: { value: 'Bioluminescent organisms', detail: 'Single-celled extremophiles discovered', accuracy: 65 },
      reality: { value: 'Unknown', detail: 'Potential for life, not yet detected', status: 'Theoretical' },
      verdict: 'Speculative',
    },
    {
      category: 'Radiation Levels',
      fiction: { value: '5.4 Sv/day', detail: 'Lethal exposure at surface', accuracy: 100 },
      reality: { value: '5.4 Sv/day', detail: 'Jupiter\'s magnetosphere radiation', status: 'Confirmed' },
      verdict: 'Accurate',
    },
    {
      category: 'Communication',
      fiction: { value: '40 min delay', detail: 'Realistic Earth-Europa signal time', accuracy: 90 },
      reality: { value: '33-52 min', detail: 'Varies with orbital positions', status: 'Confirmed' },
      verdict: 'Accurate range',
    },
  ];

  const movieMetrics = {
    title: 'Europa Report',
    year: 2013,
    director: 'Sebastián Cordero',
    runtime: 90,
    genre: 'Sci-Fi Thriller',
    overallAccuracy: 73,
  };

  const realMissionMetrics = {
    mission: 'Europa Clipper',
    launch: '2024',
    arrival: '2030',
    cost: '$4.25B',
    instruments: 9,
    flybys: 49,
  };

  return (
    <section className="min-h-screen bg-black px-4 py-8 md:px-8 md:py-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-cyan-400 rounded-full" />
            <h1 className="text-2xl font-semibold text-white">Fiction vs Reality Analysis</h1>
          </div>
          <p className="text-sm text-zinc-500">Comparing Europa Report with actual NASA mission data</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Movie Card */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <Film className="w-4 h-4 text-purple-400" />
              <h3 className="text-sm font-medium text-white">Europa Report (2013)</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Director</p>
                <p className="text-sm text-white">{movieMetrics.director}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Runtime</p>
                <p className="text-sm text-white">{movieMetrics.runtime} min</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Genre</p>
                <p className="text-sm text-white">{movieMetrics.genre}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Year</p>
                <p className="text-sm text-white">{movieMetrics.year}</p>
              </div>
            </div>
            <div className="pt-3 border-t border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-zinc-400">Scientific Accuracy</span>
                <span className="text-sm font-semibold text-purple-400">{movieMetrics.overallAccuracy}%</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  style={{ width: `${movieMetrics.overallAccuracy}%` }}
                />
              </div>
            </div>
          </div>

          {/* NASA Mission Card */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-medium text-white">NASA Europa Clipper</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Launch</p>
                <p className="text-sm text-white">{realMissionMetrics.launch}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Arrival</p>
                <p className="text-sm text-white">{realMissionMetrics.arrival}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Budget</p>
                <p className="text-sm text-white">{realMissionMetrics.cost}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Flybys</p>
                <p className="text-sm text-white">{realMissionMetrics.flybys}</p>
              </div>
            </div>
            <div className="pt-3 border-t border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span className="text-xs text-green-400">Mission Status: In Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/80">
                  <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider w-[140px]">Category</th>
                  <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider">Fiction (Europa Report)</th>
                  <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider">Reality (NASA Data)</th>
                  <th className="text-center p-3 text-zinc-400 font-medium uppercase tracking-wider w-[100px]">Accuracy</th>
                  <th className="text-left p-3 text-zinc-400 font-medium uppercase tracking-wider w-[140px]">Verdict</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp, index) => (
                  <tr key={index} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                    <td className="p-3 text-white font-medium">{comp.category}</td>
                    <td className="p-3">
                      <div className="flex items-start gap-2">
                        <Film className="w-3 h-3 text-purple-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-medium mb-0.5">{comp.fiction.value}</p>
                          <p className="text-zinc-500 text-[10px]">{comp.fiction.detail}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-start gap-2">
                        <Database className="w-3 h-3 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-medium mb-0.5">{comp.reality.value}</p>
                          <p className="text-zinc-500 text-[10px]">{comp.reality.detail}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {comp.fiction.accuracy >= 80 ? (
                          <CheckCircle className="w-3 h-3 text-green-400" />
                        ) : comp.fiction.accuracy >= 50 ? (
                          <AlertCircle className="w-3 h-3 text-yellow-400" />
                        ) : (
                          <XCircle className="w-3 h-3 text-red-400" />
                        )}
                        <span className={`font-mono ${
                          comp.fiction.accuracy >= 80 ? 'text-green-400' :
                          comp.fiction.accuracy >= 50 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {comp.fiction.accuracy}%
                        </span>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className={`inline-block px-2 py-1 rounded text-[10px] ${
                        comp.fiction.accuracy >= 80 ? 'bg-green-500/20 text-green-400' :
                        comp.fiction.accuracy >= 50 ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {comp.verdict}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Accuracy Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Highly Accurate</h3>
            </div>
            <p className="text-2xl font-semibold text-white mb-1">
              {comparisons.filter(c => c.fiction.accuracy >= 80).length}
            </p>
            <p className="text-xs text-zinc-500">80-100% accuracy</p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-4 h-4 text-yellow-400" />
              <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Moderately Accurate</h3>
            </div>
            <p className="text-2xl font-semibold text-white mb-1">
              {comparisons.filter(c => c.fiction.accuracy >= 50 && c.fiction.accuracy < 80).length}
            </p>
            <p className="text-xs text-zinc-500">50-79% accuracy</p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-4 h-4 text-red-400" />
              <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Speculative</h3>
            </div>
            <p className="text-2xl font-semibold text-white mb-1">
              {comparisons.filter(c => c.fiction.accuracy < 50).length}
            </p>
            <p className="text-xs text-zinc-500">Below 50% accuracy</p>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-medium text-cyan-400 uppercase tracking-wider mb-2">Scientific Insight</h4>
              <p className="text-sm text-zinc-300 leading-relaxed mb-2">
                Europa Report excels at depicting Europa's environmental conditions (radiation, ice thickness, ocean depth) 
                with remarkable accuracy. The film's greatest liberties are in mission logistics—a crewed landing mission 
                would be exponentially more complex and expensive than portrayed.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Most unsettling: The film's timeline assumes life detection. In reality, Europa's ocean has existed longer 
                than life on Earth—if life emerged there, it has had more evolutionary time than anything on our planet.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-800/50">
          <p className="text-[10px] text-zinc-600">
            Data Sources: TMDB API (movie metadata) • NASA Europa Clipper mission specs • JPL Horizons System
          </p>
        </div>
      </div>
    </section>
  );
}
