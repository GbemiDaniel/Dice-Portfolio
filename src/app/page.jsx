import { Container } from "@/components/layout/container/Container";
import { Hero } from "@/components/sections/Hero/Hero";
import { Expertise } from "@/components/sections/Expertise/Expertise";
import { Different } from "@/components/sections/Different/Different";
import { Work } from "@/components/sections/Work/Work";
import { Help } from "@/components/sections/help/Help";
import { Footer } from "@/components/sections/Footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-[clamp(5rem,10vw,10rem)] pb-24 overflow-hidden pt-[clamp(2rem,5vw,4rem)]">

      <Container>
        <Hero />
      </Container>

      <section className="w-full">
        <Expertise />
      </section>

      <Container>
        <Different />
      </Container>

      <Container>
        <Work />
      </Container>

      <Container>
        <Help />
      </Container>

      <Container>
        <Footer />
      </Container>

    </main>
  );
}