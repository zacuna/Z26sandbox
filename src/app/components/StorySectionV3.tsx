import { ImageWithFallback } from './figma/ImageWithFallback';

// V3: Full-width image followed by two square images
export function StorySectionV3() {
  return (
    <div className="content-stretch flex flex-col gap-12 items-center relative shrink-0 w-full">
      {/* Text Content */}
      <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full max-w-[680px]">
        <p className="font-normal leading-[1.6] relative shrink-0 text-zinc-500 text-sm tracking-[0.14px] uppercase w-full">
          Design Process
        </p>
        <h2 className="leading-[1.2] relative shrink-0 text-white text-4xl tracking-tight w-full">
          From concept to execution: a journey of iteration
        </h2>
        <p className="font-normal leading-[1.6] relative shrink-0 text-zinc-400 text-lg w-full">
          Our iterative process began with extensive user research and competitive analysis. We created 
          multiple design directions, tested them with real users, and refined based on feedback. This 
          approach ensured that every design decision was informed by data and user needs.
        </p>
      </div>

      {/* Image Grid */}
      <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* Full Width Image */}
        <div className="aspect-[2/1] relative shrink-0 w-full rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1602076787354-a37cfebe0532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcxOTgxNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Process overview"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          />
        </div>

        {/* Two Square Images */}
        <div className="content-stretch flex gap-6 items-start relative shrink-0 w-full">
          <div className="aspect-square flex-1 min-h-px min-w-px relative rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600257729950-13a634d32697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB2YWxsZXklMjBzY2VuaWN8ZW58MXx8fHwxNzcxOTgxNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Process detail 1"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </div>
          <div className="aspect-square flex-1 min-h-px min-w-px relative rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1603479267857-f2c5ffc4272f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBtb3VudGFpbiUyMHBlYWt8ZW58MXx8fHwxNzcxOTgxNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Process detail 2"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
