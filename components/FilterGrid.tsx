"use client";

import { useState } from "react";
import { projects, Category } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const ALL = "All";
const filters: (typeof ALL | Category)[] = [
  ALL,
  "Illustration",
  "Product design",
  "Branding",
];

export default function FilterGrid() {
  const [active, setActive] = useState<typeof ALL | Category>(ALL);

  const visible =
    active === ALL
      ? projects
      : projects.filter((p) => p.categories.includes(active as Category));

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-4 mb-16">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`button-l rounded-full px-4 py-1.5 border transition-colors ${
              active === f
                ? "bg-dark text-cream border-dark"
                : "bg-transparent text-dark border-green hover:border-poppy hover:text-poppy"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
