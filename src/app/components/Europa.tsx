import { EuropaV1 } from './EuropaV1';
import { EuropaV2 } from './EuropaV2';
import { EuropaV3 } from './EuropaV3';
import { EuropaV4 } from './EuropaV4';
import { EuropaV5 } from './EuropaV5';

export function Europa() {
  const europaSections = [
    { id: 'v1', label: 'V1 — Mission Briefing', component: EuropaV1 },
    { id: 'v2', label: 'V2 — Descent Timeline', component: EuropaV2 },
    { id: 'v3', label: 'V3 — Transmission Log', component: EuropaV3 },
    { id: 'v4', label: 'V4 — Biological Contact', component: EuropaV4 },
    { id: 'v5', label: 'V5 — Fiction vs Reality', component: EuropaV5 },
  ];

  return (
    <>
      {europaSections.map(({ id, label, component: Component }) => (
        <div key={id} className="relative">
          {/* Version label */}
          <div className="absolute top-8 left-8 z-20">
            <span className="text-xs tracking-wider px-3 py-1 bg-zinc-900/80 text-zinc-400 rounded-full backdrop-blur-sm border border-zinc-800">
              {label}
            </span>
          </div>
          
          <Component />
        </div>
      ))}
    </>
  );
}
