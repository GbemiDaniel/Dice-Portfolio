import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function BrowseWorkButton({ className }) {
    return (
        <Button
            className={cn(
                // Swapped solid background for transparent outline + hover inversion
                "rounded-full px-6 bg-transparent border border-white/20 text-white hover:bg-white hover:text-black transition-colors gap-2 group",
                className
            )}
        >
            Browse My Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
    );
}