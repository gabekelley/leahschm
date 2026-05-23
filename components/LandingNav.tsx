"use client";

import { useHallo } from "@/contexts/HalloContext";

export default function LandingNav() {
  const { open, isOpen } = useHallo();

  return (
    // z-30 sits below the yellow navbar (z-40) so it gets covered on scroll
    <div className="fixed top-0 right-0 z-30 flex items-center gap-6 px-6 h-[72px] text-dark button-l">
      <button
        onClick={open}
        className={`transition-colors hover:text-poppy ${isOpen ? "text-blue" : ""}`}
      >
        Hallo
      </button>
    </div>
  );
}
