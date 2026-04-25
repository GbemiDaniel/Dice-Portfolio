import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SpringReveal } from "@/components/ui/spring-reveal";
import { ArrowRight } from "lucide-react";
import styles from "./Work.module.css";
import interactStyles from "@/components/ui/interactions.module.css";

const projects = [
    {
        title: "Thrifty Store",
        desc: "Website for a digital marketing & paid advertising agency.",
        image: "/images/thrifty-store.png"
    },
    {
        title: "Scalable",
        desc: "Landing Page for an analytics & sales SaaS business.",
        image: "/images/project-2.jpg"
    },
    {
        title: "Limitless",
        desc: "Landing page for a design subscription service.",
        image: "/images/project-3.jpg"
    },
    {
        title: "Solopreneur",
        desc: "Website for a freelance web designer & digital creator.",
        image: "/images/project-4.jpg"
    }
];

export function Work() {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.workGrid}>
                {projects.map((project, index) => (
                    <SpringReveal key={index} direction="up" scale={true} delay={0.1 + (index * 0.15)}>
                        <Link
                            href="#"
                            className={cn(styles.glassCard, styles.projectCard, "group")}
                        >
                            {/* Background Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Darker, taller gradient protection */}
                            <div className={styles.gradientOverlay} />

                            {/* Content Wrapper */}
                            <div className={styles.contentWrapper}>

                                {/* Title with precise alignment */}
                                <h3 className="text-xl md:text-2xl lg:text-[length:var(--text-fluid-h3)] font-medium text-foreground tracking-tight flex items-center gap-2.5 mb-1.5">
                                    {project.title}
                                    <svg
                                        width="0.8em"
                                        height="0.8em"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-70 [@media(hover:hover)]:group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] [@media(hover:hover)]:group-hover:translate-x-0.5 [@media(hover:hover)]:group-hover:-translate-y-0.5 transform"
                                    >
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </h3>

                                {/* 🚀 THE FIX: Added 'truncate' and 'block' to force strict single-line rendering */}
                                {/* 🚀 THE FIX: Removed 'truncate' and added a smooth transparent fade mask */}
                                {/* 🚀 THE FIX: Removed 'truncate'. Added proper line-heights for multi-line readability. */}
                                <p className="text-sm md:text-base text-muted-foreground leading-snug md:leading-relaxed max-w-[90%] md:max-w-[85%]">
                                    {project.desc}
                                </p>
                            </div>
                        </Link>
                    </SpringReveal>
                ))}
            </div>

            {/* Browse All Work Button */}
            <SpringReveal direction="up" delay={0.2}>
                <div className="flex justify-center mt-12 md:mt-16 w-full">
                    <Link
                        href="/projects"
                        className={cn(
                            "inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl py-4 px-8 relative overflow-hidden group outline-none",
                            "bg-transparent border border-white/20 text-white/80 hover:text-white",
                            interactStyles.appleGlass,
                            interactStyles.scaleButton
                        )}
                    >
                        <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                        <span className="font-medium relative z-10">Browse All Work</span>
                        <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 [@media(hover:hover)]:group-hover:translate-x-0.5 [@media(hover:hover)]:group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </SpringReveal>
        </section>
    );
}