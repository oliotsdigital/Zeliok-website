"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "./icons";

interface SpecialistSectionProps {
  onOpenConsultation: () => void;
  onOpenSolutionFinder: () => void;
}

export function SpecialistSection({
  onOpenConsultation,
  onOpenSolutionFinder,
}: SpecialistSectionProps) {
  return (
    <section className="relative py-12 max-w-[1024px] mx-auto px-4 sm:px-6">
      {/* Ambient Orange Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] max-w-[95vw] h-[320px] bg-[radial-gradient(ellipse_at_center,rgba(255,115,0,0.14),transparent_70%)] blur-3xl pointer-events-none -z-10" />

      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
          Help is here<span className="text-zinc-500">. Whenever and however you need it.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Live Interactive Chat with Specialist */}
        <div
          onClick={onOpenSolutionFinder}
          className="group bg-[#111116] rounded-[28px] p-7 border border-white/[0.08] shadow-sm hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.15)] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 min-h-[380px]"
        >
          <div>
            <span className="text-[11px] font-semibold text-orange-400 tracking-wider uppercase block">
              INSTANT ARCHITECT
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-1 leading-snug">
              Chat with an AI Specialist.
            </h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Answer 3 quick questions about your business challenge and receive an instant architecture proposal.
            </p>
          </div>

          {/* Interactive Chat Mockup Graphic */}
          <div className="my-4 p-3 rounded-2xl bg-[#09090c] border border-white/[0.06] flex flex-col gap-2.5">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white text-[9px] flex items-center justify-center font-bold shrink-0 mt-0.5 shadow-xs">
                Z
              </div>
              <div className="bg-[#181820] p-2 rounded-xl rounded-tl-xs shadow-2xs text-[11px] text-zinc-200 border border-white/10">
                What workflow do you want to automate today?
              </div>
            </div>
            <div className="flex items-start gap-2 justify-end">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-2 rounded-xl rounded-tr-xs shadow-2xs text-[11px]">
                Customer email triage &amp; CRM sync.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
            <span className="text-orange-400 font-medium group-hover:text-orange-300 group-hover:underline flex items-center gap-1 transition-colors">
              Start scoping session
              <Icon name="chevron-right" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              <Icon name="plus" className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Card 2: 1-on-1 Consultation (With Specialist Portrait Image) */}
        <div
          onClick={onOpenConsultation}
          className="group relative bg-[#111116] rounded-[28px] overflow-hidden border border-white/[0.08] shadow-sm hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.15)] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 min-h-[380px]"
        >
          <div className="p-7 relative z-10">
            <span className="text-[11px] font-semibold text-orange-400 tracking-wider uppercase block">
              1-ON-1 ADVISORY
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-1 leading-snug">
              Discuss one-on-one with an AI Specialist.
            </h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Book a dedicated 30-minute technical consultation with our systems architects.
            </p>
          </div>

          {/* Specialist Portrait Image */}
          <div className="relative w-full h-48 mt-auto overflow-hidden">
            <Image
              src="/images/specialist.jpg"
              alt="AI Specialist at Zeliok"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/40 to-transparent" />
          </div>

          <div className="p-5 pt-2 flex items-center justify-between border-t border-white/5 text-xs bg-[#111116] relative z-10">
            <span className="text-orange-400 font-medium group-hover:text-orange-300 group-hover:underline flex items-center gap-1 transition-colors">
              Reserve your slot
              <Icon name="chevron-right" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              <Icon name="plus" className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Card 3: AI Readiness & Security Audit */}
        <div
          onClick={onOpenConsultation}
          className="group bg-[#111116] rounded-[28px] p-7 border border-white/[0.08] shadow-sm hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.15)] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 min-h-[380px]"
        >
          <div>
            <span className="text-[11px] font-semibold text-orange-400 tracking-wider uppercase block">
              OPERATIONAL AUDIT
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-1 leading-snug">
              AI Readiness &amp; ROI Evaluation.
            </h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              A comprehensive review of your tools, data infrastructure, and highest-impact automation targets.
            </p>
          </div>

          {/* Audit Metrics Preview */}
          <div className="my-4 p-4 rounded-2xl bg-[#09090c] border border-white/[0.06] space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-medium">Tool Redundancy Check</span>
              <span className="text-emerald-400 font-semibold font-mono">100% Passed</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[85%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-zinc-400 font-medium">Process Automation Potential</span>
              <span className="text-orange-400 font-semibold font-mono">High (78%)</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-full w-[78%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
            <span className="text-orange-400 font-medium group-hover:text-orange-300 group-hover:underline flex items-center gap-1 transition-colors">
              Request audit review
              <Icon name="chevron-right" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              <Icon name="plus" className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
