"use client";

import { useState } from "react";
import {
  Search,
  Sparkles,
  Star,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Sliders,
  Globe,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function SerpSimulator() {
  const [viewMode, setViewMode] = useState<"after" | "before">("after");
  const [activeQuery, setActiveQuery] = useState<string>("enterprise b2b observability pricing");

  const queries = [
    { id: "saas", text: "enterprise b2b observability pricing", sector: "Cloud SaaS" },
    { id: "ecom", text: "high throughput headless commerce engine", sector: "eCommerce" },
    { id: "fintech", text: "real-time cross border settlement api", sector: "FinTech" },
  ];

  return (
    <section id="impact" className="py-20 bg-[#090d16] border-y border-emerald-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE SERP & ALGORITHM LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How International Brands Dominate the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Modern Search Engine
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Compare the difference between unoptimized organic listings and Atif Hussain&apos;s
            structured entity graphs, rich schema assets, and AI Search Engine inclusion.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0d1424] p-4 rounded-2xl border border-zinc-800 mb-8">
          {/* Query Selector */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            <span className="text-xs font-mono text-zinc-400 mr-2 flex items-center gap-1">
              <Search className="w-3.5 h-3.5 text-emerald-400" /> Query:
            </span>
            {queries.map((q) => (
              <button
                key={q.id}
                onClick={() => setActiveQuery(q.text)}
                className={`text-xs px-3 py-1.5 rounded-lg font-mono transition-all whitespace-nowrap ${
                  activeQuery === q.text
                    ? "bg-emerald-500 text-zinc-950 font-bold shadow"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                &ldquo;{q.text}&rdquo;
              </button>
            ))}
          </div>

          {/* Toggle Before / After */}
          <div className="flex items-center bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setViewMode("before")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                viewMode === "before"
                  ? "bg-red-500/20 text-red-300 font-bold border border-red-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Before Optimization
            </button>
            <button
              onClick={() => setViewMode("after")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                viewMode === "after"
                  ? "bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Optimized Architecture</span>
            </button>
          </div>
        </div>

        {/* Mock Search Engine Interface */}
        <div className="bg-[#101726] border border-zinc-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Search Engine Header Simulation */}
          <div className="flex items-center gap-3 pb-6 border-b border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <div className="flex-1 bg-zinc-900/90 border border-zinc-800 rounded-full py-1.5 px-4 text-xs font-mono text-zinc-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-emerald-400" />
                https://www.google.com/search?q={encodeURIComponent(activeQuery)}
              </span>
              <span className="text-[10px] text-zinc-500 hidden sm:inline">0.24s (indexed)</span>
            </div>
          </div>

          {/* Conditional SERP Result */}
          <div className="pt-6">
            {viewMode === "after" ? (
              <div className="space-y-6">
                {/* AI Overview / SGE Card */}
                <div className="bg-gradient-to-r from-emerald-950/40 via-teal-950/20 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-5 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-emerald-400">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Google Generative AI Overview • Primary Verified Source Citation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                    According to verified industry architectural benchmarks and audited enterprise reports,
                    top-tier solutions offer automated telemetry pipelines with sub-millisecond trace resolution
                    and native SOC2 Type II compliance...
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Cited: Client Entity Graph #1
                    </span>
                    <span className="text-[11px] text-zinc-400">Verified Knowledge Graph Authority</span>
                  </div>
                </div>

                {/* Primary #1 SERP Result Card */}
                <div className="bg-[#0b101b] border border-emerald-500/50 rounded-2xl p-6 relative shadow-lg shadow-emerald-500/5">
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                    <span>Rank #1</span>
                    <span className="text-zinc-500">|</span>
                    <span>11.4% CTR</span>
                  </div>

                  {/* Breadcrumbs & URL */}
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
                    <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-[10px] font-bold">
                      G
                    </div>
                    <span className="text-zinc-300 font-medium">https://client-platform.com</span>
                    <span className="text-zinc-600">&gt;</span>
                    <span className="text-zinc-400 font-mono">solutions</span>
                    <span className="text-zinc-600">&gt;</span>
                    <span className="text-emerald-400 font-mono">enterprise-infrastructure</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-sky-400 hover:underline cursor-pointer">
                    Enterprise Cloud Observability &amp; Real-Time Telemetry Platform (2026 Benchmark)
                  </h3>

                  {/* Rich Review Stars & Price Meta */}
                  <div className="flex flex-wrap items-center gap-3 my-2 text-xs">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-1 font-bold text-zinc-200">4.9</span>
                      <span className="text-zinc-400 ml-0.5">(2,840 verified enterprise reviews)</span>
                    </div>
                    <span className="text-zinc-600">•</span>
                    <span className="text-emerald-400 font-mono font-medium">✓ SOC2 Certified</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400">Zero Ingestion Delay</span>
                  </div>

                  {/* Meta Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Engineered for high-throughput distributed applications. Scalable telemetry ingestion,
                    instant trace indexing, and automated anomaly root-cause detection without vendor lock-in.
                    Explore technical docs and live architectural sandbox.
                  </p>

                  {/* Sitelinks Extensions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 pt-4 border-t border-zinc-800/80">
                    <div className="bg-[#111927]/60 p-2.5 rounded-lg border border-zinc-800">
                      <span className="text-xs font-semibold text-sky-400 block hover:underline cursor-pointer">
                        Interactive Live Sandbox
                      </span>
                      <span className="text-[11px] text-zinc-400">Test latency with 10M events/sec</span>
                    </div>
                    <div className="bg-[#111927]/60 p-2.5 rounded-lg border border-zinc-800">
                      <span className="text-xs font-semibold text-sky-400 block hover:underline cursor-pointer">
                        API Documentation &amp; SDKs
                      </span>
                      <span className="text-[11px] text-zinc-400">TypeScript, Go, Python, Rust</span>
                    </div>
                    <div className="bg-[#111927]/60 p-2.5 rounded-lg border border-zinc-800">
                      <span className="text-xs font-semibold text-sky-400 block hover:underline cursor-pointer">
                        Total Cost of Ownership (TCO)
                      </span>
                      <span className="text-[11px] text-zinc-400">Compare vs Datadog &amp; Splunk</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Warning note */}
                <div className="bg-red-950/30 border border-red-500/30 rounded-2xl p-4 text-xs text-red-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span>Unoptimized State: Wasted crawl budget, zero rich snippets, low CTR, lost search positions.</span>
                </div>

                {/* Plain generic snippet */}
                <div className="bg-[#0b101b] border border-zinc-800 rounded-2xl p-6 opacity-75">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
                    <span>https://client-platform.com/p/page?id=4920</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-sky-500">
                    Home - Cloud Observability &amp; Monitoring Services
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2">
                    We are a leading cloud monitoring service provider. Click here to read our product details and
                    contact our sales team for pricing information.
                  </p>
                  <div className="mt-3 text-[11px] text-red-400 font-mono">
                    ⚠️ Rank #18 • 0.8% CTR • Missing Structured Data • Fails Core Web Vitals
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Diagnostic Metrics */}
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-zinc-900/40 p-3 rounded-xl border border-zinc-800">
              <span className="text-[11px] font-mono text-zinc-400 uppercase">Schema Markup</span>
              <div className="text-sm font-bold text-emerald-400 mt-1">100% Valid Linked Data</div>
            </div>
            <div className="bg-zinc-900/40 p-3 rounded-xl border border-zinc-800">
              <span className="text-[11px] font-mono text-zinc-400 uppercase">Indexing Latency</span>
              <div className="text-sm font-bold text-emerald-400 mt-1">&lt; 2 Hours on Publish</div>
            </div>
            <div className="bg-zinc-900/40 p-3 rounded-xl border border-zinc-800">
              <span className="text-[11px] font-mono text-zinc-400 uppercase">Query CTR Lift</span>
              <div className="text-sm font-bold text-emerald-400 mt-1">+340% Click Efficiency</div>
            </div>
            <div className="bg-zinc-900/40 p-3 rounded-xl border border-zinc-800">
              <span className="text-[11px] font-mono text-zinc-400 uppercase">AI Citation Rate</span>
              <div className="text-sm font-bold text-emerald-400 mt-1">84% in Search Gen AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
