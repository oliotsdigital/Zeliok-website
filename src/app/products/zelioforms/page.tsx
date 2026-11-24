"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { useModals } from "@/context/ModalContext";

export default function ZelioFormsPage() {
  const { openConsultation } = useModals();
  const [activeLogicStep, setActiveLogicStep] = useState(0);

  const logicTree = [
    {
      question: "What is your primary transformation objective?",
      options: ["Automate manual workflows", "Deploy autonomous AI agents", "Custom SaaS engineering"],
      action: "Triggers intent classification & assigns technical architect"
    },
    {
      question: "What is your target timeline?",
      options: ["Urgent (< 3 weeks)", "Normal (1-2 months)", "Exploratory / Discovery"],
      action: "Calculates sprint allocation and schedules instant Calendly slot"
    },
    {
      question: "Which integrations do you require?",
      options: ["Salesforce / HubSpot CRM", "Custom PostgreSQL / Vector DB", "ERP / QuickBooks"],
      action: "Pushes structured payload into n8n and notifies Slack war room"
    }
  ];

  return (
    <div className="pb-24">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] max-w-[95vw] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.18),transparent_70%)] pointer-events-none -z-10" />

      {/* Breadcrumb */}
      <div className="pt-8 max-w-[1024px] mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Link href="/products" className="hover:text-orange-400 transition-colors">
            Zelioverse Suite
          </Link>
          <span className="text-zinc-600">/</span>
          <span className="text-orange-400 font-medium">ZelioForms</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-8 pb-12 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-semibold tracking-wider uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          ZELIOVERSE PLATFORM ENGINE · CONVERSATIONAL FORMS
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          ZelioForms<span className="text-orange-500">.</span>
          <br />
          <span className="text-zinc-300 font-normal text-3xl sm:text-5xl lg:text-6xl block mt-2">
            Forms that adapt, reason, and think.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed font-normal">
          Move beyond static field inputs into intelligent conversational flows. Questions branch dynamically based on responder sentiment and data, instantly triggering automated backend workflows.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => openConsultation("ZelioForms Beta Access")}
            className="px-7 py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_25px_rgba(249,115,22,0.45)] transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>Request ZelioForms Access</span>
            <Icon name="arrow-up-right" className="w-4 h-4" />
          </button>
          <Link
            href="/products"
            className="px-6 py-3.5 bg-[#14141a] hover:bg-[#1c1c24] text-white rounded-full text-xs font-semibold border border-white/10 shadow-sm transition-all active:scale-95"
          >
            Compare Product Suite
          </Link>
        </div>
      </section>

      {/* Interactive Flow Simulator */}
      <section className="py-10 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="bg-[#101016] rounded-[32px] p-6 sm:p-10 border border-orange-500/25 shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider block">
                ADAPTIVE BRANCHING ENGINE
              </span>
              <h3 className="text-xl font-semibold text-white tracking-tight mt-0.5">
                Dynamic Question Flow
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-500">Step {activeLogicStep + 1} of {logicTree.length}</span>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-medium text-white mb-4">
              {logicTree[activeLogicStep].question}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {logicTree[activeLogicStep].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setActiveLogicStep((prev) => (prev + 1) % logicTree.length)}
                  className="p-4 rounded-2xl bg-[#181824] hover:bg-orange-500/15 border border-white/10 hover:border-orange-500/40 text-left text-xs font-medium text-zinc-200 transition-all cursor-pointer"
                >
                  <span className="text-orange-400 font-mono text-[10px] block mb-1">Option {i + 1}</span>
                  {opt}
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs text-zinc-400">
              <span className="text-orange-300 font-mono">Backend Trigger:</span>
              <span className="text-zinc-300">{logicTree[activeLogicStep].action}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "AI-Generated Dynamic Fields",
              desc: "Form fields adapt on the fly based on answers, eliminating unnecessary inputs and boosting completion rates by up to 64%."
            },
            {
              title: "Instant Webhook & CRM Sync",
              desc: "Pipe responses in real-time to Salesforce, HubSpot, n8n, Slack, or custom PostgreSQL databases with zero latency."
            },
            {
              title: "Drop-off & Sentiment Analytics",
              desc: "Identify exactly where users hesitate, calculate sentiment scores on text responses, and auto-flag high-value enterprise leads."
            }
          ].map((f, i) => (
            <div key={i} className="p-6 rounded-3xl bg-[#111116] border border-white/[0.08]">
              <h4 className="text-base font-semibold text-white">{f.title}</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
