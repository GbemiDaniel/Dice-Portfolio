import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SpringReveal } from "@/components/ui/spring-reveal";
import { InteractiveButton } from "@/components/ui/interactive-button";
import { ArrowRight } from "lucide-react";
import styles from "./Work.module.css";

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
            {/* Project Grid */}
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

                            {/* Gradient Overlay */}
                            <div className={styles.gradientOverlay} />

                            {/* Content Wrapper */}
                            <div className={styles.contentWrapper}>
                                {/* Title with Diagonal Arrow */}
                                <h3 className="text-[length:var(--text-fluid-h3)] font-medium text-foreground tracking-tight flex items-center gap-2">
                                    {project.title}
                                    <svg
                                        width="0.8em"
                                        height="0.8em"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-70 [@media(hover:hover)]:group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] [@media(hover:hover)]:group-hover:translate-x-0.5 [@media(hover:hover)]:group-hover:-translate-y-0.5 transform"
                                    >
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </h3>

                                {/* Description */}
                                <p className="text-[length:var(--text-fluid-p)] text-muted-foreground leading-relaxed max-w-[80%]">
                                    {project.desc}
                                </p>
                            </div>
                        </Link>
                    </SpringReveal>
                ))}
            </div>

            {/* NEW: Browse All Work Button */}
            <SpringReveal direction="up" delay={0.2}>
                <div className="flex justify-center mt-12 md:mt-16 w-full">
                    <InteractiveButton
                        asChild
                        className="w-full sm:w-auto rounded-xl py-4 px-8 bg-transparent border border-white/20 text-white hover:bg-white hover:text-black flex justify-center items-center gap-2 group"
                    >
                        <Link href="/projects">
                            <span className="font-medium">Browse All Work</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 [@media(hover:hover)]:group-hover:translate-x-0.5 [@media(hover:hover)]:group-hover:-translate-y-0.5" />
                        </Link>
                    </InteractiveButton>
                </div>
            </SpringReveal>
        </section>
    );
}