import { cn } from "@/lib/utils";
import { SpringReveal } from "@/components/ui/spring-reveal";
import styles from "./Expertise.module.css";

const ROW_1_PHRASES = [
    "FRONTEND DEV",
    "REACT & NEXT.JS",
    "WEB3 ARCHITECTURE",
    "BRAND DESIGNS",
    "DESIGN SYSTEMS",
    "SMART CONTRACTS",
];

const ROW_2_PHRASES = [
    "E-COMMERCE",
    "BRAND DESIGNS",
    "DESIGN SYSTEMS",
    "WEB ANIMATIONS",
];

export function Expertise() {
    return (
        <section className="w-full">
            <SpringReveal direction="up" delay={0} className={styles.expertiseSection}>
                {/* Section Label */}
                <span className={styles.sectionLabel}>My Expertise</span>

                {/* Marquee Container */}
                <div className="flex flex-col w-full" style={{ gap: "var(--spacing-card-gap)" }}>
                    {/* Row 1 (Top) - Standard Full Width */}
                    <div className={cn(styles.marqueeViewport, "w-full")}>
                        {/* Track — contains 2x the content for seamless infinite loop */}
                        <div className={styles.marqueeTrack}>
                            {/* First Pass */}
                            {ROW_1_PHRASES.map((phrase, i) => (
                                <span key={`r1-a-${i}`} className={styles.marqueeItem}>
                                    {phrase}
                                </span>
                            ))}
                            {/* Duplicate Pass (creates the illusion of infinity) */}
                            {ROW_1_PHRASES.map((phrase, i) => (
                                <span key={`r1-b-${i}`} className={styles.marqueeItem}>
                                    {phrase}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 (Bottom) - Constrained Width & Reversed */}
                    <div className={cn(styles.marqueeViewport, "w-[90%] md:w-[80%] mx-auto")}>
                        {/* Track — Reversed animation */}
                        <div className={cn(styles.marqueeTrack, styles.marqueeTrackReverse)}>
                            {/* First Pass */}
                            {ROW_2_PHRASES.map((phrase, i) => (
                                <span key={`r2-a-${i}`} className={styles.marqueeItem}>
                                    {phrase}
                                </span>
                            ))}
                            {/* Duplicate Pass */}
                            {ROW_2_PHRASES.map((phrase, i) => (
                                <span key={`r2-b-${i}`} className={styles.marqueeItem}>
                                    {phrase}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </SpringReveal>
        </section>
    );
}
