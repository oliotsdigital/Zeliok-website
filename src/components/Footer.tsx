"use client";

import React from "react";
import Link from "next/link";
import { QUICK_LINKS } from "@/data/website-data";
import { useModals } from "@/context/ModalContext";
import { ZeliokLogo } from "./icons";

export function Footer() {
  const { openConsultation, openSolutionFinder } = useModals();

  const handleQuickLink = (link: string) => {
    if (link === "Talk to a Technology Specialist") {
      openConsultation("Technology Specialist Consultation");
    } else {
      openConsultation(link);
    }
  };

  return (
    <footer className="bg-[#050507] border-t border-white/[0.08] text-zinc-400 text-[11px] pt-12 pb-16">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        {/* Quick Links Section (Apple Store style) */}
        <div className="mb-8 pb-8 border-b border-white/[0.08]">
          <h4 className="text-xs font-semibold text-white tracking-tight mb-3">
            Quick Links
          </h4>
          <div className="flex flex-wrap gap-2">
            {QUICK_LINKS.map((link, i) => (
              <button
                key={i}
                onClick={() => handleQuickLink(link)}
                className="px-3 py-1.5 rounded-full bg-[#111116] border border-white/[0.08] hover:border-orange-500/40 text-zinc-300 hover:text-white hover:bg-white/5 transition-all text-[11px] shadow-sm font-medium cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* Numbered Disclaimers & Notes (Apple style) */}
        <div className="space-y-2 pb-8 border-b border-white/[0.08] text-[10px] leading-relaxed text-zinc-500">
          <p>
            1. <strong>AI-First Digital Transformation Partner:</strong> Zeliok is an independent technology implementation and engineering firm helping businesses modernize operations through custom software, AI-powered automation, enterprise systems, and managed IT services. Mentions of third-party platforms including OpenAI, Anthropic, Google Gemini, n8n, Salesforce, and HubSpot are for descriptive architectural compatibility purposes.
          </p>
          <p>
            2. <strong>Data Sovereignty &amp; Privacy:</strong> For all enterprise and private cloud deployments, client proprietary data and intellectual property remain isolated in private virtual clouds (VPC) and are never utilized to train foundation models without explicit contractual permission.
          </p>
          <p>
            3. <strong>Services-to-SaaS Model:</strong> Proprietary software products developed under the Zelioverse banner (including ZelioForms, ZelioSite, ZelioCMS, and ZelioCard) are owned by Zeliok. Client custom codebases commissioned under bespoke engineering agreements retain 100% intellectual property assignment to the respective client upon project completion.
          </p>
        </div>

        {/* Multi-Column Directory (Apple Store 5 columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-8 border-b border-white/[0.08] text-xs">
          {/* Column 1: Flagship Capabilities */}
          <div>
            <h5 className="font-semibold text-white mb-3">Flagship Pillars</h5>
            <ul className="space-y-2">
              <li><Link href="/services#ai-automation" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">AI &amp; Automation</Link></li>
              <li><Link href="/services#software" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Software Development</Link></li>
              <li><Link href="/services#enterprise" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Enterprise Solutions</Link></li>
              <li><Link href="/services#ai-automation" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Autonomous Agents</Link></li>
              <li><Link href="/services#software" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Custom SaaS Platforms</Link></li>
            </ul>
          </div>

          {/* Column 2: Services Portfolio */}
          <div>
            <h5 className="font-semibold text-white mb-3">Services Portfolio</h5>
            <ul className="space-y-2">
              <li><Link href="/services#consulting" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">IT Consulting &amp; Advisory</Link></li>
              <li><Link href="/services#consulting" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Digital Transformation</Link></li>
              <li><Link href="/services#growth" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Digital Marketing &amp; SEO</Link></li>
              <li><Link href="/services#managed-it" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Managed IT &amp; Cloud</Link></li>
              <li><Link href="/services#enterprise" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">CRM &amp; ERP Integration</Link></li>
            </ul>
          </div>

          {/* Column 3: Zelioverse Products */}
          <div>
            <h5 className="font-semibold text-white mb-3">Products (Zelioverse)</h5>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Zelioverse Overview</Link></li>
              <li><Link href="/products/zelioforms" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">ZelioForms</Link></li>
              <li><Link href="/products/zeliosite" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">ZelioSite</Link></li>
              <li><Link href="/products/zeliocms" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">ZelioCMS</Link></li>
              <li><Link href="/products/zeliocard" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">ZelioCard</Link></li>
              <li><Link href="/products" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Early Access Program</Link></li>
            </ul>
          </div>

          {/* Column 4: Primary Solutions */}
          <div>
            <h5 className="font-semibold text-white mb-3">Turnkey Solutions</h5>
            <ul className="space-y-2">
              <li><Link href="/solutions" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">AI Automation for SMEs</Link></li>
              <li><Link href="/solutions" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">AI Chatbots &amp; RAG</Link></li>
              <li><Link href="/solutions" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Custom Web &amp; Mobile Apps</Link></li>
              <li><Link href="/solutions" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">CRM &amp; Workflow Sync</Link></li>
              <li><Link href="/solutions" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Private VPC Hosting</Link></li>
            </ul>
          </div>

          {/* Column 5: About & Company */}
          <div>
            <h5 className="font-semibold text-white mb-3">Company &amp; Insights</h5>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">About Zeliok</Link></li>
              <li><Link href="/insights" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Insights &amp; Case Studies</Link></li>
              <li><Link href="/about" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Services-to-SaaS Model</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-orange-400 hover:underline transition-colors">Contact Engineering</Link></li>
              <li><span className="text-zinc-500">Global-First Partner</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] text-zinc-500">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Link href="/" className="hover:opacity-90 transition-opacity inline-flex items-center" aria-label="Zeliok Home">
              <ZeliokLogo className="h-6 w-auto" />
            </Link>
            <span>
              Copyright © 2026 Zeliok Inc. All rights reserved. AI-First Digital Transformation Partner.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-zinc-500">
            <Link href="/about" className="hover:text-orange-400 hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="/about" className="hover:text-orange-400 hover:underline">Terms of Use</Link>
            <span>|</span>
            <Link href="/about" className="hover:text-orange-400 hover:underline">Sales Policy</Link>
            <span>|</span>
            <Link href="/about" className="hover:text-orange-400 hover:underline">Legal</Link>
            <span>|</span>
            <span className="font-medium text-zinc-400">Global / English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
