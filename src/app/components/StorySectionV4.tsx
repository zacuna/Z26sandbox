import { ImageWithFallback } from './figma/ImageWithFallback';

// V4: Full image grid with multiple rows
export function StorySectionV4() {
  return (
    <div className="content-stretch flex flex-col gap-12 items-center relative shrink-0 w-full">
      {/* Text Content */}
      <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full max-w-[680px]">
        <p className="font-normal leading-[1.6] relative shrink-0 text-zinc-500 text-sm tracking-[0.14px] uppercase w-full">
          Final Deliverables
        </p>
        <h2 className="leading-[1.2] relative shrink-0 text-white text-4xl tracking-tight w-full">
          A comprehensive design system built for scale
        </h2>
        <p className="font-normal leading-[1.6] relative shrink-0 text-zinc-400 text-lg w-full">
          The final system includes a complete component library, detailed documentation, accessibility 
          guidelines, and design tokens. Every element was crafted to work harmoniously together while 
          providing flexibility for future growth and adaptation.
        </p>
      </div>

      {/* Extended Image Grid */}
      <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* Full Width Image 1 */}
        <div className="aspect-[2/1] relative shrink-0 w-full rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1602076787354-a37cfebe0532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcxOTgxNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="System overview"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          />
        </div>

        {/* Two Square Images Row 1 */}
        <div className="content-stretch flex flex-col md:flex-row gap-6 items-start relative shrink-0 w-full">
          <div className="aspect-square flex-1 min-h-px min-w-px relative rounded-lg overflow-hidden w-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600257729950-13a634d32697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB2YWxsZXklMjBzY2VuaWN8ZW58MXx8fHwxNzcxOTgxNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Component library"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </div>
          <div className="aspect-square flex-1 min-h-px min-w-px relative rounded-lg overflow-hidden w-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1603479267857-f2c5ffc4272f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBtb3VudGFpbiUyMHBlYWt8ZW58MXx8fHwxNzcxOTgxNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Design tokens"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </div>
        </div>

        {/* Full Width Image 2 */}
        <div className="aspect-[2/1] relative shrink-0 w-full rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771870964910-5515a5ec2d59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJhbmdlJTIwdmlzdGF8ZW58MXx8fHwxNzcxOTgxNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Documentation"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          />
        </div>

        {/* Two Square Images Row 2 */}
        <div className="content-stretch flex flex-col md:flex-row gap-6 items-start relative shrink-0 w-full">
          <div className="aspect-square flex-1 min-h-px min-w-px relative rounded-lg overflow-hidden w-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1459196539523-16189cd699ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwdHVycXVvaXNlJTIwbGFrZXxlbnwxfHx8fDE3NzE5ODE1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Accessibility guidelines"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </div>
          <div className="aspect-square flex-1 min-h-px min-w-px relative rounded-lg overflow-hidden w-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1666249448029-ccfbc9b8864d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXR1bW4lMjBmb2xpYWdlJTIwbW91bnRhaW58ZW58MXx8fHwxNzcxOTgxNTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Implementation guides"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}