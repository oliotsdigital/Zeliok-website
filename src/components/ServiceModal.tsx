"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ServiceCardData } from "@/data/website-data";
import { Icon } from "./icons";

interface ServiceModalProps {
  card: ServiceCardData | null;
  onClose: () => void;
  onBookConsultation: (serviceTitle: string) => void;
}

export function ServiceModal({
  card,
  onClose,
  onBookConsultation,
}: ServiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (card) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [card, onClose]);

  if (!card) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar bg-[#0d0d12] rounded-[32px] p-6 sm:p-9 shadow-2xl border border-white/10 text-white animate-in zoom-in-95 duration-200 shadow-orange-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <Icon name="x" className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <span className="text-[11px] font-bold tracking-wider text-orange-400 uppercase block">
            {card.badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mt-1">
            {card.title}
          </h3>
          <p className="text-sm font-medium text-zinc-400 mt-1.5">
            {card.details.tagline}
          </p>
        </div>

        {/* Hero image if present */}
        {card.image && (
          <div className="relative w-full h-44 sm:h-56 mt-5 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 672px) 100vw, 672px"
              className="object-cover"
            />
          </div>
        )}

        {/* Description */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Overview
          </h4>
          <p className="text-sm text-zinc-300 mt-1.5 leading-relaxed">
            {card.details.description}
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="mt-6">
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Capabilities Included
          </h4>
          <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {card.details.capabilities.map((cap, i) => (
              <div
                key={i}
                className="flex items-start gap-2 p-2.5 rounded-xl bg-[#15151c] border border-white/5 text-xs font-medium text-zinc-200"
              >
                <div className="w-4 h-4 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="check" className="w-2.5 h-2.5" />
                </div>
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-6">
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Technology Foundation
          </h4>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {card.details.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-[#15151c] border border-white/5 text-zinc-300 text-xs font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables & Timeline */}
        <div className="mt-6 p-4 rounded-2xl bg-[#14141a] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-zinc-400 font-medium block">Expected Delivery Timeline:</span>
            <span className="text-sm font-semibold text-white font-mono mt-0.5 block">
              {card.details.typicalTimeline}
            </span>
          </div>
          <button
            onClick={() => {
              onClose();
              onBookConsultation(card.title);
            }}
            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white text-xs font-semibold rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 text-center shrink-0 cursor-pointer"
          >
            Discuss This Solution
          </button>
        </div>
      </div>
    </div>
  );
}
