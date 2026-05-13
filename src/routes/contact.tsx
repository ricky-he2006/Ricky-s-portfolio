import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
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
  { label: "Email (Personal)", value: "rickyhe2006@gmail.com", href: "mailto:rickyhe2006@gmail.com" },
  { label: "Phone", value: "610-864-7833", href: "tel:+16108647833" },
  { label: "LinkedIn", value: "linkedin.com/in/rickyhe2006", href: "https://www.linkedin.com/in/rickyhe2006" },
  { label: "GitHub", value: "github.com/ricky-he2006", href: "https://github.com/ricky-he2006" },
  { label: "Devpost", value: "devpost.com/rickyhe2006", href: "https://devpost.com/rickyhe2006?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" },
];

function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (val: string) => {
    try {
      await navigator.clipboard.writeText(val);
      setCopied(val);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
        <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
          Let's <span className="text-gradient">build</span> something.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Open to internships, research collaborations, and hackathon teams. Fastest
          way to reach me is email — but pick your poison.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {channels.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
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
