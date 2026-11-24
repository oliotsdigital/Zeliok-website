"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { useModals } from "@/context/ModalContext";

export default function ProductsPage() {
  const { openConsultation } = useModals();
  const [activeTab, setActiveTab] = useState<"forms" | "site" | "cms" | "card">("forms");

  const products = {
    forms: {
      id: "zelioforms",
      name: "ZelioForms",
      badge: "CONVERSATIONAL FORMS & WORKFLOWS",
      tagline: "Forms that adapt and think.",
      desc: "ZelioForms moves beyond static fields into intelligent conversational flows. Questions branch dynamically based on responder sentiment and data, instantly triggering automated backend workflows.",
      features: [
        "AI-Generated Dynamic Fields & Validation",
        "Conditional Branching & Logic Trees",
        "Instant Webhook & CRM Sync",
        "Built-in Analytics & Abandonment Tracking"
      ],
      previewHeadline: "Interactive Data Intake Demo",
      previewSnippet: `{
  "form_id": "form_client_onboard_01",
  "status": "active",
  "fields": [
    { "type": "ai_adaptive", "prompt": "Describe your workflow bottleneck" },
    { "type": "sentiment_analysis", "auto_tag": "high_priority" }
  ],
  "routing": "webhook -> n8n -> salesforce"
}`
    },
    site: {
      id: "zeliosite",
      name: "ZelioSite",
      badge: "AI DIGITAL PUBLISHING",
      tagline: "High-performance websites without code bloat.",
      desc: "ZelioSite empowers marketing and product teams to assemble, customize, and publish blazing-fast web experiences with sub-second page loads, automated SEO, and native localization.",
      features: [
        "Visual Block Canvas with Next.js Generation",
        "Automatic Image Optimization & CDN Edge Caching",
        "Built-in A/B Testing & Conversion Analytics",
        "Custom Domain & SSL Provisioning in 60s"
      ],
      previewHeadline: "Global Edge Publishing Canvas",
      previewSnippet: `// ZelioSite Edge SSR Deployment
export default async function Page() {
  const content = await fetchEdgeContent("campaign_q3");
  return <DigitalExperience blocks={content.blocks} cdn="edge-global" />;
}`
    },
    cms: {
      id: "zeliocms",
      name: "ZelioCMS",
      badge: "HEADLESS CONTENT API",
      tagline: "Structured content for any digital surface.",
      desc: "ZelioCMS separates content from presentation. Manage all structured data, blog entries, product catalogs, and localized strings in one unified headless engine distributed via GraphQL and REST APIs.",
      features: [
        "Strict Schema Typing & Validation",
        "Granular Role-Based Permissions & Draft Staging",
        "Omnichannel Distribution (Web, Mobile, Agents)",
        "Instant Global GraphQL & REST Endpoints"
      ],
      previewHeadline: "Universal GraphQL Content Schema",
      previewSnippet: `query GetEnterpriseArticles {
  articles(filter: { published: true, category: "AI" }) {
    id
    title
    localizedContent(locale: "en-US")
    vectorEmbeddingId
  }
}`
    },
    card: {
      id: "zeliocard",
      name: "ZelioCard",
      badge: "RESPONSIVE ONE-PAGE SITES & PROFILES",
      tagline: "Ultra-fast, responsive one-page sites for anything.",
      desc: "ZelioCard is a lightweight, responsive one-page site and digital card builder. Build personal profiles, product landing pages, portfolios, or quick lead capture cards in minutes with custom domains, zero code bloat, and sub-second loading.",
      features: [
        "Fully Responsive One-Page Canvas (Mobile, Tablet, Desktop)",
        "Modular Profiles, Portfolios & Digital Business Cards",
        "Built-in Forms, Stripe Payments & Instant Webhooks",
        "Custom Apex Domain & Free Edge SSL in 30 Seconds"
      ],
      previewHeadline: "Declarative Single-Page Card Engine",
      previewSnippet: `{
  "card_id": "card_profile_alex",
  "template": "minimal_developer_profile",
  "domain": "alex.zeliocard.co",
  "elements": [
    { "type": "avatar", "src": "/images/portrait.jpg", "shape": "circle" },
    { "type": "bio", "title": "Alex Chen", "role": "AI Systems Engineer" },
    { "type": "links", "items": ["GitHub", "LinkedIn", "Schedule Call"] },
    { "type": "contact_form", "action": "webhook -> instant_email" }
  ],
  "performance": { "ttfb": "18ms", "lighthouse": 100 }
}`
    }
  };

  const current = products[activeTab];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-14 pb-12 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.14),transparent_70%)] pointer-events-none -z-10" />
        <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase block mb-2">
          THE PROPRIETARY PRODUCT SUITE
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          The Zelioverse Ecosystem.
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          Beyond technology services. Our Services-to-SaaS flywheel turns real client operational challenges into scalable, reusable software platforms.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => openConsultation("Zelioverse Early Access")}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
          >
            Request Early Access
          </button>
          <a
            href="#flywheel"
            className="px-6 py-3 bg-[#14141a] hover:bg-[#1c1c24] text-white rounded-full text-xs font-semibold border border-white/10 shadow-sm transition-all active:scale-95"
          >
            How the Flywheel Works
          </a>
        </div>
      </section>

      {/* Featured Multi-Device Image */}
      <section className="py-6 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="relative w-full h-64 sm:h-96 rounded-[32px] overflow-hidden shadow-2xl border border-orange-500/20">
          <Image
            src="/images/zelioverse.jpg"
            alt="Zelioverse Multi-Device Suite"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/40 to-transparent flex items-end p-8 sm:p-12 text-white">
            <div>
              <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest block">
                ZELIOVERSE PLATFORM ENGINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold mt-1">
                ZelioForms · ZelioSite · ZelioCMS · ZelioCard
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Product Suite Tabs */}
      <section className="py-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="bg-[#111116] rounded-[32px] p-8 sm:p-12 border border-white/[0.08] shadow-2xl">
          <div className="flex gap-2 pb-6 border-b border-white/10 overflow-x-auto no-scrollbar">
            {[
              { id: "forms", label: "ZelioForms", badge: "Smart Forms" },
              { id: "site", label: "ZelioSite", badge: "Web Publishing" },
              { id: "cms", label: "ZelioCMS", badge: "Headless Content" },
              { id: "card", label: "ZelioCard", badge: "One-Page Sites" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "forms" | "site" | "cms" | "card")}
                className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.35)]"
                    : "bg-[#181822] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`ml-2 text-[10px] ${activeTab === tab.id ? "text-orange-200" : "text-zinc-500"}`}>
                  ({tab.badge})
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
                {current.badge}
              </span>
              <h3 className="text-3xl font-semibold text-white tracking-tight mt-1">
                {current.name}
              </h3>
              <p className="text-sm font-medium text-zinc-300 mt-1">
                {current.tagline}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                {current.desc}
              </p>

              <div className="mt-6 space-y-2.5">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-200">
                    <Icon name="check" className="w-4 h-4 text-orange-400 shrink-0" />
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openConsultation(`Early Access: ${current.name}`)}
                  className="px-6 py-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white text-xs font-semibold rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95 cursor-pointer"
                >
                  Join {current.name} Early Beta
                </button>
                <Link
                  href={`/products/${current.id}`}
                  className="px-5 py-2.5 bg-[#181822] hover:bg-[#20202c] text-zinc-200 hover:text-white text-xs font-semibold rounded-full border border-white/10 transition-all flex items-center gap-1.5"
                >
                  <span>Explore {current.name} Page</span>
                  <Icon name="arrow-up-right" className="w-3.5 h-3.5 text-orange-400" />
                </Link>
              </div>
            </div>

            {/* Interactive Schema / Code Preview */}
            <div className="rounded-2xl bg-[#0a0a0e] text-white p-6 border border-orange-500/25 font-mono text-xs shadow-inner shadow-orange-500/5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-orange-400">{current.previewHeadline}</span>
              </div>
              <pre className="mt-4 text-[11px] leading-relaxed text-zinc-300 overflow-x-auto no-scrollbar">
                {current.previewSnippet}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* The Services-to-SaaS Flywheel (Exact Company Document Model) */}
      <section id="flywheel" className="py-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">
          The Services-to-SaaS Flywheel<span className="text-zinc-500">. How we innovate.</span>
        </h2>
        <p className="text-sm text-zinc-400 mb-8">
          We combine immediate client project value with long-term intellectual property development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            {
              step: "01",
              title: "Real Problems",
              desc: "Deep hands-on client engagements uncover genuine operational friction.",
            },
            {
              step: "02",
              title: "Custom Fixes",
              desc: "We engineer immediate, working custom automations and workflows.",
            },
            {
              step: "03",
              title: "Find Patterns",
              desc: "We analyze recurring business needs across multiple enterprise deployments.",
            },
            {
              step: "04",
              title: "Build Products",
              desc: "Validated operational wins are engineered into modular SaaS platforms.",
            },
            {
              step: "05",
              title: "Scale Ecosystem",
              desc: "Shared infrastructure accelerates capabilities for all Zeliok clients.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-2xl bg-[#111116] border border-white/[0.08] shadow-sm flex flex-col justify-between hover:border-orange-500/30 hover:shadow-[0_0_25px_rgba(249,115,22,0.12)] transition-all text-white"
            >
              <div>
                <span className="font-mono text-xl font-bold text-orange-400">
                  {item.step}
                </span>
                <h4 className="text-sm font-semibold text-white mt-2">
                  {item.title}
                </h4>
                <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
