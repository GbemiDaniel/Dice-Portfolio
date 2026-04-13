
import { cn } from "@/lib/utils";
import { SpringReveal } from "@/components/ui/spring-reveal";
import styles from "./Hero.module.css";
import { HeroNav } from "./HeroNav";

export function Hero() {

    return (
        <section className={styles.heroContainer}>

            {/* =========================================
             LEFT CARD (70%) 
             ========================================= */}
            <div className={cn("flex flex-col", styles.contentWrapper)}>

                {/* RAW CSS: Back to your exact explicit div structure */}
                <SpringReveal direction="up" delay={0}>
                    <div className={cn("glass-panel border-0 flex flex-col flex-1 p-card-pad", styles.contentCard)}>

                        {/* TOP NAV */}
                        <div className="shrink-0">
                            <HeroNav />
                        </div>

                        {/* MARGIN INJECTION */}
                        <div className="flex flex-col flex-1 mt-nav-push">

                            {/* GAP INJECTION */}
                            <div className="flex flex-col gap-text-gap">
                                <h1 className="text-[length:var(--text-fluid-h1)] font-medium text-foreground tracking-tighter leading-[1.05]">
                                    Obsessed with creating <span className="text-timeless">timeless</span>
                                    <br /> digital experiences and products.
                                </h1>

                                {/* YOUR EXACT P TAG */}
                                <p className="text-[length:var(--text-fluid-p)] text-muted-foreground leading-tight max-md">
                                    Hey, I'm Daniel, welcome to my world. I love building beautiful, timeless websites & digital experiences with tools like Figma, Adobe Illustrator & Framer.
                                </p>
                            </div>

                        </div>

                    </div>
                </SpringReveal>
            </div>

            {/* =========================================
             RIGHT CARD (27%) 
             ========================================= */}
            <SpringReveal className={styles.avatarWrapper} direction="up" delay={0.2}>

                {/* RAW CSS: Back to your explicit structure with p-0 */}
                <div className={cn("glass-panel p-0 border-0 group overflow-hidden", styles.avatarCard)}>
                    <img
                        src="/images/hero-avatar-v2.png"
                        alt="Daniel - 3D Avatar"
                        className="absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-105"
                    />
                </div>

            </SpringReveal>

        </section>
    );
}