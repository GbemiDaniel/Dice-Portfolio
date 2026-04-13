"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function InteractiveButton({ children, className, ...props }) {
    return (
        <Button
            className={cn(
                // Base layout and fluid easing
                "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group",
                // Apple-style physics: slight lift on hover, physical press on touch/click
                "hover:scale-[1.02] active:scale-[0.97]",
                className
            )}
            {...props}
        >
            {children}
        </Button>
    );
}