"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "./icons";

interface ConsultationModalProps {
  isOpen: boolean;
  prefilledTopic?: string;
  onClose: () => void;
}

export function ConsultationModal({
  isOpen,
  prefilledTopic = "",
  onClose,
}: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(prefilledTopic || "AI Agents & Autonomous Systems");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledTopic) {
      setService(prefilledTopic);
    }
  }, [prefilledTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#0d0d12] rounded-[32px] p-6 sm:p-9 shadow-2xl border border-white/10 text-white animate-in zoom-in-95 duration-200 shadow-orange-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <Icon name="x" className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="pr-8">
              <span className="text-[11px] font-bold tracking-wider text-orange-400 uppercase block">
                DIRECT ARCHITECTURE INQUIRY
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mt-1">
                Start a Conversation.
              </h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Connect directly with a Zeliok AI Engineer to scope feasibility, architecture, and deployment schedules.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
              <div>
                <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#15151c] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15151c] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                    Company / Org
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15151c] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                  Primary Area of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#15151c] border border-white/10 text-white text-sm focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all font-medium"
                >
                  <option value="AI Agents & Autonomous Systems" className="bg-[#15151c] text-white">Autonomous AI Agents &amp; Swarms</option>
                  <option value="AI Platform Setup & Onboarding" className="bg-[#15151c] text-white">AI Platform Setup (OpenAI, Claude, n8n)</option>
                  <option value="Intelligent Workflow Automation" className="bg-[#15151c] text-white">Intelligent Process &amp; Workflow Automation</option>
                  <option value="Custom AI Software & SaaS" className="bg-[#15151c] text-white">Custom AI Software &amp; SaaS Development</option>
                  <option value="Private AI Infrastructure" className="bg-[#15151c] text-white">Private Cloud &amp; On-Prem AI Infrastructure</option>
                  <option value="Zelioverse Product Suite" className="bg-[#15151c] text-white">Zelioverse Proprietary Suite</option>
                  <option value="AI Readiness Audit" className="bg-[#15151c] text-white">Comprehensive AI Readiness Audit</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                  Brief Project Overview (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you want to automate, build, or deploy..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#15151c] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full font-semibold text-sm shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-98 cursor-pointer"
                >
                  Request Consultation &amp; Scope
                </button>
                <span className="text-[11px] text-zinc-500 text-center block mt-2">
                  No sales pitch. Guaranteed reply within 24 business hours.
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
              <Icon name="check" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Request Received.
            </h3>
            <p className="text-sm text-zinc-400 mt-2 max-w-sm mx-auto leading-relaxed">
              Thank you, {name || "there"}. A dedicated Zeliok AI Solutions Architect will review your requirements for <strong className="text-white">{service}</strong> and email you shortly at <span className="font-mono text-orange-400">{email}</span>.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs font-semibold shadow-md transition-all cursor-pointer"
            >
              Back to Solutions
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
