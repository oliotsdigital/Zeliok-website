"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { useModals } from "@/context/ModalContext";

export default function AboutPage() {
  const { openConsultation } = useModals();

  const brandPillars = [
    {
      letter: "Z",
      word: "Zero-to-One",
      desc: "Taking concepts from whiteboard friction to fully deployed, operational technology systems."
    },
    {
      letter: "E",
      word: "Ecosystem",
      desc: "Designing an integrated ecosystem to help businesses move from traditional operations to intelligent environments."
    },
    {
      letter: "L",
      word: "Logic",
      desc: "Architecting structured, deterministic, and scalable software pipelines with bulletproof reliability."
    },
    {
      letter: "I",
      word: "Intelligence",
      desc: "Operationalizing modern artificial intelligence into products, workflows, and automated decision-making."
    },
    {
      letter: "OK",
      word: "Operational Knowledge",
      desc: "Capturing enterprise tribal knowledge and converting it into automated, scalable digital assets."
    }
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-14 pb-12 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.14),transparent_70%)] pointer-events-none -z-10" />
        <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase block mb-2">
          OUR MISSION &amp; PHILOSOPHY
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          From Zero to Intelligent.
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          ZELIOK is an India-headquartered, global-first AI and software infrastructure company helping businesses transform the way they operate, automate, and scale.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => openConsultation("About Zeliok Inquiry")}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
          >
            Partner With Us
          </button>
        </div>
      </section>

      {/* What Zeliok Stands For */}
      <section className="py-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="bg-[#111116] rounded-[32px] p-8 sm:p-12 border border-white/[0.08] shadow-2xl">
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
            THE IDENTITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
            What ZELIOK Stands For
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl leading-relaxed">
            More than a software agency. An integrated ecosystem engineered to move companies from traditional, fragmented operations to intelligent environments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            {brandPillars.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#161622] border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-bold font-mono text-orange-400">
                    {p.letter}
                  </span>
                  <h3 className="text-base font-semibold text-white mt-2">
                    {p.word}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission & Philosophy */}
      <section className="py-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#111116] rounded-[28px] p-8 border border-white/[0.08] shadow-sm hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] text-white transition-all">
            <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
              OUR VISION
            </span>
            <h3 className="text-xl font-semibold text-white mt-1">
              Global Operational Intelligence
            </h3>
            <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
              To build a globally recognized ecosystem of intelligent technologies, AI-powered services, and software infrastructure that enables organizations to operate smarter, innovate faster, and scale without complexity.
            </p>
          </div>

          <div className="bg-[#111116] rounded-[28px] p-8 border border-white/[0.08] shadow-sm hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] text-white transition-all">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
              OUR MISSION
            </span>
            <h3 className="text-xl font-semibold text-white mt-1">
              Practical Technology Access
            </h3>
            <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
              To make advanced technology accessible, practical, and operational for businesses of every size by combining AI engineering, automation, and software innovation into solutions that create measurable value.
            </p>
          </div>

          <div className="bg-[#111116] rounded-[28px] p-8 border border-white/[0.08] shadow-sm hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] text-white transition-all">
            <span className="text-[10px] font-bold text-orange-300 uppercase tracking-wider block">
              OUR PHILOSOPHY
            </span>
            <h3 className="text-xl font-semibold text-white mt-1">
              Bridging the AI Divide
            </h3>
            <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
              Software shouldn&apos;t just respond to commands. It must understand business context, connect information, automate complex decisions, and continuously learn how work gets done.
            </p>
          </div>
        </div>
      </section>

      {/* Specialist Team Preview */}
      <section className="py-6 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="rounded-[32px] bg-gradient-to-b from-[#181824] via-[#101016] to-[#07070a] text-white p-8 sm:p-12 border border-orange-500/30 flex flex-col md:flex-row items-center gap-8 shadow-[0_0_50px_rgba(249,115,22,0.15)]">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shrink-0 border-2 border-orange-500/40 shadow-[0_0_25px_rgba(249,115,22,0.3)]">
            <Image
              src="/images/specialist.jpg"
              alt="Zeliok AI Solutions Specialist"
              fill
              sizes="(max-width: 640px) 144px, 176px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider block">
              HUMAN EXPERTISE + INTELLIGENT SYSTEMS
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-1">
              We don&apos;t believe businesses should figure out AI alone.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-2.5 leading-relaxed">
              Our multidisciplinary engineering and consulting teams guide you at every step: evaluating models, auditing security, building custom agents, and training your team for long-term independence.
            </p>
            <button
              onClick={() => openConsultation("1-on-1 Specialist Advisory")}
              className="mt-6 px-6 py-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
            >
              Meet With an Architect
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
