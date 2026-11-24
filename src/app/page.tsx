"use client";

import React, { useState, useMemo } from "react";
import { HeroHeader } from "@/components/HeroHeader";
import { HeroServiceCards } from "@/components/HeroServiceCards";
import { CuratedSolutions } from "@/components/CuratedSolutions";
import { DifferenceSection } from "@/components/DifferenceSection";
import { SpecialistSection } from "@/components/SpecialistSection";
import { ZelioverseSection } from "@/components/ZelioverseSection";
import { HERO_SERVICE_CARDS, ServiceCardData } from "@/data/website-data";
import { useModals } from "@/context/ModalContext";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { openConsultation, openSolutionFinder, openServiceDetail } = useModals();

  // Filter cards by category
  const filteredCards = useMemo(() => {
    if (activeCategory === "all") return HERO_SERVICE_CARDS;
    return HERO_SERVICE_CARDS.filter((card) => card.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="pb-16">
      {/* 1. Apple Store Hero Header & Category Quick-Ribbon */}
      <HeroHeader
        activeCategory={activeCategory}
        onSelectCategory={(id) => setActiveCategory(id)}
        onOpenConsultation={() => openConsultation("AI Specialist Advisory")}
      />

      {/* 2. Hero Section Service Cards ("The latest. Take a look at what's new.") */}
      <HeroServiceCards
        cards={filteredCards}
        onSelectCard={(card: ServiceCardData) => openServiceDetail(card)}
      />

      {/* 3. Curated Solutions ("Turnkey deployments") */}
      <CuratedSolutions
        onSelectSolution={(title) => openConsultation(title)}
      />

      {/* 4. The Zeliok Difference ("Even more reasons to partner with us") */}
      <DifferenceSection
        onLearnMore={(topic) => openConsultation(`The Zeliok Difference: ${topic}`)}
      />

      {/* 5. Help is Here ("Whenever and however you need it") */}
      <SpecialistSection
        onOpenConsultation={() => openConsultation("1-on-1 Specialist Consultation")}
        onOpenSolutionFinder={() => openSolutionFinder()}
      />

      {/* 6. The Zelioverse Experience (Proprietary Products) */}
      <ZelioverseSection
        onLearnMoreProduct={(name) => openConsultation(`Zelioverse Early Access: ${name}`)}
      />
    </main>
  );
}
