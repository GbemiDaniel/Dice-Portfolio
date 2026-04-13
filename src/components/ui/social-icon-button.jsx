"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SocialIconButton({ children, url = "#", ariaLabel, className }) {
    return (
        <Link
            href={url}
            aria-label={ariaLabel}
            className={cn(
                // Base Layout: Flex center, fluid-ish size matching the design
                "flex items-center justify-center shrink-0 w-10 h-10 sm:w-11 sm:h-11",
                // Visuals: Transparent base, 10% white border, squarcle radius
                "bg-transparent border border-white/10 rounded-xl",
                "text-muted-foreground",
                // Apple-Tier Interactivity: Easing, springy scale, invert colors on hover
                "transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]",
                "hover:scale-[1.05] active:scale-[0.95] hover:bg-white hover:text-black hover:border-white",
                className
            )}
        >
            {children}
        </Link>
    );
}