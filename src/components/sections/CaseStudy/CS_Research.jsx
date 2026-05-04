// src/components/sections/CaseStudy/CS_Research.jsx
import React from "react";
import { SpringReveal } from "@/components/ui/spring-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter"; // 🚀 New Import

export function CS_Research({ project }) {
    if (!project.research || project.research.length === 0) return null;

    return (
        <section className="w-full flex flex-col gap-10 md:gap-14 pt-16 md:pt-24 mt-8 md:mt-12 border-t border-white/5">

            <SpringReveal direction="up" delay={0.1}>
                <h2 className="text-center text-xl md:text-2xl font-bold tracking-wide text-foreground">
                    Research & Discovery
                </h2>
            </SpringReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.research.map((item, index) => (
                    <SpringReveal
                        key={index}
                        direction="up"
                        delay={0.2 + (index * 0.1)}
                        className="h-full"
                    >
                        <div className="bg-[#0A0A0E] rounded-(--radius-card-fluid) p-8 border border-white/5 flex flex-col h-full transition-colors duration-500 hover:bg-white/2">

                            <span className="text-4xl lg:text-5xl font-bold text-foreground mb-2 tabular-nums">
                                {/* 🚀 Animated metrics in the research block! */}
                                <AnimatedCounter value={item.metric} />
                            </span>

                            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-white/80 mb-6">
                                {item.label}
                            </span>

                            <p className="text-sm text-muted-foreground leading-relaxed mt-auto pt-5 border-t border-white/5">
                                {item.desc}
                            </p>

                        </div>
                    </SpringReveal>
                ))}
            </div>
        </section>
    );
}