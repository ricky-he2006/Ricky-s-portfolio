export type Project = {
  slug: string;
  title: string;
  date: string;
  badge?: string;
  summary: string;
  bullets: string[];
  tech: string[];
  link?: { label: string; href: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "datafest-osu",
    title: "DataFest @ OSU — Best Visualization",
    date: "April 10–12, 2026",
    badge: "1st Place",
    summary:
      "Built an interactive geospatial dashboard analyzing 4 years of Stormont Vail Health patient encounter data across Kansas.",
    bullets: [
      "Mapped patient distribution & hospital access across Kansas",
      "Lasso selection for multi-region analysis",
      "Department filters and top diagnoses by frequency",
      "Accelerated cleaning/preprocessing with NVIDIA RAPIDS cuDF on the DGX Spark",
    ],
    tech: ["RAPIDS cuDF", "NVIDIA DGX Spark", "Geospatial", "Python", "Dashboard"],
    link: { label: "Watch demo", href: "https://www.youtube.com/watch?v=kBPFNHTOf_g" },
    featured: true,
  },
  {
    slug: "omniguard-ai",
    title: "OmniGuard AI",
    date: "Spring 2026 — Ongoing",
    summary: "End-to-end fraud detection system benchmarking 7+ ML models with an autonomous AI agent.",
    bullets: [
      "SQL pipeline for profiling, cleaning, feature engineering, validation",
      "LangChain + Gemini agent sending email/Slack alerts and PDF reports",
      "Full-stack Streamlit dashboard with model comparisons and agent logs",
    ],
    tech: ["LangChain", "Gemini", "SQL", "Streamlit", "ML"],
  },
  {
    slug: "clara",
    title: "CLARA — Clairvoyant Loss Avoidance & Risk Advisor",
    date: "Spring 2026",
    badge: "Hackathon Win",
    summary: "AI-driven enterprise risk management prototype for investors and portfolio managers.",
    bullets: [
      "Real-time VaR & Expected Shortfall monitoring, Monte Carlo simulations",
      "Automated 10-K risk extraction, regime detection, stress testing",
      "Gemini for financial reasoning, Watson AI for conversational insights",
    ],
    tech: ["Gemini", "Watson AI", "Risk", "Monte Carlo"],
  },
  {
    slug: "nyc-housing",
    title: "NYC Housing Sales Analytics",
    date: "Spring 2026",
    badge: "Hackathon Winner",
    summary: "Full-stack analytics website analyzing 34,394 NYC property sales.",
    bullets: [
      "End-to-end pipeline with geospatial borough assignment",
      "Data processed and transformed in Databricks for scalable analytics",
      "Interactive dashboard built with Lovable during the hackathon, featuring ML-based price prediction",
    ],
    tech: ["Python", "Databricks", "ML", "Geospatial"],
    link: { label: "Live demo", href: "https://nyc-housing-sales-analytics-e7k5.vercel.app/" },
  },
  {
    slug: "talkora",
    title: "Talkora — Gemini Hackathon",
    date: "Spring 2026",
    summary: "Real-time voice-based language learning app using Gemini Live API.",
    bullets: [
      "Adaptive CEFR difficulty, AI personas, live pronunciation/grammar feedback",
      "Low-latency browser-to-API audio pipeline using Web Audio API",
    ],
    tech: ["Gemini Live", "Web Audio API", "Realtime"],
    link: { label: "Watch demo", href: "https://www.youtube.com/watch?v=k2EeAYEYLwk" },
  },
  {
    slug: "doctor-loop",
    title: "Doctor-in-the-Loop AI System",
    date: "Autumn 2025",
    badge: "1st Place — Foundation of AI",
    summary: "Explainable AI system to analyze X-rays and suggest editable treatment plans.",
    bullets: [
      "Overlay explanations for findings to assist doctors' decision-making",
      "Won 1st Place at Research Gala, evaluated by panel of judges",
    ],
    tech: ["Computer Vision", "Explainable AI", "PyTorch"],
  },
  {
    slug: "ai-study-planner",
    title: "AI Study Planner",
    date: "Autumn 2025",
    badge: "Top Project — BDAA × Lovable",
    summary: "AI-powered platform generating personalized study schedules and exam prep plans.",
    bullets: [
      "Note summarization from course content, user notes, and audio recordings",
      "Quiz feature to track and test student progress",
    ],
    tech: ["LLM", "Audio", "EdTech"],
    link: { label: "Watch demo", href: "https://www.youtube.com/watch?v=QfKHQ1_TzIA&t=7s" },
  },
  {
    slug: "sea-phages",
    title: "SEA-PHAGES Research Lab",
    date: "Autumn 2025",
    summary: "Isolating and analyzing bacteriophages from soil samples.",
    bullets: [
      "Detailed lab documentation",
      "Contributing findings to the research database",
    ],
    tech: ["Microbiology", "Research"],
  },
];
