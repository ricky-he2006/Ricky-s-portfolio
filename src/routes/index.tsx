import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profilepic.jpeg";
import { OsuMark } from "@/components/OsuMark";
import { projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ruiqi He — Data Analytics & AI Portfolio" },
      { name: "description", content: "Ruiqi (Ricky) He — data analytics and AI at Ohio State. Models, pipelines, and visualizations that turn messy data into decisions." },
      { property: "og:title", content: "Ruiqi He — Data Analytics & AI Portfolio" },
      { property: "og:description", content: "Data analytics and AI work from Ohio State — models, pipelines, and visualizations." },
    ],
  }),
  component: Home,
});

const featured = ["datafest-osu", "doctor-loop", "clara"]
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is Project => Boolean(p));

const disciplines = [
  {
    label: "Data engineering",
    stack: "Python · SQL · RAPIDS cuDF · Databricks · Docker · GitHub Actions",
  },
  {
    label: "Machine learning",
    stack: "PyTorch · scikit-learn · XGBoost · Monte Carlo simulation",
  },
  {
    label: "GenAI & LLMs",
    stack: "Gemini · Qwen · watsonx · FastAPI · RAG pipelines",
  },
  {
    label: "Visualization",
    stack: "React · TypeScript · interactive dashboards · geospatial",
  },
  {
    label: "Domain",
    stack: "Biomedical & public-health analytics · explainable AI",
  },
];

function Home() {
  return (
    <div className="relative">
      {/* Masthead dateline */}
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <div className="flex items-center justify-between border-b border-border pb-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>Ruiqi “Ricky” He</span>
          <span className="hidden items-center gap-2 sm:flex">
            <OsuMark className="size-4" />
            Ohio State University
          </span>
          <span>Class of 2028</span>
        </div>
      </section>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Hi, I'm <span className="text-primary">Ricky</span>.
        </motion.h1>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.7fr_1fr] md:items-end">
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Data analytics undergraduate at Ohio State, focused on biomedical
              and public-health analytics. I’m most interested in the
              intersection of AI and ML with biology and pharma — but just as
              comfortable building models, pipelines, and research across the
              wider data-and-AI landscape.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                See the work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
              >
                Résumé
              </a>
              <Link
                to="/contact"
                className="text-sm font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Portrait, treated as a detail not a centerpiece */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="md:justify-self-end"
          >
            <div className="w-44">
              <div className="overflow-hidden rounded-lg border border-border">
                <img
                  src={profilePhoto}
                  alt="Portrait of Ruiqi He"
                  width={176}
                  height={176}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-medium">Ruiqi He</p>
              <p className="text-xs text-muted-foreground">Data Analytics ’28, OSU</p>
              <p className="text-xs text-muted-foreground">Biomedical &amp; public-health</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected work — editorial index */}
      <section className="mx-auto max-w-6xl px-6 py-16" aria-labelledby="work-heading">
        <div className="flex items-baseline justify-between border-b border-border pb-4">
          <h2 id="work-heading" className="font-display text-2xl font-semibold tracking-tight">
            Selected work
          </h2>
          <Link
            to="/projects"
            className="text-sm font-medium text-primary transition-all hover:translate-x-0.5"
          >
            All projects →
          </Link>
        </div>

        <div>
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to="/projects"
                hash={p.slug}
                className="group grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 border-b border-border py-8 transition-colors hover:bg-muted/30 sm:grid-cols-[auto_1fr_auto] sm:gap-x-10"
              >
                <span className="font-display text-sm tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                      {p.title}
                    </h3>
                    {p.badge && (
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                </div>
                <div className="col-span-2 flex items-center gap-4 sm:col-span-1 sm:flex-col sm:items-end sm:gap-2">
                  <p className="text-xs text-muted-foreground">{p.date}</p>
                  <span className="hidden text-primary transition-transform group-hover:translate-x-1 sm:inline-block">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Disciplines — a ledger, not a ticker */}
      <section className="mx-auto max-w-6xl px-6 py-16" aria-labelledby="disciplines-heading">
        <h2 id="disciplines-heading" className="border-b border-border pb-4 font-display text-2xl font-semibold tracking-tight">
          What I work with
        </h2>
        <dl className="divide-y divide-border">
          {disciplines.map((d) => (
            <div
              key={d.label}
              className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[16rem_1fr] sm:gap-x-10"
            >
              <dt className="font-display text-sm font-medium">{d.label}</dt>
              <dd className="text-sm text-muted-foreground">{d.stack}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
