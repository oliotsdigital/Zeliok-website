"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { useModals } from "@/context/ModalContext";

export default function InsightsPage() {
  const { openConsultation } = useModals();
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const articles = [
    {
      id: "ai-automation-smes",
      tag: "AI & Automation",
      title: "AI Automation for SMEs: How to Eliminate 20+ Hours of Weekly Operational Friction",
      summary: "A practical guide to implementing self-healing workflows, invoice OCR, and automated lead routing without massive engineering budgets.",
      readTime: "5 min read",
      date: "November 2026",
      featured: true
    },
    {
      id: "services-to-saas",
      tag: "Software Engineering",
      title: "The Services-to-SaaS Flywheel: Turning Bespoke Client Solutions into Scalable Software",
      summary: "How modern technology firms extract repeatable product patterns from client deployments to engineer standalone SaaS tools like Zelioverse.",
      readTime: "7 min read",
      date: "November 2026",
      featured: true
    },
    {
      id: "rag-vs-finetuning",
      tag: "Enterprise AI",
      title: "RAG vs Fine-Tuning: What Enterprise Technology Leaders Need to Know in 2026",
      summary: "Why retrieval-augmented generation over private vector databases wins on cost, accuracy, and data sovereignty for 90% of enterprise use cases.",
      readTime: "6 min read",
      date: "October 2026",
      featured: false
    },
    {
      id: "crm-erp-integration",
      tag: "Enterprise Solutions",
      title: "Connecting CRM & ERP Systems: Overcoming Data Silos Between Sales and Operations",
      summary: "Best practices for implementing real-time event streaming and automated data reconciliation across Salesforce, HubSpot, and ERP backends.",
      readTime: "4 min read",
      date: "October 2026",
      featured: false
    },
    {
      id: "it-consulting-roi",
      tag: "Digital Transformation",
      title: "Cutting Wasteful IT Spending: How to Run an Objective Technology Stack Audit",
      summary: "A framework for identifying redundant SaaS licenses, underutilized cloud infrastructure, and tool friction across distributed teams.",
      readTime: "5 min read",
      date: "September 2026",
      featured: false
    },
    {
      id: "managed-cloud-security",
      tag: "Managed IT & Cloud",
      title: "Zero-Data-Leakage Architecture: Deploying Open-Source LLMs in Private VPCs",
      summary: "How healthcare and financial enterprises run models like DeepSeek and Llama on isolated infrastructure with SOC-2 governance.",
      readTime: "8 min read",
      date: "September 2026",
      featured: false
    }
  ];

  const tags = ["all", "AI & Automation", "Software Engineering", "Enterprise Solutions", "Digital Transformation", "Managed IT & Cloud"];

  const filteredArticles = selectedTag === "all"
    ? articles
    : articles.filter((a) => a.tag === selectedTag);

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 max-w-[1080px] mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] max-w-full h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(255,120,0,0.2),transparent_70%)] pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-[11px] font-semibold text-orange-400 tracking-wider uppercase">
          <span>KNOWLEDGE &amp; CASE STUDIES</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Insights on Digital Transformation, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
            AI Engineering &amp; Modern SaaS.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          Perspectives from Zeliok&apos;s technology team on building intelligent business workflows, engineering scalable applications, and modernizing operations.
        </p>

        {/* Filter Tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedTag === tag
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {tag === "all" ? "All Insights" : tag}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 sm:px-6 max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => openConsultation(`Insight Inquiry: ${article.title}`)}
              className={`group bg-[#111116] rounded-[28px] p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 ${
                article.featured
                  ? "border-orange-500/30 hover:border-orange-500/60 shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]"
                  : "border-white/[0.08] hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-3">
                  <span className="font-semibold text-orange-400 uppercase tracking-wider">
                    {article.tag}
                  </span>
                  <span className="text-zinc-500">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight leading-snug group-hover:text-orange-300 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-mono text-[11px]">{article.date}</span>
                <span className="text-orange-400 font-medium group-hover:text-orange-300 group-hover:underline flex items-center gap-1 transition-colors">
                  Read article
                  <Icon name="arrow-up-right" className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Box */}
      <section className="px-4 sm:px-6 max-w-[1080px] mx-auto mt-16">
        <div className="rounded-[32px] p-8 sm:p-12 bg-gradient-to-r from-[#19110d] via-[#120f17] to-[#0a090e] border border-orange-500/30 text-center shadow-[0_0_50px_rgba(249,115,22,0.15)]">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-2">
            TRANSFORM YOUR BUSINESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Ready to turn these insights into real-world systems?
          </h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mt-3 leading-relaxed">
            Schedule a scoping consultation with Zeliok&apos;s technology team to evaluate your workflows, architecture, and automation opportunities.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => openConsultation("Insights Bottom CTA")}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <span>Get a Consultation</span>
              <Icon name="arrow-up-right" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
