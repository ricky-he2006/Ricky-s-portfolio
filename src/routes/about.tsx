import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/GlowCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ruiqi He" },
      { name: "description", content: "Data Analytics student at Ohio State, ASC Honors, with a focus on Biomedical & Public Health Analytics." },
      { property: "og:title", content: "About — Ruiqi He" },
      { property: "og:description", content: "Education, skills, honors, and what I'm building." },
    ],
  }),
  component: AboutPage,
});

const skillGroups = [
  { label: "Languages", items: ["Java", "Python", "R", "C++", "SQL"] },
  { label: "ML / AI", items: ["Pandas", "scikit-learn", "Random Forest", "TensorFlow", "PyTorch", "LangChain", "LLMs"] },
  { label: "Tools", items: ["RAPIDS cuDF", "NVIDIA DGX", "Streamlit", "Databricks", "Microsoft Office"] },
];

const honors = ["National Buckeye Scholar", "Trustees Scholarship", "Dean's List", "PA State Academic Team Champion"];

const activities = [
  "BDAA (Big Data & Analytics Association) — Autumn 2025",
  "Foundation of AI TA — Spring 2026",
  "Formula Buckeye — Autumn 2025",
  "Academic Team — 2022–2024",
  "Mock Trial — 2022–2024",
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-xs uppercase tracking-[0.3em] text-primary">About</p>
        <h1 className="sr-only">About — Ruiqi (Ricky) He</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          I am Ruiqi (Ricky) He. I am a Data Analytics undergrad at Ohio State's ASC Honors
          College, specializing in Biomedical & Public Health Analytics with a Business minor.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <GlowCard>
          <h2 className="font-display text-xl font-semibold">Education</h2>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <p className="font-medium">The Ohio State University · ASC Honors</p>
              <p className="text-muted-foreground">B.S. Data Analytics, spec. Biomedical & Public Health Analytics</p>
              <p className="text-xs text-muted-foreground">Minor: Business · Expected May 2028 · Dean's List</p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="font-medium">West Chester East High School</p>
              <p className="text-xs text-muted-foreground">Diploma, June 2024 · Honors Roll every semester</p>
            </div>
          </div>
        </GlowCard>

        <GlowCard>
          <h2 className="font-display text-xl font-semibold">Honors</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {honors.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
        </GlowCard>

        <GlowCard className="md:col-span-2">
          <h2 className="font-display text-xl font-semibold">Skills</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <p className="text-xs uppercase tracking-wider text-primary">{g.label}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-md border border-border bg-secondary/40 px-2 py-1 text-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GlowCard>

        <GlowCard>
          <h2 className="font-display text-xl font-semibold">Activities</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {activities.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {a}
              </li>
            ))}
          </ul>
        </GlowCard>

        <GlowCard>
          <h2 className="font-display text-xl font-semibold">Languages</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>🇺🇸 English — Native</li>
            <li>🇨🇳 Chinese — Native</li>
            <li>🇪🇸 Spanish — Basic</li>
          </ul>
        </GlowCard>
      </div>
    </div>
  );
}
