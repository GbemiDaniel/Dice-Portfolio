"use client";

import { useState } from "react";
import Image from "next/image";
import { InteractiveButton } from "@/components/ui/interactive-button";
import { SocialIconButton } from "@/components/ui/social-icon-button";
import { ContactModal } from "@/components/ui/contact-modal";

// --- CUSTOM BRAND ICONS (Matched to your Footer SVGs) --- //
const CustomXIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const CustomLinkedInIcon = ({ className }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const CustomGlobeIcon = ({ className }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
);

export function HeroNav() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="flex flex-wrap items-center justify-between gap-[var(--spacing-card-gap)] w-full shrink-0">

            {/* Identity Block */}
            <div className="flex items-center gap-[var(--spacing-element-gap)] shrink-0">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <Image
                        src="/images/hero-avatar-v2.png"
                        alt="Daniel"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 48px, 56px"
                        quality={95}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-foreground font-semibold tracking-tight text-base sm:text-lg leading-tight">
                        Hey, I'm Daniel.
                    </span>
                    <span className="text-subtle-foreground font-medium text-xs sm:text-sm leading-tight">
                        Web & Brand Designer
                    </span>
                </div>
            </div>

            {/* Actions Block: Socials & CTA */}
            <div className="flex flex-wrap items-center gap-[var(--spacing-element-gap)]">

                {/* The New Social Squarcles */}
                <div className="flex items-center gap-2 sm:gap-[var(--spacing-element-gap)]">
                    <SocialIconButton ariaLabel="X">
                        <CustomXIcon className="w-[18px] h-[18px]" />
                    </SocialIconButton>
                    <SocialIconButton ariaLabel="LinkedIn">
                        <CustomLinkedInIcon className="w-[18px] h-[18px]" />
                    </SocialIconButton>
                    <SocialIconButton ariaLabel="Website">
                        <CustomGlobeIcon className="w-[18px] h-[18px]" />
                    </SocialIconButton>
                    <SocialIconButton ariaLabel="Behance">
                        <span className="font-bold text-[15px] tracking-tighter select-none">Bē</span>
                    </SocialIconButton>
                </div>

                {/* Universal Interactive Button: Stripped of hardcoded hover states */}
                <InteractiveButton
                    onClick={() => setIsModalOpen(true)}
                    // 🚀 Swapped py-* for explicit h-10 and sm:h-11 to perfectly match the social icons
                    className="rounded-full h-10 sm:h-11 px-6 sm:px-8 shrink-0 text-white"
                >
                    Get In Touch
                </InteractiveButton>
            </div>

            {/* MODAL INJECTION */}
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}