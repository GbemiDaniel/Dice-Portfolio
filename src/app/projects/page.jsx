import { Container } from "@/components/layout/container/Container";
import { ProjectsArchive } from "@/components/sections/ProjectsArchive/ProjectsArchive";
import { Footer } from "@/components/sections/Footer/Footer";
import { Help } from "@/components/sections/help/Help"; // Re-using help component to cap the page as per portfolio standards
import { Capabilities } from "@/components/sections/Capabilities/Capabilities";

export const metadata = {
    title: "Projects Archive | Daniel's Portfolio",
    description: "A showcase of my recent design and development work.",
};

export default function ProjectsPage() {
    return (
        <main className="flex flex-col gap-(--spacing-container-y) pb-24 overflow-hidden pt-[clamp(2rem,5vw,4rem)]">
            
            <Container>
               {/* Main Archive Grid */}
               <ProjectsArchive />
            </Container>

            {/* Core Expertise / Capabilities Grid (Full Bleed Background) */}
            <Capabilities />

            {/* Reusing the Help / Avatar card to cap off the showcase */}
            <Container>
                <Help />
            </Container>

            <Container>
                <Footer />
            </Container>
            
        </main>
    );
}
