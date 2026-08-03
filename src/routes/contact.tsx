import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useRef, FormEvent } from "react";
import { GlowCard } from "@/components/GlowCard";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ruiqi He" },
      { name: "description", content: "Get in touch with Ruiqi He — email, LinkedIn, GitHub, or download resume." },
      { property: "og:title", content: "Contact — Ruiqi He" },
      { property: "og:description", content: "Let's build something." },
    ],
  }),
  component: ContactPage,
});

const CONTACT_EMAIL = "he.2497@osu.edu";

const channels = [
  { label: "Email (School)", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "LinkedIn", value: "linkedin.com/in/rickyhe2006", href: "https://www.linkedin.com/in/rickyhe2006" },
  { label: "GitHub", value: "github.com/ricky-he2006", href: "https://github.com/ricky-he2006" },
  { label: "Devpost", value: "devpost.com/rickyhe2006", href: "https://devpost.com/rickyhe2006" },
];

function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [formState, setFormState] = useState<"idle" | "opening">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const copy = async (val: string) => {
    try {
      await navigator.clipboard.writeText(val);
      setCopied(val);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [`From: ${name} <${email}>`, "", message].join("\n");
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormState("opening");
    window.location.href = mailto;
    setTimeout(() => setFormState("idle"), 800);
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
        <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
          Let's <span className="text-gradient">build</span> something.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Open to internships, research collaborations, and hackathon teams.
          Send a message, download my resume, or reach out on socials.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Download resume
          <span aria-hidden>↓</span>
        </a>
      </motion.div>

      <div className="mt-12">
        <GlowCard className="p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
              <input
                id="subject"
                name="subject"
                required
                type="text"
                placeholder="How can I help?"
                className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="flex w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <button
              type="submit"
              disabled={formState === "opening"}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {formState === "opening" ? "Opening mail…" : "Send Message"}
            </button>
            <p className="text-xs text-muted-foreground">
              Opens your email app with this message addressed to me.
            </p>
          </form>
        </GlowCard>
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Prefer to reach out directly?
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {channels.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (i + 2) * 0.06 }}
          >
            <GlowCard>
              <p className="text-xs uppercase tracking-wider text-primary">{c.label}</p>
              <p className="mt-2 break-all font-display text-lg">{c.value}</p>
              <div className="mt-4 flex gap-2">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90"
                >
                  Open
                </a>
                <button
                  type="button"
                  onClick={() => copy(c.value)}
                  className="rounded-full border border-border px-4 py-1.5 text-xs hover:border-primary hover:text-primary"
                >
                  {copied === c.value ? "Copied ✓" : "Copy"}
                </button>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
