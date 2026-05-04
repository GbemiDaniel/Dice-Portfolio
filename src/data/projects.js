// src/data/projects.js

export const projectsData = [
    {
        id: "thrifty-store",
        category: "E-Commerce",
        title: "Thrifty Store",
        subtitle: "Reimagining Digital Commerce",
        thumbnailImage: "/images/thrifty-store.png",
        shortDesc: "Website for a digital marketing & paid advertising agency.",
        description: "A user-focused digital marketing platform that ensures easy dashboard tracking and high-frequency visiting.",
        tags: ["UX", "UI DESIGN", "STRATEGY", "WEB DEVELOPMENT"],
        imagePath: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        link: "/work/thrifty-store",
        featured: true,

        metadata: {
            role: "UX UI DESIGNER",
            duration: "2 Weeks",
            tools: "Figma, Adobe Photoshop, Adobe Illustrator"
        },
        challenge: "Traditional e-commerce dashboards are bloated and confusing. We needed to strip away the noise and build an interface that feels as effortless as sending a text message.",
        challengeCards: [
            { text: "Poor conversion rates on mobile devices due to complex navigation." },
            { text: "Bloated architecture causing high drop-off and slow load times." }
        ],
        research: [
            { metric: "10+", label: "Interviews", desc: "User deep dives to map core frustrations." },
            { metric: "45", label: "Use Cases", desc: "Mapped user flows and edge cases." },
            { metric: "99%", label: "Prototype", desc: "Task success rate during testing." }
        ],
        processTabs: [
            {
                id: "research",
                label: "Research",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                steps: [
                    { title: "User Interviews", text: "Conducted deep dives to map core frustrations and drop-off points." },
                    { title: "Market Analysis", text: "Evaluated competitor dashboards to identify UX gaps and opportunities." }
                ]
            },
            {
                id: "wireframing",
                label: "Wireframing",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
                steps: [
                    { title: "Information Architecture", text: "Restructured the entire navigation system to prioritize most-used actions." },
                    { title: "Micro-interactions", text: "Added haptic-driven animations for payment success states to build user trust." }
                ]
            },
            {
                id: "delivery",
                label: "Delivery",
                image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop",
                steps: [
                    { title: "Component Library", text: "Built a scalable design system in Figma for seamless dev handoff." },
                    { title: "QA & Testing", text: "Rigorous interactive testing to ensure the glassmorphic system performed well on mobile." }
                ]
            }
        ],
        galleryTitle: "The Final Solution",
        gallerySubtitle: "A dark-mode first interface that emphasizes content through contrast and structural hierarchy.",
        gallery: [
            {
                title: "Modular Dashboard",
                text: "The dashboard utilizes a widget-based system allowing users to customize their view. We used high contrast typography and subtle gradients to separate data layers.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                bgColor: "bg-white/5",
                features: [
                    "Dynamic Spending Charts",
                    "One-tap Quick Payments"
                ]
            },
            {
                title: "Seamless Verification",
                text: "We redesigned the KYC process, reducing steps from 12 to 3. Real-time feedback and clear instructions ensure users never feel lost during the process.",
                image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop",
                bgColor: "bg-[#A7C9B2]",
                link: {
                    text: "View Prototype",
                    url: "#"
                }
            }
        ],
        results: [
            { stat: "+30%", label: "Conversion Rate" },
            { stat: "-40%", label: "Drop-off Rate" },
            { stat: "4.8/5", label: "App Store Rating" },
            { stat: "15k+", label: "Active Users" }
        ],
        nextProject: { title: "Scalable", link: "/work/scalable" }
    },
    {
        id: "scalable",
        category: "Software",
        title: "Scalable",
        subtitle: "Next-Gen Analytics for B2B",
        thumbnailImage: "/images/project-2.jpg",
        shortDesc: "Landing Page for an analytics & sales SaaS business.",
        description: "A sleek, high-conversion landing page framework designed specifically for analytics and B2B SaaS businesses looking to scale.",
        tags: ["WEB DESIGN", "DEVELOPMENT", "BRANDING", "FRAMER"],
        imagePath: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        link: "/work/scalable",
        featured: true,

        // 🚀 SCALABLE: B2B SaaS focused data
        metadata: {
            role: "FRONTEND ENGINEER",
            duration: "4 Weeks",
            tools: "React, Next.js, Tailwind CSS, Framer Motion"
        },
        challenge: "Enterprise analytics platforms are notoriously dense. The goal was to build a landing experience that distilled complex data visualization capabilities into a high-converting, instantly understandable value proposition for C-level executives.",
        challengeCards: [
            { text: "High bounce rates on feature pages due to overwhelming technical jargon." },
            { text: "Poor lead capture integration leading to lost enterprise demos." }
        ],
        research: [
            { metric: "500+", label: "Heatmaps", desc: "Tracked cursor movements to find layout dead zones." },
            { metric: "12", label: "C-Suite Calls", desc: "Interviews to understand actual purchasing triggers." },
            { metric: "-25%", label: "Bounce Target", desc: "The baseline metric required for launch success." }
        ],
        processTabs: [
            {
                id: "strategy",
                label: "Strategy",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop",
                steps: [
                    { title: "Value Proposition", text: "Shifted the copy from feature-heavy technical specs to outcome-based enterprise solutions." },
                    { title: "Competitor Audit", text: "Analyzed 15 leading SaaS platforms to identify visual cliches to avoid." }
                ]
            },
            {
                id: "architecture",
                label: "Architecture",
                image: "https://images.unsplash.com/photo-1507238692062-5a042398ce4b?q=80&w=2670&auto=format&fit=crop",
                steps: [
                    { title: "Modular Blocks", text: "Designed a component system allowing the marketing team to spin up new A/B test pages in minutes." },
                    { title: "Scroll Dynamics", text: "Mapped out scroll-triggered animations to keep users engaged down long-form content." }
                ]
            },
            {
                id: "engineering",
                label: "Engineering",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
                steps: [
                    { title: "Performance Tuning", text: "Optimized all Lottie animations and dynamic imports to achieve a sub-second LCP." },
                    { title: "Headless CMS", text: "Wired the frontend to Sanity to give the content team total autonomous control." }
                ]
            }
        ],
        galleryTitle: "Data, Simplified",
        gallerySubtitle: "We stripped the interface down to the raw essentials, letting the typography and negative space do the heavy lifting.",
        gallery: [
            {
                title: "The Hero Section",
                text: "A highly kinetic, WebGL-powered hero section that visually explains the data pipeline without a single word of dense copy.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                bgColor: "bg-[#0A0A0E]",
                features: [
                    "Dynamic WebGL background",
                    "Split-testing ready CTA buttons"
                ]
            },
            {
                title: "Interactive Pricing",
                text: "A frictionless pricing toggle that dynamically updates API limits and server costs based on the user's custom slider input.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
                bgColor: "bg-blue-900/10",
                link: { text: "Live Demo", url: "#" }
            }
        ],
        results: [
            { stat: "+45%", label: "Demo Requests" },
            { stat: "1.2s", label: "LCP Load Time" },
            { stat: "3x", label: "Time on Page" },
            { stat: "-15%", label: "Bounce Rate" }
        ],
        nextProject: { title: "Limitless", link: "/work/limitless" }
    },
    {
        id: "limitless",
        category: "Creative",
        title: "Limitless",
        subtitle: "Design Subscriptions, Perfected",
        thumbnailImage: "/images/project-3.jpg",
        shortDesc: "Landing page for a design subscription service.",
        description: "A robust design subscription platform serving seamless request management and high-quality creative output.",
        tags: ["UX/UI", "PRODUCT DESIGN", "STRATEGY", "WEBFLOW"],
        imagePath: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2788&auto=format&fit=crop",
        link: "/work/limitless",
        featured: true,

        // 🚀 LIMITLESS: Productized service data
        metadata: {
            role: "PRODUCT DESIGN LEAD",
            duration: "3 Weeks",
            tools: "Figma, Notion API, Webflow"
        },
        challenge: "Productized design services require absolute trust. We had to design an onboarding and request management flow that felt premium, eliminating the back-and-forth friction of traditional agency models.",
        challengeCards: [
            { text: "Client confusion regarding subscription tiers and delivery timelines." },
            { text: "Friction in the brief-submission process causing delayed project starts." }
        ],
        research: [
            { metric: "3", label: "Tier Models", desc: "A/B tested pricing psychology to maximize MRR." },
            { metric: "40%", label: "Less Clicks", desc: "Aggressively reduced the onboarding flow." },
            { metric: "24h", label: "Turnaround", desc: "The core marketing promise we had to design around." }
        ],
        processTabs: [
            {
                id: "concept",
                label: "Concept",
                image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop",
                steps: [
                    { title: "Trust Signals", text: "Placed high-fidelity portfolio work and client testimonials immediately above the fold." },
                    { title: "Pricing Architecture", text: "Designed a clear, three-tier pricing model that anchoring users to the middle 'Pro' tier." }
                ]
            },
            {
                id: "portal",
                label: "Client Portal",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
                steps: [
                    { title: "Kanban Integration", text: "Built a custom dashboard view where clients can see their active design requests moving through stages." },
                    { title: "Asynchronous Feedback", text: "Implemented a UI pattern for clients to leave precise feedback without needing a Zoom call." }
                ]
            }
        ],
        galleryTitle: "Frictionless Onboarding",
        gallerySubtitle: "From first touch to first design request in under three minutes.",
        gallery: [
            {
                title: "The Storefront",
                text: "A brutalist, high-contrast landing page that cuts the marketing fluff and immediately showcases the quality of the creative output.",
                image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2788&auto=format&fit=crop",
                bgColor: "bg-zinc-900",
                features: [
                    "Integrated Stripe Checkout",
                    "Automated Discord Onboarding"
                ]
            }
        ],
        results: [
            { stat: "$15k", label: "MRR Day 1" },
            { stat: "-60%", label: "Onboarding Time" },
            { stat: "98%", label: "Client Retention" }
        ],
        nextProject: { title: "Solopreneur", link: "/work/solopreneur" }
    },
    {
        id: "solopreneur",
        category: "Personal Brand",
        title: "Solopreneur",
        subtitle: "A Creator's Digital Home",
        thumbnailImage: "/images/project-4.jpg",
        shortDesc: "Website for a freelance web designer & digital creator.",
        description: "A sovereign digital home that acts as a portfolio, newsletter, and storefront without looking like a corporate template.",
        tags: ["PORTFOLIO", "UI DESIGN", "NEXT.JS"],
        imagePath: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2670&auto=format&fit=crop",
        link: "/work/solopreneur",
        featured: true,

        // 🚀 SOLOPRENEUR: Creator economy data
        metadata: {
            role: "SOLO DEVELOPER",
            duration: "1 Week",
            tools: "Next.js App Router, MDX, Tailwind CSS"
        },
        challenge: "Creators are drowning in link-in-bio tools that own their audience. The mission was to build a highly performant, self-hosted platform that merges a portfolio, blog, and digital storefront.",
        challengeCards: [
            { text: "Fragmented audience across Twitter, YouTube, and generic link trees." },
            { text: "Inability to seamlessly gate premium digital products without heavy plugins." }
        ],
        research: [
            { metric: "15+", label: "Creator Audits", desc: "Analyzed top-tier indie hacker portfolios." },
            { metric: "2", label: "Themes", desc: "Built a flawless, system-aware light/dark mode toggle." },
            { metric: "100", label: "Lighthouse", desc: "Perfect performance score requirement for SEO." }
        ],
        processTabs: [
            {
                id: "vibe",
                label: "Vibe Coding",
                image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2670&auto=format&fit=crop",
                steps: [
                    { title: "Typography First", text: "Relied entirely on a fluid typography scale and deep, monochromatic contrast rather than flashy illustrations." },
                    { title: "MDX Architecture", text: "Set up a markdown pipeline so writing articles feels exactly like writing code." }
                ]
            },
            {
                id: "deployment",
                label: "Deployment",
                image: "https://images.unsplash.com/photo-1618477388954-7f1540d4e073?q=80&w=2670&auto=format&fit=crop",
                steps: [
                    { title: "Server Components", text: "Leveraged Next.js 14 Server Components to strip JavaScript payload down to the bare minimum." },
                    { title: "Edge Analytics", text: "Integrated privacy-first analytics to track article read-rates without cookie banners." }
                ]
            }
        ],
        galleryTitle: "Digital Real Estate",
        gallerySubtitle: "A minimal, brutalist aesthetic optimized strictly for reading experience and conversion.",
        gallery: [
            {
                title: "The Reading Room",
                text: "The blog layout uses an ultra-narrow line width (65 characters) and high line-height to ensure maximum legibility for long-form essays.",
                image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2670&auto=format&fit=crop",
                bgColor: "bg-[#050505]",
                features: [
                    "Syntax highlighting for code blocks",
                    "Estimated reading time calculator"
                ],
                link: { text: "Read an Essay", url: "#" }
            }
        ],
        results: [
            { stat: "+120%", label: "Newsletter Signups" },
            { stat: "<1s", label: "Page Transitions" },
            { stat: "5%", label: "Digital Store CVR" }
        ],
        nextProject: { title: "Thrifty Store", link: "/work/thrifty-store" } // Loops back to the beginning
    }
];