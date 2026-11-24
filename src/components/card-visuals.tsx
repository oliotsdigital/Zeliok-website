import React from "react";

// Obsidian & Orange Dark Ember Vector Visuals for Cards
export function VisualAgents() {
  return (
    <div className="relative w-full h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#18120e] via-[#120f12] to-[#080709] border border-orange-500/20 group-hover:border-orange-500/40 transition-all duration-500 shadow-inner">
      {/* Background ember glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.18),transparent_70%)]" />
      
      {/* Neural Core */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Orbital rings */}
          <div className="absolute inset-0 rounded-full border border-orange-500/30 animate-[spin_12s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-dashed border-amber-400/30 animate-[spin_18s_linear_infinite_reverse]" />
          <div className="absolute inset-4 rounded-full border border-orange-400/20" />
          
          {/* Central Processor */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 p-[1px] shadow-lg shadow-orange-500/30 flex items-center justify-center">
            <div className="w-full h-full bg-[#120f0d] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                <circle cx="15" cy="9" r="1.5" fill="currentColor" />
                <path d="M8 15h8" strokeLinecap="round" />
                <path d="M9 1h6M9 23h6M1 9v6M23 9v6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating status pill */}
        <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-orange-500/30 text-xs font-medium text-orange-300 shadow-[0_0_12px_rgba(249,115,22,0.25)]">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
          <span>Multi-Agent Swarm Active</span>
        </div>
      </div>

      {/* Floating agent nodes */}
      <div className="absolute left-6 top-6 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-zinc-300 font-mono">
        RAG Agent: Ready
      </div>
      <div className="absolute right-6 bottom-6 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-zinc-300 font-mono">
        Tool Calls: 24/s
      </div>
    </div>
  );
}

export function VisualPlatforms() {
  return (
    <div className="relative w-full h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#16141a] to-[#09080d] border border-white/10 group-hover:border-orange-500/40 transition-all duration-500 shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(249,115,22,0.12),transparent_70%)]" />

      {/* Connected nodes */}
      <div className="relative z-10 w-full max-w-[280px]">
        <div className="grid grid-cols-3 gap-3 items-center">
          {/* OpenAI */}
          <div className="p-3 bg-[#181822] rounded-xl shadow-sm border border-white/10 flex flex-col items-center gap-1.5 transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
              AI
            </div>
            <span className="text-[11px] font-medium text-zinc-300">OpenAI</span>
          </div>

          {/* Central Hub */}
          <div className="p-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl shadow-lg shadow-orange-500/30 flex flex-col items-center gap-1.5 scale-110">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] font-semibold tracking-wider uppercase">Zeliok</span>
          </div>

          {/* Anthropic */}
          <div className="p-3 bg-[#181822] rounded-xl shadow-sm border border-white/10 flex flex-col items-center gap-1.5 transform rotate-2 hover:rotate-0 transition-transform">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs">
              C
            </div>
            <span className="text-[11px] font-medium text-zinc-300">Claude</span>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-3">
          <div className="px-3 py-1 bg-[#181822] rounded-lg shadow-sm border border-white/10 text-[11px] font-medium text-zinc-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            n8n Workflows
          </div>
          <div className="px-3 py-1 bg-[#181822] rounded-lg shadow-sm border border-white/10 text-[11px] font-medium text-zinc-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Gemini Pro
          </div>
        </div>
      </div>
    </div>
  );
}

export function VisualCustomSaaS() {
  return (
    <div className="relative w-full h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#181310] to-[#090708] border border-white/10 group-hover:border-orange-500/40 transition-all duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(249,115,22,0.18),transparent_60%)]" />

      {/* Floating Dashboard Card */}
      <div className="relative z-10 w-[88%] bg-[#1a171a]/90 backdrop-blur-md rounded-xl border border-white/10 p-3.5 shadow-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] font-mono text-zinc-400">api.zeliok.internal</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-[11px] text-zinc-400 font-medium">Vector Queries</div>
            <div className="text-lg font-semibold text-white tracking-tight">1.84M <span className="text-[10px] text-emerald-400 font-mono">↑ 99.98%</span></div>
          </div>
          <div className="text-right">
            <div className="text-[11px] text-zinc-400 font-medium">Latency</div>
            <div className="text-lg font-semibold text-orange-400 tracking-tight font-mono">14ms</div>
          </div>
        </div>

        {/* Miniature sparkline */}
        <div className="mt-2.5 h-6 w-full flex items-end gap-1">
          {[40, 65, 55, 80, 60, 95, 75, 100, 85, 90, 70, 100].map((val, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-orange-600 to-amber-400 rounded-t-sm opacity-85"
              style={{ height: `${val}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function VisualWorkflows() {
  return (
    <div className="relative w-full h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#161318] to-[#09080c] border border-white/10 group-hover:border-orange-500/40 transition-all duration-500 shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.12),transparent_70%)]" />

      {/* Sequential Flow Diagram */}
      <div className="relative z-10 w-full max-w-[290px] flex items-center justify-between px-2">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-xl bg-[#1a1824] shadow-sm border border-white/10 flex items-center justify-center text-zinc-200">
            <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[10px] font-semibold text-zinc-400 mt-1.5">Webhook</span>
        </div>

        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 mx-1.5 relative">
          <div className="absolute -top-1 right-1/2 w-2 h-2 rounded-full bg-orange-400 animate-ping" />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-xl bg-[#1a1824] shadow-sm border border-white/10 flex items-center justify-center text-zinc-200">
            <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <span className="text-[10px] font-semibold text-zinc-400 mt-1.5">AI Parser</span>
        </div>

        <div className="flex-1 h-[2px] bg-gradient-to-r from-amber-500 to-orange-500 mx-1.5" />

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/30 flex items-center justify-center">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[10px] font-semibold text-zinc-400 mt-1.5">Execute</span>
        </div>
      </div>
    </div>
  );
}

export function VisualInfrastructure() {
  return (
    <div className="relative w-full h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#181418] to-[#09080c] border border-white/10 group-hover:border-orange-500/40 transition-all duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(249,115,22,0.15),transparent_70%)]" />

      {/* Titanium Hardware Blade */}
      <div className="relative z-10 w-[84%] bg-[#1c1822] rounded-xl border border-white/10 p-3 shadow-2xl flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-medium text-white">Private VPC Isolation</span>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">SOC-2</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-1">
          <div className="p-2 rounded-lg bg-black/50 border border-white/5">
            <div className="text-[9px] text-zinc-400">Model Deployment</div>
            <div className="text-xs font-semibold text-orange-400 mt-0.5">Llama-3 / Qwen</div>
          </div>
          <div className="p-2 rounded-lg bg-black/50 border border-white/5">
            <div className="text-[9px] text-zinc-400">Vector Engine</div>
            <div className="text-xs font-semibold text-amber-400 mt-0.5">Milvus / Qdrant</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VisualZelioverse() {
  return (
    <div className="relative w-full h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d1612] via-[#141014] to-[#09070a] border border-white/10 group-hover:border-orange-500/40 transition-all duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.18),transparent_70%)]" />

      {/* 4 Tiered Product Cards around Hub */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        <div className="w-18 p-2 bg-[#1a1720]/80 backdrop-blur-md rounded-xl border border-white/10 text-center transform -translate-y-2 hover:translate-y-0 transition-transform">
          <div className="text-[11px] font-bold text-orange-400">Forms</div>
          <div className="text-[8px] text-zinc-400 mt-0.5">ZelioForms</div>
        </div>
        <div className="w-18 p-2 bg-[#1a1720]/80 backdrop-blur-md rounded-xl border border-white/10 text-center transform translate-y-1 hover:translate-y-0 transition-transform">
          <div className="text-[11px] font-bold text-amber-300">Site</div>
          <div className="text-[8px] text-zinc-400 mt-0.5">ZelioSite</div>
        </div>
        <div className="w-22 p-2.5 bg-gradient-to-b from-[#251b14] to-[#120e10] backdrop-blur-lg rounded-2xl border border-orange-500/30 text-center shadow-xl shadow-orange-500/10 scale-105">
          <div className="text-xs font-bold text-white">Zelioverse</div>
          <div className="text-[9px] text-amber-400 mt-0.5">Ecosystem</div>
        </div>
        <div className="w-18 p-2 bg-[#1a1720]/80 backdrop-blur-md rounded-xl border border-white/10 text-center transform -translate-y-1 hover:translate-y-0 transition-transform">
          <div className="text-[11px] font-bold text-amber-400">CMS</div>
          <div className="text-[8px] text-zinc-400 mt-0.5">ZelioCMS</div>
        </div>
        <div className="w-18 p-2 bg-[#1a1720]/80 backdrop-blur-md rounded-xl border border-white/10 text-center transform translate-y-2 hover:translate-y-0 transition-transform">
          <div className="text-[11px] font-bold text-orange-500">Card</div>
          <div className="text-[8px] text-zinc-400 mt-0.5">ZelioCard</div>
        </div>
      </div>
    </div>
  );
}

export function VisualEnterprise() {
  return (
    <div className="relative w-full h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#181318] to-[#09080c] border border-white/10 group-hover:border-orange-500/40 transition-all duration-500 shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(249,115,22,0.14),transparent_70%)]" />

      {/* Connected Enterprise Architecture */}
      <div className="relative z-10 w-[90%] flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="text-[11px] font-semibold text-white">HubSpot / Salesforce</span>
          </div>
          <span className="text-[10px] text-orange-400 font-mono">CRM Core</span>
        </div>

        <div className="flex items-center justify-center my-[-2px]">
          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/40 text-[9px] font-mono text-orange-300">
            Bidirectional Kafka Event Stream
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 text-center">
            <span className="text-[10px] text-zinc-400 block">ERP &amp; Finance</span>
            <span className="text-xs font-semibold text-zinc-200">Real-Time Sync</span>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 text-center">
            <span className="text-[10px] text-zinc-400 block">HRMS Operations</span>
            <span className="text-xs font-semibold text-amber-400">Automated</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VisualConsulting() {
  return (
    <div className="relative w-full h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#181512] to-[#080709] border border-white/10 group-hover:border-orange-500/40 transition-all duration-500 shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(249,115,22,0.15),transparent_70%)]" />

      {/* Digital Roadmap Milestone Cards */}
      <div className="relative z-10 w-[86%] space-y-2">
        <div className="p-2.5 rounded-xl bg-[#181822] border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold">1</div>
            <span className="text-[11px] font-medium text-white">Audit &amp; Tool Feasibility</span>
          </div>
          <span className="text-[9px] text-emerald-400 font-mono">Completed</span>
        </div>

        <div className="p-2.5 rounded-xl bg-gradient-to-r from-orange-500/15 via-[#181822] to-transparent border border-orange-500/30 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center text-[10px] font-bold">2</div>
            <span className="text-[11px] font-semibold text-orange-200">Digitalization Strategy</span>
          </div>
          <span className="text-[9px] text-orange-400 font-mono">In Sprints</span>
        </div>

        <div className="p-2.5 rounded-xl bg-[#14141c] border border-white/5 flex items-center justify-between opacity-75">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-white/5 text-zinc-400 flex items-center justify-center text-[10px] font-bold">3</div>
            <span className="text-[11px] font-medium text-zinc-400">Scale &amp; Governance</span>
          </div>
          <span className="text-[9px] text-zinc-500 font-mono">Roadmap</span>
        </div>
      </div>
    </div>
  );
}

export function VisualGrowth() {
  return (
    <div className="relative w-full h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#181410] to-[#080708] border border-white/10 group-hover:border-orange-500/40 transition-all duration-500 shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.16),transparent_70%)]" />

      {/* Metrics & Funnel Graphic */}
      <div className="relative z-10 w-[84%] bg-[#15131b] rounded-xl border border-white/10 p-3 shadow-xl">
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <span className="text-[10px] font-bold text-orange-400 tracking-wider uppercase">PERFORMANCE ENGINE</span>
          <span className="text-[11px] font-semibold text-emerald-400">+284% ROI</span>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-2.5 text-center">
          <div className="p-1.5 rounded-lg bg-black/40 border border-white/5">
            <div className="text-[9px] text-zinc-400">Organic SEO</div>
            <div className="text-xs font-semibold text-white mt-0.5">Top 3</div>
          </div>
          <div className="p-1.5 rounded-lg bg-black/40 border border-white/5">
            <div className="text-[9px] text-zinc-400">Conversion</div>
            <div className="text-xs font-semibold text-amber-400 mt-0.5">4.8%</div>
          </div>
          <div className="p-1.5 rounded-lg bg-black/40 border border-white/5">
            <div className="text-[9px] text-zinc-400">Acquisition</div>
            <div className="text-xs font-semibold text-orange-400 mt-0.5">-42% CAC</div>
          </div>
        </div>
      </div>
    </div>
  );
}



