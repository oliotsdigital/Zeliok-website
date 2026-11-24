"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ZeliokLogo, Icon } from "./icons";
import { useModals } from "@/context/ModalContext";
import {
  SERVICES_MEGA_MENU,
  CURATED_OFFERINGS,
  ZELIOVERSE_PRODUCTS,
} from "@/data/website-data";

export function Navbar() {
  const pathname = usePathname();
  const { openConsultation, openSolutionFinder } = useModals();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);
  const [zelioverseMenuOpen, setZelioverseMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileSolutionsExpanded, setMobileSolutionsExpanded] = useState(false);
  const [mobileZelioverseExpanded, setMobileZelioverseExpanded] = useState(false);

  const navContainerRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesMenuOpen(false);
    setSolutionsMenuOpen(false);
    setZelioverseMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Click outside to close desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setServicesMenuOpen(false);
        setSolutionsMenuOpen(false);
        setZelioverseMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServicesMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setSolutionsMenuOpen(false);
    setZelioverseMenuOpen(false);
    setServicesMenuOpen(true);
  };

  const handleServicesMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesMenuOpen(false);
    }, 200);
  };

  const handleSolutionsMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesMenuOpen(false);
    setZelioverseMenuOpen(false);
    setSolutionsMenuOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setSolutionsMenuOpen(false);
    }, 200);
  };

  const handleZelioverseMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesMenuOpen(false);
    setSolutionsMenuOpen(false);
    setZelioverseMenuOpen(true);
  };

  const handleZelioverseMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setZelioverseMenuOpen(false);
    }, 200);
  };

  return (
    <header
      ref={navContainerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#070709]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/50"
          : "bg-[#070709]/75 backdrop-blur-md border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 h-[66px] flex items-center justify-between text-[13px] tracking-tight text-zinc-300">
        {/* Brand Logo */}
        <Link href="/" className="hover:opacity-90 transition-opacity flex items-center shrink-0" aria-label="Zeliok Home">
          <ZeliokLogo className="h-8 sm:h-9 w-auto" />
        </Link>

        {/* Compact Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 font-normal">
          {/* Home */}
          <Link
            href="/"
            className={`transition-colors py-2 ${
              pathname === "/"
                ? "text-white font-semibold underline underline-offset-8 decoration-orange-500"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Home
          </Link>

          {/* Services with Mega-Menu */}
          <div
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
              className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                servicesMenuOpen || pathname.startsWith("/services")
                  ? "text-white font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
              aria-expanded={servicesMenuOpen}
            >
              <span>Services</span>
              <Icon
                name="chevron-down"
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesMenuOpen ? "rotate-180 text-orange-400" : "text-zinc-500"
                }`}
              />
            </button>

            {/* Services Mega Menu Dropdown */}
            {servicesMenuOpen && (
              <div
                className="absolute top-full -left-20 w-[960px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <div className="bg-[#0b0b10]/95 backdrop-blur-2xl border border-white/10 rounded-[28px] p-7 shadow-[0_30px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(249,115,22,0.12)]">
                  {/* Mega Menu Header */}
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                      <span className="text-xs font-semibold text-white tracking-wider uppercase">
                        OUR FULL SERVICE PORTFOLIO
                      </span>
                      <span className="text-zinc-500 text-xs">|</span>
                      <span className="text-xs text-zinc-400">
                        AI-First Digital Transformation &amp; Modern Engineering
                      </span>
                    </div>

                    <Link
                      href="/services"
                      onClick={() => setServicesMenuOpen(false)}
                      className="text-xs text-orange-400 hover:text-orange-300 font-medium flex items-center gap-1 group"
                    >
                      <span>Explore all capabilities</span>
                      <Icon name="arrow-up-right" className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>

                  {/* 7 Categories Grid */}
                  <div className="grid grid-cols-3 gap-6">
                    {SERVICES_MEGA_MENU.slice(0, 6).map((cat) => (
                      <div key={cat.id} className="group/item flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="font-mono text-[11px] font-bold text-orange-500/80">
                              {cat.num}.
                            </span>
                            <Link
                              href={cat.slug}
                              onClick={() => setServicesMenuOpen(false)}
                              className="text-sm font-semibold text-white group-hover/item:text-orange-400 transition-colors flex items-center gap-1.5"
                            >
                              <span>{cat.shortTitle}</span>
                              {cat.flagship && (
                                <span className="px-1.5 py-0.2 rounded bg-orange-500/20 text-[9px] font-bold text-orange-300 uppercase tracking-wider">
                                  Flagship
                                </span>
                              )}
                            </Link>
                          </div>

                          <p className="text-[11px] text-zinc-400 leading-snug mb-2.5 font-normal line-clamp-1">
                            {cat.tagline}
                          </p>

                          <ul className="space-y-1">
                            {cat.highlightItems.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  href={cat.slug}
                                  onClick={() => setServicesMenuOpen(false)}
                                  className="text-[12px] text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1.5 py-0.5"
                                >
                                  <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover/item:bg-orange-400 transition-colors" />
                                  <span>{item}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mega Menu Footer Banner with Category 07 & CTA */}
                  <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between bg-white/[0.02] -mx-7 -mb-7 px-7 py-4 rounded-b-[27px]">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                        <Icon name="layers" className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] font-bold text-orange-500/80">07.</span>
                          <Link
                            href="/products"
                            onClick={() => setServicesMenuOpen(false)}
                            className="text-xs font-semibold text-white hover:text-orange-400 transition-colors"
                          >
                            SaaS &amp; Digital Products (Zelioverse)
                          </Link>
                        </div>
                        <p className="text-[11px] text-zinc-400">
                          ZelioForms · ZelioSite · ZelioCMS · ZelioCard
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-400 hidden xl:inline">
                        Discuss your project with Zeliok&apos;s technology team.
                      </span>
                      <button
                        onClick={() => {
                          setServicesMenuOpen(false);
                          openConsultation("Services Mega Menu Advisory");
                        }}
                        className="px-4 py-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white text-xs font-semibold rounded-full shadow-[0_0_15px_rgba(249,115,22,0.35)] transition-all active:scale-95 cursor-pointer flex items-center gap-1"
                      >
                        <span>Get a Consultation</span>
                        <Icon name="arrow-up-right" className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Solutions with Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleSolutionsMouseEnter}
            onMouseLeave={handleSolutionsMouseLeave}
          >
            <button
              onClick={() => setSolutionsMenuOpen(!solutionsMenuOpen)}
              className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                solutionsMenuOpen || pathname === "/solutions"
                  ? "text-white font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
              aria-expanded={solutionsMenuOpen}
            >
              <span>Solutions</span>
              <Icon
                name="chevron-down"
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  solutionsMenuOpen ? "rotate-180 text-orange-400" : "text-zinc-500"
                }`}
              />
            </button>

            {/* Solutions Dropdown Menu */}
            {solutionsMenuOpen && (
              <div
                className="absolute top-full -left-10 w-[420px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <div className="bg-[#0b0b10]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(249,115,22,0.1)]">
                  <div className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-3 px-2">
                    PRIMARY MARKET ENTRY OFFERINGS
                  </div>

                  <div className="space-y-1.5">
                    {CURATED_OFFERINGS.map((sol) => (
                      <Link
                        key={sol.id}
                        href="/solutions"
                        onClick={() => setSolutionsMenuOpen(false)}
                        className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/[0.04] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon name={sol.icon} className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-orange-300 transition-colors">
                            {sol.title}
                          </div>
                          <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                            {sol.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/[0.08] px-2 flex items-center justify-between text-xs">
                    <Link
                      href="/solutions"
                      onClick={() => setSolutionsMenuOpen(false)}
                      className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-1"
                    >
                      <span>View All Industry Solutions</span>
                      <Icon name="chevron-right" className="w-3 h-3" />
                    </Link>
                    <span className="text-[11px] text-zinc-500">Turnkey Scopes</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Zelioverse (Products) with Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleZelioverseMouseEnter}
            onMouseLeave={handleZelioverseMouseLeave}
          >
            <button
              onClick={() => setZelioverseMenuOpen(!zelioverseMenuOpen)}
              className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                zelioverseMenuOpen || pathname === "/products"
                  ? "text-white font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
              aria-expanded={zelioverseMenuOpen}
            >
              <span>Zelioverse</span>
              <Icon
                name="chevron-down"
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  zelioverseMenuOpen ? "rotate-180 text-orange-400" : "text-zinc-500"
                }`}
              />
            </button>

            {/* Zelioverse Products Dropdown Menu */}
            {zelioverseMenuOpen && (
              <div
                className="absolute top-full -left-16 w-[450px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={handleZelioverseMouseEnter}
                onMouseLeave={handleZelioverseMouseLeave}
              >
                <div className="bg-[#0b0b10]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(249,115,22,0.12)]">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] px-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">
                        ZELIOVERSE PRODUCT SUITE
                      </span>
                    </div>
                    <Link
                      href="/products"
                      onClick={() => setZelioverseMenuOpen(false)}
                      className="text-[11px] text-zinc-400 hover:text-orange-300 transition-colors flex items-center gap-1"
                    >
                      <span>Overview</span>
                      <Icon name="arrow-up-right" className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="space-y-2">
                    {ZELIOVERSE_PRODUCTS.map((prod) => (
                      <Link
                        key={prod.id}
                        href={prod.href}
                        onClick={() => setZelioverseMenuOpen(false)}
                        className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-orange-500/25 transition-all"
                      >
                        <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gradient-to-tr group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white transition-all shadow-xs">
                          <Icon name={prod.icon} className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors">
                              {prod.name}
                            </span>
                            <span className="text-[10px] font-medium text-orange-400 px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20">
                              {prod.badge}
                            </span>
                          </div>
                          <div className="text-[11px] text-zinc-300 font-medium mt-0.5">
                            {prod.tagline}
                          </div>
                          <p className="text-[11px] text-zinc-400 leading-snug mt-1 line-clamp-1">
                            {prod.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/[0.08] px-2 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-zinc-500">Services-to-SaaS Model</span>
                    <Link
                      href="/products"
                      onClick={() => setZelioverseMenuOpen(false)}
                      className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1 group"
                    >
                      <span>Explore All Products</span>
                      <Icon name="chevron-right" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* About */}
          <Link
            href="/about"
            className={`transition-colors py-2 ${
              pathname === "/about"
                ? "text-white font-semibold underline underline-offset-8 decoration-orange-500"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            About
          </Link>

          {/* Insights */}
          <Link
            href="/insights"
            className={`transition-colors py-2 ${
              pathname === "/insights"
                ? "text-white font-semibold underline underline-offset-8 decoration-orange-500"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Insights
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`transition-colors py-2 ${
              pathname === "/contact"
                ? "text-white font-semibold underline underline-offset-8 decoration-orange-500"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          {/* Solution Architect Search Button */}
          <button
            onClick={openSolutionFinder}
            className="p-2 text-zinc-400 hover:text-orange-400 hover:bg-white/5 rounded-full transition-all cursor-pointer"
            title="Interactive AI Solution Architect"
            aria-label="Search and Solution Architect"
          >
            <Icon name="search" className="w-4 h-4" />
          </button>

          {/* Contact Link */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 bg-white/10 hover:bg-white/15 text-white text-[12.5px] font-medium rounded-full border border-white/10 shadow-xs transition-all active:scale-95"
          >
            Contact
          </Link>

          {/* Primary CTA Button */}
          <button
            onClick={() => openConsultation("Navbar Advisory")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-white text-[12.5px] font-semibold rounded-full shadow-[0_0_20px_rgba(249,115,22,0.35)] transition-all active:scale-95 cursor-pointer"
          >
            <span>Get a Consultation</span>
            <Icon name="arrow-up-right" className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <Icon name="x" className="w-5 h-5" /> : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c11]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-3 text-sm font-medium max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-orange-400 py-2 border-b border-white/5 flex items-center justify-between"
          >
            <span>Home</span>
            <Icon name="chevron-right" className="w-3.5 h-3.5 text-zinc-500" />
          </Link>

          {/* Mobile Services Accordion */}
          <div className="border-b border-white/5 pb-2">
            <button
              onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
              className="w-full text-zinc-300 hover:text-orange-400 py-2 flex items-center justify-between text-left cursor-pointer"
            >
              <span>Services (7 Categories)</span>
              <Icon
                name="chevron-down"
                className={`w-4 h-4 transition-transform ${mobileServicesExpanded ? "rotate-180 text-orange-400" : "text-zinc-500"}`}
              />
            </button>
            {mobileServicesExpanded && (
              <div className="pl-3 pr-1 py-2 space-y-2.5 text-xs bg-white/[0.02] rounded-xl my-1">
                {SERVICES_MEGA_MENU.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.slug}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-zinc-400 hover:text-orange-300 transition-colors"
                  >
                    <div className="font-semibold text-zinc-200 flex items-center gap-1.5">
                      <span className="text-orange-500 font-mono text-[10px]">{cat.num}.</span>
                      <span>{cat.shortTitle}</span>
                      {cat.flagship && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-orange-500/20 text-orange-300">Flagship</span>
                      )}
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5 line-clamp-1">{cat.highlightItems.join(" · ")}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Solutions Accordion */}
          <div className="border-b border-white/5 pb-2">
            <button
              onClick={() => setMobileSolutionsExpanded(!mobileSolutionsExpanded)}
              className="w-full text-zinc-300 hover:text-orange-400 py-2 flex items-center justify-between text-left cursor-pointer"
            >
              <span>Solutions</span>
              <Icon
                name="chevron-down"
                className={`w-4 h-4 transition-transform ${mobileSolutionsExpanded ? "rotate-180 text-orange-400" : "text-zinc-500"}`}
              />
            </button>
            {mobileSolutionsExpanded && (
              <div className="pl-3 pr-1 py-2 space-y-2 text-xs bg-white/[0.02] rounded-xl my-1">
                {CURATED_OFFERINGS.map((sol) => (
                  <Link
                    key={sol.id}
                    href="/solutions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-zinc-300 hover:text-orange-400"
                  >
                    <div className="font-semibold text-white">{sol.title}</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">{sol.timeframe}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Zelioverse Accordion */}
          <div className="border-b border-white/5 pb-2">
            <button
              onClick={() => setMobileZelioverseExpanded(!mobileZelioverseExpanded)}
              className="w-full text-zinc-300 hover:text-orange-400 py-2 flex items-center justify-between text-left cursor-pointer"
            >
              <span>Zelioverse Products ({ZELIOVERSE_PRODUCTS.length})</span>
              <Icon
                name="chevron-down"
                className={`w-4 h-4 transition-transform ${mobileZelioverseExpanded ? "rotate-180 text-orange-400" : "text-zinc-500"}`}
              />
            </button>
            {mobileZelioverseExpanded && (
              <div className="pl-3 pr-1 py-2 space-y-2 text-xs bg-white/[0.02] rounded-xl my-1">
                {ZELIOVERSE_PRODUCTS.map((prod) => (
                  <Link
                    key={prod.id}
                    href={prod.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-zinc-300 hover:text-orange-400"
                  >
                    <div className="font-semibold text-white flex items-center justify-between">
                      <span>{prod.name}</span>
                      <span className="text-[9px] text-orange-400">{prod.badge}</span>
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">{prod.tagline}</div>
                  </Link>
                ))}
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pt-1.5 text-orange-400 font-medium hover:underline text-[11px]"
                >
                  Explore Zelioverse Overview ↗
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-orange-400 py-2 border-b border-white/5 flex items-center justify-between"
          >
            <span>About Zeliok</span>
            <Icon name="chevron-right" className="w-3.5 h-3.5 text-zinc-500" />
          </Link>

          <Link
            href="/insights"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-orange-400 py-2 border-b border-white/5 flex items-center justify-between"
          >
            <span>Insights &amp; Case Studies</span>
            <Icon name="chevron-right" className="w-3.5 h-3.5 text-zinc-500" />
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-orange-400 py-2 border-b border-white/5 flex items-center justify-between"
          >
            <span>Contact Us</span>
            <Icon name="chevron-right" className="w-3.5 h-3.5 text-zinc-500" />
          </Link>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openConsultation("Mobile Inbound Consultation");
            }}
            className="w-full py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-semibold rounded-full text-center mt-3 shadow-[0_0_20px_rgba(249,115,22,0.4)] cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Get a Consultation</span>
            <Icon name="arrow-up-right" className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
