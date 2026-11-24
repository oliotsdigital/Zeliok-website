"use client";

import React from "react";
import { CURATED_OFFERINGS } from "@/data/website-data";
import { Icon } from "./icons";

interface CuratedSolutionsProps {
  onSelectSolution: (title: string) => void;
}

export function CuratedSolutions({ onSelectSolution }: CuratedSolutionsProps) {
  return (
    <section id="curated" className="relative py-12 max-w-[1024px] mx-auto px-4 sm:px-6">
      {/* Ambient Orange Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] max-w-[95vw] h-[320px] bg-[radial-gradient(ellipse_at_center,rgba(255,115,0,0.14),transparent_70%)] blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6 gap-2">
        <div>
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-[10px] font-bold text-orange-400 uppercase tracking-wider">
            PRIMARY MARKET ENTRY
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Targeted Deployments<span className="text-zinc-500">. Turnkey solutions built for immediate impact.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Proven packages designed to give modern businesses clear reasons to partner with Zeliok.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CURATED_OFFERINGS.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectSolution(item.title)}
            className="group bg-[#111116] rounded-[24px] p-6 border border-white/[0.08] shadow-sm hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.15)] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
          >
            <div>
              {/* Icon badge */}
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] group-hover:bg-orange-500/10 text-zinc-300 group-hover:text-orange-400 border border-white/5 flex items-center justify-center transition-colors">
                <Icon name={item.icon} className="w-6 h-6" />
              </div>

              <div className="mt-5">
                <span className="text-[10px] font-bold tracking-wider text-orange-400 uppercase block">
                  {item.tag}
                </span>
                <h3 className="text-lg font-semibold text-white tracking-tight mt-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="font-mono text-[11px] text-zinc-500 font-medium">
                {item.timeframe}
              </span>
              <span className="text-orange-400 font-medium group-hover:text-orange-300 group-hover:underline flex items-center gap-0.5 transition-colors">
                Configure
                <Icon name="chevron-right" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
