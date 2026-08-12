// Read Later queue — external resources to consume.
//
// This is the seed/source of truth, versioned in the repo. Each item ships with
// a default `status`; a reader's personal progress is layered on top per-browser
// via localStorage (see `src/lib/read-later.ts`), so toggling status on the
// static site never needs a backend.

export type ResourceType = "blog" | "article" | "paper" | "book";

export type ReadingStatus = "to-read" | "reading" | "completed";

export type ReadLaterItem = {
  /** Stable id — used as the localStorage key for status overrides. */
  id: string;
  title: string;
  type: ResourceType;
  /** Optional — books and offline resources may have no canonical link. */
  url?: string;
  /** Author, publication, or channel. */
  by?: string;
  /** One-line reason it's worth the time. */
  note?: string;
  /** Default status; readers can override locally. */
  status: ReadingStatus;
};

export const RESOURCE_TYPES: { key: ResourceType; label: string }[] = [
  { key: "blog", label: "Blogs" },
  { key: "article", label: "Articles" },
  { key: "paper", label: "Research papers" },
  { key: "book", label: "Books" },
];

export const READING_STATUSES: { key: ReadingStatus; label: string }[] = [
  { key: "to-read", label: "To Read" },
  { key: "reading", label: "Reading" },
  { key: "completed", label: "Completed" },
];

export const READ_LATER: ReadLaterItem[] = [
  // ── Blogs to read ────────────────────────────────────────────────────────
  {
    id: "oracle-ai-agent-loop",
    title: "What Is the AI Agent Loop? The Core Architecture Behind Autonomous AI Systems",
    type: "blog",
    url: "https://blogs.oracle.com/developers/what-is-the-ai-agent-loop-the-core-architecture-behind-autonomous-ai-systems",
    by: "Oracle",
    status: "to-read",
  },
  {
    id: "trq212-x-thread",
    title: "Thread by @trq212",
    type: "blog",
    url: "https://x.com/trq212/status/2061907337154367865",
    by: "@trq212 · X",
    status: "to-read",
  },
  {
    id: "baseten-gpt2-to-kimi-k3",
    title: "22,580: GPT-2 to Kimi K3, explained",
    type: "blog",
    url: "https://www.baseten.co/blog/22580-gpt-2-to-kimi-k3-explained/",
    by: "Ali Taha · Baseten",
    note: "Traces LLM architecture from GPT-2 to Kimi K3 — attention, memory, expert routing.",
    status: "to-read",
  },
  {
    id: "waterloo-intern-x-article",
    title: "Article by @waterloo_intern",
    type: "blog",
    url: "https://x.com/waterloo_intern/article/2081762065392541951",
    by: "@waterloo_intern · X",
    status: "to-read",
  },
  {
    id: "codecrafters-project-ideas",
    title: "Programming Project Ideas",
    type: "blog",
    url: "https://codecrafters.io/blog/programming-project-ideas",
    by: "CodeCrafters",
    status: "to-read",
  },
  {
    id: "microsoft-graphrag",
    title: "Microsoft GraphRAG",
    type: "blog",
    url: "https://microsoft.github.io/graphrag/",
    by: "Microsoft",
    status: "to-read",
  },
  {
    id: "kaggle-vibe-coding-sdlc",
    title: "Whitepaper: The New SDLC with Vibe Coding",
    type: "blog",
    url: "https://www.kaggle.com/whitepaper-the-new-SDLC-with-vibe-coding",
    by: "Kaggle",
    status: "to-read",
  },
  {
    id: "beehiiv-newsletter",
    title: "Beehiiv newsletter issue",
    type: "blog",
    url: "https://link.mail.beehiiv.com/ss/c/u001.faQQLGCIJl6XwnK9PwST3HFH7_5YqD3FQHlpHmRku0kbcG3_JuF9ASOrunqV9npghuU11eZGSJ5Wjb3Sp5tlpL9IVkxCJJZk653b1OCuY9keou7_A-YeHF32OG09hRI1lVh6z4RBvLWISHmBTU4qj2llsfLYe0jUhC4sSlEYv0DO4iU9syFv9-5qgkNmeHB_qDcS0voMKiq70Icn06TXXONMtpvFdGmQSjW_JRrNa1XN43deYgWzrcKzXYQ6cwneGQAljHpbXXcYm5DUoYSX4jR2J5DSA6i-CFZpwJNlpp_-xf0VomOeuPqTAX1KnFbIXFzGr7NHjtXmQf0B1zuRFzqC1RFuE5eqprJ4AkpjqEqWNpm9thaCVN-dx7ZtrS6ftbc4OeBWzQVTdXVJrFw49Q/4s6/c9MtHosgTg6_jF9SMAcovw/h19/h001.CYNvTYGbh3_FdkC9c1PIweSi9By1HF5-RblPgsKF20o",
    status: "to-read",
  },

  // ── AI Builder's Handbook · Master Resource Index · Anthropic ─────────────
  {
    id: "anthropic-building-effective-agents",
    title: "Building Effective Agents",
    type: "blog",
    url: "https://www.anthropic.com/engineering/building-effective-agents",
    by: "Anthropic",
    status: "to-read",
  },
  {
    id: "anthropic-context-engineering",
    title: "Effective Context Engineering for AI Agents",
    type: "blog",
    url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
    by: "Anthropic",
    status: "to-read",
  },
  {
    id: "anthropic-multi-agent-research",
    title: "How we built our multi-agent research system",
    type: "blog",
    url: "https://www.anthropic.com/engineering/multi-agent-research-system",
    by: "Anthropic",
    status: "to-read",
  },
  {
    id: "anthropic-mapping-the-mind",
    title: "Mapping the Mind of a Large Language Model",
    type: "blog",
    url: "https://www.anthropic.com/research/mapping-mind-language-model",
    by: "Anthropic",
    status: "to-read",
  },
  {
    id: "anthropic-model-context-protocol",
    title: "Introducing the Model Context Protocol",
    type: "blog",
    url: "https://www.anthropic.com/news/model-context-protocol",
    by: "Anthropic",
    status: "to-read",
  },
  {
    id: "anthropic-contextual-retrieval",
    title: "Contextual Retrieval",
    type: "blog",
    url: "https://www.anthropic.com/engineering/contextual-retrieval",
    by: "Anthropic",
    status: "to-read",
  },
  {
    id: "anthropic-prompt-engineering",
    title: "Prompt Engineering Overview",
    type: "blog",
    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
    by: "Anthropic",
    status: "to-read",
  },
  {
    id: "anthropic-tool-use",
    title: "Tool Use documentation",
    type: "blog",
    url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use",
    by: "Anthropic",
    status: "to-read",
  },
  {
    id: "anthropic-extended-thinking",
    title: "Extended Thinking documentation",
    type: "blog",
    url: "https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking",
    by: "Anthropic",
    status: "to-read",
  },
  {
    id: "anthropic-structured-outputs",
    title: "Structured Outputs documentation",
    type: "blog",
    url: "https://docs.anthropic.com/en/docs/build-with-claude/structured-outputs",
    by: "Anthropic",
    status: "to-read",
  },
  {
    id: "anthropic-citations",
    title: "Citations documentation",
    type: "blog",
    url: "https://docs.anthropic.com/en/docs/build-with-claude/citations",
    by: "Anthropic",
    status: "to-read",
  },
  {
    id: "anthropic-memory-tool",
    title: "Memory Tool documentation",
    type: "blog",
    url: "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/memory-tool",
    by: "Anthropic",
    status: "to-read",
  },
  {
    id: "anthropic-economic-index",
    title: "Economic Index",
    type: "blog",
    url: "https://www.anthropic.com/economic-index",
    by: "Anthropic",
    status: "to-read",
  },

  // ── AI Builder's Handbook · Master Resource Index · OpenAI ────────────────
  {
    id: "openai-learning-to-reason",
    title: "Learning to Reason with LLMs",
    type: "blog",
    url: "https://openai.com/index/learning-to-reason-with-llms/",
    by: "OpenAI",
    status: "to-read",
  },
  {
    id: "openai-why-models-hallucinate",
    title: "Why language models hallucinate",
    type: "blog",
    url: "https://openai.com/index/why-language-models-hallucinate/",
    by: "OpenAI",
    status: "to-read",
  },
  {
    id: "openai-prompt-engineering",
    title: "Prompt Engineering guide",
    type: "blog",
    url: "https://platform.openai.com/docs/guides/prompt-engineering",
    by: "OpenAI",
    status: "to-read",
  },
  {
    id: "openai-function-calling",
    title: "Function Calling guide",
    type: "blog",
    url: "https://platform.openai.com/docs/guides/function-calling",
    by: "OpenAI",
    status: "to-read",
  },
  {
    id: "openai-structured-outputs",
    title: "Structured Outputs guide",
    type: "blog",
    url: "https://platform.openai.com/docs/guides/structured-outputs",
    by: "OpenAI",
    status: "to-read",
  },
  {
    id: "openai-reasoning",
    title: "Reasoning guide",
    type: "blog",
    url: "https://platform.openai.com/docs/guides/reasoning",
    by: "OpenAI",
    status: "to-read",
  },
  {
    id: "openai-embeddings",
    title: "Embeddings guide",
    type: "blog",
    url: "https://platform.openai.com/docs/guides/embeddings",
    by: "OpenAI",
    status: "to-read",
  },
  {
    id: "openai-evals",
    title: "Evals guide",
    type: "blog",
    url: "https://platform.openai.com/docs/guides/evals",
    by: "OpenAI",
    status: "to-read",
  },
  {
    id: "openai-tokenizer",
    title: "Tokenizer tool",
    type: "blog",
    url: "https://platform.openai.com/tokenizer",
    by: "OpenAI",
    status: "to-read",
  },
  {
    id: "openai-agents-sdk",
    title: "Agents SDK documentation",
    type: "blog",
    url: "https://openai.github.io/openai-agents-python/",
    by: "OpenAI",
    status: "to-read",
  },
  {
    id: "openai-customer-stories",
    title: "OpenAI customer stories",
    type: "blog",
    url: "https://openai.com/stories/",
    by: "OpenAI",
    status: "to-read",
  },

  // ── AI Builder's Handbook · Master Resource Index · Google & DeepMind ─────
  {
    id: "google-ai-co-scientist",
    title: "Accelerating scientific breakthroughs with an AI co-scientist",
    type: "blog",
    url: "https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/",
    by: "Google Research",
    status: "to-read",
  },
  {
    id: "google-gemini-docs",
    title: "Gemini models documentation",
    type: "blog",
    url: "https://deepmind.google/technologies/gemini/",
    by: "Google DeepMind",
    status: "to-read",
  },
  {
    id: "google-vertex-grounding",
    title: "Vertex AI Grounding documentation",
    type: "blog",
    url: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    by: "Google Cloud",
    status: "to-read",
  },

  // ── AI Builder's Handbook · Master Resource Index · Meta ──────────────────
  {
    id: "meta-llama-research",
    title: "Llama research",
    type: "blog",
    url: "https://ai.meta.com/llama/",
    by: "Meta",
    status: "to-read",
  },
  {
    id: "meta-llama-guard",
    title: "Llama Guard research",
    type: "blog",
    url: "https://ai.meta.com/research/publications/llama-guard-llm-based-input-output-safeguard-for-human-ai-conversations/",
    by: "Meta",
    status: "to-read",
  },

  // ── Books ─────────────────────────────────────────────────────────────────
  {
    id: "system-design-interview-vol1",
    title: "System Design Interview — An Insider's Guide, Volume 1",
    type: "book",
    by: "Alex Xu",
    status: "to-read",
  },
  {
    id: "system-design-interview-vol2",
    title: "System Design Interview — An Insider's Guide, Volume 2",
    type: "book",
    by: "Alex Xu",
    status: "to-read",
  },
  {
    id: "hands-on-ml",
    title: "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
    type: "book",
    by: "Aurélien Géron",
    status: "to-read",
  },
  {
    id: "ai-engineering",
    title: "AI Engineering",
    type: "book",
    by: "Chip Huyen",
    status: "to-read",
  },
  {
    id: "llm-handbook",
    title: "LLM Handbook",
    type: "book",
    status: "to-read",
  },
  {
    id: "ai-builders-handbook",
    title: "The AI Builder's Handbook",
    type: "book",
    by: "LevelUp Labs",
    status: "to-read",
  },
];
