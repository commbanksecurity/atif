"use client";

import { useState } from "react";
import {
  TrendingUp,
  ExternalLink,
  ChevronRight,
  Database,
  Search,
  Zap,
  CheckCircle2,
  Code2,
  BarChart,
  Layers,
  Activity,
  ArrowRight,
  Filter,
  Shield,
  FileSpreadsheet,
} from "lucide-react";

interface Project {
  id: string;
  category: string;
  clientType: string;
  title: string;
  subtitle: string;
  impactHighlight: string;
  timeline: string;
  challenge: string;
  strategy: string[];
  results: {
    label: string;
    value: string;
    subtext: string;
  }[];
  techStack: string[];
  deliverables: string[];
  serpMetrics: {
    kwRank: string;
    impressions: string;
    ctr: string;
  };
}

const projects: Project[] = [
  {
    id: "aurametrics",
    category: "B2B SaaS",
    clientType: "Global Cloud Observability & Analytics Platform",
    title: "AuraMetrics",
    subtitle: "Programmatic Architecture & Knowledge Graph Dominance",
    impactHighlight: "+380% Organic Pipeline ARR ($2.8M Equivalent)",
    timeline: "6-Month Strategic Retainer",
    challenge:
      "Stuck at 8,500 monthly search visits with 94% relying solely on branded terms. The company was spending $65,000/month on PPC search ads to acquire product signups. High JavaScript rendering overhead prevented Googlebot from indexing deep product feature pages, and zero presence existed within modern AI search engines.",
    strategy: [
      "Designed and deployed a programmatic 3,800-page comparison engine & glossary matrix using Next.js Server-Side Rendering and ISR caching.",
      "Engineered comprehensive JSON-LD Semantic Graphs linking SoftwareApplication, TechnicalArticle, and AggregateRating entities.",
      "Built 5 dedicated topical authority clusters (Microservices Tracing, Metric Alerts, Log Streaming, Telemetry Pipelines, Incident Management).",
      "Eliminated JavaScript crawl bottlenecks by optimizing server-rendered HTML delivery, dropping hydration time below 0.8s.",
    ],
    results: [
      { label: "Organic Monthly Visits", value: "142,000+", subtext: "Up from 8,500/mo (+1,570%)" },
      { label: "Top-3 SERP Positions", value: "240+", subtext: "High-intent transactional keywords" },
      { label: "Pipeline Value Generated", value: "$2.8M+", subtext: "Verified organic inbound attribution" },
      { label: "PPC Ad Spend Saved", value: "64%", subtext: "Displaced high-cost Google Ads" },
    ],
    techStack: [
      "Google Search Console API",
      "Ahrefs Enterprise",
      "Next.js ISR",
      "Schema.org Linked Data",
      "Screaming Frog Custom Extraction",
    ],
    deliverables: [
      "Programmatic URL Architecture Matrix",
      "Automated JSON-LD Schema Pipeline",
      "Topical Entity Knowledge Graph",
      "Crawl Budget Log Diagnostic Report",
    ],
    serpMetrics: {
      kwRank: "Rank #1 for 'Distributed Log Tracing Architecture'",
      impressions: "4.8M Search Impressions",
      ctr: "9.2% Average Position 1-3 CTR",
    },
  },
  {
    id: "veloce",
    category: "eCommerce",
    clientType: "Enterprise Headless Multi-Brand Online Retailer",
    title: "Veloce Commerce",
    subtitle: "Faceted Navigation Architecture & Crawl Budget Overhaul",
    impactHighlight: "+412% Non-Brand Organic Revenue YoY",
    timeline: "8-Month Architecture Overhaul",
    challenge:
      "Over 1.2 Million URLs indexed in Google due to runaway faceted filters (color, size, price, sorting combinations). Googlebot was consuming 82% of its crawl budget on empty parameter combinations, while new seasonal inventory remained uncrawled for weeks. Mobile Core Web Vitals failed across all category templates (LCP 5.2s, INP 420ms).",
    strategy: [
      "Re-engineered client-side pushState faceted navigation with smart canonicalization, exposing only high-search-demand attribute combinations to crawlers.",
      "Pruned 620,000 bloat URLs with status 410 Gone and implemented Cloudflare Workers edge rules for instant query sanitization.",
      "Restructured breadcrumb schema hierarchy across 1,800 product taxonomy hubs to pass contextual link equity seamlessly.",
      "Optimized headless storefront critical CSS and image aspect-ratio reserves, skyrocketing Google PageSpeed from 38 to 98.",
    ],
    results: [
      { label: "Non-Brand Organic Revenue", value: "+412%", subtext: "YoY organic checkout volume" },
      { label: "Crawl Efficiency Lift", value: "91%", subtext: "Wasted crawl requests eliminated" },
      { label: "Indexation Latency", value: "< 4 Hours", subtext: "Down from 3-4 weeks for new drops" },
      { label: "Mobile PageSpeed", value: "98/100", subtext: "Passing all Core Web Vitals" },
    ],
    techStack: [
      "Cloudflare Workers",
      "SEMrush Sensor",
      "BigQuery Log Analysis",
      "Lighthouse CI",
      "DeepCrawl / Lumar",
    ],
    deliverables: [
      "Edge-Level Parameter Indexation Rules",
      "Server Log Ingestion BigQuery Pipeline",
      "Headless Storefront SEO Specification",
      "Automated Product Schema Engine",
    ],
    serpMetrics: {
      kwRank: "Rank #1 for 310+ High-Volume Category Terms",
      impressions: "8.2M Peak Holiday Impressions",
      ctr: "11.4% Primary Category CTR",
    },
  },
  {
    id: "nexusfin",
    category: "FinTech",
    clientType: "Global Cross-Border Financial Protocol & Treasury Infrastructure",
    title: "NexusFin",
    subtitle: "High-Authority Entity SEO & E-E-A-T Architecture",
    impactHighlight: "+285% Enterprise Demo Requests & #1 Positions",
    timeline: "5-Month Accelerated Program",
    challenge:
      "High barriers to entry competing against century-old international banking giants and established financial publishers. The brand lacked recognizable topical authority for high-converting keywords such as 'cross-border treasury API', 'real-time liquidity settlement', and 'automated FX hedging rails'.",
    strategy: [
      "Built an airtight E-E-A-T architecture: verified author entity profiles linked to Wikidata/DBpedia entities, regulatory accreditations, and academic citations.",
      "Developed an authoritative primary data research strategy publishing the 'Global Treasury Liquidity Index', driving 380+ editorial backlinks from prestigious international business publications.",
      "Engineered reverse entity mapping across Google Knowledge Graph nodes, earning direct inclusion in Google SGE & AI Overviews.",
      "Optimized technical site architecture for multi-region hreflang signals without language-targeting cannibalization.",
    ],
    results: [
      { label: "Top-3 SERP Positions", value: "64+", subtext: "Direct institutional conversion keywords" },
      { label: "Inbound Enterprise Demos", value: "+285%", subtext: "Qualified VP / CFO inquiry pipeline" },
      { label: "Tier-1 Referring Domains", value: "380+", subtext: "High DR editorial backlinks earned" },
      { label: "Google AI Overview Inclusions", value: "88%", subtext: "Featured source in generative answers" },
    ],
    techStack: [
      "Clearscope",
      "Ahrefs Enterprise",
      "Python NLP & Entity Extractors",
      "Google Search Console API",
      "Google BigQuery",
    ],
    deliverables: [
      "E-E-A-T Content Governance Playbook",
      "Proprietary Benchmark Research Report",
      "Entity & SameAs Graph Schemas",
      "Multi-Currency International SERP Blueprint",
    ],
    serpMetrics: {
      kwRank: "Rank #1 for 'Institutional Real-Time Settlement API'",
      impressions: "2.6M Search Impressions",
      ctr: "7.8% High-Intent Enterprise CTR",
    },
  },
  {
    id: "omnicloud",
    category: "Cloud Tech",
    clientType: "Global High-Velocity Cloud Collaboration Platform",
    title: "OmniCloud",
    subtitle: "Core Algorithm Recovery & Intent Graph Re-engineering",
    impactHighlight: "100% Recovery + 190% Traffic Expansion",
    timeline: "4-Month Turnaround",
    challenge:
      "Severely impacted by a major Google Core Update, losing 46% of organic organic visibility within 30 days due to content decay, mismatched search intent across product guides, and cannibalized search queries across 1,200 integration subpages.",
    strategy: [
      "Conducted forensic query analysis on 2,400 ranking drops, separating true intent mismatch from link equity degradation.",
      "Consolidated 450 thin, redundant landing pages into 65 comprehensive flagship guides equipped with interactive workflow calculators and video schema.",
      "Implemented a vector semantic internal linking framework ensuring context-driven PageRank distribution to high-converting product pages.",
      "Overhauled metadata architecture using dynamic click-through rate optimization formulas, boosting average SERP CTR by 3.4 percentage points.",
    ],
    results: [
      { label: "Core Update Recovery", value: "+190%", subtext: "Surpassed previous all-time visibility high" },
      { label: "Active Search Users", value: "850,000+", subtext: "Monthly qualified workspace visitors" },
      { label: "Organic Free-to-Paid CR", value: "3.8%", subtext: "Up from 1.2% prior to restructuring" },
      { label: "Cannibalized URLs Resolved", value: "100%", subtext: "Zero internal query competition" },
    ],
    techStack: [
      "Screaming Frog Custom Extraction",
      "Python Semantic Search Embeddings",
      "Looker Studio BI",
      "SurferSEO",
      "GSC BigQuery Export",
    ],
    deliverables: [
      "Core Algorithm Impact Forensic Audit",
      "Semantic Topic Clustering Graph",
      "Internal Link Vector Weighting Model",
      "Intent-Mapped Content Consolidation Guide",
    ],
    serpMetrics: {
      kwRank: "Rank #1 for 180+ Cloud Integration Terms",
      impressions: "5.4M Monthly Impressions",
      ctr: "8.6% Average Top-3 CTR",
    },
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProjectId, setSelectedProjectId] = useState<string>("aurametrics");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeTab.toLowerCase()));

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              VERIFIED CLIENT CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              International Case Studies:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Measurable Impact
              </span>
            </h2>
            <p className="mt-3 text-base text-zinc-400 max-w-2xl">
              Real architectural implementations, algorithmic turnarounds, and revenue-focused organic scaling
              for international enterprises. No vanity metrics—pure business velocity.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {["all", "SaaS", "eCommerce", "FinTech", "Cloud"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-emerald-500 text-zinc-950 font-semibold shadow-md shadow-emerald-500/20"
                    : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
                }`}
              >
                {tab === "all" ? "All Sectors" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Selection Tabs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {filteredProjects.map((p) => {
            const isSelected = selectedProject.id === p.id;
            return (
              <div
                key={p.id}
                onClick={() => setSelectedProjectId(p.id)}
                className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative group ${
                  isSelected
                    ? "bg-[#0f172a] border-emerald-500 shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-500/40"
                    : "bg-[#0b101b] border-zinc-800/80 hover:border-emerald-500/40 hover:bg-[#0e1422]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {p.category}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-mono">{p.timeline}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-1 mt-1">{p.clientType}</p>

                <div className="mt-4 pt-3 border-t border-zinc-800/70 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {p.results[0].value} {p.results[0].label}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-emerald-400 translate-x-1" : "text-zinc-600"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Case Study Card */}
        <div className="bg-[#0c121e] border border-emerald-950/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-zinc-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-zinc-400">•</span>
                <span className="text-xs font-medium text-zinc-300">{selectedProject.clientType}</span>
                <span className="text-xs text-zinc-400">•</span>
                <span className="text-xs font-mono text-zinc-400">{selectedProject.timeline}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {selectedProject.title}:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  {selectedProject.subtitle}
                </span>
              </h3>
              <p className="mt-2 text-sm sm:text-base font-semibold text-emerald-400 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Key Outcome: {selectedProject.impactHighlight}
              </p>
            </div>

            <div className="bg-[#111927] border border-emerald-500/20 rounded-2xl p-4 min-w-[280px]">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                SERP Benchmark Snapshot
              </span>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-500">Target SERP:</span>
                  <span className="text-emerald-400 font-semibold">{selectedProject.serpMetrics.kwRank}</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-500">Impressions:</span>
                  <span className="text-white">{selectedProject.serpMetrics.impressions}</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-500">Click-Through:</span>
                  <span className="text-teal-400">{selectedProject.serpMetrics.ctr}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-zinc-800">
            {selectedProject.results.map((res, idx) => (
              <div key={idx} className="bg-[#111927]/60 rounded-xl p-4 border border-zinc-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                  {res.value}
                </div>
                <div className="text-xs font-semibold text-zinc-300 mt-1">{res.label}</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">{res.subtext}</div>
              </div>
            ))}
          </div>

          {/* Challenge and Strategy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            {/* The Challenge */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-xs border border-red-500/20">
                  01
                </div>
                <h4 className="text-lg font-bold text-white">The Pre-Audit Challenge</h4>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed bg-[#111827]/50 p-5 rounded-2xl border border-zinc-800/80">
                {selectedProject.challenge}
              </p>

              <div className="pt-2">
                <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Strategic Deliverables Provided
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 text-xs text-zinc-300 bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategy & Execution */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/20">
                  02
                </div>
                <h4 className="text-lg font-bold text-white">Architectural Solution Executed</h4>
              </div>

              <div className="space-y-3">
                {selectedProject.strategy.map((item, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-start gap-3 bg-[#111827]/50 p-3.5 rounded-xl border border-zinc-800/80"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-normal">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Tooling & Infrastructure Stack
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-emerald-950/30 text-emerald-300 border border-emerald-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
