import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "ZELIOK — AI-First Digital Transformation Partner",
  description:
    "Technology that transforms how businesses operate. We help businesses modernize operations through custom software, AI-powered automation, enterprise technology implementation, and managed IT services.",
  keywords: [
    "Zeliok",
    "AI-First Digital Transformation",
    "Custom Software Development",
    "AI Automation",
    "Enterprise Solutions",
    "IT Consulting",
    "Managed IT Services",
    "Digital Growth",
    "Zelioverse",
    "Services to SaaS",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full scroll-smooth antialiased dark">
      <body className="relative min-h-full flex flex-col bg-[#070709] text-[#f4f4f5] selection:bg-orange-500 selection:text-white">
        {/* Global Atmospheric Orange Background Gradients */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
          {/* Top-center radiant ember bloom */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1250px] max-w-[100vw] h-[750px] bg-[radial-gradient(ellipse_at_top,rgba(255,115,0,0.22),rgba(255,80,0,0.08)_50%,transparent_75%)] blur-3xl" />
          
          {/* Mid-right floating warm orange glow */}
          <div className="absolute top-[28%] -right-40 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,100,0,0.13),rgba(249,115,22,0.03)_50%,transparent_70%)] blur-3xl animate-pulse-subtle" />
          
          {/* Mid-left warm amber glow */}
          <div className="absolute top-[58%] -left-40 w-[680px] h-[680px] bg-[radial-gradient(circle,rgba(255,130,0,0.11),rgba(255,80,0,0.03)_50%,transparent_70%)] blur-3xl animate-pulse-subtle" />
          
          {/* Bottom warm ember horizon */}
          <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[1150px] max-w-[100vw] h-[550px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,100,0,0.17),rgba(255,70,0,0.04)_55%,transparent_75%)] blur-3xl" />
        </div>

        <ModalProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
