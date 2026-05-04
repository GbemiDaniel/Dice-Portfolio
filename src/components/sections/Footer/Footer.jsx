import Link from "next/link";
import { LocalTime } from "./LocalTime";
import styles from "./Footer.module.css";
import { SocialIconButton } from "@/components/ui/social-icon-button";
import { cn } from "@/lib/utils";
import { SpringReveal } from "@/components/ui/spring-reveal";

const socialLinks = [
    {
        name: "X",
        url: "#",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
        )
    },
    {
        name: "LinkedIn",
        url: "#",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        )
    },
    {
        name: "Website",
        url: "#",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <circle cx="12" cy="12" r="10" />
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
            </svg>
        )
    },
    {
        name: "Behance",
        url: "#",
        icon: (
            <span className="font-bold text-[15px] tracking-tighter select-none">Bē</span>
        )
    }
];

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            {/* 🚀 THE FIX: Applied the flex column and centering directly to the reveal wrapper */}
            <SpringReveal className={styles.footerContent} direction="up" delay={0.2}>

                {/* Logo */}
                <h2 className="font-serif italic font-light text-(length:--text-fluid-h2) text-foreground tracking-normal">
                    Rolling Dice Studios
                </h2>

                {/* Live Clock Component */}
                <LocalTime />

                {/* Social Icons Container */}
                <div className={styles.socialContainer}>
                    {socialLinks.map((link) => (
                        <SocialIconButton
                            key={link.name}
                            url={link.url}
                            ariaLabel={link.name}
                        >
                            {link.icon}
                        </SocialIconButton>
                    ))}
                </div>

                {/* Divider */}
                <div className={styles.dividerContainer}>
                    <div className="w-full border-t border-white/10" />
                </div>

                {/* Copyright */}
                <p className="text-muted-foreground text-p w-full mt-(--spacing-element-gap)">
                    &copy; {new Date().getFullYear()} Rolling Dice. All rights reserved.
                </p>

            </SpringReveal>
        </footer>
    );
}