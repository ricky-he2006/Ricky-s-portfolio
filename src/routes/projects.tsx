import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/GlowCard";
import { projects } from "@/lib/projects";

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

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Selected work</p>
        <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
          Projects & <span className="text-gradient">wins</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A mix of hackathon wins, research, and full-stack builds spanning healthcare,
          finance, and education.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <GlowCard className="h-full">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.date}</p>
                </div>
                {p.badge && (
                  <span className="shrink-0 rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {p.badge}
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm text-foreground/90">{p.summary}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  {p.link.label} →
                </a>
              )}
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
