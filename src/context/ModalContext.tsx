"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ServiceCardData } from "@/data/website-data";
import { ConsultationModal } from "@/components/ConsultationModal";
import { SolutionFinderDrawer } from "@/components/SolutionFinderDrawer";
import { ServiceModal } from "@/components/ServiceModal";

interface ModalContextType {
  openConsultation: (topic?: string) => void;
  closeConsultation: () => void;
  openSolutionFinder: () => void;
  closeSolutionFinder: () => void;
  openServiceDetail: (service: ServiceCardData) => void;
  closeServiceDetail: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState("");
  const [isSolutionFinderOpen, setIsSolutionFinderOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceCardData | null>(null);

  const openConsultation = (topic?: string) => {
    setConsultationTopic(topic || "General AI Advisory");
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  const openSolutionFinder = () => {
    setIsSolutionFinderOpen(true);
  };

  const closeSolutionFinder = () => {
    setIsSolutionFinderOpen(false);
  };

  const openServiceDetail = (service: ServiceCardData) => {
    setSelectedService(service);
  };

  const closeServiceDetail = () => {
    setSelectedService(null);
  };

  return (
    <ModalContext.Provider
      value={{
        openConsultation,
        closeConsultation,
        openSolutionFinder,
        closeSolutionFinder,
        openServiceDetail,
        closeServiceDetail,
      }}
    >
      {children}

      <ConsultationModal
        isOpen={isConsultationOpen}
        prefilledTopic={consultationTopic}
        onClose={closeConsultation}
      />

      <SolutionFinderDrawer
        isOpen={isSolutionFinderOpen}
        onClose={closeSolutionFinder}
        onSelectSolution={(sol) => {
          closeSolutionFinder();
          openConsultation(sol);
        }}
      />

      <ServiceModal
        card={selectedService}
        onClose={closeServiceDetail}
        onBookConsultation={(title) => {
          closeServiceDetail();
          openConsultation(title);
        }}
      />
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModals must be used within a ModalProvider");
  }
  return context;
}
