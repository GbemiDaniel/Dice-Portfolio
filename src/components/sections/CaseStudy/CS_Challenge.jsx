// src/components/sections/CaseStudy/CS_Challenge.jsx
import React from "react";
import { SpringReveal } from "@/components/ui/spring-reveal";

export function CS_Challenge({ project }) {
    // Failsafe: Don't render the section if there's no challenge data
    if (!project.challenge) return null;

    return (
        // 🚀 SECTION SEPARATOR: Added a top border and padding to cleanly separate from the Hero
        <section className="w-full flex flex-col gap-12 pt-12 md:pt-20 mt-8 md:mt-12 border-t border-white/5">
            <SpringReveal direction="up" delay={0.1}>
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">

                    {/* Left Side: The Challenge Text */}
                    <div className="lg:w-1/2 flex flex-col gap-6">
                        <h2 className="text-lg md:text-xl font-bold tracking-widest text-foreground flex items-center gap-4 uppercase">
                            <span className="w-8 h-px bg-white/20"></span>
                            The Challenge
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {project.challenge}
                        </p>
                    </div>

                    {/* Right Side: The Two Dark Pain-Point Cards */}
                    {project.challengeCards && (
                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.challengeCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-[#0A0A0E] border border-white/5 rounded-(--radius-card-fluid) p-6 md:p-8 flex flex-col justify-center h-full min-h-[160px] transition-colors duration-500 hover:bg-white/2"
                                >
                                    {/* Abstract Icon/Marker to match Figma */}
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                        <div className="w-2 h-2 rounded-full bg-white/40" />
                                    </div>
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                        {card.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </SpringReveal>
        </section>
    );
}