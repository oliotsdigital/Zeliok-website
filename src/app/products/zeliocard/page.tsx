"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { useModals } from "@/context/ModalContext";

type CardTemplate = "profile" | "waitlist" | "business" | "portfolio";
type ViewportMode = "mobile" | "desktop";

export default function ZelioCardPage() {
  const { openConsultation } = useModals();
  const [selectedTemplate, setSelectedTemplate] = useState<CardTemplate>("profile");
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [customHandle, setCustomHandle] = useState("alexchen");
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const templates: Record<
    CardTemplate,
    {
      name: string;
      category: string;
      headline: string;
      subline: string;
      badge: string;
      elements: { type: string; label: string; detail: string }[];
    }
  > = {
    profile: {
      name: "Creator & Developer Bio",
      category: "Personal Profile",
      headline: "Alex Chen",
      subline: "AI Systems Architect & Open Source Contributor. Building autonomous agent runtimes.",
      badge: "BIO & PORTFOLIO",
      elements: [
        { type: "avatar", label: "Avatar & Bio", detail: "High-resolution circular portrait with status badge" },
        { type: "links", label: "Curated Links", detail: "GitHub · Substack · X / Twitter · Discord" },
        { type: "cta", label: "Booking Action", detail: "Direct Calendly 30-min strategy sync" }
      ]
    },
    waitlist: {
      name: "SaaS Pre-Launch Waitlist",
      category: "Product Landing Page",
      headline: "NexusAI Engine",
      subline: "The autonomous operational Copilot for modern growth teams. Zero configuration.",
      badge: "EARLY ACCESS LAUNCH",
      elements: [
        { type: "hero", label: "Value Proposition", detail: "High-contrast hero headline with live traction counter" },
        { type: "form", label: "Email Intake", detail: "One-click waitlist intake with instant confirmation email" },
        { type: "proof", label: "Social Proof", detail: "Join 1,420+ founders and engineers in private beta" }
      ]
    },
    business: {
      name: "Digital Business Card",
      category: "Professional Identity",
      headline: "Marcus Vance",
      subline: "Managing Partner at Horizon Capital. Early-stage venture in deep tech & AI.",
      badge: "EXECUTIVE vCARD",
      elements: [
        { type: "vcard", label: "Instant vCard Contact", detail: "Save contact directly to iOS / Android Address Book" },
        { type: "actions", label: "Quick Actions", detail: "Call Direct · WhatsApp · Secure Wire Details" },
        { type: "badge", label: "Verified Credentials", detail: "PGP Key & SOC-2 Verified Executive Identity" }
      ]
    },
    portfolio: {
      name: "Creative Portfolio Showcase",
      category: "Visual Showcase",
      headline: "Studio Mono",
      subline: "Bespoke digital brand experiences, typography systems, and interaction design.",
      badge: "WORK SHOWCASE",
      elements: [
        { type: "gallery", label: "Featured Case Studies", detail: "3 curated visual case studies with rich imagery" },
        { type: "services", label: "Scope & Availability", detail: "Q3/Q4 Project Inquiries · Full Brand Engagements" },
        { type: "inquiry", label: "Inquiry Form", detail: "Structured budget & timeline intake" }
      ]
    }
  };

  const currentTemplate = templates[selectedTemplate];

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="pb-24">
      {/* Ambient Radial Glowing Ember Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] max-w-[95vw] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.18),transparent_70%)] pointer-events-none -z-10" />

      {/* Breadcrumb / Platform Tag */}
      <div className="pt-8 max-w-[1024px] mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Link href="/products" className="hover:text-orange-400 transition-colors">
            Zelioverse Suite
          </Link>
          <span className="text-zinc-600">/</span>
          <span className="text-orange-400 font-medium">ZelioCard</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-12 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-semibold tracking-wider uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          ZELIOVERSE PLATFORM ENGINE · ONE-PAGE SITES
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          ZelioCard<span className="text-orange-500">.</span>
          <br />
          <span className="text-zinc-300 font-normal text-3xl sm:text-5xl lg:text-6xl block mt-2">
            Ultra-fast, responsive one-page sites for anything.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed font-normal">
          Whether you need a sleek personal profile, a high-converting product waitlist, an executive digital card, or a minimal portfolio. Zero code bloat, sub-second edge loading, and effortless responsive design.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => openConsultation("ZelioCard Early Beta Access")}
            className="px-7 py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_25px_rgba(249,115,22,0.45)] transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>Start Building with ZelioCard</span>
            <Icon name="arrow-up-right" className="w-4 h-4" />
          </button>
          <a
            href="#interactive-demo"
            className="px-6 py-3.5 bg-[#14141a] hover:bg-[#1c1c24] text-white rounded-full text-xs font-semibold border border-white/10 shadow-sm transition-all active:scale-95"
          >
            Explore Live Simulator
          </a>
        </div>

        {/* Quick Highlights Pills */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Icon name="check" className="w-4 h-4 text-orange-400" />
            <span>100% Fully Responsive</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="check" className="w-4 h-4 text-orange-400" />
            <span>Custom Apex Domains &amp; Free SSL</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="check" className="w-4 h-4 text-orange-400" />
            <span>Built-in Forms &amp; Stripe Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="check" className="w-4 h-4 text-orange-400" />
            <span>&lt;25KB Total Footprint</span>
          </div>
        </div>
      </section>

      {/* Interactive Card Canvas & Live Preview Simulator */}
      <section id="interactive-demo" className="py-10 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="bg-[#101016] rounded-[32px] p-6 sm:p-10 border border-orange-500/25 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(249,115,22,0.1)]">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-orange-400 tracking-wider uppercase block">
                INTERACTIVE CARD SIMULATOR
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-0.5">
                Preview ZelioCard Layouts
              </h3>
            </div>

            {/* Viewport & Domain Switcher */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center bg-[#181824] rounded-xl p-1 border border-white/10">
                <button
                  onClick={() => setViewport("desktop")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewport === "desktop"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xs"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Icon name="layout" className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setViewport("mobile")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewport === "mobile"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xs"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Icon name="smartphone" className="w-3.5 h-3.5" />
                  <span>Mobile</span>
                </button>
              </div>

              {/* Simulated Domain Pill */}
              <div className="px-3 py-1.5 bg-[#181824] rounded-xl border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                <Icon name="globe" className="w-3.5 h-3.5 text-orange-400" />
                <span>{customHandle}.zeliocard.co</span>
              </div>
            </div>
          </div>

          {/* Template Selector Tabs */}
          <div className="flex gap-2 pt-6 pb-6 overflow-x-auto no-scrollbar border-b border-white/5">
            {(Object.keys(templates) as CardTemplate[]).map((key) => {
              const t = templates[key];
              const isSelected = selectedTemplate === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedTemplate(key)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.35)]"
                      : "bg-[#181824] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  <span>{t.name}</span>
                  <span className={`ml-2 text-[10px] ${isSelected ? "text-orange-200" : "text-zinc-500"}`}>
                    ({t.category})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Live Canvas */}
          <div className="mt-8 flex justify-center">
            <div
              className={`transition-all duration-300 w-full ${
                viewport === "mobile" ? "max-w-[380px]" : "max-w-[700px]"
              }`}
            >
              {/* Simulated Browser / Frame Window */}
              <div className="bg-[#0b0b10] rounded-3xl border border-orange-500/30 overflow-hidden shadow-2xl">
                {/* Browser Top Bar */}
                <div className="px-4 py-2.5 bg-[#14141c] border-b border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-[#07070a] border border-white/5 text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                    <span className="text-emerald-400">https://</span>
                    <span>{customHandle}.zeliocard.co</span>
                  </div>
                  <span className="text-[10px] font-mono text-orange-400">100/100 SPEED</span>
                </div>

                {/* Rendered One-Page Card Surface */}
                <div className="p-6 sm:p-10 bg-gradient-to-b from-[#13131c] via-[#0d0d14] to-[#070709] min-h-[380px] flex flex-col justify-between text-white">
                  <div>
                    {/* Header Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[10px] font-mono text-orange-300 font-semibold tracking-wider uppercase">
                        {currentTemplate.badge}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono">Powered by ZelioCard</span>
                    </div>

                    {/* Template Specific Rendering */}
                    {selectedTemplate === "profile" && (
                      <div className="text-center sm:text-left">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-0.5 mb-4 mx-auto sm:mx-0 shadow-lg shadow-orange-500/20">
                          <div className="w-full h-full rounded-full bg-[#161622] flex items-center justify-center font-bold text-lg text-white">
                            AC
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold tracking-tight text-white">
                          {currentTemplate.headline}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-300 mt-1.5 leading-relaxed max-w-lg">
                          {currentTemplate.subline}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2 justify-center sm:justify-start">
                          {["GitHub", "X / Twitter", "Substack", "Cal.com"].map((link, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 rounded-xl bg-[#1b1b26] hover:bg-orange-500/20 border border-white/10 text-xs text-zinc-200 transition-colors cursor-pointer flex items-center gap-1.5"
                            >
                              <span>{link}</span>
                              <Icon name="arrow-up-right" className="w-3 h-3 text-orange-400" />
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedTemplate === "waitlist" && (
                      <div>
                        <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono mb-3">
                          ● V2 Private Beta Open
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                          {currentTemplate.headline}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                          {currentTemplate.subline}
                        </p>

                        <form onSubmit={handleWaitlistSubmit} className="mt-6 flex flex-col sm:flex-row gap-2">
                          <input
                            type="email"
                            required
                            placeholder="Enter your work email..."
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            className="flex-1 px-4 py-2.5 rounded-xl bg-[#181824] border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                          />
                          <button
                            type="submit"
                            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl text-xs font-semibold cursor-pointer shadow-md transition-all active:scale-95"
                          >
                            Join Priority Waitlist
                          </button>
                        </form>

                        {submitted && (
                          <div className="mt-3 text-xs text-emerald-400 flex items-center gap-1.5 animate-in fade-in">
                            <Icon name="check" className="w-3.5 h-3.5" />
                            <span>You are #1,421 on the private waitlist. Invite on the way!</span>
                          </div>
                        )}
                      </div>
                    )}

                    {selectedTemplate === "business" && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-[#1f1d2b] border border-white/10 flex items-center justify-center font-bold text-white text-lg">
                            MV
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">{currentTemplate.headline}</h4>
                            <p className="text-xs text-orange-400 font-medium">Horizon Capital · Managing Partner</p>
                          </div>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {currentTemplate.subline}
                        </p>

                        <div className="pt-2 grid grid-cols-2 gap-2">
                          <button className="px-3 py-2 rounded-xl bg-[#181824] hover:bg-white/10 border border-white/10 text-xs text-zinc-200 font-medium flex items-center justify-center gap-2">
                            <Icon name="smartphone" className="w-3.5 h-3.5 text-orange-400" />
                            <span>Save to Contacts</span>
                          </button>
                          <button className="px-3 py-2 rounded-xl bg-[#181824] hover:bg-white/10 border border-white/10 text-xs text-zinc-200 font-medium flex items-center justify-center gap-2">
                            <Icon name="zap" className="w-3.5 h-3.5 text-amber-400" />
                            <span>Wire Transfer Info</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {selectedTemplate === "portfolio" && (
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold tracking-tight text-white">{currentTemplate.headline}</h4>
                        <p className="text-xs sm:text-sm text-zinc-300">{currentTemplate.subline}</p>

                        <div className="grid grid-cols-2 gap-2 mt-4">
                          <div className="p-3 rounded-xl bg-[#181824] border border-white/5">
                            <span className="text-[10px] text-orange-400 font-mono">01. FINTECH</span>
                            <div className="text-xs font-semibold text-white mt-1">Aura Banking OS</div>
                          </div>
                          <div className="p-3 rounded-xl bg-[#181824] border border-white/5">
                            <span className="text-[10px] text-amber-400 font-mono">02. BRAND</span>
                            <div className="text-xs font-semibold text-white mt-1">Kinetix Robotics</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Edge Specs */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                    <span>DOM: 18 nodes</span>
                    <span>Total Size: 22.4 KB</span>
                    <span className="text-emerald-400">SSL Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Under Canvas Live Configurator Box */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">Simulate Subdomain:</span>
              <input
                type="text"
                value={customHandle}
                onChange={(e) => setCustomHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ""))}
                placeholder="yourhandle"
                className="px-3 py-1 rounded-lg bg-[#181824] border border-white/10 text-xs font-mono text-orange-400 focus:outline-none focus:border-orange-500 w-36"
              />
              <span className="text-xs text-zinc-500">.zeliocard.co</span>
            </div>

            <button
              onClick={() => openConsultation(`ZelioCard Setup for ${customHandle}`)}
              className="px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold rounded-full shadow-md hover:from-orange-400 hover:to-amber-400 transition-all cursor-pointer"
            >
              Claim {customHandle}.zeliocard.co
            </button>
          </div>
        </div>
      </section>

      {/* 6 Key Architectural Pillars */}
      <section className="py-16 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold text-orange-400 tracking-wider uppercase block mb-1">
            WHY ZELIOCARD
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            Engineered from first principles for simplicity, extreme speed, and zero maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: "layout",
              title: "Responsive by Nature",
              badge: "FLUID CANVAS",
              description:
                "Whether on an iPhone, an Android tablet, an iPad Pro, or a 4K studio display, your card adapts instantly. No manual breakpoint tweaking or horizontal overflow."
            },
            {
              icon: "zap",
              title: "Sub-Second Edge Speeds",
              badge: "LIGHTHOUSE 100",
              description:
                "Built without bloated multi-megabyte JavaScript frameworks. Clean, compiled HTML and CSS cached at global edge points for sub-30ms Time to First Byte (TTFB)."
            },
            {
              icon: "globe",
              title: "Custom Domains & Edge SSL",
              badge: "ZERO CONFIG",
              description:
                "Point your apex domain (yourdomain.com) or any subdomain in seconds. Automatic Let's Encrypt SSL certificates renewal with zero maintenance."
            },
            {
              icon: "file-text",
              title: "Built-In Forms & Webhooks",
              badge: "LEAD INTAKE",
              description:
                "Collect contact inquiries, email waitlist signups, and feedback with integrated spam protection. Push submissions instantly to Slack, email, or your CRM via webhooks."
            },
            {
              icon: "credit-card",
              title: "Stripe Payments & Checkout",
              badge: "MONETIZE",
              description:
                "Accept payments, consulting deposits, event ticket sales, or digital product downloads directly with native Stripe Checkout and PayPal embeds."
            },
            {
              icon: "layers",
              title: "Zelioverse Ecosystem Sync",
              badge: "SCALABLE",
              description:
                "Seamlessly pipe form data into ZelioForms, manage dynamic blog posts via ZelioCMS, or upgrade into a full-scale digital presence with ZelioSite as your business expands."
            }
          ].map((card, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-[#111116] border border-white/[0.08] shadow-sm hover:border-orange-500/35 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center">
                    <Icon name={card.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-orange-400/90 px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benchmark Comparison Table: ZelioCard vs Bloated Traditional Builders */}
      <section className="py-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="bg-[#101016] rounded-[32px] p-6 sm:p-10 border border-white/[0.08]">
          <div className="max-w-xl mb-8">
            <span className="text-[11px] font-semibold text-orange-400 tracking-wider uppercase block">
              PERFORMANCE BENCHMARK
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
              Engineered for speed. Not legacy bloat.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1.5">
              Traditional site builders load hundreds of tracking scripts and unused CSS. ZelioCard produces pure, ultra-lean code.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-zinc-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[11px] font-mono text-zinc-500 uppercase">
                  <th className="py-3 px-4">Metric</th>
                  <th className="py-3 px-4 text-orange-400 font-bold bg-orange-500/5 rounded-t-xl">
                    ZelioCard
                  </th>
                  <th className="py-3 px-4">Traditional Page Builders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Average Page Weight</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-400 bg-orange-500/5">
                    18 KB - 28 KB
                  </td>
                  <td className="py-3 px-4 text-zinc-400">3.8 MB - 6.5 MB</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Time to First Byte (TTFB)</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-400 bg-orange-500/5">
                    &lt; 25 ms (Global Edge)
                  </td>
                  <td className="py-3 px-4 text-zinc-400">350 ms - 900 ms</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Lighthouse Performance Score</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-400 bg-orange-500/5">
                    100 / 100
                  </td>
                  <td className="py-3 px-4 text-zinc-400">48 - 65 / 100</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Mobile Responsiveness</td>
                  <td className="py-3 px-4 text-zinc-200 bg-orange-500/5">
                    Automatic Fluid Scaling
                  </td>
                  <td className="py-3 px-4 text-zinc-400">Manual Breakpoint Tweaking</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">SSL &amp; Custom Apex Domain</td>
                  <td className="py-3 px-4 text-emerald-400 font-medium bg-orange-500/5">
                    Included &amp; Auto-Renewed
                  </td>
                  <td className="py-3 px-4 text-zinc-400">Often Paid Tier or Complex Setup</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Code Bloat &amp; Injected Scripts</td>
                  <td className="py-3 px-4 text-emerald-400 font-medium bg-orange-500/5 rounded-b-xl">
                    Zero Third-Party Trackers
                  </td>
                  <td className="py-3 px-4 text-zinc-400">20+ Analytics &amp; Framework Bundles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Flywheel Callout */}
      <section className="py-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="rounded-[32px] bg-gradient-to-b from-[#181824] via-[#101018] to-[#07070a] p-8 sm:p-12 border border-orange-500/30 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.25),transparent_70%)] pointer-events-none" />

          <span className="text-[11px] font-mono text-orange-400 uppercase tracking-widest block mb-2 relative z-10">
            PROPRIETARY ZELIOVERSE SUITE
          </span>
          <h3 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight relative z-10">
            Ready to launch your one-page site?
          </h3>
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto mt-4 leading-relaxed relative z-10">
            Get early beta access to ZelioCard. Build your responsive profile, waitlist, or portfolio in minutes with guaranteed sub-second speeds.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 relative z-10">
            <button
              onClick={() => openConsultation("ZelioCard Beta Access")}
              className="px-8 py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all active:scale-95 cursor-pointer"
            >
              Get Early Beta Access
            </button>
            <Link
              href="/products"
              className="px-6 py-3.5 bg-[#14141a] hover:bg-[#1e1e28] text-white rounded-full text-xs font-semibold border border-white/10 transition-all active:scale-95"
            >
              Explore Full Zelioverse Suite
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
