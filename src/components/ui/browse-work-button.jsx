import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./interactions.module.css";

export function BrowseWorkButton({ className }) {
    return (
        <Button
            variant="unstyled" // Strictly disables Shadcn's default styling
            className={cn(
                // 1. Base Structure: explicit relative/overflow to contain the flare
                "relative overflow-hidden inline-flex items-center justify-center gap-2 group outline-none",

                // 2. Stealth Base: Transparent, 20% border, muted text that brightens on hover
                "rounded-full px-6 py-3 bg-transparent border border-white/20 text-white/80 hover:text-white",

                // 3. Physics Engine
                styles.appleGlass,
                styles.scaleButton,
                className
            )}
        >
            {/* The Polish: Sweeping gradient flare overlay that fades in on hover */}
            <span className="absolute inset-0 bg-linear-to-tr from-transparent via-white/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

            {/* Content Wrapper: Pushed to z-10 so it sits above the background flare */}
            <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                Browse My Work
                <ArrowRight className="w-4 h-4 transition-transform duration-300 [@media(hover:hover)]:group-hover:translate-x-0.5 [@media(hover:hover)]:group-hover:-translate-y-0.5" />
            </span>
        </Button>
    );
}