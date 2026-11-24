"use client";

import React from "react";
import { Icon } from "@/components/icons";
import { useModals } from "@/context/ModalContext";

export default function AutomationPage() {
  const { openConsultation } = useModals();

  const useCases = [
    {
      challenge: "Automate Customer Inquiries",
      solution: "AI Customer Support Agent",
      impact: "70% first-contact resolution with sub-10 second responses",
      badge: "CUSTOMER SUCCESS"
    },
    {
      challenge: "Process Incoming Invoices & Receipts",
      solution: "Intelligent Document Processing (IDP)",
      impact: "99.4% accuracy across PDFs, scans, and messy spreadsheets",
      badge: "FINANCE & OPS"
    },
    {
      challenge: "Inbound Lead Qualification & Triage",
      solution: "AI Lead Enrichment & Routing Workflow",
      impact: "Instant qualification and instant calendar booking into CRM",
      badge: "GROWTH & REVENUE"
    },
    {
      challenge: "Weekly Executive & Operational Reports",
      solution: "Automated Multi-Source AI Synthesis",
      impact: "Extracts insights from Stripe, Google Analytics & SQL into Slack",
      badge: "EXECUTIVE INTEL"
    },
    {
      challenge: "Repetitive Client Inquiries & Email Triage",
      solution: "Intelligent Email Automation & Draft Generation",
      impact: "Drafts hyper-personalized responses ready for 1-click human approval",
      badge: "COMMUNICATIONS"
    },
    {
      challenge: "Tool Silos & Manual Data Copy-Paste",
      solution: "Cross-Platform API & n8n Synchronization",
      impact: "Real-time bidirectional synchronization between ERP, CRM & databases",
      badge: "INFRASTRUCTURE"
    }
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-14 pb-12 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.14),transparent_70%)] pointer-events-none -z-10" />
        <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase block mb-2">
          INTELLIGENT WORKFLOWS
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Eliminate Operational Friction.
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          We transform repetitive, time-consuming business processes into resilient, self-healing automated workflows that run quietly 24/7.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => openConsultation("Workflow Automation Audit")}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
          >
            Request Automation Audit
          </button>
          <button
            onClick={() => openConsultation("n8n Enterprise Setup")}
            className="px-6 py-3 bg-[#14141a] hover:bg-[#1c1c24] text-white rounded-full text-xs font-semibold border border-white/10 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            Deploy n8n / Make Hub
          </button>
        </div>
      </section>

      {/* Visual Pipeline Showcase */}
      <section className="py-6 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="bg-[#111116] rounded-[32px] p-8 sm:p-12 border border-white/[0.08] shadow-2xl">
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
            Event-Driven Architecture with Human-in-the-Loop
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            {[
              {
                step: "01",
                label: "Event Ingestion",
                desc: "Webhooks, emails, DB triggers, or scheduled cron listeners capture events instantly."
              },
              {
                step: "02",
                label: "AI Processing",
                desc: "LLMs extract structured data, classify intent, and validate schemas."
              },
              {
                step: "03",
                label: "Human Gate",
                desc: "High-stakes transactions trigger Slack/Teams approval prompts with 1-click actions."
              },
              {
                step: "04",
                label: "System Execution",
                desc: "Updates databases, sends notifications, registers ledgers, and logs audit traces."
              }
            ].map((st) => (
              <div key={st.step} className="p-5 rounded-2xl bg-[#161620] border border-white/5">
                <span className="font-mono text-xl font-bold text-orange-400">{st.step}</span>
                <h3 className="text-sm font-semibold text-white mt-2">{st.label}</h3>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Use Cases Table / Grid */}
      <section className="py-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-8">
          Proven Automations<span className="text-zinc-500">. Operational blueprints ready to deploy.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, idx) => (
            <div
              key={idx}
              className="group bg-[#111116] rounded-[24px] p-6 border border-white/[0.08] shadow-sm hover:border-orange-500/30 hover:shadow-[0_0_35px_rgba(249,115,22,0.15)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 text-white"
            >
              <div>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
                  {uc.badge}
                </span>
                <h3 className="text-base font-semibold text-white mt-1.5">
                  {uc.challenge}
                </h3>
                <div className="mt-3 p-3 rounded-xl bg-[#171722] text-xs font-medium text-zinc-200 border border-white/5">
                  <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Solution:</span>
                  {uc.solution}
                </div>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  {uc.impact}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5">
                <button
                  onClick={() => openConsultation(`Workflow: ${uc.challenge}`)}
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Configure this workflow
                  <Icon name="chevron-right" className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pt-6 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <div className="bg-gradient-to-b from-[#181824] via-[#101016] to-[#07070a] text-white rounded-[28px] p-8 sm:p-12 border border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.15)]">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Have a bottleneck in your operations?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mt-2">
            Tell us about your manual spreadsheets, repetitive data transfers, or high-touch processes. We will map the automated flow.
          </p>
          <button
            onClick={() => openConsultation("Custom Workflow Mapping")}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
          >
            Start Workflow Scoping
          </button>
        </div>
      </section>
    </div>
  );
}
