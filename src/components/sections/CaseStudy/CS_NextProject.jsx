// // src/components/sections/CaseStudy/CS_NextProject.jsx
// import React from "react";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export function CS_NextProject({ project }) {
//     if (!project.nextProject) return null;

//     return (
//         // 🚀 THE UPGRADE: The entire section is now a massive, interactive <Link>
//         <Link
//             href={project.nextProject.link}
//             className="group block w-full mt-[clamp(4rem,10vw,8rem)] pt-10 md:pt-16 pb-12 border-t border-white/5 outline-none transition-colors duration-500 hover:bg-white/2 rounded-t-(--radius-card-fluid)"
//         >
//             {/* 🚀 THE FIX: Forced flex-row on ALL screen sizes. Removed flex-col. */}
//             <div className="w-full flex flex-row justify-between items-center gap-4 md:gap-10 min-w-0 px-2 sm:px-4 md:px-8">

//                 {/* Left Side: Text Block. flex-1 allows it to take available space, min-w-0 forces wrapping instead of pushing the arrow off-screen */}
//                 <div className="flex flex-col gap-2 md:gap-4 min-w-0 flex-1">
//                     <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-muted-foreground transition-colors group-hover:text-white/60">
//                         Up Next
//                     </span>

//                     {/* Scaled the mobile text down slightly (text-2xl) so it doesn't crowd the arrow */}
//                     <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground/80 transition-colors duration-500 group-hover:text-white wrap-break-word whitespace-normal leading-[1.1]">
//                         {project.nextProject.title}
//                     </span>
//                 </div>

//                 {/* Right Side: The Arrow Container. flex-shrink-0 ensures it NEVER gets squished */}
//                 <div className="shrink-0">
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 animate-pulse md:animate-none">
//                         <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-white/50 transition-all duration-500 group-hover:text-white group-hover:translate-x-2" />
//                     </div>
//                 </div>

//             </div>
//         </Link>
//     );
// }






// src/components/sections/CaseStudy/CS_NextProject.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CS_NextProject({ project }) {
    if (!project.nextProject) return null;

    return (
        <Link
            href={project.nextProject.link}
            className="group relative block w-full mt-[clamp(4rem,10vw,8rem)] pt-10 md:pt-16 pb-10 md:pb-16 border-t border-white/5 outline-none overflow-hidden rounded-t-[var(--radius-card-fluid)]"
        >
            {/* The Hover Gradient Overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* 🚀 THE FIX: Added 'px-4 md:px-10' to pull the text and arrow away from the absolute edges */}
            <div className="relative z-10 w-full flex flex-row justify-between items-center gap-6 md:gap-12 min-w-0 px-2 sm:px-4 md:px-10">

                {/* Left Side: Text Block */}
                <div className="flex flex-col gap-2 md:gap-4 min-w-0 flex-1">
                    <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-muted-foreground transition-colors duration-500 group-hover:text-white/60">
                        Up Next
                    </span>

                    {/* 🚀 THE FIX: Scaled desktop typography down to a much more reasonable md:text-5xl lg:text-6xl */}
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground/80 transition-all duration-500 group-hover:text-white break-words whitespace-normal leading-[1.1]">
                        {project.nextProject.title}
                    </span>
                </div>

                {/* Right Side: The Animated Arrow */}
                <div className="flex-shrink-0">
                    {/* 🚀 THE FIX: Scaled the arrow container down slightly on desktop (md:w-16 md:h-16) so it doesn't overpower the layout */}
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/30 md:group-hover:scale-105 animate-pulse md:animate-none">
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white/50 transition-all duration-500 group-hover:text-white group-hover:translate-x-2" />
                    </div>
                </div>

            </div>
        </Link>
    );
}