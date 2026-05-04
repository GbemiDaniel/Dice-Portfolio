// src/components/sections/CaseStudy/CS_Hero.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SpringReveal } from "@/components/ui/spring-reveal";

export function CS_Hero({ project }) {
    return (
        <section className="flex flex-col gap-10 lg:gap-16 w-full">
            <SpringReveal direction="up" delay={0.1}>
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 items-start">

                    {/* Left Column: Typography & Breadcrumbs */}
                    <div className="flex flex-col gap-8 max-w-2xl">

                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                            <Link href="/" className="transition-colors duration-300 hover:text-foreground">Home</Link>
                            <ChevronRight className="w-3 h-3 opacity-60" />
                            <Link href="/projects" className="transition-colors duration-300 hover:text-foreground">Work</Link>
                            <ChevronRight className="w-3 h-3 opacity-60" />
                            <span className="text-foreground">{project.title}</span>
                        </nav>

                        {/* Title & Description */}
                        <div className="flex flex-col gap-6">
                            <h1 className="text-h1 font-bold tracking-tighter leading-[1.05] text-foreground">
                                {project.title}: <br className="hidden sm:block" />
                                <span className="text-muted-foreground font-light italic text-timeless sm:ml-4">
                                    {project.subtitle}
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Metadata Box */}
                    {project.metadata && (
                        <div className="w-full lg:w-80 bg-[#0A0A0E] rounded-(--radius-card-fluid) p-6 border border-white/5 flex flex-col">

                            {/* Role */}
                            <div className="flex justify-between items-center py-4 border-b border-white/5">
                                <span className="text-xs text-muted-foreground tracking-wide">Role</span>
                                <span className="text-xs font-medium text-foreground text-right">{project.metadata.role}</span>
                            </div>

                            {/* Duration */}
                            <div className="flex justify-between items-center py-4 border-b border-white/5">
                                <span className="text-xs text-muted-foreground tracking-wide">Duration</span>
                                <span className="text-xs font-medium text-foreground text-right">{project.metadata.duration}</span>
                            </div>

                            {/* Tools */}
                            <div className="flex justify-between items-center py-4">
                                <span className="text-xs text-muted-foreground tracking-wide">Tools</span>
                                <span className="text-xs font-medium text-foreground text-right">{project.metadata.tools}</span>
                            </div>

                        </div>
                    )}
                </div>
            </SpringReveal>

            {/* Bottom Row: The Massive Hero Image */}
            <SpringReveal direction="up" delay={0.2} scale={true}>
                <div className="relative w-full aspect-4/3 md:aspect-21/9 rounded-(--radius-card-fluid) overflow-hidden bg-[#E2DDF5] border border-white/5">
                    <Image
                        src={project.imagePath}
                        alt={`${project.title} Hero Overview`}
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                </div>
            </SpringReveal>
        </section>
    );
}