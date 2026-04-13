import { cn } from "@/lib/utils";

export function GlassCard({ children, className, ...props }) {
    return (
        <div
            className={cn(
                // 1. The core glass effect from your global utilities
                "glass-panel border-0",
                // 2. The semantic split-axis padding we defined in globals.css
                "px-card-x py-card-y",
                // 3. Base flex behavior so content stacks cleanly
                "flex flex-col",
                // 4. Allows you to pass custom classes (like mt-nav-push) when needed
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}