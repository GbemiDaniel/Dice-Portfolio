import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { SpringReveal } from "@/components/ui/spring-reveal";
import { CS_Hero } from "@/components/sections/CaseStudy/CS_Hero";
import { CS_Challenge } from "@/components/sections/CaseStudy/CS_Challenge";
import { CS_Research } from "@/components/sections/CaseStudy/CS_Research";
import { CS_Process } from "@/components/sections/CaseStudy/CS_Process";
import { CS_Gallery } from "@/components/sections/CaseStudy/CS_Gallery";
import { CS_Results } from "@/components/sections/CaseStudy/CS_Results";
import { CS_NextProject } from "@/components/sections/CaseStudy/CS_NextProject";

export function generateStaticParams() {
    return projectsData.map((project) => ({
        id: project.id,
    }));
}

export default async function CaseStudyPage({ params }) {
    const resolvedParams = await params;
    const project = projectsData.find((p) => p.id === resolvedParams.id);

    if (!project) {
        notFound();
    }

    return (
        <article className="w-full flex flex-col min-h-screen pb-12 overflow-hidden bg-[#050505]">
            <div className="flex flex-col gap-[clamp(5rem,10vw,10rem)] pt-[clamp(6rem,10vw,10rem)] px-card-pad max-w-7xl mx-auto w-full">

                {/* 🚀 1. HERO SECTION (Title Left, Metadata Right, Massive Image Below) */}
                <CS_Hero project={project} />

                {/* 🚀 2. THE CHALLENGE (Text Left, Cards Right) */}
                <CS_Challenge project={project} />

                {/* 🚀 3. RESEARCH & DISCOVERY (Centered Title, 3 Cards) */}
                <CS_Research project={project} />

                {/* 🚀 4. DESIGN PROCESS & IDEATION (Image Left, List Right) */}
                <CS_Process project={project} />

                {/* 🚀 5. THE FINAL PRODUCT (Alternating Layout) */}
                <CS_Gallery project={project} />

                {/* 🚀 6. RESULTS & IMPACT (The Purple Block) */}
                <CS_Results project={project} />


                {/* 🚀 7. NEXT PROJECT FOOTER */}
                <CS_NextProject project={project} />
            </div>

        </article>
    );
}