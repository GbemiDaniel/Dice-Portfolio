import styles from "./Expertise.module.css";

const EXPERTISE_PHRASES = [
    "FRONTEND DEV",
    "REACT & NEXT.JS",
    "WEB3 ARCHITECTURE",
    "BRAND DESIGNS",
    "DESIGN SYSTEMS",
    "SMART CONTRACTS",
];

export function Expertise() {
    return (
        <section className={styles.expertiseSection}>
            {/* Section Label */}
            <span className={styles.sectionLabel}>My Expertise</span>

            {/* Marquee Viewport — masks edges & pauses on hover */}
            <div className={styles.marqueeViewport}>
                {/* Track — contains 2x the content for seamless infinite loop */}
                <div className={styles.marqueeTrack}>
                    {/* First Pass */}
                    {EXPERTISE_PHRASES.map((phrase, i) => (
                        <span key={`a-${i}`} className={styles.marqueeItem}>
                            {phrase}
                        </span>
                    ))}
                    {/* Duplicate Pass (creates the illusion of infinity) */}
                    {EXPERTISE_PHRASES.map((phrase, i) => (
                        <span key={`b-${i}`} className={styles.marqueeItem}>
                            {phrase}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
