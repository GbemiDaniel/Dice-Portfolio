"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SpringReveal } from "@/components/ui/spring-reveal";
import { ArrowUpRight, ChevronRight } from "lucide-react";

// 🚀 THE FIX: Importing the centralized Single Source of Truth
import { projectsData } from "@/data/projects";

export function ProjectsArchive() {
    return (
        <section className="w-full flex flex-col pt-8 md:pt-16">

            {/* Header Section */}
            <SpringReveal direction="up" delay={0.1}>
                <div className="flex flex-col mb-[clamp(3rem,6vw,5rem)]">

                    {/* Breadcrumb Navigation */}
                    <nav className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-6 sm:mb-10">
                        <Link
                            href="/"
                            className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
                        >
                            Home
                        </Link>
                        <ChevronRight className="w-3 h-3 text-muted-foreground/60" />
                        <span className="text-foreground">Work</span>
                    </nav>

                    {/* Title Group */}
                    <div className="flex flex-col gap-(--spacing-element-gap)">
                        <span className="text-xs tracking-widest text-muted-foreground uppercase font-medium">
                            Portfolio
                        </span>
                        <h1 className="text-h1 font-bold tracking-tighter leading-none uppercase">
                            Selected Works
                        </h1>
                    </div>
                </div>
            </SpringReveal>

            {/* Stacked Projects rendering from Global Data Array */}
            <div className="flex flex-col gap-(--spacing-container-y)">
                {projectsData.map((project, index) => {
                    const isEven = index % 2 !== 0;

                    return (
                        <SpringReveal key={project.id} direction="up" scale={true} delay={0.1 + (index * 0.15)}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2.5rem,5vw,4rem)] items-center group">

                                {/* Image / Media Column */}
                                <Link
                                    href={project.link} // 🚀 Points to dynamic Case Study
                                    className={cn(
                                        "order-1 aspect-4/3 md:aspect-16/10 relative rounded-(--radius-card-fluid) overflow-hidden glass-panel flex flex-col justify-center items-center w-full",
                                        isEven ? "md:order-2" : "md:order-1"
                                    )}
                                >
                                    <Image
                                        src={project.imagePath} // 🚀 Uses the high-res case study image
                                        alt={`Screenshot of ${project.title} project`}
                                        fill
                                        className="object-cover opacity-80 border-0 transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={85}
                                    />
                                    {/* Subtle gradient overlay to match glassmorphism */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                                </Link>

                                {/* Content Column */}
                                <div className={cn(
                                    "order-2 flex flex-col",
                                    isEven ? "md:order-1 md:pr-[10%]" : "md:order-2 md:pl-[10%]"
                                )}>

                                    {/* Category */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-px w-8 bg-white/20" />
                                        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-(length:--text-fluid-h2) font-bold tracking-tighter leading-[1.1] mb-6 uppercase">
                                        {project.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-p text-muted-foreground leading-relaxed mb-8 max-w-md">
                                        {project.description} {/* 🚀 Uses the long descriptive paragraph */}
                                    </p>

                                    {/* Map Tags to Premium Pills */}
                                    <div className="flex flex-wrap gap-2 lg:gap-3 mb-10">
                                        {project.tags.map((tag, tIndex) => (
                                            <span
                                                key={tIndex}
                                                className="bg-white/5 border border-white/10 text-muted-foreground text-[0.75rem] rounded-full px-3 py-1 font-medium tracking-wider uppercase"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View Case Study CTA with polished interaction */}
                                    <Link
                                        href={project.link}
                                        aria-label={`View detailed case study for ${project.title}`}
                                        className="inline-flex items-center gap-2 w-fit group/link"
                                    >
                                        <span className="text-sm font-bold tracking-widest uppercase text-foreground">
                                            View Case Study
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] [@media(hover:hover)]:group-hover/link:-translate-y-0.5 [@media(hover:hover)]:group-hover/link:translate-x-0.5" />
                                    </Link>

                                </div>

                            </div>
                        </SpringReveal>
                    );
                })}
            </div>

        </section>
    );
}