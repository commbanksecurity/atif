"use client";

import { Star, Quote, ShieldCheck, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "Atif completely transformed how our executive team looks at organic search. Instead of vanity rankings, he directly tied technical SEO to our B2B pipeline. Within 5 months of re-architecting our programmatic comparison hubs, our organic inbound demos more than tripled. He operates with total transparency and engineering-grade rigor.",
    author: "Elena Rostova",
    role: "VP of Growth & Marketing",
    company: "Global Cloud Observability Platform",
    metric: "+380% Organic Pipeline ARR",
  },
  {
    quote:
      "Our eCommerce headless replatforming had created a crawl nightmare with over 1 million orphaned URLs. Atif stepped in, diagnosed the root cause in our server access logs, and rolled out edge canonical rules that fixed indexing in weeks. Our non-brand category revenue is up 412% year-over-year. Easily the highest ROI consultant we've engaged.",
    author: "Marcus Vance",
    role: "Chief Commercial Officer",
    company: "International Multi-Brand Retailer",
    metric: "+412% Organic eCommerce Revenue",
  },
  {
    quote:
      "In the heavily guarded FinTech space, outranking traditional global banks seemed nearly impossible. Atif built an airtight E-E-A-T entity foundation and structured our quarterly liquidity reports into a link-generating flywheel. We now hold the #1 SERP position for 28 enterprise settlement terms and Google AI Overviews cite us as primary authority.",
    author: "Dr. Sarah Chen",
    role: "Head of Product Strategy",
    company: "Institutional Digital Settlement Protocol",
    metric: "Rank #1 for Core FinTech SERPs",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EXECUTIVE ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Trusted by International{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Growth Executives
            </span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Unfiltered feedback from leadership teams who scaled organic search with Atif Hussain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#0b101b] border border-zinc-800/80 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:shadow-2xl hover:shadow-emerald-500/5 relative"
            >
              <div>
                {/* Rating Stars & Metric Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {t.metric}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-emerald-500/30 mb-3" />
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80">
                <div className="font-bold text-white text-sm">{t.author}</div>
                <div className="text-xs text-emerald-400 font-medium">{t.role}</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
