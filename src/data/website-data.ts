export interface ServiceCardData {
  id: string;
  badge: string;
  category: "ai-automation" | "software-dev" | "enterprise-solutions" | "it-consulting" | "digital-growth" | "managed-it" | "zelioverse";
  title: string;
  subtitle: string;
  theme: "dark" | "light" | "space-black" | "silver";
  image?: string;
  visualType: "agents" | "platforms" | "saas" | "workflows" | "infrastructure" | "zelioverse" | "enterprise" | "consulting" | "growth";
  flagship?: boolean;
  priorityLabel?: string;
  details: {
    tagline: string;
    description: string;
    capabilities: string[];
    techStack: string[];
    typicalTimeline: string;
    deliverables: string[];
  };
}

export interface ServiceCategory {
  id: string;
  num: string;
  shortTitle: string;
  fullTitle: string;
  tagline: string;
  flagship?: boolean;
  priority: "Very High" | "High" | "Medium" | "Build Progressively";
  icon: string;
  highlightItems: string[];
  allItems: string[];
  slug: string;
}

export interface ZelioverseProduct {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  icon: string;
  href: string;
}

export const ZELIOVERSE_PRODUCTS: ZelioverseProduct[] = [
  {
    id: "zelioforms",
    name: "ZelioForms",
    badge: "Conversational Forms",
    tagline: "Forms that adapt and think.",
    description: "Intelligent dynamic data capture that auto-adapts questions based on user responses and triggers live backend workflows.",
    icon: "file-text",
    href: "/products/zelioforms"
  },
  {
    id: "zeliosite",
    name: "ZelioSite",
    badge: "AI Web Builder",
    tagline: "High-performance digital publishing.",
    description: "Assemble and publish blazing-fast web experiences optimized for conversion, SEO, and sub-second Core Web Vitals.",
    icon: "code",
    href: "/products/zeliosite"
  },
  {
    id: "zeliocms",
    name: "ZelioCMS",
    badge: "Headless Content API",
    tagline: "Structured content for any surface.",
    description: "Flexible headless CMS engine distributing omnichannel content across web apps, mobile apps, and agentic workflows.",
    icon: "database",
    href: "/products/zeliocms"
  },
  {
    id: "zeliocard",
    name: "ZelioCard",
    badge: "One-Page Sites",
    tagline: "Ultra-fast, responsive one-page sites for anything.",
    description: "Lightweight, responsive one-page site and digital card builder for portfolios, profiles, and quick product landing pages.",
    icon: "credit-card",
    href: "/products/zeliocard"
  }
];

export const BRAND_INFO = {
  name: "ZELIOK",
  tagline: "AI-FIRST DIGITAL TRANSFORMATION PARTNER",
  headline: "Technology that transforms how businesses operate.",
  description:
    "We help businesses modernize operations through custom software, AI-powered automation, enterprise technology implementation, and managed IT services.",
  capabilities: [
    "IT Consulting",
    "Software Engineering",
    "Artificial Intelligence",
    "Intelligent Automation",
    "Enterprise Solutions",
    "Digital Growth",
    "Managed IT",
    "SaaS Products"
  ],
  flagshipPillars: [
    "AI, Machine Learning & Automation",
    "Software & Application Development",
    "Enterprise Software & Business Solutions"
  ]
};

export const SERVICES_MEGA_MENU: ServiceCategory[] = [
  {
    id: "consulting",
    num: "01",
    shortTitle: "Consulting & Transformation",
    fullTitle: "IT Consulting & Digital Transformation",
    tagline: "Helping businesses make better technology decisions and modernize operations.",
    priority: "High",
    icon: "compass",
    slug: "/services#consulting",
    highlightItems: ["IT Consulting", "Digital Transformation", "Technology Strategy"],
    allItems: [
      "IT Consulting & Advisory",
      "Digital Transformation Strategy",
      "Technology Roadmap Development",
      "Business Process Optimization",
      "IT Architecture & Consulting",
      "Technology Assessment",
      "Digitalization Strategy"
    ]
  },
  {
    id: "software",
    num: "02",
    shortTitle: "Software Development",
    fullTitle: "Software & Application Development",
    tagline: "Building custom digital products and applications around business requirements.",
    flagship: true,
    priority: "Very High",
    icon: "code",
    slug: "/services#software",
    highlightItems: ["Custom Software", "Web Applications", "Mobile Applications"],
    allItems: [
      "Custom Software Development",
      "Web Application Development",
      "Mobile App Development",
      "Website Design & Development",
      "E-commerce Development",
      "API Development & Integration",
      "UI/UX Design",
      "Legacy Application Modernization"
    ]
  },
  {
    id: "ai-automation",
    num: "03",
    shortTitle: "AI & Automation",
    fullTitle: "AI, Machine Learning & Automation",
    tagline: "Making businesses intelligent, automated and AI-powered.",
    flagship: true,
    priority: "Very High",
    icon: "sparkles",
    slug: "/services#ai-automation",
    highlightItems: ["AI Agents", "AI Chatbots", "Workflow Automation"],
    allItems: [
      "AI Agent Development",
      "AI Chatbot Development",
      "AI Knowledge Assistants",
      "Business Process Automation",
      "AI Workflow Automation",
      "Machine Learning Solutions",
      "Generative AI Applications",
      "Retrieval-Augmented Generation (RAG)",
      "Intelligent Document Processing",
      "AI Integration & Deployment"
    ]
  },
  {
    id: "enterprise",
    num: "04",
    shortTitle: "Enterprise Solutions",
    fullTitle: "Enterprise Software & Business Solutions",
    tagline: "Implementing and connecting technology systems that power business operations.",
    flagship: true,
    priority: "Very High",
    icon: "building",
    slug: "/services#enterprise",
    highlightItems: ["CRM Implementation", "ERP Solutions", "System Integration"],
    allItems: [
      "CRM Implementation",
      "ERP Implementation",
      "HRMS & Workforce Management",
      "Inventory & Operations Management",
      "Appointment & Booking Systems",
      "Business Management Systems",
      "Enterprise Application Integration",
      "Custom Enterprise Platforms",
      "Workflow & Process Management"
    ]
  },
  {
    id: "growth",
    num: "05",
    shortTitle: "Digital Growth",
    fullTitle: "Digital Marketing & Growth",
    tagline: "Helping businesses build their digital presence and acquire customers.",
    priority: "Medium",
    icon: "trending-up",
    slug: "/services#growth",
    highlightItems: ["Digital Marketing", "SEO & Performance Marketing", "Brand & Web Experience"],
    allItems: [
      "Digital Marketing Strategy",
      "Search Engine Optimization (SEO)",
      "Performance Marketing",
      "Social Media Marketing",
      "Paid Advertising Management",
      "Content Marketing",
      "Website Conversion Optimization",
      "Marketing Automation",
      "Analytics & Reporting"
    ]
  },
  {
    id: "managed-it",
    num: "06",
    shortTitle: "Managed IT Services",
    fullTitle: "Managed IT & Cloud Services",
    tagline: "Keeping business technology secure, reliable and scalable.",
    priority: "Medium",
    icon: "shield",
    slug: "/services#managed-it",
    highlightItems: ["Cloud Management", "IT Infrastructure", "Application Support"],
    allItems: [
      "Managed IT Services",
      "Cloud Infrastructure Management",
      "Cloud Migration",
      "DevOps & CI/CD",
      "Server & Infrastructure Management",
      "Application Maintenance & Support",
      "Database Management",
      "IT Security & Monitoring",
      "Technical Support"
    ]
  },
  {
    id: "zelioverse",
    num: "07",
    shortTitle: "SaaS & Digital Products",
    fullTitle: "SaaS & Digital Products (Zelioverse)",
    tagline: "Ready-to-use and purpose-built technology solutions for modern businesses.",
    priority: "Build Progressively",
    icon: "layers",
    slug: "/products",
    highlightItems: ["Business SaaS Tools", "Custom Platforms", "Digital Business Tools"],
    allItems: [
      "ZelioForms: Conversational Dynamic Forms",
      "ZelioSite: High-Performance Web Engine",
      "ZelioCMS: Omnichannel Headless Content API",
      "ZelioCard: Responsive One-Page Sites & Profiles",
      "SaaS Product Development",
      "Custom SaaS Platforms",
      "Multi-Tenant Application Development",
      "Business Productivity Tools"
    ]
  }
];

export const CATEGORIES = [
  { id: "all", label: "All Solutions", icon: "sparkles" },
  { id: "ai-automation", label: "AI & Automation", icon: "bot", flagship: true },
  { id: "software-dev", label: "Software Engineering", icon: "code", flagship: true },
  { id: "enterprise-solutions", label: "Enterprise Systems", icon: "building", flagship: true },
  { id: "it-consulting", label: "IT Consulting", icon: "compass" },
  { id: "digital-growth", label: "Digital Growth", icon: "trending-up" },
  { id: "managed-it", label: "Managed IT & Cloud", icon: "shield" },
  { id: "zelioverse", label: "Zelioverse Suite", icon: "layers" }
];

export const HERO_SERVICE_CARDS: ServiceCardData[] = [
  {
    id: "ai-automation",
    badge: "PRIMARY MARKET ENTRY · FLAGSHIP",
    category: "ai-automation",
    flagship: true,
    priorityLabel: "Flagship Pillar",
    title: "AI that reasons. Workflows that execute.",
    subtitle: "Custom AI agents, intelligent chatbots, and autonomous workflows engineered to eliminate friction across business operations.",
    theme: "space-black",
    image: "/images/agents-hero.jpg",
    visualType: "agents",
    details: {
      tagline: "Move beyond simple chat into fully autonomous operational intelligence.",
      description:
        "As an AI-first transformation partner, we build goal-directed AI agent swarms and automated workflow pipelines that integrate deeply into your business stack. From tier-1 autonomous customer triage to multi-step invoice OCR and real-time ERP sync, our agents think, invoke tools, and execute with human-in-the-loop governance.",
      capabilities: [
        "AI Agent & Multi-Agent Swarm Orchestration",
        "AI Chatbot & Knowledge Assistant Development",
        "Business Process & Intelligent Workflow Automation",
        "Retrieval-Augmented Generation (RAG) over Enterprise Data",
        "Intelligent Document Processing (OCR + LLM Extraction)",
        "Zero-Data-Retention Compliance & Security Guardrails"
      ],
      techStack: ["LangChain", "LlamaIndex", "Claude Sonnet", "GPT-4o", "DeepSeek", "n8n", "Qdrant", "PostgreSQL"],
      typicalTimeline: "2 to 4 weeks from architecture to production",
      deliverables: [
        "Production-ready Autonomous AI Agent Service",
        "Enterprise Vector Index & Semantic Cache",
        "Automated Lead & Document Processing Pipelines",
        "Live Monitoring Dashboard & Full Runbooks"
      ]
    }
  },
  {
    id: "software-dev",
    badge: "FULL-STACK ENGINEERING · FLAGSHIP",
    category: "software-dev",
    flagship: true,
    priorityLabel: "Flagship Pillar",
    title: "Custom software. Engineered with zero debt.",
    subtitle: "Modern web applications, high-performance mobile apps, and scalable SaaS platforms built around your exact business requirements.",
    theme: "dark",
    image: "/images/custom-saas.jpg",
    visualType: "saas",
    details: {
      tagline: "Transform unique business workflows into high-value software assets.",
      description:
        "When off-the-shelf software falls short, Zeliok's engineering team designs and delivers bespoke web applications, SaaS products, and internal enterprise tools powered by modern, cloud-native architectures.",
      capabilities: [
        "Custom Software & Web Application Development",
        "Cross-Platform iOS & Android Mobile Apps",
        "Multi-Tenant SaaS Architecture & Billing Engine",
        "High-Performance API Development & Integration",
        "Modern Responsive UI/UX Design with React & Tailwind",
        "Legacy Application Modernization & Cloud Refactoring"
      ],
      techStack: ["Next.js", "TypeScript", "Python / FastAPI", "Node.js", "PostgreSQL", "Docker", "AWS / GCP"],
      typicalTimeline: "4 to 8 weeks for MVP launch",
      deliverables: [
        "100% Intellectual Property & Source Code Transfer",
        "Automated CI/CD Deployment Pipelines",
        "Production Cloud Hosting & Database Setup",
        "Comprehensive API Documentation & Architecture Blueprints"
      ]
    }
  },
  {
    id: "enterprise-solutions",
    badge: "BUSINESS SYSTEMS · FLAGSHIP",
    category: "enterprise-solutions",
    flagship: true,
    priorityLabel: "Flagship Pillar",
    title: "Enterprise systems. Connected and automated.",
    subtitle: "End-to-end CRM implementation, ERP solutions, HRMS, and enterprise application integration connecting your core operations.",
    theme: "space-black",
    visualType: "enterprise",
    details: {
      tagline: "Eliminate operational silos across your front and back office.",
      description:
        "We implement, customize, and connect modern enterprise technology systems that power everyday operations. Whether configuring Salesforce, HubSpot, or custom ERP/HRMS portals, we ensure seamless data flow across departments.",
      capabilities: [
        "CRM Implementation (Salesforce, HubSpot, Zoho, Custom)",
        "ERP Implementation & Supply Chain Management",
        "HRMS & Workforce Operations Portals",
        "Inventory, Billing & Financial System Sync",
        "Enterprise Application Integration & Middleware APIs",
        "Role-Based Access Control & Compliance Audits"
      ],
      techStack: ["HubSpot", "Salesforce", "Odoo", "PostgreSQL", "Kafka", "REST / GraphQL", "Python"],
      typicalTimeline: "3 to 6 weeks depending on data volume",
      deliverables: [
        "Configured & customized enterprise system workspace",
        "Bi-directional data sync and migration scripts",
        "Role-based permission matrix & audit logs",
        "Staff onboarding workshops & SOP documentation"
      ]
    }
  },
  {
    id: "it-consulting",
    badge: "STRATEGY & ADVISORY",
    category: "it-consulting",
    title: "Technology decisions. Backed by expert clarity.",
    subtitle: "Digital transformation roadmaps, technology assessments, and IT architecture advisory helping you modernize with confidence.",
    theme: "light",
    visualType: "consulting",
    details: {
      tagline: "Strategic clarity that eliminates wasteful IT spending.",
      description:
        "Most businesses struggle to identify where AI and modern technology provide true ROI versus hype. Our advisory team audits your operational bottlenecks, evaluates tool stacks, and delivers executable digitalization roadmaps.",
      capabilities: [
        "IT Consulting & Executive Technology Advisory",
        "Digital Transformation Strategy & Roadmap",
        "Business Process Optimization & Waste Reduction",
        "IT Architecture & Vendor Feasibility Audits",
        "Enterprise Cloud & AI Readiness Assessment",
        "Vendor Selection & Contract Cost Optimization"
      ],
      techStack: ["Enterprise Architecture", "Cloud Audits", "Process Mining", "SOC-2 Assessment"],
      typicalTimeline: "1 to 2 weeks for strategic roadmap",
      deliverables: [
        "Executive Digital Transformation Roadmap",
        "Technology Stack Audit & Cost-Optimization Report",
        "Architecture Blueprints for Implementation",
        "Bi-weekly Advisory Checkpoints"
      ]
    }
  },
  {
    id: "digital-growth",
    badge: "MARKETING & REVENUE",
    category: "digital-growth",
    title: "Digital presence. Engineered for conversion.",
    subtitle: "Data-driven SEO, performance marketing, content strategy, and conversion-optimized web experiences that drive measurable revenue.",
    theme: "silver",
    visualType: "growth",
    details: {
      tagline: "Turn web visitors into qualified enterprise revenue.",
      description:
        "Digital growth requires technical excellence and commercial insight. We design high-converting digital experiences, manage performance advertising channels, and build technical SEO foundations that rank and convert.",
      capabilities: [
        "Full-Funnel Digital Marketing Strategy",
        "Technical SEO & Content Authority Architecture",
        "Paid Search & Social Advertising Management",
        "Conversion Rate Optimization (CRO) & A/B Testing",
        "Marketing Automation & Lead Nurturing Workflows",
        "Multi-Touch Attribution Analytics & Dashboards"
      ],
      techStack: ["Google Analytics 4", "Semrush", "Meta Ads", "Google Ads", "HubSpot", "Segment"],
      typicalTimeline: "Continuous agile 30-day growth sprints",
      deliverables: [
        "Growth Strategy & Competitive Keyword Matrix",
        "Live Omnichannel Ad Campaigns & Creative Sets",
        "Executive ROI & Attribution Dashboard",
        "Conversion-Optimized Landing Page Frameworks"
      ]
    }
  },
  {
    id: "managed-it",
    badge: "CLOUD & RELIABILITY",
    category: "managed-it",
    title: "Resilient cloud infra. 24/7 peace of mind.",
    subtitle: "Cloud migration, DevOps CI/CD pipelines, 24/7 infrastructure monitoring, and private VPC hosting for complete data sovereignty.",
    theme: "dark",
    visualType: "infrastructure",
    details: {
      tagline: "High-availability cloud infrastructure with zero security compromise.",
      description:
        "We build, manage, and monitor dedicated cloud environments so your mission-critical applications run without interruption, data leaks, or unmonitored downtime.",
      capabilities: [
        "Managed Cloud Infrastructure (AWS, GCP, Azure)",
        "Zero-Downtime Cloud Migration & Database Sync",
        "Automated DevOps Pipelines & CI/CD Toolchains",
        "Server Health, Threat Detection & 24/7 Monitoring",
        "Private VPC Deployment for Sensitive Enterprise Data",
        "Disaster Recovery & Automated High-Frequency Backups"
      ],
      techStack: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Datadog"],
      typicalTimeline: "Ongoing managed SLA / 2-week migration setup",
      deliverables: [
        "Hardened Multi-Zone Cloud Architecture",
        "Automated CI/CD Delivery Pipeline",
        "24/7 Uptime & Security Telemetry Monitoring",
        "SLA Guarantee with Dedicated Escalation Channels"
      ]
    }
  },
  {
    id: "zelioverse",
    badge: "PROPRIETARY PRODUCTS",
    category: "zelioverse",
    title: "Beyond Services. Building next-generation software.",
    subtitle: "Discover Zelioverse — our expanding ecosystem of intelligent tools: ZelioForms, ZelioSite, ZelioCMS, and ZelioCard.",
    theme: "space-black",
    image: "/images/zelioverse.jpg",
    visualType: "zelioverse",
    details: {
      tagline: "The Services-to-SaaS flywheel in action.",
      description:
        "From our hands-on client implementations, we extract repeatable patterns and engineer world-class standalone products that democratize intelligent operations for businesses globally.",
      capabilities: [
        "ZelioForms: AI-assisted form builder with conversational logic",
        "ZelioSite: High-performance business web publishing engine",
        "ZelioCMS: Headless structured content platform with instant APIs",
        "ZelioCard: Lightweight responsive one-page site and digital card builder",
        "Unified Identity & Single Sign-On across all products"
      ],
      techStack: ["Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL", "Cloudflare Edge"],
      typicalTimeline: "Available now in early access",
      deliverables: [
        "Early access workspace credentials",
        "Priority product roadmap voting",
        "Dedicated onboarding support"
      ]
    }
  }
];

export const CURATED_OFFERINGS = [
  {
    id: "sol-sme-automation",
    tag: "PRIMARY MARKET ENTRY",
    title: "AI Automation for SMEs",
    description: "Eliminate manual data entry, streamline invoice parsing, and sync leads across CRM, Slack, and email 24/7 without extra headcount.",
    timeframe: "1 to 2 weeks",
    priceEstimate: "Turnkey Scope",
    icon: "workflow",
    flagship: true
  },
  {
    id: "sol-chatbots-assistants",
    tag: "PRIMARY MARKET ENTRY",
    title: "AI Chatbots & Knowledge Assistants",
    description: "Deploy internal RAG assistants and customer-facing agents that answer inquiries accurately with verified citations from your docs.",
    timeframe: "1 to 3 weeks",
    priceEstimate: "Turnkey Scope",
    icon: "bot",
    flagship: true
  },
  {
    id: "sol-custom-apps",
    tag: "PRIMARY MARKET ENTRY",
    title: "Custom Software & Web Applications",
    description: "Bespoke digital products and full-stack web/mobile applications built with modern frameworks and zero technical debt.",
    timeframe: "4 to 6 weeks",
    priceEstimate: "Full MVP",
    icon: "code",
    flagship: true
  },
  {
    id: "sol-crm-automation",
    tag: "PRIMARY MARKET ENTRY",
    title: "CRM Implementation & Workflow Sync",
    description: "Setup, customize, and automate HubSpot, Salesforce, or custom ERP systems with real-time lead routing and automated sales follow-ups.",
    timeframe: "2 to 3 weeks",
    priceEstimate: "Turnkey Scope",
    icon: "building",
    flagship: true
  }
];

export const DIFFERENCE_ITEMS = [
  {
    id: "diff-ai-first",
    icon: "sparkles",
    badge: "AI-First Partner",
    title: "Built for the Intelligence Era",
    description: "We don't tack AI on as an afterthought. We engineer systems around foundation models, autonomous agents, and intelligent workflows from day zero."
  },
  {
    id: "diff-full-lifecycle",
    icon: "refresh-cw",
    badge: "End-to-End Partner",
    title: "Full-Lifecycle Transformation",
    description: "From strategic IT consulting and technical architecture to custom software builds and 24/7 managed cloud support, we own the complete lifecycle."
  },
  {
    id: "diff-sovereignty",
    icon: "shield-check",
    badge: "Enterprise Trust",
    title: "Data Sovereignty & Isolation",
    description: "Your proprietary business knowledge and client data are never used to train public models. We enforce private VPCs, SOC-2 controls, and zero data leakage."
  },
  {
    id: "diff-flywheel",
    icon: "layers",
    badge: "Services-to-SaaS",
    title: "Scalable Long-Term Value",
    description: "Through our Zelioverse flywheel, client lessons evolve into battle-tested software modules that accelerate your future development tenfold."
  }
];

export const QUICK_LINKS = [
  "AI Automation for SMEs",
  "AI Chatbots & RAG",
  "Custom SaaS Development",
  "CRM & ERP Implementation",
  "Cloud Migration & DevOps",
  "ZelioForms Beta",
  "ZelioCard Beta",
  "Talk to a Technology Specialist"
];
