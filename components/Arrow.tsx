interface ArrowProps {
  direction?: "right" | "left";
  className?: string;
}

export default function Arrow({ direction = "right", className = "" }: ArrowProps) {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={direction === "left" ? { transform: "rotate(180deg)" } : undefined}
      aria-hidden="true"
    >
      <path d="M0.00018692 6.84717L15.0002 6.84717" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8.00019 0C8.00019 2.74292 12.5463 6.8573 16.0004 6.8573" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8.00019 13.7148C8.00019 10.9719 12.5463 6.85754 16.0004 6.85754" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}
