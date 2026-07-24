import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useRef, FormEvent } from "react";
import { GlowCard } from "@/components/GlowCard";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ruiqi He" },
      { name: "description", content: "Get in touch with Ruiqi He — email, phone, LinkedIn, GitHub." },
      { property: "og:title", content: "Contact — Ruiqi He" },
      { property: "og:description", content: "Let's build something." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "Email (School)", value: "he.2497@buckeyemail.osu.edu", href: "mailto:he.2497@buckeyemail.osu.edu" },
  { label: "LinkedIn", value: "linkedin.com/in/rickyhe2006", href: "https://www.linkedin.com/in/rickyhe2006" },
  { label: "GitHub", value: "github.com/ricky-he2006", href: "https://github.com/ricky-he2006" },
  { label: "Devpost", value: "devpost.com/rickyhe2006", href: "https://devpost.com/rickyhe2006" },
];

function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
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
    setFormState("submitting");

    // Using Formspree - replace with your form ID
    const form = formRef.current;
    if (!form) return;

    fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(() => setFormState("success"))
      .catch(() => setFormState("idle"));
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
          Use the form below or reach out via my social profiles.
        </p>
      </motion.div>

      {/* Contact Form */}
      <div className="mt-12">
        <GlowCard className="p-8">
          {formState === "success" ? (
            <div className="text-center py-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Message sent!</h3>
              <p className="mt-2 text-muted-foreground">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
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
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                  className="flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </GlowCard>
      </div>

      {/* Alternative Contact Methods */}
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
