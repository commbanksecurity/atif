"use client";

import { useState } from "react";
import {
  Mail,
  Check,
  Copy,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Send,
  MessageSquare,
  FileCheck,
} from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [serviceType, setServiceType] = useState("Full Technical & Organic Growth Audit");
  const [customNote, setCustomNote] = useState("");
  const [clientDomain, setClientDomain] = useState("");

  const email = "atifhussain12536@gmail.com";
  const name = "Atif Hussain";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    `SEO Growth Inquiry: ${serviceType} [${clientDomain || "Global Enterprise"}]`
  )}&body=${encodeURIComponent(
    `Hi Atif,\n\nI would like to discuss an SEO engagement for our platform.\n\nProject Scope: ${serviceType}\nPlatform Domain: ${clientDomain}\n\nProject Details:\n${customNote}\n\nLooking forward to speaking.`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#090d16] border-t border-emerald-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#0f172a] to-[#090e18] border border-emerald-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 blur-[120px] pointer-events-none" />

          {/* Top Center Direct Contact Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DIRECT INQUIRY &amp; STRATEGY ENGAGEMENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Organic Revenue?
              </span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-xl mx-auto">
              Partner directly with <strong>{name}</strong> for strategic technical SEO, programmatic scaling, and
              uncompromising search engine dominance.
            </p>

            {/* Top Center Highlight Card */}
            <div className="mt-6 inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-[#111927] border border-emerald-500/30 px-6 py-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  AH
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white">{name}</div>
                  <div className="text-xs text-zinc-400">Principal SEO Growth Strategist</div>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-zinc-800" />

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-sm text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Project Inquiry Builder */}
          <div className="bg-[#0b101b]/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Select Your Engagement Scope
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Full Technical & Organic Growth Audit",
                  "Programmatic SEO & Knowledge Graph Build",
                  "Core Algorithm Volatility Recovery",
                  "Quarterly Strategic Advisory Retainer",
                ].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setServiceType(s)}
                    className={`text-left text-xs p-3 rounded-xl border transition-all ${
                      serviceType === s
                        ? "bg-emerald-500/15 border-emerald-500 text-emerald-300 font-semibold shadow-inner"
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          serviceType === s ? "bg-emerald-400" : "bg-zinc-600"
                        }`}
                      />
                      {s}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Company / Platform Domain
                </label>
                <input
                  type="text"
                  placeholder="e.g. app.globalplatform.com"
                  value={clientDomain}
                  onChange={(e) => setClientDomain(e.target.value)}
                  className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Estimated Monthly Traffic
                </label>
                <select className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors">
                  <option value="50k-250k">50,000 - 250,000 monthly sessions</option>
                  <option value="250k-1m">250,000 - 1,000,000 monthly sessions</option>
                  <option value="1m+">1,000,000+ monthly sessions (Enterprise)</option>
                  <option value="stealth">Stealth Launch / Early Stage</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Project Specifics or Current Bottlenecks (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your current search bottlenecks, crawl challenges, or growth goals..."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl p-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={mailtoLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-xl shadow-emerald-500/25 transition-all group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Launch Email Inquiry directly to {name}</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Typical response time: &lt; 12 hours</span>
              </div>
            </div>
          </div>

          {/* Guarantees & NDA Footer */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Direct Senior Engagement (No junior handoffs)
            </span>
            <span className="flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              Standard Mutual Non-Disclosure Agreement (NDA) supported
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              100% White-Hat Algorithmic Integrity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
