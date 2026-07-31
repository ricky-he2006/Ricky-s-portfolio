import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { GlowCard } from "@/components/GlowCard";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ruiqi He" },
      { name: "description", content: "Award-winning data, AI, and visualization projects by Ruiqi He." },
      { property: "og:title", content: "Projects — Ruiqi He" },
      { property: "og:description", content: "DataFest, hackathons, and research builds." },
    ],
  }),
  component: ProjectsPage,
});

function slugFromHash() {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace(/^#/, "");
  return projects.some((p) => p.slug === hash) ? hash : null;
}

function ProjectsPage() {
  const defaultOpen = projects.find((p) => p.featured)?.slug ?? null;
  const [openSlug, setOpenSlug] = useState<string | null>(() => slugFromHash() ?? defaultOpen);

  useEffect(() => {
    const applyHash = () => {
      const fromHash = slugFromHash();
      if (fromHash) {
        setOpenSlug(fromHash);
        requestAnimationFrame(() => {
          document.getElementById(fromHash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const toggle = (slug: string) => {
    const next = openSlug === slug ? null : slug;
    setOpenSlug(next);
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (next) url.hash = next;
    else url.hash = "";
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Selected work</p>
        <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
          Projects & <span className="text-gradient">wins</span>
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Hackathon wins, research, and full-stack builds. Expand any project for the full story.
        </p>
      </motion.div>

      <div className="mt-12 space-y-3">
        {projects.map((p, i) => {
          const isOpen = openSlug === p.slug;

          return (
            <motion.div
              key={p.slug}
              id={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="scroll-mt-28"
            >
              <GlowCard
                className={cn(
                  "p-0 transition-[border-color,box-shadow] duration-300",
                  isOpen && "border-primary/45 shadow-[0_0_40px_-12px_oklch(0.82_0.14_200/0.35)]",
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`project-${p.slug}`}
                  id={`project-trigger-${p.slug}`}
                  onClick={() => toggle(p.slug)}
                  className="flex w-full cursor-pointer items-start gap-3 p-5 text-left outline-none transition-colors hover:bg-primary/[0.03] focus-visible:bg-primary/[0.04] sm:gap-4 sm:p-6"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                      <h2 className="font-display text-lg font-semibold leading-snug sm:text-xl">
                        {p.title}
                      </h2>
                      {p.badge && (
                        <span className="shrink-0 rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{p.date}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.summary}</p>
                    {!isOpen && (
                      <p className="mt-2 text-xs font-medium text-primary/80">More details ↓</p>
                    )}
                  </div>
                  <ChevronDown
                    className={cn(
                      "mt-0.5 size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180 text-primary",
                    )}
                    aria-hidden
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="details"
                      id={`project-${p.slug}`}
                      role="region"
                      aria-labelledby={`project-trigger-${p.slug}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-5 border-t border-border px-5 pb-6 pt-5 sm:px-6">
                        {p.stats && p.stats.length > 0 && (
                          <div
                            className={cn(
                              "grid gap-3 rounded-xl border border-border/80 bg-muted/30 px-4 py-3.5",
                              p.stats.length >= 4
                                ? "grid-cols-2 sm:grid-cols-4"
                                : p.stats.length === 3
                                  ? "grid-cols-3"
                                  : "grid-cols-2",
                            )}
                          >
                            {p.stats.map((s) => (
                              <div key={s.label} className="min-w-0">
                                <p className="font-display text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                                  {s.value}
                                </p>
                                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                                  {s.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="space-y-4">
                          {p.sections && p.sections.length > 0
                            ? p.sections.map((s) => (
                                <div key={s.title}>
                                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                                    {s.title}
                                  </p>
                                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                                    {s.body}
                                  </p>
                                </div>
                              ))
                            : p.details.map((para) => (
                                <p
                                  key={para.slice(0, 48)}
                                  className="text-sm leading-relaxed text-muted-foreground"
                                >
                                  {para}
                                </p>
                              ))}
                        </div>

                        <ul className="space-y-2 text-sm text-foreground/90">
                          {p.bullets.map((b) => (
                            <li key={b} className="flex gap-2.5">
                              <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-border bg-background/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {p.links && p.links.length > 0 && (
                          <div className="flex flex-wrap gap-x-5 gap-y-2">
                            {p.links.map((l) => (
                              <a
                                key={l.href}
                                href={l.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {l.label}
                                <span aria-hidden>→</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlowCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
