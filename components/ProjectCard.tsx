"use client";

import Link from "next/link";
import { useState } from "react";
import { Project } from "@/lib/projects";
import Arrow from "./Arrow";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const folder = project.folder ?? project.slug;
  const coverSrc = project.coverImage
    ? `/projects/${folder}/${project.coverImage}`
    : null;

  const hasAssets = !!(project.coverImage || (project.images && project.images.length > 0));

  const [tooltip, setTooltip] = useState<{ x: number; y: number; fading: boolean } | null>(null);

  const handleComingSoonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setTooltip({ x: e.clientX + 16, y: e.clientY - 10, fading: false });
    setTimeout(() => setTooltip((t) => t ? { ...t, fading: true } : null), 1800);
    setTimeout(() => setTooltip(null), 2300);
  };

  const cardClasses = "group flex flex-col rounded-xl hover:rounded-3xl overflow-hidden bg-white hover:bg-butter transition-all duration-200 hover:[box-shadow:0_0_0_2px_#F9550D]";

  const cardInner = (
    <>
      <div
        className="w-full flex-1 min-h-[160px] relative overflow-hidden"
        style={{ backgroundColor: project.bgColor }}
      >
        {coverSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverSrc}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-6 flex-shrink-0">
        <div className="flex items-start justify-between mb-4">
          <span className="headline-s text-dark group-hover:text-poppy group-hover:italic transition-all duration-200">
            {project.title}
          </span>
          <span className="text-dark group-hover:text-poppy transition-colors duration-200 mt-[12px] flex-shrink-0">
            <Arrow />
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="button-s border border-green rounded-full px-4 py-2 text-green"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className={cardClasses + " cursor-pointer"} onClick={handleComingSoonClick}>
        {cardInner}
      </div>

      {tooltip && (
        <div
          className="fixed z-[200] pointer-events-none body-s text-dark rounded-full px-3 py-1"
          style={{ left: tooltip.x, top: tooltip.y, backgroundColor: "#7DD5CB", opacity: tooltip.fading ? 0 : 1, transition: "opacity 0.5s ease" }}
        >
          Coming soon
        </div>
      )}
    </>
  );
}
