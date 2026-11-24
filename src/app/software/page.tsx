"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { useModals } from "@/context/ModalContext";

export default function SoftwarePage() {
  const { openConsultation } = useModals();

  const engineeringTiers = [
    {
      title: "AI-Powered SaaS Products",
      badge: "MULTI-TENANT SAAS",
      desc: "Turn your operational domain knowledge into a recurring SaaS revenue engine with multi-tenancy, Stripe billing, auth, and automated onboarding.",
      stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    },
    {
      title: "Custom LLM & RAG Applications",
      badge: "ENTERPRISE RETRIEVAL",
      desc: "Bespoke internal knowledge platforms and document intelligence applications with strict role-based access control and encrypted vector storage.",
      stack: ["Python / FastAPI", "LlamaIndex", "pgvector", "Docker", "Qdrant"],
    },
    {
      title: "Digital Infrastructure & Cloud",
      badge: "DEVOPS & SCALING",
      desc: "Resilient backend APIs, microservices, containerization, and automated CI/CD pipelines deployed to AWS, GCP, or private clouds.",
      stack: ["Kubernetes", "Docker", "GitHub Actions", "Terraform", "AWS"],
    },
    {
      title: "Modern UI/UX & Design Systems",
      badge: "PRODUCT DESIGN",
      desc: "Pixel-perfect, accessible, and ultra-fast user interfaces designed with Apple-caliber aesthetics, responsive ergonomics, and micro-interactions.",
      stack: ["Figma", "Design Tokens", "React 19", "Tailwind CSS"],
    },
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-14 pb-12 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.14),transparent_70%)] pointer-events-none -z-10" />
        <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase block mb-2">
          SOFTWARE &amp; DIGITAL INFRASTRUCTURE
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Engineered for Intelligence. Built to Scale.
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          AI is only as powerful as the software engineering supporting it. We build robust, scalable applications with zero technical debt and 100% intellectual property transfer.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => openConsultation("Custom Software Architecture")}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
          >
            Start Software Project
          </button>
          <button
            onClick={() => openConsultation("MVP Development Kickoff")}
            className="px-6 py-3 bg-[#14141a] hover:bg-[#1c1c24] text-white rounded-full text-xs font-semibold border border-white/10 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            Scope an MVP (4-8 Weeks)
          </button>
        </div>
      </section>

      {/* Hero Image Showcase */}
      <section className="py-6 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="relative w-full h-64 sm:h-96 rounded-[32px] overflow-hidden shadow-2xl border border-orange-500/20">
          <Image
            src="/images/custom-saas.jpg"
            alt="MacBook Pro AI Dashboard Engineering"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/40 to-transparent flex items-end p-8 sm:p-12 text-white">
            <div>
              <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest block">
                FULL-STACK DIGITAL INFRASTRUCTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold mt-1">
                Zero Technical Debt. 100% Client IP Ownership.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Engineering Tiers */}
      <section className="py-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-8">
          Engineering Capabilities<span className="text-zinc-500">. Modern stack, scalable foundation.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {engineeringTiers.map((tier, i) => (
            <div
              key={i}
              className="bg-[#111116] rounded-[28px] p-8 border border-white/[0.08] shadow-sm hover:border-orange-500/30 hover:shadow-[0_0_35px_rgba(249,115,22,0.15)] transition-all duration-300 flex flex-col justify-between text-white"
            >
              <div>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
                  {tier.badge}
                </span>
                <h3 className="text-xl font-semibold text-white mt-1.5">
                  {tier.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
                  {tier.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {tier.stack.map((st, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 rounded-md bg-[#171722] border border-white/5 text-[10px] font-mono text-zinc-300 font-medium"
                    >
                      {st}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openConsultation(`Software Tier: ${tier.title}`)}
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 hover:underline flex items-center gap-0.5 cursor-pointer transition-colors shrink-0"
                >
                  Discuss
                  <Icon name="chevron-right" className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantees Grid */}
      <section className="py-8 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="bg-[#111116] rounded-[28px] p-8 border border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center shadow-xl">
          <div>
            <div className="text-3xl font-bold text-white tracking-tight">100%</div>
            <div className="text-xs font-semibold text-white mt-1">IP &amp; Code Transfer</div>
            <div className="text-[11px] text-zinc-400 mt-1">You own all repositories, assets, and design files completely upon handover.</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 tracking-tight">SOC-2</div>
            <div className="text-xs font-semibold text-white mt-1">Aligned Security</div>
            <div className="text-[11px] text-zinc-400 mt-1">Encrypted databases, secret managers, and zero data leaks to public training sets.</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400 tracking-tight">4–8 Wks</div>
            <div className="text-xs font-semibold text-white mt-1">Rapid MVP Velocity</div>
            <div className="text-[11px] text-zinc-400 mt-1">Tested production deployments delivered on strict sprint schedules.</div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pt-6 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <div className="bg-gradient-to-b from-[#181824] via-[#101016] to-[#07070a] rounded-[28px] p-8 sm:p-12 border border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.15)] text-white">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Building an AI application or SaaS platform?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mt-2">
            Let&apos;s review your technical requirements and produce a detailed architecture roadmap.
          </p>
          <button
            onClick={() => openConsultation("Custom Software Architecture")}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
          >
            Review Requirements
          </button>
        </div>
      </section>
    </div>
  );
}
