"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { useModals } from "@/context/ModalContext";

export default function ZelioSitePage() {
  const { openConsultation } = useModals();

  return (
    <div className="pb-24">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] max-w-[95vw] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.18),transparent_70%)] pointer-events-none -z-10" />

      {/* Breadcrumb */}
      <div className="pt-8 max-w-[1024px] mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Link href="/products" className="hover:text-orange-400 transition-colors">
            Zelioverse Suite
          </Link>
          <span className="text-zinc-600">/</span>
          <span className="text-orange-400 font-medium">ZelioSite</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-8 pb-12 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-semibold tracking-wider uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          ZELIOVERSE PLATFORM ENGINE · AI WEB BUILDER
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          ZelioSite<span className="text-orange-500">.</span>
          <br />
          <span className="text-zinc-300 font-normal text-3xl sm:text-5xl lg:text-6xl block mt-2">
            High-performance web publishing without code bloat.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed font-normal">
          ZelioSite empowers marketing and product teams to assemble, customize, and publish blazing-fast web experiences with sub-second page loads, automated SEO, and native multi-language localization.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => openConsultation("ZelioSite Beta Access")}
            className="px-7 py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_25px_rgba(249,115,22,0.45)] transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>Request ZelioSite Access</span>
            <Icon name="arrow-up-right" className="w-4 h-4" />
          </button>
          <Link
            href="/products"
            className="px-6 py-3.5 bg-[#14141a] hover:bg-[#1c1c24] text-white rounded-full text-xs font-semibold border border-white/10 shadow-sm transition-all active:scale-95"
          >
            Compare Product Suite
          </Link>
        </div>
      </section>

      {/* Architecture Showcase */}
      <section className="py-10 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="bg-[#101016] rounded-[32px] p-6 sm:p-10 border border-orange-500/25 shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider block">
                EDGE SSR &amp; VISUAL CANVAS
              </span>
              <h3 className="text-xl font-semibold text-white tracking-tight mt-0.5">
                Zero-Latency Global Distribution
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400">Anycast CDN Active</span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Visual Block Builder",
                desc: "Intuitive drag-and-drop visual block canvas that outputs pure, high-performance React and Next.js code."
              },
              {
                title: "Automatic Image & Asset Optimization",
                desc: "Images converted to AVIF/WebP on the fly and served from 300+ global edge nodes with instant cache purging."
              },
              {
                title: "Automated SEO & Structured Data",
                desc: "JSON-LD schema markup, canonical links, OpenGraph metadata, and XML sitemaps generated deterministically."
              }
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#161622] border border-white/5">
                <h4 className="text-sm font-semibold text-white">{f.title}</h4>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
