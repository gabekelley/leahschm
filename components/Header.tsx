"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import HalloModal from "./HalloModal";
import { useScrolled } from "@/hooks/useScrolled";
import { useHallo } from "@/contexts/HalloContext";

export default function Header() {
  const { isOpen, open, close } = useHallo();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProjectPage = pathname.startsWith("/projects/");
  const scrolledPast = useScrolled(130);

  // On project pages: always visible, bg appears on scroll
  // On home: slides in on scroll
  // Elsewhere: always visible with bg
  const shown = isProjectPage ? true : (!isHome || scrolledPast);
  const hasBackground = isProjectPage ? scrolledPast : shown;

  return (
    <>
      <Navbar onHalloClick={open} scrolled={shown} hasBackground={hasBackground} />
      <HalloModal isOpen={isOpen} onClose={close} />
    </>
  );
}
