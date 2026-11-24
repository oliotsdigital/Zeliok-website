"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "./icons";

interface ZelioverseSectionProps {
  onLearnMoreProduct: (productName: string) => void;
}

export function ZelioverseSection({ onLearnMoreProduct }: ZelioverseSectionProps) {
  const products = [
    {
      id: "zelioforms",
      name: "ZelioForms",
      badge: "CONVERSATIONAL FORMS",
      tagline: "Forms that adapt and think.",
      description: "Intelligent dynamic data capture that auto-adapts questions based on user responses and triggers live backend workflows.",
      accent: "text-orange-400",
    },
    {
      id: "zeliosite",
      name: "ZelioSite",
      badge: "AI WEB BUILDER",
      tagline: "High-performance digital publishing.",
      description: "Create, localize, and publish ultra-fast responsive digital experiences optimized for conversion and Core Web Vitals.",
      accent: "text-amber-400",
    },
    {
      id: "zeliocms",
      name: "ZelioCMS",
      badge: "HEADLESS CONTENT API",
      tagline: "Structured content for any surface.",
      description: "A flexible headless CMS engine that distributes omnichannel content across web apps, mobile apps, and agentic workflows.",
      accent: "text-orange-500",
    },
    {
      id: "zeliocard",
      name: "ZelioCard",
      badge: "ONE-PAGE SITES & PROFILES",
      tagline: "Ultra-fast one-page sites for anything.",
      description: "Lightweight, responsive one-page site and digital card builder with zero code bloat, custom domains, and sub-second loading.",
      accent: "text-amber-500",
    },
  ];

  return (
    <section id="zelioverse" className="relative py-12 max-w-[1024px] mx-auto px-4 sm:px-6">
      {/* Ambient Orange Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] max-w-[95vw] h-[360px] bg-[radial-gradient(ellipse_at_center,rgba(255,120,0,0.16),transparent_70%)] blur-3xl pointer-events-none -z-10" />

      <div className="mb-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            The Zelioverse Experience<span className="text-zinc-500">. Beyond services.</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Born from real operational challenges. Engineered into scalable proprietary platforms.
          </p>
        </div>
      </div>

      {/* Featured Master Showcase Card */}
      <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#181822] via-[#101017] to-[#07070a] text-white p-8 sm:p-12 mb-6 border border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.15)]">
        <div className="max-w-md relative z-10">
          <span className="text-[11px] font-semibold text-orange-400 tracking-wider uppercase block">
            PROPRIETARY PLATFORM ECOSYSTEM
          </span>
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-2 text-white">
            Zelioverse.
          </h3>
          <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
            Our Services-to-SaaS flywheel transforms proven business workflows into reusable, powerful software platforms that streamline your digital presence.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onLearnMoreProduct("Zelioverse")}
              className="px-5 py-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
            >
              Explore the Ecosystem
            </button>
            <span className="text-xs text-zinc-400">Early Access Now Available</span>
          </div>
        </div>

        {/* Multi-device preview image */}
        <div className="relative w-full h-56 sm:h-72 mt-8 md:mt-0 md:absolute md:right-0 md:bottom-0 md:w-1/2 md:h-full overflow-hidden">
          <Image
            src="/images/zelioverse.jpg"
            alt="Zelioverse Multi-Device Suite"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain md:object-right-bottom"
          />
        </div>
      </div>

      {/* 4 Individual Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => onLearnMoreProduct(p.name)}
            className="group bg-[#111116] rounded-[24px] p-6 border border-white/[0.08] shadow-sm hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.15)] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 text-white"
          >
            <div>
              <span className={`text-[10px] font-bold tracking-wider uppercase block ${p.accent}`}>
                {p.badge}
              </span>
              <h4 className="text-xl font-semibold text-white tracking-tight mt-1">
                {p.name}
              </h4>
              <p className="text-sm font-medium text-zinc-300 mt-1">
                {p.tagline}
              </p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {p.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-orange-400 font-medium group-hover:text-orange-300 group-hover:underline flex items-center gap-0.5 transition-colors">
                Join Early Beta
                <Icon name="chevron-right" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 text-zinc-300 group-hover:text-white flex items-center justify-center transition-colors">
                <Icon name="arrow-up-right" className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


