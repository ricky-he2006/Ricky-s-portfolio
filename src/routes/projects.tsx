import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { Card } from "@/components/Card";
import { cn } from "@/lib/utils";
import { projects, CATEGORIES, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Wins — Ruiqi He" },
      {
        name: "description",
        content:
          "Hackathon wins, research, and full-stack builds by Ruiqi He — healthcare analytics, AI agents, data visualization, and more.",
      },
      { property: "og:title", content: "Projects & Wins — Ruiqi He" },
      {
        property: "og:description",
        content: "Filter by theme, then open any project for the full story.",
      },
    ],
  }),
  component: ProjectsPage,
});

/** Default display order — strongest wins first. */
const ORDER = [
  "datafest-osu",
  "doctor-loop",
  "clara",
  "nyc-housing",
  "aegis",
  "research-society",
  "talkora",
  "buckeyequest",
  "ai-study-planner",
  "sea-phages",
];

const bySlug = new Map(projects.map((p) => [p.slug, p]));
const ordered = ORDER.map((s) => bySlug.get(s)).filter(
  (p): p is Project => Boolean(p),
);

function slugFromHash() {
  if (typeof window === "undefined") return null;
  const h = window.location.hash.replace(/^#/, "");
  return projects.some((p) => p.slug === h) ? h : null;
}

function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [openSlug, setOpenSlug] = useState<string | null>(() => slugFromHash());

  const filtered = useMemo(
    () =>
      filter === "All"
        ? ordered
        : ordered.filter((p) => p.categories.includes(filter)),
    [filter],
  );

  const selected = openSlug ? (bySlug.get(openSlug) ?? null) : null;

  // Shareable hash for the open case study
  const writeHash = (slug: string | null) => {
    if (typeof window === "undefined") return;
    const { pathname, search } = window.location;
    window.history.replaceState(null, "", slug ? `${pathname}${search}#${slug}` : `${pathname}${search}`);
  };

  const open = (p: Project) => {
    setOpenSlug(p.slug);
    writeHash(p.slug);
  };
  const close = () => {
    setOpenSlug(null);
    writeHash(null);
  };

  // Follow external / back-forward hash changes
  useEffect(() => {
    const onHash = () => setOpenSlug(slugFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary">
          Selected work
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
          Projects &amp; <span className="text-gradient">wins</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Hackathon wins, research, and full-stack builds. Filter by theme, then
          open any project for the full story.
        </p>
      </motion.div>

      {/* Dateline */}
      <div className="mt-10 flex items-center justify-between border-y border-border py-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        <span>2025 — 2026</span>
        <span>
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {/* Filter chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        {["All", ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
              filter === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <AnimatePresence initial={false} mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <ProjectCard project={p} onOpen={() => open(p)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Case study drawer */}
      <CaseStudyDrawer project={selected} onClose={close} />
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const tech = project.tech.slice(0, 4);
  const extraTech = project.tech.length - tech.length;

  return (
    <Card className="h-full p-0" hover>
      <button
        type="button"
        onClick={onOpen}
        className="group flex h-full w-full flex-col p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div className="flex items-baseline justify-between gap-3 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          <span>{project.categories.join(" / ")}</span>
          <span className="shrink-0">{project.date}</span>
        </div>

        {project.badge && <div className="mt-3"><Badge tier={project.badgeTier} label={project.badge} /></div>}

        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        {project.stats && project.stats.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4">
            {project.stats.slice(0, 2).map((s) => (
              <div key={s.label}>
                <p className="font-display text-lg font-semibold tracking-tight text-primary">
                  {s.value}
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {extraTech > 0 && (
            <span className="rounded-md px-2 py-0.5 text-[11px] text-muted-foreground">
              +{extraTech}
            </span>
          )}
        </div>

        <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-primary">
          Open case study
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </button>
    </Card>
  );
}

function Badge({
  tier,
  label,
}: {
  tier?: "award" | "event";
  label: string;
}) {
  const isAward = tier === "award";
  return (
    <span
      className={cn(
        "inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
        isAward
          ? "bg-primary text-primary-foreground"
          : "border border-border text-muted-foreground",
      )}
    >
      {label}
    </span>
  );
}

function CaseStudyDrawer({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // Lock body scroll while open
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [project]);

  // Escape to close
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.aside
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-title"
            className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl overflow-hidden border-l border-border bg-background shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <header className="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {project.categories.join(" / ")}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <h2
                      id="case-title"
                      className="font-display text-2xl font-semibold tracking-tight"
                    >
                      {project.title}
                    </h2>
                    {project.badge && (
                      <Badge tier={project.badgeTier} label={project.badge} />
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.date}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close case study"
                  className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </header>

              {/* Body */}
              <div className="flex-1 space-y-7 overflow-y-auto px-6 py-6">
                <p className="text-base leading-relaxed text-foreground/90">
                  {project.summary}
                </p>

                {project.stats && project.stats.length > 0 && (
                  <div
                    className={cn(
                      "grid gap-x-6 gap-y-4 rounded-lg border border-border p-4",
                      project.stats.length >= 4
                        ? "grid-cols-2 sm:grid-cols-4"
                        : project.stats.length === 3
                          ? "grid-cols-2 sm:grid-cols-3"
                          : "grid-cols-2",
                    )}
                  >
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <p className="font-display text-2xl font-semibold tracking-tight text-primary">
                          {s.value}
                        </p>
                        <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {project.sections && project.sections.length > 0 && (
                  <div className="space-y-6">
                    {project.sections.map((s) => (
                      <div key={s.title}>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                          {s.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {s.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {project.details.length > 0 && (
                  <div className="space-y-3">
                    {project.details.map((d, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {d}
                      </p>
                    ))}
                  </div>
                )}

                {project.bullets.length > 0 && (
                  <ul className="space-y-2 text-sm text-foreground/90">
                    {project.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 border-t border-border pt-5">
                    {project.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-primary px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {l.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
