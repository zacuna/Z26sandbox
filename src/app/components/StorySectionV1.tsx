import { ImageWithFallback } from './figma/ImageWithFallback';

// V1: Single full-width image layout
export function StorySectionV1() {
  return (
    <div className="content-stretch flex flex-col gap-12 items-center relative shrink-0 w-full">
      {/* Text Content */}
      <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full max-w-[680px]">
        <p className="font-normal leading-[1.6] relative shrink-0 text-zinc-500 text-sm tracking-[0.14px] uppercase w-full">
          Project Background
        </p>
        <h2 className="leading-[1.2] relative shrink-0 text-white text-4xl tracking-tight w-full">
          Designing the future of digital product experiences
        </h2>
        <p className="font-normal leading-[1.6] relative shrink-0 text-zinc-400 text-lg w-full">
          Led a comprehensive redesign initiative focusing on user-centered design principles and accessibility. 
          The project spanned 6 months and involved extensive user research, prototyping, and iterative testing 
          to ensure we delivered a solution that truly met user needs while pushing creative boundaries.
        </p>
      </div>

      {/* Full Width Image */}
      <div className="aspect-[2/1] relative shrink-0 w-full rounded-lg overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1602076787354-a37cfebe0532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcxOTgxNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Project overview"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        />
      </div>
    </div>
  );
}
