"use client";

import React, { useState } from "react";
import { Icon } from "./icons";

interface SolutionFinderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSolution: (solutionName: string) => void;
}

export function SolutionFinderDrawer({
  isOpen,
  onClose,
  onSelectSolution,
}: SolutionFinderDrawerProps) {
  const [challenge, setChallenge] = useState("agents");
  const [industry, setIndustry] = useState("tech");

  if (!isOpen) return null;

  const solutionsMap: Record<
    string,
    {
      title: string;
      category: string;
      summary: string;
      stack: string[];
      timeline: string;
      roiImpact: string;
    }
  > = {
    agents: {
      title: "Autonomous Multi-Agent Architecture",
      category: "AI AGENTS & SWARMS",
      summary:
        "An autonomous multi-agent swarm connected to your internal tools via structured function calling and RAG semantic search.",
      stack: ["Claude 3.5 Sonnet", "LlamaIndex", "Qdrant Vector DB", "PostgreSQL"],
      timeline: "3 to 4 Weeks",
      roiImpact: "Reduces manual triage and repetitive execution by up to 85%",
    },
    automation: {
      title: "Intelligent Workflow Orchestration Hub",
      category: "PROCESS AUTOMATION",
      summary:
        "Event-driven self-healing automation pipelines with intelligent document parsing and cross-system CRM/ERP synchronization.",
      stack: ["n8n Enterprise", "Documind OCR", "FastAPI", "Webhooks"],
      timeline: "1 to 2 Weeks",
      roiImpact: "Cuts invoice processing time from 48 hours to under 30 seconds",
    },
    platform: {
      title: "Enterprise AI Platform Rollout & Onboarding",
      category: "PLATFORM SETUP",
      summary:
        "Turnkey setup of OpenAI Enterprise / Claude workspaces with role-based access, prompt engineering guidelines, and team training.",
      stack: ["OpenAI Workspace", "Anthropic Claude", "Slack Integration", "Notion AI"],
      timeline: "3 to 5 Days",
      roiImpact: "Empowers 100% of employees with verified corporate AI safely",
    },
    saas: {
      title: "Custom AI SaaS & Web Application",
      category: "CUSTOM SOFTWARE",
      summary:
        "Full-stack proprietary software engineering tailored to your operational intellectual property, featuring custom vector databases and real-time APIs.",
      stack: ["Next.js 16", "TypeScript", "FastAPI", "pgvector", "AWS/Docker"],
      timeline: "4 to 8 Weeks",
      roiImpact: "Transforms cost-center operations into defensible SaaS equity",
    },
    infrastructure: {
      title: "Private VPC / On-Premise LLM Infrastructure",
      category: "CLOUD & SECURITY",
      summary:
        "Isolated GPU inference clusters running open-source models with zero external internet telemetry and SOC-2 data governance.",
      stack: ["vLLM", "Llama 3.3", "DeepSeek", "Kubernetes", "Private VPC"],
      timeline: "2 to 3 Weeks",
      roiImpact: "100% data sovereignty and 60% lower inference costs at scale",
    },
  };

  const currentSolution = solutionsMap[challenge];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto no-scrollbar bg-[#0d0d12] rounded-[32px] p-6 sm:p-9 shadow-2xl border border-white/10 text-white animate-in zoom-in-95 duration-200 shadow-orange-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close solution architect"
        >
          <Icon name="x" className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="pr-8">
          <span className="text-[11px] font-bold tracking-wider text-orange-400 uppercase block">
            INTERACTIVE SOLUTION ARCHITECT
          </span>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mt-1">
            Find the right AI architecture.
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Select your operational goal to view the recommended Zeliok engineering blueprint.
          </p>
        </div>

        {/* Step 1: Challenge selector */}
        <div className="mt-6">
          <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
            1. What is your primary objective?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { id: "agents", label: "Autonomous AI Agents", desc: "Multi-agent tool calling & RAG" },
              { id: "automation", label: "Workflow Automation", desc: "Process invoices & sync tools" },
              { id: "platform", label: "Deploy Existing Tools", desc: "Roll out OpenAI/Claude/n8n" },
              { id: "saas", label: "Build Custom AI App", desc: "Proprietary software or SaaS" },
              { id: "infrastructure", label: "Private Host Models", desc: "Zero data leakage on VPC" },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setChallenge(opt.id)}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                  challenge === opt.id
                    ? "bg-gradient-to-r from-orange-500/20 to-amber-500/10 text-white border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.15)]"
                    : "bg-[#15151c] text-zinc-300 border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                <div className={`text-xs font-semibold ${challenge === opt.id ? "text-orange-400" : "text-white"}`}>{opt.label}</div>
                <div className={`text-[10px] mt-0.5 ${challenge === opt.id ? "text-orange-200/80" : "text-zinc-500"}`}>
                  {opt.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Industry selector */}
        <div className="mt-5">
          <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
            2. Select your industry domain
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "tech", label: "Tech & SaaS" },
              { id: "health", label: "Healthcare & Med" },
              { id: "finance", label: "Finance & Accounting" },
              { id: "legal", label: "Legal & Professional" },
              { id: "ecommerce", label: "E-Commerce & Retail" },
            ].map((ind) => (
              <button
                key={ind.id}
                onClick={() => setIndustry(ind.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  industry === ind.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.35)]"
                    : "bg-[#15151c] text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5"
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blueprint Recommendation Box */}
        <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#181520] to-[#100e15] border border-orange-500/20 shadow-lg shadow-black/40">
          <span className="text-[10px] font-bold tracking-wider text-orange-400 uppercase block">
            {currentSolution.category}
          </span>
          <h4 className="text-lg font-semibold text-white mt-0.5">
            {currentSolution.title}
          </h4>
          <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
            {currentSolution.summary}
          </p>

          <div className="mt-3.5 pt-3 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-zinc-400 text-[10px] uppercase font-semibold block">Recommended Stack</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {currentSolution.stack.map((s, i) => (
                  <span key={i} className="px-1.5 py-0.5 rounded bg-black/40 text-[10px] font-mono text-zinc-300 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-zinc-400 text-[10px] uppercase font-semibold block">Delivery Velocity</span>
              <span className="font-semibold text-orange-400 font-mono mt-1 block">
                {currentSolution.timeline}
              </span>
            </div>
          </div>

          <div className="mt-3 bg-black/40 p-2.5 rounded-xl border border-white/10 flex items-center gap-2 text-xs text-zinc-200">
            <Icon name="zap" className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-[11px] font-medium">{currentSolution.roiImpact}</span>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <span className="text-xs text-zinc-400">
            Ready to review technical requirements?
          </span>
          <button
            onClick={() => {
              onClose();
              onSelectSolution(currentSolution.title);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white text-xs font-semibold rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all cursor-pointer"
          >
            Scope This Architecture
          </button>
        </div>
      </div>
    </div>
  );
}
