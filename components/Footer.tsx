"use client";

import { Mail, ArrowUp, Sparkles, TrendingUp } from "lucide-react";

export default function Footer() {
  const email = "atifhussain12536@gmail.com";
  const name = "Atif Hussain";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060911] border-t border-zinc-900 py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Contact Banner Recall */}
        <div className="flex flex-col items-center justify-center text-center pb-8 border-b border-zinc-900 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-300 font-medium">Get in touch directly with</span>
            <strong className="text-white text-sm">{name}</strong>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900/80 px-4 py-2 rounded-xl border border-zinc-800">
            <Mail className="w-4 h-4 text-emerald-400" />
            <a
              href={`mailto:${email}`}
              className="text-emerald-400 hover:text-emerald-300 font-mono font-medium underline underline-offset-2"
            >
              {email}
            </a>
          </div>
        </div>

        {/* Middle Footer Navigation */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-xs shadow-md">
              AH
            </div>
            <div>
              <span className="font-semibold text-white text-sm">{name}</span>
              <p className="text-[11px] text-zinc-500 font-mono">
                International SEO &amp; Organic Growth Architecture
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
            <a href="#projects" className="hover:text-emerald-400 transition-colors">
              Case Studies
            </a>
            <a href="#impact" className="hover:text-emerald-400 transition-colors">
              SERP Lab
            </a>
            <a href="#methodology" className="hover:text-emerald-400 transition-colors">
              Methodology
            </a>
            <a href="#arsenal" className="hover:text-emerald-400 transition-colors">
              Tech Arsenal
            </a>
            <a href="#testimonials" className="hover:text-emerald-400 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              Inquiry
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-zinc-500">
          <div>
            &copy; 2026 {name}. All rights reserved. Built for international high-growth brands.
          </div>
          <div className="font-mono text-zinc-400">
            Strict White-Hat &bull; Algorithm Resistant &bull; Enterprise Scale
          </div>
        </div>
      </div>
    </footer>
  );
}
