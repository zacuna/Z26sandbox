import { Sidebar } from './components/Sidebar';
import { HeroV1 } from './components/HeroV1';
import { HeroV2 } from './components/HeroV2';
import { HeroV3 } from './components/HeroV3';
import { HeroV4 } from './components/HeroV4';
import { HeroV5 } from './components/HeroV5';
import { Gallery } from './components/Gallery';
import { CaseIntro } from './components/CaseIntro';
import { useState } from 'react';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'gallery' | 'case-intro'>('home');

  const heroSections = [
    { id: 'v2', label: 'V2', component: HeroV2 },
    { id: 'v1', label: 'V1', component: HeroV1 },
    { id: 'v3', label: 'V3', component: HeroV3 },
    { id: 'v4', label: 'V4', component: HeroV4 },
    { id: 'v5', label: 'V5', component: HeroV5 },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      
      <main className="lg:ml-64 bg-black">
        {activePage === 'home' ? (
          <>
            {heroSections.map(({ id, label, component: Component }) => (
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
        ) : activePage === 'case-intro' ? (
          <CaseIntro />
        ) : (
          <Gallery />
        )}
      </main>
    </div>
  );
}