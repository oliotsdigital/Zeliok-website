"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { useModals } from "@/context/ModalContext";

export default function SolutionsPage() {
  const { openConsultation } = useModals();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("openai");

  const platforms = [
    {
      id: "openai",
      name: "OpenAI",
      category: "Enterprise Models & Assistants",
      description: "GPT-4o, o1 reasoning models, and custom GPT assistants configured for your enterprise workspaces with zero-data-retention compliance.",
      features: ["Custom Team Workspaces", "Centralized API Key Gateways", "Slack & Teams Integrations", "Data Privacy & Governance"],
      badge: "Foundation Models"
    },
    {
      id: "anthropic",
      name: "Anthropic Claude",
      category: "Long-Context & Analytical AI",
      description: "Claude 3.5 Sonnet and Haiku deployed for deep document analysis, technical code generation, and complex logical synthesis with 200k+ context windows.",
      features: ["200k Token Document Processing", "Claude for Work Configuration", "API Middleware Setup", "Artifacts Workflow Integration"],
      badge: "High Reasoning"
    },
    {
      id: "n8n",
      name: "n8n Enterprise",
      category: "Self-Hosted Workflow Automation",
      description: "Self-hosted or cloud-managed n8n instances connecting 400+ applications with custom AI nodes, avoiding high per-task SaaS fees.",
      features: ["Self-Hosted VPC Deployment", "Custom Webhooks & Sub-workflows", "AI Agent Node Orchestration", "Unlimited Workflow Executions"],
      badge: "Workflow Core"
    },
    {
      id: "gemini",
      name: "Google Gemini",
      category: "Multimodal & Workspace AI",
      description: "Gemini 1.5 Pro multimodal processing for analyzing video, audio, and large repository codebases integrated with Google Workspace.",
      features: ["1M+ Token Context Windows", "Google Workspace Integration", "Multimodal Video/Audio Triage", "GCP Vertex AI Architecture"],
      badge: "Multimodal"
    },
    {
      id: "make",
      name: "Make.com & Zapier",
      category: "Rapid Application Integration",
      description: "Fast no-code/low-code integration between CRMs, billing systems, and communication channels with deterministic error fallbacks.",
      features: ["CRM & ERP Synchronizations", "Real-Time Webhook Routing", "Error Handling & Retries", "Low Maintenance Overhead"],
      badge: "No-Code / Low-Code"
    }
  ];

  const currentPlatform = platforms.find((p) => p.id === selectedPlatform) || platforms[0];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-14 pb-12 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.14),transparent_70%)] pointer-events-none -z-10" />
        <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase block mb-2">
          AI SOLUTIONS &amp; CONSULTING
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          We Make AI Work for Your Business.
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          From third-party platform implementation to enterprise AI adoption, we help organizations turn emerging intelligence into operational reality.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => openConsultation("AI Solutions Consultation")}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
          >
            Get an AI Consultation
          </button>
          <button
            onClick={() => openConsultation("AI Readiness Assessment")}
            className="px-6 py-3 bg-[#14141a] hover:bg-[#1c1c24] text-white rounded-full text-xs font-semibold border border-white/10 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            Request AI Readiness Audit
          </button>
        </div>
      </section>

      {/* Featured Platform Setup Showcase */}
      <section className="py-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="bg-[#111116] rounded-[32px] p-8 sm:p-12 border border-white/[0.08] shadow-2xl">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider block">
              COMMERCIAL CAPABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1 tracking-tight">
              Third-Party AI Implementation &amp; Onboarding
            </h2>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              Not every business needs to build models from scratch. Many of the highest-ROI operational wins come from configuring, integrating, and training your team on proven AI platforms.
            </p>
          </div>

          {/* Platform Selector Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar mt-8 pb-2">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPlatform(p.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedPlatform === p.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.35)]"
                    : "bg-[#181822] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Selected Platform Detail Box */}
          <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#0a0a0e] border border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-lg">
              <span className="text-[10px] font-bold tracking-wider text-orange-400 uppercase block">
                {currentPlatform.badge}
              </span>
              <h3 className="text-xl font-semibold text-white mt-1">
                {currentPlatform.name} — {currentPlatform.category}
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {currentPlatform.description}
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentPlatform.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <Icon name="check" className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 text-center md:text-right">
              <button
                onClick={() => openConsultation(`Platform Setup: ${currentPlatform.name}`)}
                className="px-5 py-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
              >
                Deploy {currentPlatform.name}
              </button>
              <span className="text-[10px] text-zinc-500 block mt-2">
                Typical setup: 3 to 7 business days
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of AI Solutions */}
      <section className="py-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-8">
          The Full Adoption Lifecycle<span className="text-zinc-500">. From idea to operational intelligence.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              step: "01",
              title: "Discover & Assess",
              desc: "We analyze your existing operations, evaluate technical feasibility, and isolate high-ROI AI opportunities.",
              deliverable: "AI Readiness & Feasibility Blueprint"
            },
            {
              step: "02",
              title: "Select & Architect",
              desc: "Tool-agnostic evaluation. We select the ideal combination of existing platforms and custom modules.",
              deliverable: "System Architecture & Security Spec"
            },
            {
              step: "03",
              title: "Deploy & Integrate",
              desc: "We configure workspaces, secure API connections, ingest proprietary data, and establish guardrails.",
              deliverable: "Live Production Implementation"
            },
            {
              step: "04",
              title: "Onboard & Scale",
              desc: "We train your workforce, document standard operating procedures, and monitor performance continuously.",
              deliverable: "Team Training & Runbook SOPs"
            }
          ].map((pillar) => (
            <div
              key={pillar.step}
              className="bg-[#111116] rounded-[24px] p-6 border border-white/[0.08] shadow-sm flex flex-col justify-between hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] transition-all"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-orange-400/40">
                  {pillar.step}
                </span>
                <h3 className="text-lg font-semibold text-white mt-3">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-medium text-orange-400">
                {pillar.deliverable}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="pt-8 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="rounded-[28px] bg-gradient-to-b from-[#181824] via-[#101016] to-[#07070a] text-white p-8 sm:p-12 text-center border border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.15)] relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Have an Idea? Need an AI Solution? Let&apos;s Build It.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
              Whether you need help implementing an existing AI platform or architecting a complete intelligent system, our engineering team is ready.
            </p>
            <button
              onClick={() => openConsultation("AI Solutions Kickoff")}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
