"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import styles from "./interactions.module.css";

export function InteractiveButton({ children, className, ...props }) {
    return (
        <Button
            variant="unstyled" // Strictly disables Shadcn's default styling
            className={cn(
                // Base layout
                "inline-flex items-center justify-center gap-2 font-medium group",
                "border border-white/10 text-white/70 hover:text-white",
                // The CSS Module Physics
                styles.appleGlass,
                styles.scaleButton,
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </Button>
    );
}