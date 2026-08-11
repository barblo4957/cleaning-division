type WaveDividerProps = {
  flip?: boolean
  className?: string
}

/**
 * Fala nawiązująca do spiralnego "C" z logo Cleaning Division —
 * używana jako powtarzalny element sygnaturowy między sekcjami.
 */
export default function WaveDivider({ flip = false, className = '' }: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        className="h-14 w-full sm:h-20"
      >
        <path
          d="M0,32 C180,90 360,0 600,32 C840,64 1020,10 1200,40 L1200,90 L0,90 Z"
          className="fill-teal-950"
        />
        <path
          d="M0,50 C200,10 420,80 660,44 C880,10 1040,60 1200,28 L1200,90 L0,90 Z"
          className="fill-teal-700/40"
        />
      </svg>
    </div>
  )
}
