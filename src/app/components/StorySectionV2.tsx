import { ImageWithFallback } from './figma/ImageWithFallback';

// V2: Two square images side by side
export function StorySectionV2() {
  return (
    <div className="content-stretch flex flex-col gap-12 items-center relative shrink-0 w-full">
      {/* Text Content */}
      <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full max-w-[680px]">
        <p className="font-normal leading-[1.6] relative shrink-0 text-zinc-500 text-sm tracking-[0.14px] uppercase w-full">
          Visual Exploration
        </p>
        <h2 className="leading-[1.2] relative shrink-0 text-white text-4xl tracking-tight w-full">
          Balancing aesthetics with usability in modern interfaces
        </h2>
        <p className="font-normal leading-[1.6] relative shrink-0 text-zinc-400 text-lg w-full">
          Through careful exploration of color theory, typography, and spatial relationships, we developed 
          a visual language that communicates brand values while maintaining exceptional usability. Each 
          design decision was validated through user testing and accessibility audits.
        </p>
      </div>

      {/* Two Square Images */}
      <div className="content-stretch flex flex-col md:flex-row gap-6 items-start relative shrink-0 w-full">
        <div className="aspect-square flex-1 min-h-px min-w-px relative rounded-lg overflow-hidden w-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600257729950-13a634d32697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB2YWxsZXklMjBzY2VuaWN8ZW58MXx8fHwxNzcxOTgxNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Design detail 1"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          />
        </div>
        <div className="aspect-square flex-1 min-h-px min-w-px relative rounded-lg overflow-hidden w-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1603479267857-f2c5ffc4272f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBtb3VudGFpbiUyMHBlYWt8ZW58MXx8fHwxNzcxOTgxNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Design detail 2"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          />
        </div>
      </div>
    </div>
  );
}