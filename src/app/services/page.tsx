"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES_MEGA_MENU, BRAND_INFO } from "@/data/website-data";
import { Icon } from "@/components/icons";
import { useModals } from "@/context/ModalContext";

export default function ServicesPage() {
  const { openConsultation } = useModals();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredCategories = selectedFilter === "all"
    ? SERVICES_MEGA_MENU
    : selectedFilter === "flagship"
    ? SERVICES_MEGA_MENU.filter((c) => c.flagship)
    : SERVICES_MEGA_MENU.filter((c) => !c.flagship);

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 max-w-[1080px] mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] max-w-full h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(255,120,0,0.22),transparent_70%)] pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-[11px] font-semibold text-orange-400 tracking-wider uppercase">
          <span>OUR SERVICE PORTFOLIO</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Comprehensive Services. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
            Engineered for Modern Business.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          We structure our capabilities across seven core disciplines, with AI &amp; Automation, Software Engineering, and Enterprise Systems serving as our three flagship pillars.
        </p>

        {/* Filter Tabs */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedFilter === "all"
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            All 7 Categories
          </button>
          <button
            onClick={() => setSelectedFilter("flagship")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedFilter === "flagship"
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            Three Flagship Pillars ⭐
          </button>
          <button
            onClick={() => setSelectedFilter("supporting")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedFilter === "supporting"
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            Supporting Capabilities
          </button>
        </div>
      </section>

      {/* Flagship Pillars Announcement Banner */}
      <section className="px-4 sm:px-6 max-w-[1080px] mx-auto mb-12">
        <div className="p-6 sm:p-8 rounded-[28px] bg-gradient-to-r from-[#18120e] via-[#120f14] to-[#09080c] border border-orange-500/30 shadow-[0_0_40px_rgba(249,115,22,0.12)] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold text-orange-400 tracking-wider uppercase block">
              STRATEGIC PRIORITIZATION
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-1">
              Active Market Entry Offerings
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
              While Zeliok covers the full digital transformation lifecycle, our primary market entry focuses on AI Automation for SMEs, AI Chatbots &amp; Assistants, Custom Web/Mobile Software, and CRM Implementation.
            </p>
          </div>
          <button
            onClick={() => openConsultation("Services Strategy Session")}
            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white text-xs font-semibold rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 shrink-0 cursor-pointer"
          >
            Schedule Scoping Call ↗
          </button>
        </div>
      </section>

      {/* 7 Services Detailed Grid */}
      <section className="px-4 sm:px-6 max-w-[1080px] mx-auto space-y-8">
        {filteredCategories.map((cat) => (
          <div
            key={cat.id}
            id={cat.id}
            className={`rounded-[32px] p-8 sm:p-10 transition-all duration-300 scroll-mt-24 ${
              cat.flagship
                ? "bg-gradient-to-b from-[#14121a] via-[#0f0e14] to-[#08070b] border border-orange-500/35 shadow-[0_0_45px_rgba(249,115,22,0.12)]"
                : "bg-[#111116] border border-white/[0.08] shadow-sm hover:border-orange-500/30"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Category Header & Info */}
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-sm font-bold text-orange-400">
                    {cat.num}.
                  </span>
                  <span className="text-xs font-bold text-orange-400 tracking-wider uppercase">
                    PRIORITY: {cat.priority.toUpperCase()}
                  </span>
                  {cat.flagship && (
                    <span className="px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-[9px] font-bold text-orange-300 uppercase tracking-wider">
                      Flagship Pillar
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {cat.fullTitle}
                </h3>

                <p className="text-sm text-zinc-300 mt-2 font-normal leading-relaxed">
                  {cat.tagline}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openConsultation(cat.fullTitle)}
                    className="px-4 py-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_15px_rgba(249,115,22,0.35)] transition-all active:scale-95 cursor-pointer flex items-center gap-1"
                  >
                    <span>Discuss {cat.shortTitle}</span>
                    <Icon name="arrow-up-right" className="w-3.5 h-3.5" />
                  </button>

                  {cat.id === "zelioverse" && (
                    <Link
                      href="/products"
                      className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-full text-xs font-medium border border-white/10 transition-colors"
                    >
                      Explore Zelioverse Products ↗
                    </Link>
                  )}
                </div>
              </div>

              {/* Comprehensive Sub-Services Capabilities Matrix */}
              <div className="lg:w-1/2 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-orange-400" />
                  <span>Sub-Services &amp; Technical Capabilities</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                  {cat.allItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
