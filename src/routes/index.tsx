import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profilepic.jpeg";

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

function Home() {

  return (
    <div className="relative">
      {/* Hero */}
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

      {/* Skills marquee */}
      <section className="relative mt-24 overflow-hidden border-y border-border py-8" aria-label="Skills">
        <div className="flex w-max gap-10 marquee">
          {[...skills, ...skills].map((s, i) => (
            <span key={i} tabIndex={0} role="text" className="font-display text-2xl text-muted-foreground/70 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:rounded-md">
              {s} <span className="text-primary">·</span>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
