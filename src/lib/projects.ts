export type Project = {
  slug: string;
  title: string;
  date: string;
  badge?: string;
  /** One-line teaser shown when collapsed */
  summary: string;
  /** Expanded write-up — each string is a paragraph (used when sections is empty) */
  details: string[];
  /** Optional labeled sections (Challenge, Outcome, etc.) */
  sections?: { title: string; body: string }[];
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
    details: [],
    sections: [
      {
        title: "The Challenge",
        body: "During ASA DataFest, our team worked with four years of de-identified patient data from Stormont Vail Health — Kansas’s busiest trauma system and only ACS Level II Trauma Center. The dataset included more than 7.7 million patient encounters across 948,000+ patients. The goal wasn’t just to analyze the data — it was to tell the story of how patients move through the healthcare system over time: delays between visits, repeat testing, differences in access to care, and how journeys varied across communities and conditions.",
      },
      {
        title: "What We Built",
        body: "We developed an interactive geospatial dashboard so judges and healthcare stakeholders could explore patient journeys across Kansas in real time — not static charts, but an experience that made patterns easy to spot by connecting encounters, diagnoses, providers, departments, social determinants, and census tracts.",
      },
      {
        title: "My Contributions",
        body: "I focused on the data engineering and preprocessing pipeline. Working with more than 7.7 million records, I used NVIDIA RAPIDS cuDF on an NVIDIA DGX Spark to clean, join, and prepare the data efficiently throughout the hackathon — so the team spent less time waiting on computation and more time refining the visualization and the story.",
      },
      {
        title: "Outcome",
        body: "Awarded 1st Place — Best Visualization for turning a large, complex healthcare dataset into an intuitive tool that highlighted patient access and care patterns across Kansas.",
      },
    ],
    stats: [
      { value: "7.7M+", label: "Encounters" },
      { value: "948K+", label: "Patients" },
      { value: "4 yrs", label: "2022–2025" },
      { value: "1st", label: "Best Viz" },
    ],
    bullets: [
      "View patient distribution alongside healthcare access on an interactive map",
      "Filter by department or diagnosis to compare patient populations",
      "Select regions on the map to explore local trends and movement",
      "Join encounters, diagnoses, providers, departments, SDOH, and census tracts",
    ],
    tech: [
      "Python",
      "NVIDIA RAPIDS cuDF",
      "NVIDIA DGX Spark",
      "Geospatial",
      "Interactive Dashboard",
    ],
    links: [{ label: "Watch demo", href: "https://www.youtube.com/watch?v=kBPFNHTOf_g" }],
    featured: true,
  },
  {
    slug: "clara",
    title: "CLARA — Clairvoyant Loss Avoidance & Risk Advisor",
    date: "Spring 2026",
    badge: "Hackathon Win",
    summary:
      "Full-stack ERM platform: VaR/ES, SEC 10-K risk extraction, and COSO heat maps.",
    details: [],
    sections: [
      {
        title: "The Challenge",
        body: "Financial risk is often split across tools — quantitative models estimate potential losses, while analysts dig through company filings for business risk. Connecting those views in one platform helps investors and portfolio managers make more informed decisions.",
      },
      {
        title: "What We Built",
        body: "CLARA is a full-stack enterprise risk platform that pairs classical financial risk modeling with AI analysis of SEC filings. Users run VaR and Expected Shortfall with Monte Carlo across multiple distributions, pull Item 1A risk factors from EDGAR 10-Ks and classify them with the COSO ERM framework, explore heat maps and sensitivity views, and chat with an AI assistant about portfolio exposure — so model predictions and company-disclosed risks sit side by side.",
      },
      {
        title: "How We Built It",
        body: "FastAPI backend and React/Vite frontend. IBM watsonx (Granite) extracts and classifies 10-K risk factors from SEC EDGAR; Gemini powers conversational financial insights. A quantitative engine runs Monte Carlo and multi-confidence VaR/ES across Normal, Student-t, Log-normal, and Exponential distributions, with interactive dashboards for heat maps, tornado sensitivity, and portfolio risk. Team collaboration across architecture, AI integration, risk modeling, and UX.",
      },
      {
        title: "Outcome",
        body: "Recognized as a hackathon winner. CLARA shows the value of combining AI document analysis with traditional financial risk engines — market risk and company disclosures in one dashboard for clearer investment decisions.",
      },
    ],
    stats: [
      { value: "4", label: "COSO cats" },
      { value: "90–99%", label: "VaR levels" },
      { value: "10-K", label: "SEC EDGAR" },
    ],
    bullets: [
      "VaR & Expected Shortfall via Monte Carlo across multiple distributions",
      "SEC EDGAR Item 1A extraction with COSO ERM classification",
      "Likelihood × impact heat maps, sensitivity tornadoes, portfolio views",
      "AI assistant for financial reasoning and portfolio exposure insights",
    ],
    tech: [
      "FastAPI",
      "React",
      "Vite",
      "IBM watsonx",
      "Gemini",
      "SEC EDGAR",
      "Monte Carlo",
      "VaR / ES",
    ],
    links: [{ label: "View on GitHub", href: "https://github.com/DanielHu2018/CLARA" }],
    featured: true,
  },
  {
    slug: "nyc-housing",
    title: "NYC Housing Sales Analytics",
    date: "Spring 2026",
    badge: "Hackathon Winner",
    summary:
      "Full-stack analytics on 34K+ NYC property sales with ML price prediction.",
    details: [],
    sections: [
      {
        title: "The Challenge",
        body: "Housing data is often hard to analyze — multiple sources, inconsistent formatting, and heavy preprocessing before insights appear. I wanted a platform that turned raw NYC housing sales into an interactive analytics tool with machine learning–powered price predictions.",
      },
      {
        title: "What I Built",
        body: "An end-to-end analytics platform that cleans, analyzes, and visualizes property sales across New York City’s five boroughs. Users explore market trends on an interactive dashboard, filter and compare boroughs, view property statistics, and get ML-based price predictions for fair-market estimates — data engineering and machine learning in one practical app.",
      },
      {
        title: "How I Built It",
        body: "Built from the ground up. In Databricks I cleaned and transformed 34,394 NYC sales records, enriched them with borough geography, and prepared features for modeling. I trained an ML price model on the processed data, then shipped an interactive dashboard with Lovable so users could explore trends and predictions without touching the pipeline.",
      },
      {
        title: "Challenges",
        body: "Preparing the raw dataset was the hardest part — inconsistent records, missing values, and borough enrichment had to be solid before a reliable model. Making the analytics approachable for non-technical users meant designing a simple interface that hid the pipeline while exposing the insights.",
      },
      {
        title: "Outcome",
        body: "Hackathon winner. NYC Housing Sales Analytics shows a full ML workflow — preprocess, feature engineer, predict, visualize — designed, built, and shipped as a complete data-driven app in a weekend.",
      },
    ],
    stats: [
      { value: "34K+", label: "Sales" },
      { value: "5", label: "Boroughs" },
      { value: "ML", label: "Price model" },
    ],
    bullets: [
      "Explore housing market trends on an interactive dashboard",
      "Filter and compare sales across NYC’s five boroughs",
      "View property statistics and market insights",
      "Generate ML-based price predictions for fair market value",
    ],
    tech: [
      "Python",
      "Databricks",
      "Machine Learning",
      "Data Engineering",
      "Lovable",
      "Geospatial",
    ],
    links: [
      { label: "Live demo", href: "https://nyc-housing-sales-analytics-e7k5.vercel.app/" },
    ],
  },
  {
    slug: "doctor-loop",
    title: "Doctor-in-the-Loop AI System",
    date: "Autumn 2025",
    badge: "1st Place — Foundation of AI",
    summary:
      "Explainable X-ray AI with overlays and doctor-editable treatment plans.",
    details: [],
    sections: [
      {
        title: "The Challenge",
        body: "AI can support clinicians, but trust is still a major barrier. Many systems produce predictions without clear reasoning, so it’s hard for healthcare professionals to bring them into real workflows. I wanted AI that assists doctors while leaving every medical decision under their control.",
      },
      {
        title: "What I Built",
        body: "Doctor-in-the-Loop is an explainable AI-assisted workflow for reviewing X-rays: AI-generated findings, visual explanations, and editable treatment suggestions sit alongside the image. Clinicians review, modify, or reject every recommendation before anything moves forward — AI as a collaborative second reader, not an autonomous decision-maker.",
      },
      {
        title: "How I Built It",
        body: "Built primarily with Lovable to rapidly ship the UI and interactive clinician workflow. The app simulates explainable analysis with overlays, AI observations, and editable plans, designed so every suggestion stays transparent and requires approval. Focus was trust: explainability, human oversight, and usability in a healthcare context.",
      },
      {
        title: "Challenges",
        body: "Balancing transparency with simplicity — enough reasoning for trust without overwhelming clinicians. The workflow also had to make the physician’s role as final decision-maker unmistakable so AI stayed a support tool, not a silent diagnostic authority.",
      },
      {
        title: "Outcome",
        body: "Awarded 1st Place at the Foundation of AI Research Gala for a human-centered, explainable approach to AI-assisted healthcare that keeps clinicians at the center of every decision.",
      },
    ],
    stats: [
      { value: "1st", label: "Research Gala" },
      { value: "XAI", label: "Overlays" },
    ],
    bullets: [
      "X-ray review with visual overlays and AI-generated findings",
      "Editable treatment recommendations — clinicians approve every step",
      "Designed as a collaborative assistant, not an autonomous diagnoser",
      "UI and workflow built for transparency and human oversight",
    ],
    tech: [
      "Lovable",
      "Python",
      "Explainable AI",
      "Computer Vision",
      "Healthcare AI",
    ],
    featured: true,
  },
  {
    slug: "ai-study-planner",
    title: "AI Study Planner",
    date: "Autumn 2025",
    badge: "Top Project — BDAA × Lovable",
    summary:
      "Personalized study plans and quizzes from notes, courses, and audio.",
    details: [],
    sections: [
      {
        title: "The Challenge",
        body: "Coursework piles up fast when materials are scattered across notes, recordings, slides, and textbooks. I wanted a tool that turns those resources into a personalized study plan that adapts as students progress — not a static calendar of dates.",
      },
      {
        title: "What I Built",
        body: "AI Study Planner is an AI learning assistant that organizes course materials, builds personalized study schedules, and reinforces learning with auto-generated quizzes. Students upload notes, documents, and lecture audio; the planner structures sessions and adapts recommendations from progress toward exams — responding to how students actually learn.",
      },
      {
        title: "How I Built It",
        body: "Built end to end with Lovable — interface and AI workflow from concept to working prototype. LLMs summarize uploads, organize manageable study sessions, schedule around upcoming exams, and generate quizzes on recently covered material so students spend less time organizing and more time learning.",
      },
      {
        title: "Challenges",
        body: "Making it feel useful beyond summaries meant connecting uploads, schedules, and quizzes into one adaptive loop. Keeping the UI simple while supporting multiple content types and AI features in a single app was another balancing act.",
      },
      {
        title: "Outcome",
        body: "Recognized as a Top Project at BDAA × Lovable. AI Study Planner shows how AI can turn scattered materials into structured plans and targeted practice — supporting study habits instead of replacing them.",
      },
    ],
    bullets: [
      "Upload notes, documents, and lecture recordings",
      "AI summarization into structured, personalized study sessions",
      "Schedules that adapt toward upcoming exams",
      "Practice quizzes to reinforce recently studied material",
    ],
    tech: [
      "Lovable",
      "LLMs",
      "Audio Processing",
      "EdTech",
    ],
    links: [{ label: "Watch demo", href: "https://www.youtube.com/watch?v=QfKHQ1_TzIA&t=7s" }],
  },
  {
    slug: "research-society",
    title: "Research Society",
    date: "Summer 2026",
    badge: "Qwen Cloud Hackathon",
    summary:
      "Five Qwen agents debate a paper’s methods, novelty, and gaps live — disagreements preserved.",
    details: [],
    sections: [
      {
        title: "The Challenge",
        body: "Research is moving faster than ever, and keeping up with new papers is exhausting. AI summaries often feel like a black box — a score with little insight into why a paper is strong or weak. I wanted a review process users could watch: transparent reasoning, competing viewpoints, and genuine disagreement instead of a single opaque answer.",
      },
      {
        title: "What I Built",
        body: "Research Society is a multi-agent platform where five specialized Qwen-powered reviewers analyze a paper, form independent opinions, and debate in real time before reaching a conclusion. An Executive Moderator plus Structure Analyst, Contribution Scout, Methodology Critic, and Literature Reviewer challenge each other, vote on consensus, and keep unresolved disagreements in a dissent ledger — so users see where opinions truly differ, not just a final score.",
      },
      {
        title: "How I Built It",
        body: "Built end to end: Python/FastAPI backend with a custom multi-agent debate framework streaming every round over WebSockets; React frontend for the live chamber, concept maps, and review summaries. Agents run on Qwen via Alibaba Cloud DashScope. Paper ingest supports PDF, arXiv, DOI, URL, and natural-language search across OpenAlex, PubMed, and Crossref. Containerized with Docker and deployed on Alibaba Cloud ECS as one app serving UI, API, and live debate.",
      },
      {
        title: "Challenges",
        body: "The hardest part was getting agents to genuinely disagree instead of collapsing into the same summary. Distinct roles, careful prompts, and a tuned debate flow let real tension develop before consensus. Live sync was another hurdle — WebSocket event ordering keeps every hand-raise, rebuttal, and vote appearing in the right sequence on the frontend.",
      },
      {
        title: "Outcome",
        body: "Built for the Global AI Hackathon Series with Qwen Cloud (Track 3: Agent Society). The hackathon has concluded. Research Society shows how multi-agent orchestration can make AI-assisted paper review more transparent — users watch the debate, understand competing views, and see where experts would reasonably disagree.",
      },
    ],
    stats: [
      { value: "5", label: "Agents" },
      { value: "Live", label: "WebSocket" },
      { value: "ECS", label: "Alibaba Cloud" },
    ],
    bullets: [
      "Upload PDF, arXiv ID, DOI, URL — or search in plain English",
      "Watch the live debate: hand-raising, rebuttals, consensus voting",
      "Concept maps, claim fact-check, and society-vs-solo benchmark",
      "Dissent ledger preserves unresolved disagreements",
    ],
    tech: [
      "Python",
      "FastAPI",
      "React",
      "WebSockets",
      "Qwen Cloud",
      "DashScope",
      "Docker",
      "Alibaba Cloud ECS",
    ],
    links: [
      { label: "Watch demo", href: "https://www.youtube.com/watch?v=_F4XSoR5PrU" },
      { label: "View on GitHub", href: "https://github.com/ricky-he2006/Qwen-Cloud-Hackathon" },
    ],
  },
  {
    slug: "talkora",
    title: "Talkora — Gemini Hackathon",
    date: "Spring 2026",
    summary:
      "Real-time voice language learning powered by the Gemini Live API.",
    details: [],
    sections: [
      {
        title: "The Challenge",
        body: "Most language apps lean on typing and scripted drills, even though real learning happens in conversation. I wanted a voice-first experience where learners practice speaking naturally, get immediate feedback, and build confidence through dialogue — not text prompts.",
      },
      {
        title: "What I Built",
        body: "Talkora is a real-time AI language tutor that turns practice into a live voice call. Learners speak with AI personas that adapt CEFR difficulty (A1–C2) as they improve, while pronunciation and grammar feedback arrive without breaking conversational flow — more like a tutor or language partner than a chat form.",
      },
      {
        title: "How I Built It",
        body: "Built with Google AI Studio and the Gemini Live API. The Web Audio API streams mic audio between browser and Gemini for a low-latency conversation loop. Heavy focus on prompt engineering — system instructions, personas, and adaptive CEFR flows. Leveraged Gemini’s realtime stack to iterate quickly without heavy backend infrastructure.",
      },
      {
        title: "Challenges",
        body: "Balancing natural dialogue with useful learning was hard — feedback had to help without turning the call into a lecture. Latency was another hurdle; the stream needed to feel like a phone call, not a lagged voice assistant.",
      },
      {
        title: "Outcome",
        body: "Talkora shows how realtime multimodal AI and careful prompting can make language practice feel human: adaptive conversations, immediate contextual feedback, and a fast path from idea to interactive voice app.",
      },
    ],
    bullets: [
      "Speak with adaptive AI personas across CEFR levels A1–C2",
      "Live pronunciation and grammar feedback without breaking flow",
      "Low-latency browser ↔ Gemini audio via Web Audio API",
      "Rapid build and iteration in Google AI Studio",
    ],
    tech: [
      "Google AI Studio",
      "Gemini Live API",
      "Web Audio API",
      "Prompt Engineering",
      "Realtime Audio",
    ],
    links: [{ label: "Watch demo", href: "https://www.youtube.com/watch?v=k2EeAYEYLwk" }],
  },
  {
    slug: "buckeyequest",
    title: "BuckeyeQuest",
    date: "Summer 2026",
    badge: "OpenAI Build Week",
    summary:
      "Grade-aware learning days for elementary teachers — student missions feed evidence-based next steps.",
    details: [],
    sections: [
      {
        title: "The Challenge",
        body: "Teachers spend a lot of time planning lessons and monitoring student progress, but those tasks are often split across separate tools. I wanted one platform that connected both — helping teachers create grade-aware plans while giving them meaningful insight into how students are learning in the moment.",
      },
      {
        title: "What I Built",
        body: "BuckeyeQuest is an AI-powered learning platform for Ohio elementary classrooms. Teachers generate grade-level plans, organize a full-term curriculum, manage the roster, and assign interactive missions across reading, math, science, history, and creative activities. Students complete branching missions; the dashboard turns those choices into evidence-based recommendations about who may need support and why. An AI classroom assistant answers progress questions from classroom evidence — and AI can suggest differentiation, but teachers always approve before anything changes.",
      },
      {
        title: "How I Built It",
        body: "Built end to end: React, TypeScript, and Vite as a local-first PWA with offline support; Node.js/Express backend that keeps model credentials off the client. Live AI via NVIDIA Llama 3.3 Nemotron Super 49B v1.5, plus deterministic fallbacks so the demo loop works without a model or network. Student names are anonymized before AI calls. Smoke tests and GitHub Actions verify the teacher-to-student workflow after every change.",
      },
      {
        title: "Challenges",
        body: "Balancing AI assistance with teacher control meant every differentiation suggestion requires approval — educators stay in the driver’s seat. Reliability without live AI was another hurdle; deterministic fallbacks and offline support keep the core classroom experience running when models or connectivity drop out.",
      },
      {
        title: "Outcome",
        body: "Submitted to OpenAI Build Week (Education track). BuckeyeQuest shows how AI can support teachers without replacing judgment — planning, interactive missions, and classroom insights in one loop so instructional decisions stay informed and student-centered.",
      },
    ],
    stats: [
      { value: "5", label: "Subjects" },
      { value: "PWA", label: "Offline-ready" },
      { value: "Gate", label: "Teacher approve" },
    ],
    bullets: [
      "Full-term planner, roster, and “Ask your class” evidence-based assistant",
      "Teacher-assigned missions with branching choices across five subjects",
      "AI differentiation suggestions require teacher approval",
      "QR/class-code join; local-first PWA with offline fallbacks",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "NVIDIA Nemotron",
      "PWA",
      "GitHub Actions",
    ],
    links: [
      { label: "Watch demo", href: "https://www.youtube.com/watch?v=sHcZ9Kp4thA" },
      { label: "View on GitHub", href: "https://github.com/ricky-he2006/BuckeyeQuest" },
    ],
  },
  {
    slug: "sea-phages",
    title: "SEA-PHAGES Research Lab",
    date: "Autumn 2025",
    summary:
      "Isolating bacteriophages from soil for a shared research database.",
    details: [],
    sections: [
      {
        title: "The Research",
        body: "As part of SEA-PHAGES (Science Education Alliance–Phage Hunters Advancing Genomics and Evolutionary Science), I did undergraduate research discovering and characterizing bacteriophages from environmental soil samples. Work followed standardized protocols used across the SEA-PHAGES network — a nationwide effort to expand understanding of phage diversity and evolution.",
      },
      {
        title: "What I Did",
        body: "I isolated, purified, and characterized bacteriophages from environmental samples: collecting and processing soil, running serial dilutions and plaque assays, maintaining aseptic technique, documenting methods and results to scientific standards, and contributing characterized isolates and data to the collaborative SEA-PHAGES program.",
      },
      {
        title: "Challenges",
        body: "Environmental samples demand careful technique to avoid contamination while staying reproducible across purification rounds. Precision from pipetting and plating through documentation was essential for reliable outcomes — along with lab safety and strict adherence to standardized research protocols.",
      },
      {
        title: "Outcome",
        body: "Contributed to the ongoing SEA-PHAGES initiative while building hands-on microbiology experience and stronger experimental, documentation, and scientific communication skills.",
      },
    ],
    bullets: [
      "Soil collection and processing for bacteriophage discovery",
      "Serial dilutions, plaque assays, and phage purification",
      "Aseptic technique and laboratory safety throughout",
      "Documented results and contributed isolates to SEA-PHAGES",
    ],
    tech: [
      "Aseptic Technique",
      "Plaque Assays",
      "Serial Dilutions",
      "Phage Isolation",
      "Scientific Documentation",
      "Microbiology",
    ],
  },
];
