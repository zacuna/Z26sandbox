import { StorySectionV1 } from './StorySectionV1';
import { StorySectionV2 } from './StorySectionV2';
import { StorySectionV3 } from './StorySectionV3';
import { StorySectionV4 } from './StorySectionV4';

export function StorySection() {
  const storySections = [
    { id: 'v1', label: 'V1 — Single Image', component: StorySectionV1 },
    { id: 'v2', label: 'V2 — Two Images', component: StorySectionV2 },
    { id: 'v3', label: 'V3 — Mixed Layout', component: StorySectionV3 },
    { id: 'v4', label: 'V4 — Full Grid', component: StorySectionV4 },
  ];

  return (
    <div className="bg-black min-h-screen py-24">
      <div className="content-stretch flex flex-col gap-24 items-start max-w-[1200px] mx-auto px-6 md:px-8">
        {storySections.map(({ id, label, component: Component }) => (
          <div key={id} className="relative w-full">
            {/* Version label */}
            <div className="absolute -top-8 left-0 z-20">
              <span className="text-xs tracking-wider px-3 py-1 bg-zinc-900/80 text-zinc-400 rounded-full backdrop-blur-sm border border-zinc-800">
                {label}
              </span>
            </div>
            
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
}
