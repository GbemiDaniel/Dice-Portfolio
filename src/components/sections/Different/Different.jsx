import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { SpringReveal } from "@/components/ui/spring-reveal";
import styles from "./Different.module.css";
// 🚀 Added the global physics engine import
import interactStyles from "@/components/ui/interactions.module.css";
import { ArrowRight } from "lucide-react";

export function Different() {
    return (
        <section className={styles.sectionContainer}>
            <SpringReveal className={styles.differentWrapper} direction="up" scale={true} delay={0.1}>

                {/* 🚀 UPGRADED: Using global glass-panel and explicit native split padding (px-card-x py-card-y) */}
                <Card className={cn("glass-panel border-0 flex flex-col md:flex-row items-center px-card-x py-card-y", styles.differentCard)}>

                    {/* Left Side: Avatar Image */}
                    <div className={cn(styles.avatarWrapper, "group overflow-hidden rounded-[var(--radius-card-fluid)]")}>
                        <Image
                            src="/images/hero-avatar-v2.png"
                            alt="Daniel - 3D Avatar"
                            fill
                            className="object-cover object-center transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 35vw"
                            quality={95}
                        />
                    </div>

                    {/* Right Side: Content and Button */}
                    <div className={styles.contentWrapper}>
                        <div className="flex flex-col items-start gap-[var(--spacing-card-gap)] max-w-lg">
                            <h2 className="text-[length:var(--text-fluid-h2)] font-medium text-foreground tracking-tighter leading-[1.1]">
                                What makes me <span className="text-timeless italic">different</span>?
                            </h2>
                            <p className="text-[length:var(--text-fluid-p)] text-muted-foreground leading-relaxed">
                                I create unique digital experiences tailored to your brand and goals. By merging creativity with functionality and staying ahead of design trends, I ensure every project not only looks stunning but also performs flawlessly.
                            </p>

                            <div className="pt-[var(--spacing-element-gap)]">
                                {/* 🚀 THE FIX: Stripped harsh hover utilities, injected CSS Module physics & flare */}
                                <Link
                                    href="/projects"
                                    className={cn(
                                        // Base layout and stealth state
                                        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 relative z-20 pointer-events-auto cursor-pointer group outline-none",
                                        "bg-transparent border border-white/20 text-white/80 hover:text-white",
                                        // The unified Apple glass physics engine
                                        interactStyles.appleGlass,
                                        interactStyles.scaleButton
                                    )}
                                >
                                    {/* The Polish: A sweeping gradient flare overlay that fades in on hover */}
                                    <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                                    <span className="font-medium relative z-10">Browse My Work</span>
                                    <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 [@media(hover:hover)]:group-hover:translate-x-0.5 [@media(hover:hover)]:group-hover:-translate-y-0.5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </Card>
            </SpringReveal>
        </section>
    );
}