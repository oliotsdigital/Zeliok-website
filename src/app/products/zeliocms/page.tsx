"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { useModals } from "@/context/ModalContext";

export default function ZelioCMSPage() {
  const { openConsultation } = useModals();

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
          <span className="text-orange-400 font-medium">ZelioCMS</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-8 pb-12 px-4 sm:px-6 max-w-[1024px] mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-semibold tracking-wider uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          ZELIOVERSE PLATFORM ENGINE · HEADLESS CONTENT API
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          ZelioCMS<span className="text-orange-500">.</span>
          <br />
          <span className="text-zinc-300 font-normal text-3xl sm:text-5xl lg:text-6xl block mt-2">
            Structured content for any digital surface.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed font-normal">
          ZelioCMS separates content from presentation. Manage all structured data, blog entries, product catalogs, and localized strings in one unified headless engine distributed via GraphQL and REST APIs.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => openConsultation("ZelioCMS Beta Access")}
            className="px-7 py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white rounded-full text-xs font-semibold shadow-[0_0_25px_rgba(249,115,22,0.45)] transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>Request ZelioCMS Access</span>
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

      {/* Headless API Architecture */}
      <section className="py-10 px-4 sm:px-6 max-w-[1024px] mx-auto">
        <div className="bg-[#101016] rounded-[32px] p-6 sm:p-10 border border-orange-500/25 shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider block">
                UNIFIED GRAPHQL &amp; REST ENDPOINTS
              </span>
              <h3 className="text-xl font-semibold text-white tracking-tight mt-0.5">
                Omnichannel Headless Content Delivery
              </h3>
            </div>
            <span className="text-xs font-mono text-orange-400">GraphQL 200 OK</span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Strict Schema Typing",
                desc: "Define content schemas with TypeScript and GraphQL validation, preventing broken builds and missing payload errors."
              },
              {
                title: "Omnichannel Distribution",
                desc: "One single source of truth for your web applications, native iOS/Android apps, and AI knowledge assistants."
              },
              {
                title: "Granular RBAC & Staging",
                desc: "Role-based draft previews, workflow approval stages, and deterministic change histories with rollback."
              }
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#161622] border border-white/5">
                <h4 className="text-sm font-semibold text-white">{f.title}</h4>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
