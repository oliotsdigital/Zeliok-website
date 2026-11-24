"use client";

import React, { useState } from "react";
import { Icon } from "@/components/icons";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [scope, setScope] = useState("AI Agents & Swarms");
  const [budget, setBudget] = useState("$5k - $15k");
  const [timeline, setTimeline] = useState("Within 2-4 weeks");
  const [needsNDA, setNeedsNDA] = useState(false);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="relative pt-14 pb-12 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.14),transparent_70%)] pointer-events-none -z-10" />
        <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase block mb-2">
          DIRECT ARCHITECTURE INQUIRY
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Tell Us What You Want to Automate or Build.
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          Connect directly with a Zeliok Solutions Architect. No sales gatekeeping — we evaluate feasibility, schemas, and timelines directly.
        </p>
      </section>

      {/* Main Scheduling & Inquiry Card */}
      <section className="px-4 sm:px-6 max-w-[800px] mx-auto">
        <div className="bg-[#111116] rounded-[32px] p-8 sm:p-12 border border-white/[0.08] shadow-2xl shadow-orange-500/5 text-white">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Contact Details */}
              <div>
                <h3 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-3">
                  01. Your Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#171722] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@enterprise.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#171722] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Technologies"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#171722] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Project Scope */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-3">
                  02. Primary Objective
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "AI Agents & Swarms",
                    "Workflow & Process Automation",
                    "Third-Party Tool Setup (n8n/OpenAI)",
                    "Custom AI Web App / SaaS",
                    "Private VPC Model Deployment",
                    "AI Readiness Audit",
                  ].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setScope(item)}
                      className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                        scope === item
                          ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white border-orange-400/50 shadow-[0_0_15px_rgba(249,115,22,0.35)]"
                          : "bg-[#171722] text-zinc-300 border-white/5 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Budget & Timeline */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-3">
                  03. Target Timeline &amp; Budget
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                      Deployment Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#171722] border border-white/10 text-xs font-medium text-white focus:outline-hidden focus:border-orange-500"
                    >
                      <option className="bg-[#171722] text-white">Immediate (1-2 weeks)</option>
                      <option className="bg-[#171722] text-white">Within 2-4 weeks</option>
                      <option className="bg-[#171722] text-white">Next Quarter</option>
                      <option className="bg-[#171722] text-white">Exploratory / Discovery</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                      Estimated Project Investment
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#171722] border border-white/10 text-xs font-medium text-white focus:outline-hidden focus:border-orange-500"
                    >
                      <option className="bg-[#171722] text-white">&lt; $5,000 (Turnkey Setup)</option>
                      <option className="bg-[#171722] text-white">$5k - $15k (Custom Solution)</option>
                      <option className="bg-[#171722] text-white">$15k - $50k (Enterprise SaaS / Swarms)</option>
                      <option className="bg-[#171722] text-white">$50k+ (Full-Scale System Modernization)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Notes & NDA */}
              <div className="pt-4 border-t border-white/10">
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                  Project Notes &amp; Systems to Integrate
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your current tools (e.g. Salesforce, Slack, Postgres), data schemas, and the specific tasks you wish to automate..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#171722] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all resize-none"
                />

                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="nda-toggle"
                    checked={needsNDA}
                    onChange={(e) => setNeedsNDA(e.target.checked)}
                    className="w-4 h-4 rounded text-orange-500 accent-orange-500 focus:ring-orange-500"
                  />
                  <label htmlFor="nda-toggle" className="text-xs text-zinc-400 cursor-pointer">
                    Require Mutual Non-Disclosure Agreement (NDA) before sharing technical schemas.
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full font-semibold text-sm shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-98 cursor-pointer"
                >
                  Submit Architecture Inquiry
                </button>
                <span className="text-[11px] text-zinc-500 text-center block mt-2.5">
                  Guaranteed response within 24 business hours from a senior solutions engineer.
                </span>
              </div>
            </form>
          ) : (
            <div className="text-center py-10 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="check" className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Inquiry Confirmed.
              </h2>
              <p className="text-sm text-zinc-400 mt-3 max-w-md mx-auto leading-relaxed">
                Thank you, {name || "there"}. We have registered your request for <strong className="text-white">{scope}</strong> with a timeline of <span className="font-mono text-orange-400">{timeline}</span>.
              </p>
              {needsNDA && (
                <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 max-w-sm mx-auto">
                  Our legal team will initiate our standard mutual NDA to <strong className="font-mono text-white">{email}</strong> prior to our technical call.
                </div>
              )}
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs font-semibold shadow-md transition-all cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Corporate Location Details */}
      <section className="py-12 px-4 sm:px-6 max-w-[800px] mx-auto text-center text-xs text-zinc-500">
        <p className="font-semibold text-zinc-300">
          Zeliok Headquarters — India · Serving Enterprise Clients Worldwide
        </p>
        <p className="mt-1">
          Zero-to-One Ecosystem for Logic, Intelligence &amp; Operational Knowledge.
        </p>
      </section>
    </div>
  );
}
