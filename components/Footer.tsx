import Image from "next/image";
import CopyEmail from "./CopyEmail";

export default function Footer() {
  return (
    <footer
      className="px-8 pt-16 pb-16 flex flex-col gap-10"
      style={{ backgroundColor: "#202F1D", cursor: "url('/cursor-butter.svg') 6 4, auto" }}
    >
      {/* Top row: logo left, links right */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        <Image
          src="/logo-blue.svg"
          alt="Leah Schmidt"
          width={168}
          height={94}
        />

        <div className="flex flex-wrap justify-start md:justify-end gap-5 button-m text-butter">
          <CopyEmail
            email="helloleahschmidt@gmail.com"
            className="hover:text-poppy transition-colors flex items-center gap-1.5 text-butter"
            style={{ cursor: "url('/cursor-hover-butter.svg') 11 11, pointer" }}
          >
            <span>💌</span> helloleahschmidt@gmail.com
          </CopyEmail>
          <a
            href="https://dribbble.com/leahschmidt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-poppy transition-colors flex items-center gap-1.5"
            style={{ cursor: "url('/cursor-hover-butter.svg') 11 11, pointer" }}
          >
            <span>🏀</span> Dribbble
          </a>
          <a
            href="https://www.linkedin.com/in/leahmaryschmidt/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-poppy transition-colors flex items-center gap-1.5"
            style={{ cursor: "url('/cursor-hover-butter.svg') 11 11, pointer" }}
          >
            <span>👔</span> Linkedin
          </a>
          <a
            href="https://www.instagram.com/leahschm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-poppy transition-colors flex items-center gap-1.5"
            style={{ cursor: "url('/cursor-hover-butter.svg') 11 11, pointer" }}
          >
            <span>📸</span> Instagram
          </a>
          <a
            href="https://www.etsy.com/shop/LeahSchmidtShop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-poppy transition-colors flex items-center gap-1.5"
            style={{ cursor: "url('/cursor-hover-butter.svg') 11 11, pointer" }}
          >
            <span>🛍️</span> Shop
          </a>
        </div>
      </div>

      {/* Bottom row: "Made with" left on desktop (top on mobile), "All rights" right on desktop (bottom on mobile) */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <p className="body-s text-blue order-first md:order-last">Made with <span className="text-poppy">♥</span> by Leah using Claude Code</p>
        <p className="body-s text-green order-last md:order-first">All rights reserved © Leah Schmidt 2026 &amp; beyond</p>
      </div>
    </footer>
  );
}
