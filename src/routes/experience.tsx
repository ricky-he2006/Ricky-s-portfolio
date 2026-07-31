import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/GlowCard";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Ruiqi He" },
      { name: "description", content: "Research and professional experience by Ruiqi He." },
      { property: "og:title", content: "Experience — Ruiqi He" },
      { property: "og:description", content: "AIMed Lab research internship and related work." },
    ],
  }),
  component: ExperiencePage,
});

const experienceItems = [
  {
    slug: "aimed-lab-intern",
    title: "Undergraduate Research Intern — AIMed Lab",
    date: "Summer 2026 – Present",
    institution: "The Ohio State University | Department of Biomedical Informatics",
    mentor: "Dr. Ping Zhang",
    badge: "Research",
    summary:
      "Competing in the 2026 George B. Moody PhysioNet Challenge to develop predictive models that forecast cognitive impairment diagnoses from polysomnography (sleep study) data.",
    bullets: [
      "Engineering ML pipelines to analyze multi-modal physiological signals including EEG, EOG, EMG, ECG, respiratory effort, and airflow to identify patients at risk for mild cognitive impairment, Alzheimer's disease, and dementia",
      "Processing large-scale PSG datasets (1.2TB training set across 6,600+ recordings) with heterogeneous channel availability, variable sampling rates, and real-world noise",
      "Optimizing age-conditioned AUROC scoring metrics to predict diagnoses occurring 1-6 years post-sleep study",
    ],
    tech: ["Python", "PyTorch", "ML Pipelines", "Polysomnography", "PhysioNet"],
  },
];

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Experience</p>
        <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
          Research & <span className="text-gradient">Internships</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          My professional experience in research and applied analytics.
        </p>
      </motion.div>

      <div className="mt-12 space-y-8">
        {experienceItems.map((item, i) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <GlowCard className="h-full">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    {item.badge && (
                      <span className="shrink-0 rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.date}</p>
                  <p className="mt-1 text-sm font-medium text-foreground/80">{item.institution}</p>
                  {item.mentor && (
                    <p className="mt-1 text-xs text-muted-foreground">Mentor: {item.mentor}</p>
                  )}
                </div>
              </div>
              <p className="mt-4 text-sm text-foreground/90">{item.summary}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span key={t} className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
