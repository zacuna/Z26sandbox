import { CaseIntroV1 } from './CaseIntroV1';
import { CaseIntroV2 } from './CaseIntroV2';
import { CaseIntroV3 } from './CaseIntroV3';
import { CaseIntroV4 } from './CaseIntroV4';
import { CaseIntroV5 } from './CaseIntroV5';

export function CaseIntro() {
  const caseIntroSections = [
    { id: 'v1', label: 'V1', component: CaseIntroV1 },
    { id: 'v2', label: 'V2', component: CaseIntroV2 },
    { id: 'v3', label: 'V3', component: CaseIntroV3 },
    { id: 'v4', label: 'V4', component: CaseIntroV4 },
    { id: 'v5', label: 'V5', component: CaseIntroV5 },
  ];

  return (
    <>
      {caseIntroSections.map(({ id, label, component: Component }) => (
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
