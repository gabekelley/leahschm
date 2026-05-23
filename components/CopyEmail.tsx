"use client";

import { useState } from "react";

interface CopyEmailProps {
  email: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function CopyEmail({ email, children, className, style }: CopyEmailProps) {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; fading: boolean } | null>(null);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(email);
    const x = e.clientX + 16;
    const y = e.clientY - 10;
    setTooltip({ x, y, fading: false });
    setTimeout(() => setTooltip((t) => t ? { ...t, fading: true } : null), 2000);
    setTimeout(() => setTooltip(null), 2500);
  };

  return (
    <>
      <button onClick={handleClick} className={className} style={style}>
        {children}
      </button>
      {tooltip && (
        <div
          className="fixed z-[200] pointer-events-none body-s text-dark bg-sun px-3 py-1 rounded-full"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            opacity: tooltip.fading ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          Copied!
        </div>
      )}
    </>
  );
}
