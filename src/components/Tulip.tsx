interface TulipProps {
  className?: string;
  color?: string;
  stemColor?: string;
  size?: number;
}

export function Tulip({ className, color = "#f48fb1", stemColor = "#7cb685", size = 60 }: TulipProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 1.6}
      viewBox="0 0 60 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Stem */}
      <path d="M30 38 Q28 60 30 92" stroke={stemColor} strokeWidth="3" strokeLinecap="round" />
      {/* Leaf */}
      <path
        d="M30 68 Q14 60 10 76 Q20 78 30 72 Z"
        fill={stemColor}
        opacity="0.85"
      />
      {/* Tulip petals */}
      <path
        d="M30 8 Q12 12 12 30 Q12 42 30 44 Q48 42 48 30 Q48 12 30 8 Z"
        fill={color}
      />
      <path
        d="M30 8 Q22 18 22 32 Q22 42 30 44 Q38 42 38 32 Q38 18 30 8 Z"
        fill={color}
        opacity="0.75"
      />
      <ellipse cx="30" cy="14" rx="4" ry="6" fill="white" opacity="0.35" />
    </svg>
  );
}
