import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import Arrow from "@/components/Arrow";

function imageSize(filename: string): "S" | "M" | "L" {
  const match = filename.match(/-([SMLsml])\.[^.]+$/);
  if (!match) return "L";
  return match[1].toUpperCase() as "S" | "M" | "L";
}

const sizeClass: Record<"S" | "M" | "L", string> = {
  S: "w-[375px]",
  M: "w-[600px]",
  L: "w-full",
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Leah Schmidt`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="min-h-full" style={{ backgroundColor: project.bgColor }}>
      <div className="max-w-5xl mx-auto px-6 pt-[84px] pb-16">
        {/* Header card */}
        <div className="bg-white rounded-2xl p-12 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-poppy button-l mb-[40px] hover:text-blue transition-colors"
          >
            <Arrow direction="left" />
            All projects
          </Link>

          <h1 className="headline-l text-dark mb-3">
            {project.title}
          </h1>

          <p className="body-l whitespace-pre-line mb-4">
            {project.description}
          </p>

          {project.link && (
            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button-m text-dark hover:text-poppy transition-colors mb-[40px] block"
            >
              {project.link.label}
            </a>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {[...project.categories, ...(project.secondaryTags ?? [])].map((tag) => (
              <span key={tag} className="body-m text-dark/50">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project images */}
        {(() => {
          const folder = project.folder ?? project.slug;
          const hasImages = project.images && project.images.length > 0;
          const hasSpots = project.spotImages && project.spotImages.length > 0;

          if (!hasImages && !hasSpots) {
            return (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-full rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: project.textLight
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(0,0,0,0.06)",
                      aspectRatio: i === 1 ? "16/9" : "4/3",
                    }}
                  >
                    <p
                      className="text-sm"
                      style={{
                        color: project.textLight
                          ? "rgba(255,255,255,0.3)"
                          : "rgba(32,47,29,0.25)",
                      }}
                    >
                      Add images to{" "}
                      <code className="font-mono text-xs">
                        public/projects/{project.slug}/
                      </code>
                    </p>
                  </div>
                ))}
              </div>
            );
          }

          return (
            <div className="space-y-6">
              {hasSpots && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.spotImages!.map((img) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={img}
                      src={`/projects/${folder}/${img}`}
                      alt={project.title}
                      className="w-full h-[200px] object-contain"
                    />
                  ))}
                </div>
              )}
              {project.images?.map((img) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={img}
                  src={`/projects/${folder}/${img}`}
                  alt={project.title}
                  className={`${sizeClass[imageSize(img)]} mx-auto block`}
                />
              ))}
            </div>
          );
        })()}
      </div>
    </div>
  );
}
