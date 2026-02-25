import { SpaceV1 } from './SpaceV1';
import { SpaceV2 } from './SpaceV2';
import { SpaceV3 } from './SpaceV3';
import { SpaceV4 } from './SpaceV4';
import { SpaceV5 } from './SpaceV5';

export function Space() {
  const spaceSections = [
    { id: 'v1', label: 'V1 — Astronomy Picture', component: SpaceV1 },
    { id: 'v2', label: 'V2 — Near-Earth Objects', component: SpaceV2 },
    { id: 'v3', label: 'V3 — Image Library', component: SpaceV3 },
    { id: 'v4', label: 'V4 — Planetary Data', component: SpaceV4 },
    { id: 'v5', label: 'V5 — Cosmic Timeline', component: SpaceV5 },
  ];

  return (
    <>
      {spaceSections.map(({ id, label, component: Component }) => (
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
