"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { useModals } from "@/context/ModalContext";

export default function AgentsPage() {
  const { openConsultation } = useModals();
  const [activeStep, setActiveStep] = useState(0);

  const swarmSteps = [
    {
      role: "User Request",
      agent: "Inbound Event",
      status: "Triggered",
      content: "Client asks: 'Reconcile invoice #9401 with Stripe payout and update QuickBooks.'",
      color: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    },
    {
      role: "Planner Agent",
      agent: "Strategy & Task Decomposition",
      status: "Decomposed 3 subtasks",
      content: "Subtask 1: Query Stripe API for payout ID. Subtask 2: Match line items. Subtask 3: Post adjustment to QuickBooks ledger.",
      color: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    },
    {
      role: "Integration Agent",
      agent: "Tool Execution & API Verification",
      status: "Stripe 200 OK | Net: $4,850.00",
      content: "Found Stripe Transfer `tr_9381k`. Payout matches invoice line items within $0.00 variance.",
      color: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    },
    {
      role: "Verification & Guardrail",
      agent: "Deterministic Safety Gate",
      status: "Approved",
      content: "Transaction under $10,000 threshold. Guardrails passed. Ledger updated in QuickBooks without human intervention.",
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    },
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-14 pb-12 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.14),transparent_70%)] pointer-events-none -z-10" />
        <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase block mb-2">
          AUTONOMOUS INTELLIGENCE
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          AI Agents That Act. Not Just Chat.
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          We engineer goal-directed multi-agent systems that understand instructions, query enterprise databases, execute API tools, and operate under strict governance.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => openConsultation("AI Agent Swarm Architecture")}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
          >
            Design an Agent System
          </button>
          <a
            href="#simulator"
            className="px-6 py-3 bg-[#14141a] hover:bg-[#1c1c24] text-white rounded-full text-xs font-semibold border border-white/10 shadow-sm transition-all active:scale-95"
          >
            Watch Agent Swarm Demo
          </a>
        </div>
      </section>

      {/* Hero Image Showcase */}
      <section className="py-6 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="relative w-full h-64 sm:h-96 rounded-[32px] overflow-hidden shadow-2xl border border-orange-500/20">
          <Image
            src="/images/agents-hero.jpg"
            alt="Autonomous AI Agents Hardware Device"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/40 to-transparent flex items-end p-8 sm:p-12 text-white">
            <div>
              <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest block">
                ZELIOK AUTONOMOUS RUNTIME
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold mt-1">
                Deterministic Guardrails. Sovereign Logic.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Swarm Simulator */}
      <section id="simulator" className="py-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="bg-[#111116] text-white rounded-[32px] p-8 sm:p-12 border border-orange-500/25 shadow-2xl shadow-orange-500/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider block">
                LIVE INTERACTION SIMULATOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
                How an Enterprise Multi-Agent Swarm Operates
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 0))}
                disabled={activeStep === 0}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 text-xs font-mono transition-all cursor-pointer text-zinc-300"
              >
                ← Prev
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < swarmSteps.length - 1 ? prev + 1 : 0))}
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white text-xs font-semibold font-mono shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all cursor-pointer"
              >
                {activeStep === swarmSteps.length - 1 ? "Replay Flow ↺" : "Next Step →"}
              </button>
            </div>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-8">
            {swarmSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-orange-500/10 border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.2)] scale-102"
                      : isPassed
                      ? "bg-white/5 border-white/20 opacity-80"
                      : "bg-white/[0.02] border-white/5 opacity-40 hover:opacity-70"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-400">0{idx + 1}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold ${step.color}`}>
                      {step.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mt-2">
                    {step.role}
                  </h3>
                  <div className="text-[11px] text-zinc-400 mt-0.5 font-medium">
                    {step.agent}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail View for Active Step */}
          <div className="mt-8 p-6 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs">
            <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-white/10 text-[10px]">
              <span>ACTIVE STAGE: {swarmSteps[activeStep].role.toUpperCase()}</span>
              <span className="text-orange-400">STATE: SYNCHRONIZED</span>
            </div>
            <p className="mt-3 text-zinc-200 text-sm leading-relaxed">
              {swarmSteps[activeStep].content}
            </p>
          </div>
        </div>
      </section>

      {/* Core Agent Architecture Capabilities */}
      <section className="py-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-8">
          Agent Capabilities<span className="text-zinc-500">. Beyond simple LLM wrappers.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Swarm Orchestration",
              badge: "MULTI-AGENT",
              desc: "Specialized subagents for planning, research, verification, and code generation executing simultaneously without hallucination.",
              tech: "LangGraph, CrewAI, AutoGen"
            },
            {
              title: "Enterprise RAG & Memory",
              badge: "SEMANTIC SEARCH",
              desc: "Hybrid dense and sparse retrieval over your confidential company documents with cryptographic citation validation.",
              tech: "Qdrant, Milvus, pgvector"
            },
            {
              title: "Tool & Function Calling",
              badge: "REAL ACTIONS",
              desc: "Agents execute authorized actions: issuing SQL queries, updating Salesforce, sending Slack notifications, or generating PDFs.",
              tech: "Structured JSON, OpenAPI, REST"
            }
          ].map((cap, i) => (
            <div
              key={i}
              className="bg-[#111116] rounded-[24px] p-6 border border-white/[0.08] shadow-sm flex flex-col justify-between hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] text-white transition-all"
            >
              <div>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
                  {cap.badge}
                </span>
                <h3 className="text-lg font-semibold text-white mt-1">
                  {cap.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/5 text-[10px] font-mono text-zinc-500">
                Tech: {cap.tech}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pt-6 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <div className="bg-[#111116] rounded-[28px] p-8 sm:p-12 border border-orange-500/30 shadow-[0_0_40px_rgba(249,115,22,0.12)] text-white">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Ready to deploy your first autonomous agent?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mt-2">
            Schedule an architectural scoping session to review your data schemas and automation targets.
          </p>
          <button
            onClick={() => openConsultation("AI Agent Deployment")}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
          >
            Schedule Architecture Session
          </button>
        </div>
      </section>
    </div>
  );
}
