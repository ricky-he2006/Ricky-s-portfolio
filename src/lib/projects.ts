export type Project = {
  slug: string;
  title: string;
  date: string;
  badge?: string;
  /** One-line teaser shown when collapsed */
  summary: string;
  /** Expanded write-up — each string is a paragraph */
  details: string[];
  /** Optional scale / impact figures for the expanded view */
  stats?: { label: string; value: string }[];
  bullets: string[];
  tech: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "datafest-osu",
    title: "DataFest @ OSU — Best Visualization",
    date: "April 10–12, 2026",
    badge: "1st Place",
    summary:
      "Mapped patient journeys across 7.7M+ Stormont Vail Health encounters in Kansas.",
    details: [
      "ASA DataFest challenge with Stormont Vail Health — Kansas’s busiest trauma system and only ACS Level II Trauma Center. Four years of de-identified, HIPAA-compliant encounter data (2022–2025): 7.7M+ encounters across ~948K patients, plus diagnoses, departments, providers, social determinants, and census tracts.",
      "SVH asked teams to move past static snapshots and describe longitudinal patient journeys — gaps between diagnosis and follow-up, repeated testing, access and transportation, and how journeys differ by community or condition. We built an interactive geospatial dashboard so judges could explore Kansas patient distribution vs. hospital access, filter by department and top diagnoses, and lasso multi-region selections live.",
      "Joining and cleaning the multi-million-row tables was accelerated with NVIDIA RAPIDS cuDF on a DGX Spark, which let us iterate on the viz during the weekend. Awarded 1st Place — Best Visualization.",
    ],
    stats: [
      { value: "7.7M+", label: "Encounters" },
      { value: "948K+", label: "Patients" },
      { value: "4 yrs", label: "2022–2025" },
      { value: "1st", label: "Best Viz" },
    ],
    bullets: [
      "Geospatial patient & access map across Kansas with live region selection",
      "Department filters and top diagnoses to slice journey patterns",
      "Joined encounters, patients, diagnoses, departments, and census tracts",
      "RAPIDS cuDF on NVIDIA DGX Spark for weekend-scale preprocessing",
    ],
    tech: ["RAPIDS cuDF", "NVIDIA DGX Spark", "Geospatial", "Python", "Dashboard"],
    links: [{ label: "Watch demo", href: "https://www.youtube.com/watch?v=kBPFNHTOf_g" }],
    featured: true,
  },
  {
    slug: "research-society",
    title: "Research Society — Qwen Cloud Hackathon",
    date: "Summer 2026",
    badge: "Track 3 · Judging",
    summary:
      "Multi-agent paper review board: specialists debate methods, novelty, and gaps in real time.",
    details: [
      "Built for the Global AI Hackathon Series with Qwen Cloud (Track 3: Agent Society). Research Society turns paper triage into a live debate you can watch — not a black-box summary score. Give it a PDF, arXiv ID, DOI, URL, or plain-English topic, and five Qwen-powered agents review the work together.",
      "An Executive Moderator plus Structure Analyst, Contribution Scout, Methodology Critic, and Literature Reviewer raise hands, rebut, and vote over a WebSocket feed. Disagreements stay in a dissent ledger. Alongside the chamber: claim fact-checking, an interactive concept map, natural-language search across arXiv / OpenAlex / PubMed / Crossref, and a benchmark vs. a single-agent baseline.",
      "Stack is FastAPI + React (Vite), agents on Qwen via Alibaba DashScope, whole app Docker-deployed on Alibaba Cloud ECS. Tuned prompts and consensus thresholds so agents actually disagree; disabled Qwen3 hybrid thinking mode for low-latency, parseable debate turns.",
    ],
    stats: [
      { value: "5", label: "Agents" },
      { value: "WS", label: "Live debate" },
      { value: "ECS", label: "Alibaba Cloud" },
    ],
    bullets: [
      "Hand-raising debate rounds, rebuttals, verdict + dissent ledger over WebSocket",
      "Paper ingest via PDF, arXiv, DOI, URL, or natural-language discovery",
      "Concept maps, claim fact-check, and society-vs-solo benchmark",
      "Production deploy: multi-stage Docker on Alibaba Cloud ECS → DashScope (Qwen)",
    ],
    tech: [
      "Qwen Cloud",
      "DashScope",
      "FastAPI",
      "React",
      "WebSocket",
      "Docker",
      "Alibaba Cloud ECS",
    ],
    links: [
      { label: "Watch demo", href: "https://www.youtube.com/watch?v=_F4XSoR5PrU" },
      { label: "View on GitHub", href: "https://github.com/ricky-he2006/Qwen-Cloud-Hackathon" },
    ],
  },
  {
    slug: "buckeyequest",
    title: "BuckeyeQuest — OpenAI Build Week",
    date: "Summer 2026",
    badge: "Education · Judging",
    summary:
      "AI learning days for elementary teachers: grade-aware plans, student missions, evidence-based next steps.",
    details: [
      "Education-track submission for OpenAI Build Week. BuckeyeQuest helps Ohio elementary teachers turn a grade-level goal into a reviewable term plan and daily rhythm, then gives students teacher-assigned interactive missions across reading, math, science, history, and creative lab.",
      "As learners make branching choices, Buckeye Narrator and Journey Tutor respond in age-appropriate language. The teacher dashboard surfaces grounded recommendations with evidence — who needs help and why — plus AI differentiation suggestions that never change a student’s level without teacher approval. Students join via QR / class code and only see their assigned, grade-level work.",
      "React + TypeScript PWA with a Node server that keeps API keys off the browser. Optional live inference via NVIDIA Llama 3.3 Nemotron; deterministic fallbacks keep the demo loop alive offline. Built with Codex and GPT-5.6 for product design, branching gameplay, AI contracts, and classroom reliability.",
    ],
    stats: [
      { value: "5", label: "Subjects" },
      { value: "PWA", label: "Offline-ready" },
      { value: "Ohio", label: "Aligned plans" },
    ],
    bullets: [
      "Teacher dashboard: Ohio-aligned planner, roster, Ask your class assistant",
      "Student missions with branching paths, Buckeye Narrator, and journey tutor",
      "Teacher-gated differentiation — AI suggests, educators approve",
      "Local-first + QR join; smoke tests and GitHub Actions for the classroom loop",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Codex",
      "GPT-5.6",
      "NVIDIA Nemotron",
      "PWA",
    ],
    links: [
      { label: "Watch demo", href: "https://www.youtube.com/watch?v=sHcZ9Kp4thA" },
      { label: "View on GitHub", href: "https://github.com/ricky-he2006/BuckeyeQuest" },
    ],
  },
  {
    slug: "clara",
    title: "CLARA — Clairvoyant Loss Avoidance & Risk Advisor",
    date: "Spring 2026",
    badge: "Hackathon Win",
    summary: "Full-stack ERM platform: VaR/ES, SEC 10-K risk extraction, and COSO heat maps.",
    details: [
      "CLARA (Clairvoyant Loss Avoidance & Risk Advisor) is a full-stack enterprise risk platform for investors and portfolio managers — React/Vite frontend, FastAPI backend — pairing classical risk engines with AI narrative analysis.",
      "Pulls Item 1A risk factors from SEC EDGAR 10-K filings, classifies them into the COSO ERM framework (Strategic, Operational, Financial, Compliance), and plots likelihood × impact on interactive heat maps. IBM watsonx (Granite) enhances extraction and classification; Gemini supports financial reasoning and conversational insights.",
      "Quantitative side covers multi-confidence VaR & Expected Shortfall (90/95/99%), Monte Carlo with Normal / Student-t / Log-normal / Exponential distributions (Watson-assisted selection), sensitivity tornado charts, breach monitoring, and regime / stress tooling.",
    ],
    stats: [
      { value: "4", label: "COSO cats" },
      { value: "90–99%", label: "VaR levels" },
      { value: "10-K", label: "SEC EDGAR" },
    ],
    bullets: [
      "SEC EDGAR 10-K parsing (Item 1A) with year-over-year risk comparison",
      "COSO classification + interactive likelihood × impact heat maps",
      "Multi-distribution VaR/ES, Monte Carlo, and sensitivity tornado diagrams",
      "Breach alerts, regime analysis, and Gemini + watsonx conversational insights",
    ],
    tech: [
      "FastAPI",
      "React",
      "Gemini",
      "IBM watsonx",
      "SEC EDGAR",
      "Recharts",
      "Monte Carlo",
    ],
    links: [{ label: "View on GitHub", href: "https://github.com/DanielHu2018/CLARA" }],
  },
  {
    slug: "nyc-housing",
    title: "NYC Housing Sales Analytics",
    date: "Spring 2026",
    badge: "Hackathon Winner",
    summary: "Full-stack analytics on 34K+ NYC property sales with ML price prediction.",
    details: [
      "End-to-end housing analytics in a hackathon weekend: clean 34,394 NYC sales records, assign borough geography, transform in Databricks, then ship an interactive dashboard with ML-based price prediction.",
      "Live product UI built with Lovable so the pipeline and the demo could move together.",
    ],
    stats: [
      { value: "34K+", label: "Sales" },
      { value: "5", label: "Boroughs" },
      { value: "ML", label: "Price model" },
    ],
    bullets: [
      "Geospatial borough assignment and end-to-end cleaning pipeline",
      "Databricks transforms for scalable analytics",
      "Interactive dashboard with ML-based price prediction",
    ],
    tech: ["Python", "Databricks", "ML", "Geospatial", "Lovable"],
    links: [
      { label: "Live demo", href: "https://nyc-housing-sales-analytics-e7k5.vercel.app/" },
    ],
  },
  {
    slug: "talkora",
    title: "Talkora — Gemini Hackathon",
    date: "Spring 2026",
    summary: "Real-time voice language learning powered by the Gemini Live API.",
    details: [
      "Talkora turns practice into a live call, not a chat form. Learners speak with adaptive AI personas that adjust CEFR difficulty and give instant pronunciation and grammar feedback.",
      "Built on Gemini Live plus a low-latency Web Audio API pipeline from browser mic to model and back.",
    ],
    bullets: [
      "Adaptive CEFR difficulty, AI personas, live pronunciation & grammar feedback",
      "Low-latency browser-to-API audio with Web Audio API",
    ],
    tech: ["Gemini Live", "Web Audio API", "Realtime"],
    links: [{ label: "Watch demo", href: "https://www.youtube.com/watch?v=k2EeAYEYLwk" }],
  },
  {
    slug: "doctor-loop",
    title: "Doctor-in-the-Loop AI System",
    date: "Autumn 2025",
    badge: "1st Place — Foundation of AI",
    summary: "Explainable X-ray AI with overlays and doctor-editable treatment plans.",
    details: [
      "Research-gala winner: a computer-vision system that analyzes X-rays, highlights findings with overlays, and proposes treatment plans clinicians can edit.",
      "Designed as a second reader with transparent reasoning — doctors stay in control, not a black-box diagnosis.",
    ],
    stats: [
      { value: "1st", label: "Research Gala" },
      { value: "XAI", label: "Overlays" },
    ],
    bullets: [
      "Overlay explanations to support clinical decision-making",
      "1st Place at Research Gala, judged by a faculty panel",
    ],
    tech: ["Computer Vision", "Explainable AI", "PyTorch"],
  },
  {
    slug: "ai-study-planner",
    title: "AI Study Planner",
    date: "Autumn 2025",
    badge: "Top Project — BDAA × Lovable",
    summary: "Personalized study plans and quizzes from notes, courses, and audio.",
    details: [
      "Top project at BDAA × Lovable: turns course materials, typed notes, and audio recordings into summarized schedules and quizzes tailored to upcoming exams.",
      "Students get a practice loop that tracks what they’ve actually studied — not just a static calendar.",
    ],
    bullets: [
      "Summarization from course content, notes, and audio recordings",
      "Quizzes to track and test progress against the plan",
    ],
    tech: ["LLM", "Audio", "EdTech"],
    links: [{ label: "Watch demo", href: "https://www.youtube.com/watch?v=QfKHQ1_TzIA&t=7s" }],
  },
  {
    slug: "sea-phages",
    title: "SEA-PHAGES Research Lab",
    date: "Autumn 2025",
    summary: "Isolating bacteriophages from soil for a shared research database.",
    details: [
      "SEA-PHAGES lab research: isolate bacteriophages from environmental soil samples, document methods and results in detail, and contribute characterized findings to the program’s collaborative database.",
    ],
    bullets: [
      "Detailed lab documentation of isolation and characterization",
      "Findings contributed to the shared SEA-PHAGES research database",
    ],
    tech: ["Microbiology", "Research"],
  },
];
