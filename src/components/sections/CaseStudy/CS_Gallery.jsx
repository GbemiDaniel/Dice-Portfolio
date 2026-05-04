// src/components/sections/CaseStudy/CS_Gallery.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SpringReveal } from "@/components/ui/spring-reveal";

export function CS_Gallery({ project }) {
    if (!project.gallery || project.gallery.length === 0) return null;

    return (
        <section className="w-full flex flex-col gap-[clamp(4rem,10vw,8rem)] pt-[clamp(3rem,8vw,6rem)] mt-[clamp(2rem,5vw,4rem)] border-t border-white/5">

            {/* 🚀 FIX 1: Header + Subtitle */}
            <SpringReveal direction="up" delay={0.1} className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-foreground">
                    {project.galleryTitle || "The Final Solution"}
                </h2>
                {project.gallerySubtitle && (
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {project.gallerySubtitle}
                    </p>
                )}
            </SpringReveal>

            <div className="flex flex-col gap-[clamp(6rem,15vw,10rem)] w-full">
                {project.gallery.map((item, index) => {
                    // 🚀 FIX 2: Reversed the logic. 
                    // Even rows (0, 2) -> Text Left (order-1), Image Right (order-2)
                    const isEven = index % 2 === 0;

                    return (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(3rem,8vw,6rem)] items-center group">

                            {/* 🖼️ The Image Container */}
                            <SpringReveal
                                direction="up"
                                delay={0.2}
                                // 🚀 FIX 3: Injected dynamic background color (`item.bgColor`)
                                className={`relative w-full aspect-4/5 md:aspect-4/3 rounded-(--radius-card-fluid) overflow-hidden border border-white/10 ${item.bgColor || "bg-white/5"} ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-8 md:p-12 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </SpringReveal>

                            {/* 📝 The Text Container */}
                            <SpringReveal
                                direction="up"
                                delay={0.3}
                                className={`flex flex-col gap-4 md:gap-6 min-w-0 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                            >
                                <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tighter text-foreground leading-[1.1] wrap-break-word">
                                    {item.title}
                                </h3>

                                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl wrap-break-word">
                                    {item.text}
                                </p>

                                {/* 🚀 FIX 4: Conditional Feature List */}
                                {item.features && item.features.length > 0 && (
                                    <ul className="flex flex-col gap-3 mt-2">
                                        {item.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-foreground/80">
                                                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-white/5 shrink-0">
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* 🚀 FIX 5: Conditional Text Link */}
                                {item.link && (
                                    <Link href={item.link.url} className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-foreground hover:text-white transition-colors mt-4 w-fit group/link">
                                        {item.link.text}
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                )}
                            </SpringReveal>

                        </div>
                    );
                })}
            </div>
        </section>
    );
}