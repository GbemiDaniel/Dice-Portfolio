"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { SpringReveal } from "@/components/ui/spring-reveal";
import { InteractiveButton } from "@/components/ui/interactive-button";
import { ArrowRight } from "lucide-react";
import styles from "./Help.module.css";
import { ContactModal } from "@/components/ui/contact-modal";

const services = [
    {
        title: "Landing Page in Framer",
        price: "Starting from $1,999",
        desc: "Want me to build you a completely custom, beautiful & highly-converting landing page?"
    },
    {
        title: "Website in Framer",
        price: "Starting from $3,999",
        desc: "Want me to build you a completely custom, beautiful & highly-converting landing page?"
    }
];

export function Help() {
    // MODAL STATE CONTROLLER
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className={styles.sectionContainer}>
            <SpringReveal className={styles.helpWrapper} direction="up" scale={true} delay={0.1}>

                <Card className={cn("border-0 flex flex-col md:flex-row glass-panel", styles.helpCard)}>

                    {/* Left Side: Content & Services */}
                    <div className={styles.contentWrapper}>

                        <h2 className="text-[length:var(--text-fluid-h2)] font-medium text-foreground tracking-tighter leading-[1.1] mb-6 md:mb-8">
                            How I can help <span className="text-timeless italic">you</span>?
                        </h2>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {services.map((service, index) => (
                                <div key={index} className="flex flex-col gap-3 min-w-0">
                                    <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-3">
                                        <h3 className="font-bold text-foreground text-lg xl:text-xl whitespace-nowrap truncate">
                                            {service.title}
                                        </h3>
                                        <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-muted-foreground w-fit shrink-0">
                                            {service.price}
                                        </span>
                                    </div>
                                    <p className="text-[length:var(--text-fluid-p)] text-muted-foreground leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Universal Button Component -> Triggers Modal */}
                        <InteractiveButton
                            onClick={() => setIsModalOpen(true)}
                            className="w-full rounded-xl py-6 bg-transparent border border-white/20 text-white hover:bg-white hover:text-black"
                        >
                            <span>Get In Touch</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </InteractiveButton>
                    </div>

                    {/* Right Side: Avatar Image */}
                    <div className={styles.avatarWrapper}>
                        <Image
                            src="/images/hero-avatar-v2.png"
                            alt="Daniel - Ready to help"
                            fill
                            className="object-cover object-bottom"
                            sizes="(max-width: 768px) 100vw, 35vw"
                            quality={75}
                            priority={false}
                        />
                    </div>

                </Card>
            </SpringReveal>

            {/* MODAL INJECTION */}
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}