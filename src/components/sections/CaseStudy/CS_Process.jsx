"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SpringReveal } from "@/components/ui/spring-reveal";
import { cn } from "@/lib/utils";

export function CS_Process({ project }) {
    const [activeTab, setActiveTab] = useState(0);

    if (!project.processTabs || project.processTabs.length === 0) return null;

    const currentTabData = project.processTabs[activeTab];

    return (
        <section className="w-full flex flex-col gap-10 md:gap-14 pt-16 md:pt-24 mt-8 md:mt-12 border-t border-white/5">

            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
                <SpringReveal direction="up" delay={0.1}>
                    <h2 className="text-xl md:text-2xl font-bold tracking-wide text-foreground">
                        Design Process & Iteration
                    </h2>
                </SpringReveal>

                {/* 🚀 FIX 1: Removed negative margins so it respects global padding, reduced gap slightly */}
                <SpringReveal direction="up" delay={0.2} className="w-full md:w-auto">
                    <div className="flex items-center gap-2 md:gap-2.5 w-full overflow-x-auto pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {project.processTabs.map((tab, index) => {
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(index)}
                                    className={cn(
                                        // 🚀 FIX 2: Scaled down mobile padding (px-3.5 py-1.5) and font (text-[9px])
                                        "relative px-3.5 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-widest uppercase transition-all duration-300 border outline-none whitespace-nowrap shrink-0",
                                        isActive
                                            ? "bg-white/10 border-transparent text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                                            : "bg-transparent border-white/10 text-muted-foreground hover:border-white/20 hover:text-white"
                                    )}
                                >
                                    {/* 🚀 FIX 3: Absolute pulsing border. Doesn't affect text opacity. */}
                                    {isActive && (
                                        <span className="absolute inset-0 rounded-full border border-white/30 animate-pulse pointer-events-none" />
                                    )}

                                    <span className="relative z-10">{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </SpringReveal>
            </div>

            {/* Content Row: Image Left, List Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                {/* Left: Dynamic Image Container */}
                <SpringReveal direction="up" delay={0.3} className="w-full">
                    <div className="relative w-full aspect-4/5 sm:aspect-square md:aspect-4/3 rounded-3xl overflow-hidden bg-white/5 border border-white/10 group">
                        <Image
                            key={currentTabData.image}
                            src={currentTabData.image}
                            alt={`${currentTabData.label} Process`}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>
                </SpringReveal>

                {/* Right: Dynamic Steps List */}
                <SpringReveal direction="up" delay={0.4} className="w-full">
                    <div className="flex flex-col gap-8 md:gap-10">
                        {currentTabData.steps.map((step, idx) => (
                            <div key={idx} className="flex gap-4 md:gap-6 items-start">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-[10px] md:text-xs font-bold text-white/80 shrink-0 mt-1">
                                    0{idx + 1}
                                </div>
                                <div className="flex flex-col gap-1.5 md:gap-2 min-w-0">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed wrap-break-word">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SpringReveal>
            </div>

        </section>
    );
}