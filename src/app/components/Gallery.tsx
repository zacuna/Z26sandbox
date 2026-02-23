import { GalleryV1 } from './GalleryV1';
import { GalleryV2 } from './GalleryV2';
import { GalleryV3 } from './GalleryV3';
import { GalleryV4 } from './GalleryV4';
import { GalleryV5 } from './GalleryV5';

export function Gallery() {
  const galleries = [
    { id: 'v1', label: 'V1 — 3D Carousel', component: GalleryV1 },
    { id: 'v2', label: 'V2 — Masonry Grid', component: GalleryV2 },
    { id: 'v3', label: 'V3 — Horizontal Scroll', component: GalleryV3 },
    { id: 'v4', label: 'V4 — Hover Zoom Grid', component: GalleryV4 },
    { id: 'v5', label: 'V5 — Staggered Reveal', component: GalleryV5 },
  ];

  return (
    <div>
      {galleries.map(({ id, label, component: Component }) => (
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
    </div>
  );
}
