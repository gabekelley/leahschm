"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CopyEmail from "./CopyEmail";

interface HalloModalProps {
  isOpen: boolean;
  onClose: () => void;
}


export default function HalloModal({ isOpen, onClose }: HalloModalProps) {
  const [portraitHovered, setPortraitHovered] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center"
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="relative w-full max-w-5xl mx-4 mt-12 mb-12 flex flex-col max-h-[90vh] overflow-hidden"
        style={{ backgroundColor: "#7DD5CB", borderRadius: "56px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">
        <div className="px-16 pb-16 pt-16">
          {/* Portrait row: portrait left, close button right, top-aligned */}
          <div className="flex items-start justify-between mb-12">
            <div
              className={`w-[154px] h-[154px] overflow-hidden transition-all duration-300 ${portraitHovered ? "rounded-full" : ""}`}
              onMouseEnter={() => setPortraitHovered(true)}
              onMouseLeave={() => setPortraitHovered(false)}
            >
              <Image
                src={portraitHovered ? "/Headshot3.png" : "/portrait.png"}
                alt="Leah Schmidt"
                width={400}
                height={400}
                className={`w-full h-full object-cover transition-all duration-300 ${portraitHovered ? "scale-[1.25] translate-y-4" : "scale-[1.25]"}`}
              />
            </div>
            <button
              onClick={onClose}
              className="transition-colors [&:hover_path]:stroke-[#F9550D] p-3 flex-shrink-0"
              aria-label="Close"
            >
              <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.1338 0.707031L0.707381 43.1334" stroke="#202F1D" strokeWidth="2"/>
                <path d="M43.1335 43.1333L0.707137 0.70689" stroke="#202F1D" strokeWidth="2"/>
              </svg>
            </button>
          </div>

          {/* Bio */}
          <div className="body-l text-dark mb-14 space-y-4">
            <p>
              Leah is currently working as a Lead Product Designer at{" "}
              <a
                href="https://www.taskrabbit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="headline-s hover:italic hover:text-poppy transition-all"
              >
                Taskrabbit
              </a>
              , where she works on partner integrations and the client
              experience. She also takes on freelance illustration projects as
              her time allows. Previously, she worked on digital products at{" "}
              <a
                href="https://www.bighuman.com"
                target="_blank"
                rel="noopener noreferrer"
                className="headline-s hover:italic hover:text-poppy transition-all"
              >
                Big Human
              </a>{" "}
              in New York.
            </p>
            <p>
              She is passionate about design integrity in product UI, systems,
              and creating honest, delightful experiences.
            </p>
            <p>
              Her hobbies include eating the same breakfast every day, checking
              the weather, and hyper-fixating on crafts like{" "}
              <a
                href="https://www.instagram.com/explore/search/keyword/?q=%23leahknitthat"
                target="_blank"
                rel="noopener noreferrer"
                className="headline-s hover:italic hover:text-poppy transition-all"
              >
                knitting
              </a>
              .
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-5 button-m text-dark mb-14">
            <CopyEmail
              email="helloleahschmidt@gmail.com"
              className="hover:text-poppy transition-colors flex items-center gap-1.5 text-dark"
            >
              <span>💌</span> helloleahschmidt@gmail.com
            </CopyEmail>
            <a
              href="https://dribbble.com/leahschmidt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-poppy transition-colors flex items-center gap-1.5"
            >
              <span>🏀</span> Dribbble
            </a>
            <a
              href="https://www.linkedin.com/in/leahmaryschmidt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-poppy transition-colors flex items-center gap-1.5"
            >
              <span>👔</span> Linkedin
            </a>
            <a
              href="https://www.instagram.com/leahschm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-poppy transition-colors flex items-center gap-1.5"
            >
              <span>📸</span> Instagram
            </a>
          </div>

          {/* Credit */}
          <p className="body-s text-spruce">Made with <span className="text-poppy">♥</span> by Leah using Claude Code</p>
        </div>
        </div>{/* end scrollable */}
      </div>
    </div>
  );
}
