// ✏️ Edit everything here — the whole portfolio reads from this file.

export const EMAIL = "ansajavedkhan19@gmail.com";
export const WEB3FORMS_KEY = "73863592-56dd-4765-88e2-d34e28c18804";

export const profile = {
  name: "Ilsa Javed",
  role: "AI Engineer",
  tagline:
    "I build intelligent systems — LLM apps, RAG pipelines, custom AI agents and computer vision — and turn them into things that actually work.",
  linkedin: "https://www.linkedin.com/in/ilsajaved-ai/",
  github: "https://github.com/ilsa12",
  location: "Islamabad, Pakistan",
};

export const about = {
  paragraphs: [
    "I'm an AI Engineer from Islamabad who enjoys taking ideas from a notebook to a working system. My work spans machine learning, deep learning, generative AI and computer vision, and lately I've been building LLM-powered applications with RAG and custom agents.",
    "I like projects where models don't just predict — they reason, use tools and improve over time.",
  ],
  education: {
    school: "NUML University",
    degree: "Bachelors in Artificial Intelligence",
    years: "2023 — 2027",
    place: "Islamabad, Pakistan",
  },
};

export const skills = [
  { group: "Core AI", items: ["Machine Learning", "Deep Learning", "Generative AI", "Computer Vision"] },
  { group: "LLMs & Agents", items: ["LLMs", "RAG", "Custom AI Agents", "LangChain", "LangGraph", "LlamaIndex"] },
  { group: "Build", items: ["Web Development"] },
];

export const experience: {
  role: string;
  company: string;
  meta: string;
  summary: string;
  links: { label: string; href: string }[];
}[] = [
  {
    role: "AI Intern",
    company: "CodeAlpha",
    meta: "Remote · 2025",
    summary: "Built hands-on AI projects across computer vision, NLP and translation.",
    links: [],
  },
  {
    role: "AI Intern",
    company: "Quantum Synergy Solutions",
    meta: "Internship",
    summary: "Worked on applied AI tasks as part of the engineering team.",
    links: [],
  },
  {
    role: "Creative Production Assistant",
    company: "Zynth Digital",
    meta: "2024",
    summary: "Supported creative production work and digital content workflows.",
    links: [],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  visual: "agent" | "sentiment" | "health" | "detect" | "chat" | "translate" | "palette";
  glow: string;
};

export const projects: Project[] = [
  {
    title: "Self-Learning Agent System",
    description:
      "An AI agent system designed to learn and improve from its own runs — combining tools, memory and feedback loops so it gets better over time.",
    tags: ["AI Agents", "LLMs", "Python"],
    href: "https://github.com/ilsa12/self-learning-agent-system",
    glow: "rgba(99,102,241,0.35)",
    visual: "agent",
  },
  {
    title: "Sentiment Feedback Classifier",
    description:
      "A machine-learning classifier that reads customer feedback and labels its sentiment, turning raw text into insight you can act on.",
    tags: ["NLP", "Machine Learning", "Python"],
    href: "https://github.com/ilsa12/sentiment_feedback_classifier",
    glow: "rgba(236,72,153,0.32)",
    visual: "sentiment",
  },
  {
    title: "AI Healthcare Assistant",
    description:
      "An AI assistant that answers health-related questions in a friendly, conversational way, built on modern LLM tooling.",
    tags: ["Generative AI", "LLMs", "Python"],
    href: "https://github.com/ilsa12/AI-Healthcare-Assistant",
    glow: "rgba(34,211,238,0.32)",
    visual: "health",
  },
  {
    title: "Object Detection",
    description:
      "A computer vision project that detects and labels objects in images and video, drawing boxes around everything it recognises.",
    tags: ["Computer Vision", "Deep Learning", "Python"],
    href: "https://github.com/ilsa12/CodeAlpha_ObjectDetection",
    glow: "rgba(250,204,21,0.30)",
    visual: "detect",
  },
  {
    title: "Chatbot FAQ",
    description:
      "A chatbot that understands questions and replies with the right answer from a set of frequently asked questions.",
    tags: ["NLP", "Chatbot", "Python"],
    href: "https://github.com/ilsa12/CodeAlpha_ChatbotFAQ",
    glow: "rgba(52,211,153,0.30)",
    visual: "chat",
  },
  {
    title: "Language Translation Tool",
    description:
      "A tool that translates text from one language to another, making communication across languages quick and simple.",
    tags: ["NLP", "Translation", "Python"],
    href: "https://github.com/ilsa12/CodeAlpha_LanguageTranslationTool",
    glow: "rgba(248,113,113,0.30)",
    visual: "translate",
  },
  {
    title: "Fusion Palette",
    description:
      "A colour palette project that blends and generates harmonious colour combinations for design work.",
    tags: ["Design", "Colour", "Web"],
    href: "https://github.com/ilsa12/Fusion-palette",
    glow: "rgba(168,85,247,0.32)",
    visual: "palette",
  },
];