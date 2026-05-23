"use client";

import { useState, useEffect } from "react";

export function useScrolled(threshold = 130) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > threshold);
    check(); // set correct state on mount (handles page refresh while scrolled)
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [threshold]);

  return scrolled;
}
