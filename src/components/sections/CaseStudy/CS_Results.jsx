// src/components/sections/CaseStudy/CS_Results.jsx
import React from "react";
import { SpringReveal } from "@/components/ui/spring-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter"; // 🚀 New Import

export function CS_Results({ project }) {
    if (!project.results || project.results.length === 0) return null;

    return (
        <section className="w-full pt-[clamp(4rem,10vw,8rem)]">
            <SpringReveal direction="up" delay={0.1}>
                <div className="w-full glass-panel bg-white/2 border border-white/10 rounded-(--radius-card-fluid) p-[clamp(3rem,6vw,5rem)] flex flex-col items-center justify-center gap-10 md:gap-14 shadow-2xl relative overflow-hidden backdrop-blur-md">

                    <h2 className="text-base md:text-lg font-semibold tracking-wide text-foreground">
                        Results & Impact
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full text-center">
                        {project.results.map((result, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter tabular-nums text-[#e2e2e2] [text-shadow:2px_2px_4px_rgba(0,0,0,0.8),-1px_-1px_1px_rgba(255,255,255,0.1)]">
                                    {/* 🚀 Clean, reusable implementation */}
                                    <AnimatedCounter value={result.stat} />
                                </span>
                                <span className="text-[10px] sm:text-[11px] md:text-xs font-medium uppercase tracking-widest text-muted-foreground mt-2">
                                    {result.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </SpringReveal>
        </section>
    );
}