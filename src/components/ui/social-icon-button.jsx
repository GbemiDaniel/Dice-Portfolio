"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./interactions.module.css";

export function SocialIconButton({ children, url = "#", ariaLabel, className }) {
    return (
        <Link
            href={url}
            aria-label={ariaLabel}
            className={cn(
                // Tailwind: Sizing, Layout, and Base Stealth State
                "flex items-center justify-center shrink-0 w-10 h-10 sm:w-11 sm:h-11",
                "rounded-xl bg-transparent border border-white/10 text-muted-foreground hover:text-white",
                // CSS Module: The complex hover physics and exact icon scaling
                styles.appleGlass,
                styles.scaleIcon,
                className
            )}
        >
            <span className="relative z-10 flex items-center justify-center">
                {children}
            </span>
        </Link>
    );
}