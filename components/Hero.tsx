"use client";

import { useState } from "react";
import {
  TrendingUp,
  Search,
  Globe2,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Mail,
  Sparkles,
  BarChart3,
  Layers,
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "atifhussain12536@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background radial glows and grid pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-500/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Contact Callout Badge */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium shadow-inner shadow-emerald-500/10 mb-4 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Senior Search Engine Optimization & Growth Specialist</span>
            <span className="text-zinc-500">|</span>
            <span className="text-zinc-200">Global Portfolio</span>
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl px-5 py-3 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-xs">Direct Contact:</span>
              <span className="font-semibold text-white text-sm tracking-wide">Atif Hussain</span>
            </div>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <a
                href={`mailto:${email}`}
                className="font-mono text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-2"
              >
                {email}
              </a>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        {/* Hero Title and Value Proposition */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Transforming Search Traffic into{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent">
              Predictable Revenue
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            I partner with high-growth international tech companies, global SaaS platforms, and enterprise
            eCommerce brands to dominate competitive search engines through programmatic architecture, technical
            precision, and data-backed content graphs.
          </p>

          {/* Quick CTA Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all shadow-lg shadow-emerald-500/25 hover:scale-[1.02]"
            >
              <span>Explore Verified Client Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${email}?subject=SEO%20Growth%20Audit%20Request`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 transition-all hover:border-emerald-500/40"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Request Strategic Audit</span>
            </a>
          </div>
        </div>

        {/* Live Metrics Showcase Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-6">
          <div className="p-5 rounded-2xl bg-[#0d131f]/90 border border-emerald-900/30 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Avg. Revenue Lift</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              +380<span className="text-emerald-400">%</span>
            </div>
            <p className="mt-1 text-xs text-zinc-400">Across enterprise retainers in 6 months</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-60" />
          </div>

          <div className="p-5 rounded-2xl bg-[#0d131f]/90 border border-emerald-900/30 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Monthly Impressions</span>
              <Search className="w-4 h-4 text-teal-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              18.4<span className="text-teal-400">M+</span>
            </div>
            <p className="mt-1 text-xs text-zinc-400">High-intent organic impressions generated</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-60" />
          </div>

          <div className="p-5 rounded-2xl bg-[#0d131f]/90 border border-emerald-900/30 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Top-3 Positions</span>
              <ShieldCheck className="w-4 h-4 text-lime-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              620<span className="text-lime-400">+</span>
            </div>
            <p className="mt-1 text-xs text-zinc-400">Commercial intent keywords ranked #1-3</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-500 to-emerald-500 opacity-60" />
          </div>

          <div className="p-5 rounded-2xl bg-[#0d131f]/90 border border-emerald-900/30 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Core Web Vitals</span>
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              99<span className="text-emerald-400">/100</span>
            </div>
            <p className="mt-1 text-xs text-zinc-400">Technical crawlability & render score</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-lime-500 opacity-60" />
          </div>
        </div>

        {/* Client Focus Strip */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase font-mono tracking-widest text-zinc-500 mb-4">
            Trusted by Leadership Across Global Industry Verticals
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-medium text-zinc-400">
            <span className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Enterprise B2B SaaS
            </span>
            <span className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" /> Headless eCommerce & Marketplaces
            </span>
            <span className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400" /> Global FinTech & Digital Assets
            </span>
            <span className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Cloud Productivity Platforms
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
