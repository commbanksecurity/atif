"use client";

import {
  Binary,
  Layers,
  Network,
  Award,
  LineChart,
  CheckCircle2,
  Cpu,
  Fingerprint,
  Compass,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Forensic Technical Audit & Crawl Log Ingestion",
    description:
      "Eliminating guesswork through data telemetry. I ingest millions of raw server access logs to uncover how Googlebot crawls your site, pinpointing wasted crawl budget, 4xx/5xx soft error loops, redirect chains, and un-indexed high-value assets.",
    highlights: [
      "Raw server log parsing in Google BigQuery",
      "JavaScript rendering & hydration audit",
      "Canonicalization & faceted parameter rules",
      "Core Web Vitals real-user metric (CrUX) debugging",
    ],
    badge: "Diagnostic Intelligence",
  },
  {
    step: "02",
    title: "Edge Optimization & Headless Architecture",
    description:
      "Modern search bots demand lightning-fast response times. I design and configure edge caching rules (Cloudflare Workers / Vercel Edge), clean URL structures, and high-performance Server-Side Rendering pipelines to secure sub-second Time-to-First-Byte (TTFB).",
    highlights: [
      "Sub-200ms TTFB across international edge networks",
      "Next.js App Router / ISR dynamic hydration",
      "Resource prioritization & critical CSS inline",
      "Zero layout shift (CLS < 0.02)",
    ],
    badge: "Speed & Infrastructure",
  },
  {
    step: "03",
    title: "Reverse-Engineered Intent & Programmatic Graphs",
    description:
      "Mapping search queries to exact purchase intent stages. We build programmatic page engines that scale 100 to 10,000+ localized landing pages, comparison hubs, and glossary matrices with dynamic content components and zero programmatic spam.",
    highlights: [
      "Database-driven programmatic URL generation",
      "Topical authority entity clustering",
      "Semantic HTML & microdata (JSON-LD schema)",
      "Cannibalization resolution across legacy archives",
    ],
    badge: "Scale & Authority",
  },
  {
    step: "04",
    title: "Entity Authority & E-E-A-T Knowledge Graph Alignment",
    description:
      "Preparing your brand for the new era of search engines and generative AI answers. We tie brand entities to Wikidata, Google Knowledge Graph nodes, verifiable author credentials, and high-tier editorial media citations.",
    highlights: [
      "Wikidata & DBpedia entity synchronization",
      "Tier-1 industry benchmark PR hook campaigns",
      "Authoritative schema markup graph connections",
      "Dominance in Google AI Overviews / SGE summaries",
    ],
    badge: "Entity Moats",
  },
  {
    step: "05",
    title: "Revenue Attribution & Algorithmic Moat Building",
    description:
      "Traffic is meaningless without pipeline conversion. I track search queries directly to CRM pipeline deals, closed-won ARR, and lifetime value, providing C-Suite dashboards in Looker Studio and safeguarding rankings against core updates.",
    highlights: [
      "Closed-loop CRM & BigQuery revenue tracking",
      "Continuous algorithmic volatility monitoring",
      "Conversion Rate Optimization (CRO) on top SERP landers",
      "Quarterly executive growth reviews",
    ],
    badge: "Revenue Velocity",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>THE 5-PHASE OPERATING SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How I Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Unshakable Search Moats
            </span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            A repeatable, engineered methodology tested against global algorithm updates.
            No guesswork, no speculative tricks—pure mathematical search authority.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#0b101b] border border-zinc-800/90 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/5 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Left Step Header */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-400 group-hover:scale-105 transition-transform">
                      {s.step}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {s.title}
                  </h3>
                </div>

                {/* Right Description and Highlights */}
                <div className="lg:w-2/3 space-y-4">
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {s.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {s.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center gap-2.5 text-xs text-zinc-300 bg-[#101726] p-2.5 rounded-xl border border-zinc-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
