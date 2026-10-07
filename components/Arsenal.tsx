"use client";

import {
  Code2,
  Database,
  BarChart4,
  Cpu,
  Layers,
  Terminal,
  Server,
  Sparkles,
  Share2,
} from "lucide-react";

const categories = [
  {
    title: "Technical Crawlers & Log Forensics",
    icon: Terminal,
    description: "Deep crawl rendering, JavaScript DOM inspection, and high-volume server log parsing.",
    tools: [
      { name: "Screaming Frog SEO Spider", role: "Custom RegEx & XPath extraction" },
      { name: "Google BigQuery", role: "Massive access log ingestion & query analysis" },
      { name: "Sitebulb Enterprise", role: "Algorithmic audit visualization & crawl maps" },
      { name: "Lumar (DeepCrawl)", role: "Enterprise cloud crawl automation & regression" },
    ],
  },
  {
    title: "SERP Intelligence & Market Share",
    icon: BarChart4,
    description: "Tracking granular SERP volatility, featured snippets, and international competitor movements.",
    tools: [
      { name: "Ahrefs Enterprise", role: "Backlink graphs, content gap analysis, keyword metrics" },
      { name: "SEMrush Sensor", role: "Algorithm update tracking & non-brand category index" },
      { name: "Google Search Console API", role: "Direct query-level click and impression pipeline" },
      { name: "AccuRanker", role: "Real-time international rank monitoring across 40+ regions" },
    ],
  },
  {
    title: "Semantic Entities & AI Search Optimization",
    icon: Sparkles,
    description: "Aligning web entities with Google Knowledge Graph and generative AI models.",
    tools: [
      { name: "Schema.org Linked Data", role: "Advanced nested JSON-LD graph generation" },
      { name: "Clearscope & SurferSEO", role: "NLP semantic coverage & intent mapping" },
      { name: "Python NLP Vector Scrapers", role: "Semantic similarity & internal link scoring" },
      { name: "Wikidata Entity Mapping", role: "Brand node verification & topical anchoring" },
    ],
  },
  {
    title: "Edge & Headless Web Performance",
    icon: Server,
    description: "Zero-latency page speed, dynamic edge canonicalization, and Core Web Vitals dominance.",
    tools: [
      { name: "Next.js App Router & ISR", role: "Server-side rendering with incremental revalidation" },
      { name: "Cloudflare Workers", role: "Edge-level 301 redirects, security headers, parameter stripping" },
      { name: "Lighthouse CI & CrUX", role: "Automated Core Web Vitals regression gating" },
      { name: "Chrome DevTools MCP", role: "Render-blocking resource elimination & hydration profiling" },
    ],
  },
];

export default function Arsenal() {
  return (
    <section id="arsenal" className="py-20 md:py-28 bg-[#090d16] border-y border-emerald-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>GROWTH STACK & INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              SEO Arsenal
            </span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Backed by enterprise-grade data tools, algorithmic scrapers, and headless edge architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-[#0c121e] border border-zinc-800/90 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-8 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-3">
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#111927]/60 border border-zinc-800/80 gap-1"
                    >
                      <span className="text-sm font-semibold text-zinc-200 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {tool.name}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono sm:text-right">
                        {tool.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
