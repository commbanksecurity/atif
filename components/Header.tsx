"use client";

import { useState } from "react";
import { Mail, Check, Copy, Sparkles, TrendingUp, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [copied, setCopied] = useState(false);
  const email = "atifhussain12536@gmail.com";
  const name = "Atif Hussain";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#090d16]/85 border-b border-emerald-950/40 transition-all duration-300">
      {/* Top Center Spotlight Contact Bar */}
      <div className="w-full bg-gradient-to-r from-emerald-950/40 via-emerald-900/30 to-emerald-950/40 border-b border-emerald-500/15 py-2.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm">
          <div className="flex items-center gap-2 font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-300">SEO Growth Strategist:</span>
            <strong className="text-white tracking-wide font-semibold text-sm">{name}</strong>
          </div>

          <div className="hidden sm:block text-zinc-600">•</div>

          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <a
              href={`mailto:${email}`}
              className="text-zinc-200 hover:text-emerald-300 transition-colors underline decoration-emerald-500/40 underline-offset-4 font-mono font-medium"
            >
              {email}
            </a>
            <button
              onClick={handleCopy}
              title="Copy Email"
              className="ml-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-zinc-400 bg-zinc-900/70 px-2.5 py-0.5 rounded-full border border-zinc-800">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Open for Strategic Retainers</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo / Identity */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/20 ring-1 ring-white/20 group-hover:scale-105 transition-transform">
            AH
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold text-white tracking-tight flex items-center gap-1.5">
              Atif Hussain
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                SEO
              </span>
            </span>
            <span className="text-[11px] text-zinc-400 font-mono tracking-wider">
              ORGANIC GROWTH ARCHITECT
            </span>
          </div>
        </a>

        {/* Navigation Anchors */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#projects" className="hover:text-emerald-400 transition-colors">
            International Projects
          </a>
          <a href="#impact" className="hover:text-emerald-400 transition-colors">
            Live Impact & SERP Lab
          </a>
          <a href="#methodology" className="hover:text-emerald-400 transition-colors">
            Growth Methodology
          </a>
          <a href="#arsenal" className="hover:text-emerald-400 transition-colors">
            Tech Arsenal
          </a>
          <a href="#testimonials" className="hover:text-emerald-400 transition-colors">
            Client Reviews
          </a>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${email}?subject=SEO%20Growth%20Inquiry%20-%20Strategic%20Project`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all group"
          >
            <span>Let&apos;s Talk Growth</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
}
