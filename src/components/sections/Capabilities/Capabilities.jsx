"use client";

import React from "react";
import { SpringReveal } from "@/components/ui/spring-reveal";
import { Container } from "@/components/layout/container/Container";
import { PenTool, LayoutGrid, MousePointerClick } from "lucide-react";

const capabilitiesData = [
    {
        title: "VISUAL INTERFACE DESIGN",
        desc: "High-fidelity UI designs that communicate brand values through layout, color, and precise typography.",
        icon: PenTool,
    },
    {
        title: "DESIGN ARCHITECTURE",
        desc: "Building scalable, robust design systems and component libraries for enterprise-level applications.",
        icon: LayoutGrid,
    },
    {
        title: "BRAND DESIGN",
        desc: "Creating complex interaction models and motion studios to validate UX decisions and hand-off.",
        icon: MousePointerClick,
    }
];

export function Capabilities() {
    return (
        <section className="w-full bg-[#0D0D0D] py-16 md:py-24 lg:py-32">
            <Container className="flex flex-col">
                {/* Header Section */}
                <SpringReveal direction="up" delay={0.1}>
                <div className="flex flex-col gap-(--spacing-element-gap) mb-[clamp(3rem,6vw,5rem)]">
                    <span className="text-xs tracking-widest text-muted-foreground uppercase font-medium">
                        Core Expertise
                    </span>
                    <h2 className="text-(length:--text-fluid-h2) font-bold tracking-tighter leading-none uppercase text-foreground">
                        Capabilities
                    </h2>
                </div>
            </SpringReveal>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {capabilitiesData.map((cap, index) => {
                    const IconComponent = cap.icon;
                    return (
                        <SpringReveal key={index} direction="up" scale={true} delay={0.2 + (index * 0.1)}>
                            <div className="bg-white/2 border border-white/5 rounded-2xl px-card-x py-card-y flex flex-col h-full transition-colors hover:bg-white/4">
                                {/* Icon Wrapper */}
                                <div className="mb-6 opacity-80">
                                    <IconComponent className="w-6 h-6 text-foreground shrink-0" strokeWidth={1.5} />
                                </div>
                                
                                {/* Card Title */}
                                <h3 className="text-sm font-bold tracking-widest uppercase text-foreground mb-4">
                                    {cap.title}
                                </h3>
                                
                                {/* Card Description */}
                                <p className="text-p text-muted-foreground leading-relaxed">
                                    {cap.desc}
                                </p>
                            </div>
                        </SpringReveal>
                    );
                })}
            </div>
            </Container>
        </section>
    );
}
