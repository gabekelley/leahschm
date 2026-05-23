"use client";

import Link from "next/link";
import Image from "next/image";
import { useHallo } from "@/contexts/HalloContext";

interface NavbarProps {
  onHalloClick: () => void;
  scrolled: boolean;
  hasBackground: boolean;
}

export default function Navbar({ onHalloClick, scrolled, hasBackground }: NavbarProps) {
  const { isOpen } = useHallo();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 h-[72px]"
      style={{
        backgroundColor: hasBackground ? "#FFCA27" : "transparent",
        transform: scrolled ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.35s ease",
      }}
    >
      <Link href="/">
        <Image
          src="/logo-leah.svg"
          alt="Leah Schmidt"
          width={80}
          height={26}
          priority
        />
      </Link>

      <div className="flex items-center gap-6 text-dark ml-auto button-l">
        <button
          onClick={onHalloClick}
          className={`transition-colors hover:text-poppy ${isOpen ? "text-blue" : ""}`}
        >
          Hallo
        </button>
      </div>
    </nav>
  );
}
