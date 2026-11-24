"use client";

import React from "react";
import { DIFFERENCE_ITEMS } from "@/data/website-data";
import { Icon } from "./icons";

interface DifferenceSectionProps {
  onLearnMore?: (topic: string) => void;
}

export function DifferenceSection({ onLearnMore }: DifferenceSectionProps) {
  const getAccentColor = (id: string) => {
    switch (id) {
      case "diff-ai-first":
        return "text-orange-400 bg-orange-500/10 border border-orange-500/20";
      case "diff-full-lifecycle":
        return "text-amber-400 bg-amber-500/10 border border-amber-500/20";
      case "diff-sovereignty":
        return "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20";
      case "diff-flywheel":
        return "text-orange-300 bg-orange-600/10 border border-orange-600/20";
      default:
        return "text-orange-400 bg-orange-500/10 border border-orange-500/20";
    }
  };

  return (
    <section id="difference" className="relative py-12 max-w-[1024px] mx-auto px-4 sm:px-6">
      {/* Ambient Orange Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[95vw] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(255,110,0,0.13),transparent_70%)] blur-3xl pointer-events-none -z-10" />

      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
          The Zeliok difference<span className="text-zinc-500">. Even more reasons to partner with us.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DIFFERENCE_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => onLearnMore?.(item.title)}
            className="group bg-[#111116] rounded-[24px] p-6 border border-white/[0.08] shadow-sm hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.15)] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
          >
            <div>
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${getAccentColor(
                  item.id
                )}`}
              >
                <Icon name={item.icon} className="w-6 h-6" />
              </div>

              <div className="mt-5">
                <span className="text-[10px] font-bold tracking-wider text-orange-400/80 uppercase block">
                  {item.badge}
                </span>
                <h3 className="text-lg font-semibold text-white tracking-tight mt-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-orange-400 font-medium group-hover:text-orange-300 group-hover:underline flex items-center gap-0.5 transition-colors">
                Learn more
                <Icon name="chevron-right" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 text-zinc-300 group-hover:text-white flex items-center justify-center transition-colors">
                <Icon name="plus" className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
