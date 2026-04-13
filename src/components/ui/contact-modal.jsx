import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { InteractiveButton } from "@/components/ui/interactive-button";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactModal({ isOpen, onClose }) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                showCloseButton={false}
                className={cn(
                    // 1. Root Structure: Fixed max height so it never breaks the viewport again
                    "sm:max-w-2xl p-0 gap-0 border-white/10",
                    "max-h-[85vh] overflow-hidden flex flex-col",
                    // 2. The Deep Dark Fix: Ultra-deep near-black matching target design
                    "bg-black/80 backdrop-blur-3xl glass-panel",
                    // 3. Fluid radiuses
                    "rounded-[length:var(--radius-card-fluid)]"
                )}
            >
                <button
                    onClick={onClose}
                    className="absolute top-[var(--spacing-element-gap)] right-[var(--spacing-element-gap)] z-[60] text-muted-foreground hover:text-white transition-colors bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/10"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* 🚀 THE SCROLL FADE TRICK:
                    This inner div handles the scrolling. The maskImage CSS creates a
                    transparent gradient at the top and bottom, making content smoothly "blur off".
                */}
                <div
                    className="overflow-y-auto custom-scrollbar flex-1 flex flex-col px-[var(--spacing-card-pad)] py-[calc(var(--spacing-card-pad)*1.5)] gap-[var(--spacing-card-gap)]"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, black var(--spacing-card-pad), black calc(100% - var(--spacing-card-pad)), transparent 100%)',
                        maskImage: 'linear-gradient(to bottom, transparent 0px, black var(--spacing-card-pad), black calc(100% - var(--spacing-card-pad)), transparent 100%)'
                    }}
                >
                    <DialogHeader className="flex flex-col gap-2">
                        <DialogTitle className="text-[length:var(--text-fluid-h2)] font-medium text-foreground tracking-tight text-center">
                            Let's have a <span className="text-timeless italic font-light">chat!</span>
                        </DialogTitle>
                        <DialogDescription className="text-center text-muted-foreground text-[length:var(--text-fluid-p)] max-w-lg mx-auto leading-relaxed">
                            Enter your details below and I'll get back to you as soon as possible.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Form Grid */}
                    <form className="flex flex-col gap-[var(--spacing-element-gap)]" onSubmit={(e) => e.preventDefault()}>

                        {/* Name Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-element-gap)]">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-foreground/90 ml-1">First Name</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-foreground/90 ml-1">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-foreground/90 ml-1">Email</label>
                            <input
                                type="email"
                                placeholder="address@email.com"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all"
                            />
                        </div>

                        {/* Website URL */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-foreground/90 ml-1">Website URL</label>
                            <input
                                type="url"
                                placeholder="https://website.com"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all"
                            />
                        </div>

                        {/* Budget Dropdown */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-foreground/90 ml-1">What's your budget?</label>
                            <select
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-foreground appearance-none focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all cursor-pointer"
                                defaultValue=""
                            >
                                <option value="" disabled className="text-muted-foreground">Select Budget</option>
                                <option value="1k-3k" className="bg-[#0a0a0a] text-white">$1,000 - $3,000</option>
                                <option value="3k-5k" className="bg-[#0a0a0a] text-white">$3,000 - $5,000</option>
                                <option value="5k+" className="bg-[#0a0a0a] text-white">$5,000+</option>
                            </select>
                        </div>

                        {/* Message Area */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-foreground/90 ml-1">How can we help you?</label>
                            <textarea
                                placeholder="Tell me about your project..."
                                rows={4}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all resize-none custom-scrollbar"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-4">
                            <InteractiveButton
                                className="w-full rounded-xl py-4 bg-white text-black hover:bg-white/90 border-0 flex justify-center items-center gap-2"
                            >
                                <span className="font-medium">Send Message</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </InteractiveButton>
                        </div>

                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}