import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profilepic.jpeg";
import { GlowCard } from "@/components/GlowCard";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ruiqi He — Data Analytics & AI Portfolio" },
      { name: "description", content: "Ricky He: data analytics student at Ohio State, hackathon winner, builder of AI and visualization tools." },
      { property: "og:title", content: "Ruiqi He — Data Analytics & AI Portfolio" },
      { property: "og:description", content: "Hackathon-winning data & AI projects from Ohio State." },
    ],
  }),
  component: Home,
});

const skills = [
  "Python", "R", "Java", "C++", "SQL", "Pandas", "scikit-learn",
  "TensorFlow", "PyTorch", "LangChain", "Gemini", "RAPIDS cuDF",
  "Geospatial", "Streamlit", "Databricks", "ML", "LLMs",
];

const featured = projects.filter((p) => p.featured).slice(0, 3);

function Home() {
  return (
    <div className="relative">
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 pb-24 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            Data Analytics @ The Ohio State University 2028
          </span>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Hi, I'm <span className="text-gradient">Ricky</span>.
            <br />I turn data into <span className="text-gradient">decisions</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Building AI-powered ML pipelines that analyze multi-modal physiological signals to predict cognitive decline. Biomedical data scientist turning complex health data into actionable insights for clinicians and researchers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_-5px_oklch(0.82_0.14_200/0.7)]"
            >
              View projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Resume
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-3xl" />
          <div className="relative animate-float overflow-hidden rounded-full border-2 border-primary/40 p-1 glow-lg">
            <img
              src={profilePhoto}
              alt="Portrait of Ruiqi He"
              width={768}
              height={768}
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 512px"
              className="size-72 rounded-full object-cover sm:size-80"
            />
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8" aria-labelledby="featured-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Selected work</p>
            <h2 id="featured-heading" className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Featured <span className="text-gradient">wins</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-primary transition-all hover:gap-2 inline-flex items-center gap-1"
          >
            All projects →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link to="/projects" className="block h-full">
                <GlowCard className="h-full transition-colors hover:border-primary/40">
                  <div className="flex flex-wrap items-center gap-2">
                    {p.badge && (
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        {p.badge}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">{p.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.summary}</p>
                  <p className="mt-4 text-xs font-medium text-primary">View details →</p>
                </GlowCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mt-16 overflow-hidden border-y border-border py-8" aria-label="Skills">
        <div className="flex w-max gap-10 marquee" aria-hidden>
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="font-display text-2xl text-muted-foreground/70 whitespace-nowrap"
            >
              {s} <span className="text-primary">·</span>
            </span>
          ))}
        </div>
        <ul className="sr-only">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
