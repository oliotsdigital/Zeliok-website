"use client";

import React from "react";
import Image from "next/image";
import { CATEGORIES, BRAND_INFO } from "@/data/website-data";
import { Icon } from "./icons";

interface HeroHeaderProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  onOpenConsultation: () => void;
}

export function HeroHeader({
  activeCategory,
  onSelectCategory,
  onOpenConsultation,
}: HeroHeaderProps) {
  return (
    <div className="relative pt-8 pb-4">
      {/* Atmospheric Ambient Ember Lighting Effect */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1100px] max-w-full h-[540px] bg-[radial-gradient(ellipse_at_top,rgba(255,125,0,0.28),rgba(255,80,0,0.12)_40%,transparent_75%)] blur-2xl pointer-events-none -z-10" />

      {/* Top Banner Row (Apple Store exact layout with Revamped Positioning) */}
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {/* Main Headline */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-[11px] font-semibold text-orange-400 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
            <span>{BRAND_INFO.tagline}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-semibold tracking-tight text-white leading-[1.14]">
            Technology that transforms <br className="hidden sm:inline" />
            how businesses operate<span className="text-orange-500">.</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 mt-3 max-w-xl leading-relaxed font-normal">
            {BRAND_INFO.description}
          </p>

          {/* Capabilities Badges */}
          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] text-zinc-400">
            <span className="text-zinc-500 font-semibold uppercase tracking-wider text-[10px]">Capabilities:</span>
            {BRAND_INFO.capabilities.map((cap, i) => (
              <React.Fragment key={cap}>
                <span className="text-zinc-300 hover:text-orange-400 transition-colors">{cap}</span>
                {i < BRAND_INFO.capabilities.length - 1 && <span className="text-zinc-600">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right side specialist helper */}
        <div className="flex items-center gap-3 self-start bg-[#121217]/85 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shadow-lg shadow-black/50 shrink-0">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-800 border border-orange-500/30 shrink-0">
            <Image
              src="/images/specialist.jpg"
              alt="Technology Transformation Specialist"
              fill
              sizes="40px"
              className="object-cover object-top"
            />
          </div>
          <div className="text-left text-xs">
            <div className="font-semibold text-white">Need guidance?</div>
            <button
              onClick={onOpenConsultation}
              className="text-orange-400 hover:text-orange-300 flex items-center gap-0.5 font-medium group transition-colors cursor-pointer mt-0.5"
            >
              <span>Ask a Technology Specialist</span>
              <Icon name="chevron-right" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Category Quick-Ribbon (Apple Store icon row with 7 Service Categories) */}
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 mt-10">
        <div className="flex items-center gap-5 sm:gap-7 overflow-x-auto no-scrollbar py-2 justify-start sm:justify-center min-w-max md:min-w-full">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="flex flex-col items-center gap-2 group shrink-0 focus:outline-hidden cursor-pointer"
              >
                <div
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-tr from-orange-500 to-amber-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] scale-105 border border-orange-400/30"
                      : "bg-[#121217] text-zinc-400 hover:bg-[#181822] hover:text-zinc-200 hover:scale-102 border border-white/[0.08] shadow-sm"
                  }`}
                >
                  <Icon name={cat.icon} className={`w-6 h-6 sm:w-7 sm:h-7 ${isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`} />
                  {cat.flagship && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-400 border-2 border-[#070709] shadow-sm" title="Flagship Capability" />
                  )}
                </div>
                <span
                  className={`text-[12px] font-medium tracking-tight whitespace-nowrap transition-colors flex items-center gap-1 ${
                    isActive
                      ? "text-orange-400 font-semibold underline underline-offset-4 decoration-orange-500"
                      : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  <span>{cat.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
