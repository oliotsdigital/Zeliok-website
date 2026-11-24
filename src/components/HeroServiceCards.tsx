"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ServiceCardData } from "@/data/website-data";
import { Icon } from "./icons";
import {
  VisualAgents,
  VisualPlatforms,
  VisualCustomSaaS,
  VisualWorkflows,
  VisualInfrastructure,
  VisualZelioverse,
  VisualEnterprise,
  VisualConsulting,
  VisualGrowth,
} from "./card-visuals";

interface HeroServiceCardsProps {
  cards: ServiceCardData[];
  onSelectCard: (card: ServiceCardData) => void;
}

export function HeroServiceCards({ cards, onSelectCard }: HeroServiceCardsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const renderVisual = (card: ServiceCardData) => {
    if (card.image) {
      return (
        <div className="relative w-full h-52 sm:h-60 mt-4 rounded-2xl overflow-hidden shadow-inner group-hover:scale-102 transition-transform duration-500">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            priority={card.id === "ai-agents"}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      );
    }

    switch (card.visualType) {
      case "agents":
        return <VisualAgents />;
      case "platforms":
        return <VisualPlatforms />;
      case "saas":
        return <VisualCustomSaaS />;
      case "workflows":
        return <VisualWorkflows />;
      case "infrastructure":
        return <VisualInfrastructure />;
      case "zelioverse":
        return <VisualZelioverse />;
      case "enterprise":
        return <VisualEnterprise />;
      case "consulting":
        return <VisualConsulting />;
      case "growth":
        return <VisualGrowth />;
      default:
        return null;
    }
  };

  return (
    <section id="services" className="relative pt-8 pb-12 overflow-hidden">
      {/* Atmospheric Orange Gradient Horizon behind Service Cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1250px] max-w-[95vw] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(255,120,0,0.19),rgba(255,75,0,0.06)_50%,transparent_75%)] blur-3xl pointer-events-none -z-10" />

      {/* Section Header (Apple Store exact style) */}
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 flex items-baseline justify-between mb-5">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
          The latest<span className="text-zinc-500">. Take a look at what&apos;s new.</span>
        </h2>

        {/* Desktop Carousel Arrows */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full bg-[#121217] hover:bg-[#1a1a24] text-zinc-300 hover:text-white flex items-center justify-center border border-white/10 shadow-sm transition-all active:scale-95 cursor-pointer"
            aria-label="Scroll left"
          >
            <Icon name="chevron-left" className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full bg-[#121217] hover:bg-[#1a1a24] text-zinc-300 hover:text-white flex items-center justify-center border border-white/10 shadow-sm transition-all active:scale-95 cursor-pointer"
            aria-label="Scroll right"
          >
            <Icon name="chevron-right" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Centered Horizontal Cards Carousel */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth pb-6 pt-1"
      >
        <div className="flex gap-5 min-w-full w-max justify-center mx-auto px-4 sm:px-6">
          {cards.map((card) => {
            const isFeatured =
              card.theme === "dark" ||
              card.theme === "space-black";

            return (
              <div
                key={card.id}
                onClick={() => onSelectCard(card)}
                className={`group relative shrink-0 w-[310px] sm:w-[380px] h-[480px] sm:h-[510px] rounded-[28px] p-7 flex flex-col justify-between cursor-pointer transition-all duration-400 select-none bg-gradient-to-b from-[#14141a] via-[#101015] to-[#0a0a0e] text-white shadow-xl hover:-translate-y-1 ${
                  isFeatured
                    ? "border border-orange-500/30 hover:border-orange-500/60 shadow-[0_0_35px_rgba(249,115,22,0.1)] hover:shadow-[0_0_45px_rgba(249,115,22,0.25)]"
                    : "border border-white/[0.08] hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.18)]"
                }`}
              >
                {/* Card Header Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold tracking-wider uppercase block text-orange-400">
                      {card.badge}
                    </span>
                    {card.flagship && (
                      <span className="px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-[9px] font-bold text-orange-300 tracking-wider uppercase shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                        Flagship
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-[26px] font-semibold leading-tight tracking-tight mt-1.5 text-white">
                    {card.title}
                  </h3>

                  <p className="text-sm mt-2 font-normal leading-relaxed line-clamp-2 text-zinc-400">
                    {card.subtitle}
                  </p>
                </div>

                {/* Visual Graphic Asset */}
                <div className="my-auto py-2">
                  {renderVisual(card)}
                </div>

                {/* Card Footer Action */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-medium text-orange-400 group-hover:text-orange-300 group-hover:underline transition-colors">
                    Explore Solution
                  </span>

                  {/* Circular Plus Action Button (Apple Store signature with Glowing Orange Ember) */}
                  <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md bg-gradient-to-tr from-orange-500 via-amber-500 to-orange-600 text-white shadow-orange-500/30 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]">
                    <Icon name="plus" className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
